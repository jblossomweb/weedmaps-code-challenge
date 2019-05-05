import axios from 'axios'

export const delay = ms => val => new Promise(
  resolve => setTimeout(() => resolve(val), ms)
);

export const defaultRest = axios
export const promiseGet = (
  request,
  rest,
) => rest.get(request.url, { headers: request.headers })
.then(response => response.data)
.catch(err => {
  console.error(`API ERROR: could not GET ${request.url}: ${err.message}\n\n${err.stack}`)
  return Promise.reject(err)
})
