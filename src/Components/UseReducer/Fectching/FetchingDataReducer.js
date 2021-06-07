import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

function FetchingDataReducer() {
    const initialState = {
        loading: true,
        post: {},
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "Success":
                return {
                    loading: false,
                    post: action.payload,
                    error: ''
                }
            case "error":
                return {
                    loading: false,
                    post: {},
                    error: action.payload
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        setTimeout(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(result=>{
           dispatch({
               type:"Success",
               payload:result.data
           })
        })
        .catch(error=>{
           dispatch({
               type:"error",
               payload:error.message
           })
        })
    },3000)

    }, [])
    return (
        <div>
        {state.loading?'loading':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default FetchingDataReducer
