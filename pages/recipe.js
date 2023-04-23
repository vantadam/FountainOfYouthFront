function getRecipe (id) {
    
    fetch(`http://localhost/Project/recepies/${id}`
    ,{
        method:"GET",
    })
  .then((response) => {
    wait(500);

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
function displayrecipe(index,data) {
    let ingredients=data.ingredients.split("/")
    let steps=data.steps.split(".")
    index = index. replace("//", "")
    document.write(`
    <html>
    <head>
    <title>${data.name}</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../styles.css">
    
  </head>
    <body>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="../index.html">
            <img src="../assets/logo.png" alt="Logo">
          </a>
        </div>
        <div class="navbar-center">
          <div class="navbar-item">
            
              <div class="search-box">
                
                <input type="text" class="search-txt" name="search" placeholder="Search">
                <button class="search-btn" type="submit" onclick="search();"><i class="fas fa-search"></i>Go</button>
              
              </div>
            
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="#">About</a>
        </div>
      </nav>
      <div class="recipe">
        <h1>${data.name}</h1>
        <img src='${data.imageUrl}' alt="Delicious Recipe">
        <div class="description">
          <p>This is a delicious recipe that you will love! It's easy to make and perfect for any occasion.</p>
          <ul class="stats">
            <li><i class="fa fa-user"></i> Serves: ${data.serves}</li>
            <li><i class="fa fa-clock-o"></i> Prep time:  ${data.prep}</li>
            <li><i class="fa fa-clock-o"></i> Cooking time: ${data.cook}</li>
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
         
        document.write("</div> </div></body></html>")
  }
  
function search(){
  
  let query='/';
  query+=document.getElementsByClassName('search-txt')[0].value;
  console.log(query);
  localStorage.setItem("index",query);
  window.location.href ="./list.html";
}
function select(choice){
  console.log(choice)
  let id='//';
  id+=choice;
  localStorage.setItem("id",id);
  window.location.href="./recipe.html";
}
  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


  
let id=localStorage.getItem("id");
getRecipe(id);
