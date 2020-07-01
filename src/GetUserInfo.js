import { fetchUserDetails } from './actions';

export function fetchPosts() {
  console.log('fetchPosts');
  const URL = 'https://my-json-server.typicode.com/kevindongzg/demo/login';
  return (
    fetch(URL, { method: 'GET' })
      //   .then(response => {
      //     console.log(response);
      //   return response.json();
      // })
      // .then(data => {
      //   console.log(data);})
      .then(response => Promise.all([response, response.json()]))
  );
}

export function GetUserInfo() {
  console.log('GetUserInfo');
  return dispatch => {
    return fetchPosts().then(([response, json]) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(fetchUserDetails(json));
      }
    });
    //   return fetchPosts().then(response => {
    //     console.log(response);
    //     dispatch(fetchUserDetails(response));
    //   })
  };
}
