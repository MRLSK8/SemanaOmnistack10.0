import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'http://192.168.0.105:3333'
  // 10.0.2.2
})

export default Api;