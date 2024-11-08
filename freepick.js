
let catContainer= document.getElementById("catContainer")

function cat(){
 
  fetch("https://api.thecatapi.com/v1/images/search")
  .then((response)=>response.json())
  .then((data)=>{
    let catImageUrl=data[0].url

document.getElementById(catImage).src=catImageUrl
  })
}

// Event listener for button click to fetch a new cat image
document.getElementById("catButton").addEventListener("click", getRandomCat);

