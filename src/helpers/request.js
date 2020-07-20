import Axios from "axios";

export const searchGallery =(query,page)=>{
    const apiKey = process.env.REACT_APP_CLIENT_API_KEY
   return Axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)
}


// https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12