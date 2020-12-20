import axios from 'axios';
//creating instance of axios
export default axios.create({
  baseURL: 'https://dhpi-back.herokuapp.com',
});
