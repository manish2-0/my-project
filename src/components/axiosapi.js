import axios from 'axios';

  
 const api=axios.create({
//   baseURL:'https://blp-node-api.vercel.app/',
  baseURL:'http://localhost:8000/',
  headers:{'Content-Type':'application/json'},
  withCredentials:true
 })


export default api;