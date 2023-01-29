import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:80/blp-api/v1',
 } );

// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5MDQ5NTUsImV4cCI6MTY3NDkwODU1NSwiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.Bq5aw1f2SibkJm9zKxkVBSd9d4a1F3NLk3omgUbtjPa1wZhtlZQk8VQqF8fFAjByNLJHqk4PCAsq-863uLaeEw";
// axios.defaults.headers = {
//     Authorization: 'Bearer '+ token 
// }

export default api;