import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8095/api/v1'
});
