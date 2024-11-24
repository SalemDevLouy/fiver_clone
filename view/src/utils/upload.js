import axios from 'axios'

const uploadFile = async(file) =>{
    const data = new FormData()
    data.append('file', file);
    data.append('upload_preset','fiverr')
    try {
        const urlcodinary="https://api.cloudinary.com/v1_1/salemdev/image/upload"
        const res = await axios.post(urlcodinary,data)
        const {url} = res.data;
        return url
    } catch (error) {
        console.log(error)
    }
}
export default uploadFile