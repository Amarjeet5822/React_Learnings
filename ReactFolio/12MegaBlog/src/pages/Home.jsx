import React, {useState, useEffect } from 'react'
import appwriteService from '../appwrite_service/configService';
import { PostForm } from '../components/index';
import Container from '../components/container/Container';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/index';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=> {
            if( posts) {
                setPosts(posts.documents);
            }
        })
    },[])

    if (posts.length===0){
        return (
            <div className="py-8 w-full mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500"
                            >Login to read posts</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full p-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Home;