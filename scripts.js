
function search(){
  
  let query='/';
  query+=document.getElementsByClassName('search-txt')[0].value;
  console.log(query);
  localStorage.setItem("index",query);
  window.location.href ="./pages/list.html";
}

function categorychoice(category){
 
  localStorage.setItem("index",category);
  window.location.href ="./pages/list.html";
}