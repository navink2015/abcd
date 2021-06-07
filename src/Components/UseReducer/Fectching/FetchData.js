import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function FetchData() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(() => {
        setTimeout(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(result=>{
                setPost(result.data)
                setLoading(false)
                setError('')
            })
            .catch(error=>{
                setError(error.message)
                setPost({})
                setLoading(false)
            })
        },5000)
       
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <h1>Use rReducer Data fetching</h1>
            {loading?'loading':post.title}
            {error?error:null}
        </div>
    )
}
