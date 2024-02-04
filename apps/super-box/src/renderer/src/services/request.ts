import { extend, ResponseError } from 'umi-request'
const errorHandler = function (error: ResponseError) {
  const codeMap = {
    '021': 'An error has occurred',
    '022': 'It’s a big mistake,'
    // ....
  }
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status)
    console.log(error.response.headers)
    console.log(error.data)
    console.log(error.request)
    console.log(codeMap[error.data.status])
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message)
  }

  throw error // If throw. The error will continue to be thrown.

  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
}
const request = extend({
  timeout: 60000,
  headers: {
    // 'Content-Type': 'multipart/form-data'
  },
  errorHandler: errorHandler
})
// clone response in response interceptor
request.interceptors.response.use(async (response) => {
  // const data = await response.clone().json()

  return response
})
export default request
