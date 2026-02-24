import Post from "../components/Post";
import React from 'react'
import { usePost } from "../hook/usePost";

const Fedd = () => {

    const {Feed,loading} = usePost();
 return (
        <main className='feed-page' >
            <div className="feed">
                <div className="posts">
                    {Feed.map(post=>{
                        return <Post user={post.user} post={post} loading={loading} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Fedd