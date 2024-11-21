import React from 'react'
import appwrite_service from '../appwrite_service/configService'
import { Link } from 'react-router-dom'

function PostCard($id, title, featuredImage) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-gray-100 w-full rounded-xl p4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwrite_service.getFilePreview(featuredImage)} alt={title} className='rounded-lg'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard