import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite_service/configService'
import { useNavigate } from 'react-router-dom'
import { Container, PostForm } from '../components/index'
import { useParams } from 'react-router-dom'


function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate("/")
        }
        
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>

  ) : null
  
}

export default EditPost