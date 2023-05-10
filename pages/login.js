function login () {
    
    fetch(`http://localhost/Project/recepies/login/test@gmail./0000`)
  .then((response) => {


    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    if (data) {
      localStorage.setItem("user",data);
      window.location.href ="./admin.html";
    }
    
  })
  .catch((error) => console.error("FETCH ERROR:", error));

}