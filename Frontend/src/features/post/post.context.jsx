import {createContext,useState} from 'react'

export const PostContext = createContext();

export async function PostProvider({children}) {
    const [Post,setPost] = useState(null);
    const [Loading,setLoading] = useState(false);
    const [Feed,setFeed] = useState(null);
    return (
        <PostContext.Provider value={{Post,setPost,Loading,setLoading,Feed,setFeed}}>
            {children}
            </PostContext.Provider>
    )
}