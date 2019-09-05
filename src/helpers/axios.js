import axios from 'axios'
const baseDomain = 'http://localhost:3000'
const baseURL = `${baseDomain}/api/v1`
export default function (resource) {
  return axios.create({
    baseURL
    // In case that you need a token:
    // headers: { "Authorization": "Bearer yourToken" }
  })
    .get(`${resource}`)
}
