import axios from "axios";
const api =axios.create({
    baseURL:'http://localhost:3000/api/auth',
    withCredentials:true
})

export  async function Login(username, password){

    const response = await api.post('/login', 
        { username, password })
        console.log(response.data)
}
export  async function Register(username, email, password){

    const response = await api.post('/register', 
        { username, email, password })
        console.log(response.data)
}
export async function getme(){

    const response = await api.get('/me')
    console.log(response.data)
}