import axios from 'axios'

const dsBscScan = axios.create({
  baseURL: 'https://api.bscscan.com/api',
  timeout: 5000
})

dsBscScan.interceptors.request.use(
  config => {
    config.params = {
      apikey: 'QM3IMFSTIXZ56K1TB6MJH9JX3X5XRES7W1',
      ...config.params
    }

    return config
  }
)

export default dsBscScan