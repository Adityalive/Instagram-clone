import axios from 'axios';
const api =axios.create({
    baseURL:'http://localhost:3000/api/post',
    withCredentials:true
})

export async function getFeed(){
    const response =await api.get('/feed');
    return(response.data);
}
export async function createpost(caption, file){
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('file', file);
     const response = await api.post('/upload', formData )
     return(response.data);
}
