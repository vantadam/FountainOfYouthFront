function getRecepies (index) {
    
    fetch(`http://localhost/Project/recepies/${index}`
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
    displayData(index,data);
    
  })
  .catch((error) => console.error("FETCH ERROR:", error));

}
function displayData(index,data) {
    index = index. replace("/", "")
    document.write(`
    <html>
        <head>
            <link rel="stylesheet" href="../styles.css">
            
            <title>${index}</title>
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
                <input type="text" class="search-txt" name="search" placeholder=${index} >
                <button class="search-btn" onclick="search();"><i class="fas fa-search"></i>Go</button>
              </div>
            
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="#">About</a>
        </div>
      </nav>
    
              <section class="list">`)
    for (let i=0;i<data.length;i++) {
    document.write(`<div class="listedRecipe">
                  <div class="recipe-image">
                    <img src=${data[i].imageUrl} alt="Recipe Image">
                  </div>
                  <div class="recipe-details">
                    <h3 class="recipe-name">${data[i].name}</h3>
                    <p class="recipe-description">${data[i].description}</p>
                  </div>
                </div>`) }
  
    document.write("</section></body></html>")
  }
  
  
let index=localStorage.getItem("index");
getRecepies(index);
