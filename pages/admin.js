const searchInput = document.getElementById('admin-search-input');
const itemList = document.getElementById('admin-item-list');

function displayData(index, data) {
  itemList.innerHTML = '';

  data.forEach(item => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = item.name;
    p.textContent = 'Views: ' + item.views;
    let id = item.id;

    li.onclick = function() {
      getrec(id);
    };

    li.appendChild(h3);
    li.appendChild(p);

    itemList.appendChild(li);
  });
}
/*random comment*/ 

function getrec(id) {
  localStorage.setItem('id', id);
  window.location.href = './adminRecipe.html';
}

function getRecepies(index) {
  fetch(`http://localhost/Project/recepies//${index}`, {
    method: 'GET',
  })
    .then((response) => {
    

      if (response.ok) {
        return response.json();
      } else {
        throw new Error('NETWORK RESPONSE ERROR');
      }
    })
    .then((data) => {
      console.log(data);
      displayData(index, data);
    })
    .catch((error) => console.error('FETCH ERROR:', error));
}

searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();

  getRecepies(searchQuery);
});

function logout(){
  localStorage.removeItem("user");
  window.location.href ="./login.html";
  console.log("logged out")
}
function addrec(){
  window.location.href='./addRecipe.html';
}
let user=localStorage.getItem("user");
if (!user){
  window.location.href ="./login.html";
}
function getAll(){
  fetch(`http://localhost/Project/recepies/`, {
    method: 'GET',
  })
    .then((response) => {
    

      if (response.ok) {
        return response.json();
      } else {
        throw new Error('NETWORK RESPONSE ERROR');
      }
    })
    .then((data) => {
      console.log(data);
      displayData("recipes", data);
    })
    .catch((error) => console.error('FETCH ERROR:', error));
}
getAll();
