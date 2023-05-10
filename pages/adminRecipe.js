function getRecipe (id) {
    
    fetch(`http://localhost/Project/recepies/admin//${id}`
    ,{
        method:"GET",
    })
  .then((response) => {
 

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayrecipe(id,data);
    
  })
  .catch((error) => console.error("FETCH ERROR:", error));

}
function deleterec() {
  let id=localStorage.getItem("id");
  fetch(`http://localhost/Project/recepies/delete//${id}`
  ,{
      method:"GET",
  })
.then((response) => {


  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayrecipe(id,data);
  
})
.catch((error) => console.error("FETCH ERROR:", error));

window.location.href="./admin.html"

}

function displayrecipe(index,data) {
    let ingredients=data.ingredients.split("/")
    let steps=data.steps.split(".")
    let id= index
    index = index. replace("//", "")
    document.write(`
    <html>
    <head>
    <title>${data.name}</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../styles.css">
    
  </head>
    <body>
     
      <div class="recipe">
        <h1>${data.name}</h1>
        <img src='${data.imageUrl}' alt="Delicious Recipe">
        <div class="description">
          <p>This is a delicious recipe that you will love! It's easy to make and perfect for any occasion.</p>
          <ul class="stats">
            <li><i class="fa fa-user"></i> Serves: ${data.serves}</li>
            <li><i class="fa fa-clock-o"></i> Prep time:  ${data.prep}</li>
            <li><i class="fa fa-clock-o"></i> Cooking time: ${data.cook}</li>
            <li><i class="fa fa-clock-o"></i> Views: ${data.views}</li>
          </ul>
        </div>
        <div class="ingredients">
          <h2>Ingredients</h2><ol>`);
          for (let i=0;i<ingredients.length-1;i++){
            document.write(`<ul>${ingredients[i]}</ul>`);
          }
        document.write(`</ol> </div>
        <div class="steps">
          <h2>Steps</h2>`)
          for (let i=0;i<steps.length-1;i++){
            document.write(`<ul ><b>${i+1} - </b>${steps[i]}</ul>`);
          }
         
        document.write("</div> <button class='delete-Button' onclick='deleterec()'>Delete</button></div></body></html>")
  }
  



  
let id=localStorage.getItem("id");
getRecipe(id);
