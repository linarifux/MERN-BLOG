import axios from 'axios'

const URL = 'http://localhost:8000'

export const createPost = async (post) => {
    try{
        return await axios.post(`${URL}/create`, post)
    }catch(e){
        console.log('error while calling createPost API', e);
    }
}

export const getAllPosts = async () => {
    try{
        const response = await axios.get(`${URL}/posts`)
        return response
    }catch(e){
        console.log('Error while calling getAllPost',e);
    }
}

export const getPostById = async (id) => {
    try{
        const response = await axios.get(`${URL}/post/${id}`)
        return response.data
    }catch(e){
        console.log(e);
    }
}