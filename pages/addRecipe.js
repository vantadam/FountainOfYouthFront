function addRec(){
    let name = document.getElementsByName('name')[0].value;
    let calories= parseInt(document.getElementsByName('calories')[0].value);
    let prep = document.getElementsByName('prep')[0].value;
    let cook = document.getElementsByName('cook')[0].value;
    let serves = parseInt(document.getElementsByName('serves')[0].value);
    let description = document.getElementsByName('description')[0].value;
    let ingredients = document.getElementsByName('ingredients')[0].value;
    let steps = document.getElementsByName('steps')[0].value;
    let img = document.getElementsByName('imgurl')[0].value;
    let category = document.getElementsByName('category')[0].value;
    

    let data={ "category": category,
    "name": name,
    "calories": calories,
    "prep": prep,
    "cook": cook,
    "serves": serves,
    "description": description,
    "ingredients": ingredients,
    "steps": steps,
    "imageUrl": img,
    }
 
   postJSON(data)
}


async function postJSON(data) {
  try {
    const response = await fetch("http://localhost/Project/recepies/", {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    if (result.errors){
      alert(result.errors)
    }
    else {
      window.location.href="./admin.html";
    }
  } catch (error) {
    console.error("Error:", error);
    
  }
}

