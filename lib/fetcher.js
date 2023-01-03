import useSWR from 'swr'

const baseURL = 'http://localhost:3000'

/* This function is using the fetch API to make an HTTP request and then returning the response in JSON format.

The fetch function is a built-in JavaScript function that is used to make HTTP requests. It takes a URL as its first argument and returns a promise that resolves to a Response object. The Response object has a json method that can be used to parse the body of the response as JSON.

The fetcher function takes any number of arguments (denoted by the ...args spread operator) and passes them directly to the fetch function. It then returns a promise that resolves to the JSON-parsed body of the Response object. */

const response = (...args) => fetch(...args).then((res) => res.json())

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
