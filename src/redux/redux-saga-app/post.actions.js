import axios from 'axios'
export const fetchPosts = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/posts')
} 