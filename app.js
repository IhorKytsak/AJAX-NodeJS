let url = 'http://localhost:3000';

const button = document.querySelector('button');
const usersList = document.querySelector('.users');

button.addEventListener('click', query);

async function query() {
  let response = await fetch(url);

  let commits = await response.json();

  for (obj of commits) {
    usersList.insertAdjacentHTML(
      'beforeend',
      `
        <div class='item'>
          <img src='${obj.photo}'>
          <h3 class="num">User id: ${obj.id}</h3>
          <p>Name: ${obj.first_name}</p> 
          <p>LastName: ${obj.last_name}</p>
          <p>Email: ${obj.email}</p>
        </div>
      `
    );
  }
  button.disabled = 'true';
}
