export function GetUserInfo() {
  return fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById('name').innerHTML = data.name;
      document.getElementById('id').innerText = data.id;
      document.getElementById('avatar').innerText = data.avatar;
      document.getElementById('permissions').innerText = data.permissions;
    })
    .catch(err => console.log(err));
}
