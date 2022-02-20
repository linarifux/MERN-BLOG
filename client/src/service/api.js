import axios from 'axios'

const URL = 'http://localhost:8000'

export const createPost = async (post) => {
    try{
        const token = localStorage.getItem('token')
        const response = await axios.post(`${URL}/create/${token}`, post)
        return response.data
    }catch(e){
        console.log('error while calling createPost API', e);
    }
}

export const getAllPosts = async (param) => {
    try{
        const response = await axios.get(`${URL}/posts/${param}`)
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

export const updateBlog = async (id,post) => {
    try{
        await axios.post(`${URL}/update/${id}`, post)
    }catch(e){
        console.log('Error while calling update post api', e);
    }
}

export const deletePost = async (id) => {
    try{
        await axios.delete(`${URL}/delete/${id}`)
    }catch(e){
        console.log('Error while calling deletePost API', e);
    }
}

export const uploadFile = async (data) => {
    try{
        const imageUrl = await axios.post(`${URL}/file/upload`, data)
        return imageUrl
    }catch(e){
        console.log('Error while uploading the image', e);
    }
}

export const getImageUrl = (filename) => {
    try{
        return axios.get(`${URL}/images/${filename}`)
    }catch(e){
        console.log('Error while calling getImageUrl API', e);
    }
}

export const createNewuser = async (data) => {
    try{
        const response = await axios.post(`${URL}/user/signup`, data)
        localStorage.setItem('token', response.data.token)
        return response
    }catch(e){
        console.log('Error while calling createUser API', e);
    }
}

export const loginUser = async (data) => {
    try{
        const response = await axios.post(`${URL}/user/login`, data)
        localStorage.setItem('token', response.data.token)
        const token = response.data.token
        return token
    }catch(e){
        console.log('Error while calling loginUser API', e);
    }
}

export const viewHome = async () => {
    try{
        const token = localStorage.getItem('token')
        const response = await axios.get(`${URL}/home/${token}`)
        console.log(response);
        return response.data
    }catch(e){
        console.log('Error while calling homeView API',e);
    }
}

// export const logOutUser = async () => {
//     try{
//         const token = localStorage.getItem('token')
//         return await axios.post(`${URL}/user/logout`, token)
//     }catch(e){
//         console.log('Error while calling logOutUser API', e);
//     }
// }