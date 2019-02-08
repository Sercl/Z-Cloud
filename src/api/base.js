import axios from 'axios'
import qs from 'qs'

export default class Base {
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 16000,
    }).then(resp => {
      return resp.data
    }, error => {
      console.log(error)
    })
  }
  get(url) {
    return axios({
      method: 'get',
      url: url,
      timeout: 16000,
    }).then(resp => {
      return resp.data
    }, error => {
      console.log(error)
    })
  }
}
