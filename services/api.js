/* eslint-disable no-param-reassign */
import axios from 'axios';
//  import RNFetchBlob from 'react-native-fetch-blob'

const api = axios.create({
  baseURL:   'URL' 
});


api.interceptors.request.use(
  async (requestConfig) => {
    requestConfig.headers.common.Authorization = `Bearer 778466366de002a80a9035ed3500d1a1`;
    return requestConfig;
  },
  (response) => Promise.reject(response),
);

 export default api;
