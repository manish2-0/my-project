import axios from 'axios';
// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5OTA0NDMsImV4cCI6MTY3NDk5NDA0MywiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4yIn19.1zr8A4zAEBFWluo5BjtfenGRF_2xyCuwhfccR7fhMXcF01T-vkr9nk6mXAq-08U3aGjlddsVnFyvvc3FubP-8Q";
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const api = axios.create({
  baseURL: 'http://localhost:80/blp-api/v1/',
 } );



export default api;