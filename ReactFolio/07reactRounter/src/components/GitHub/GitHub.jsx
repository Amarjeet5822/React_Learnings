import React, { useState, useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()
    // const [ data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Amarjeet5822")
    //     .then((response)=> response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl '>GitHub Follwers: {data.followers} 
    <img src={data.avatar_url} alt="GitHub picture" width={300} />
    </div>

  )
}

export default GitHub
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Amarjeet5822")
    return response.json()
}