import React, {useState, useEffect } from 'react'
import { Container, PostForm  } from '../components/index'
import appwriteService from "../appwrite_service/configService"


function AllPost() {
    const [posts, setPosts ] = useState([]);

    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=> {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                { posts && posts.map((post)=> (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostForm post={post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost