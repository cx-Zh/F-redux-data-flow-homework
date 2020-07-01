export function fetchPosts() {
  const URL = 'https://my-json-server.typicode.com/kevindongzg/demo/login';
  return fetch(URL, { method: 'GET' }).then(response => Promise.all([response, response.json()]));
}
