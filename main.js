// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const allLikes = document.querySelectorAll(".like-glyph")
for (const heart of allLikes){
  heart.addEventListener('click', newFunction)
}
function newFunction (event){
const fillHeart = event.target
mimicServerCall()
.then(function (){
  if (fillHeart.innerText ===  EMPTY_HEART ){
    fillHeart.innerText = FULL_HEART
  
    fillHeart.className = "activated-heart"}
    
    else {fillHeart.innerText = EMPTY_HEART
   fillHeart.className = " "}
})
.catch(function (error){
  document.querySelector(".hidden").className = ""
  document.querySelector('h2').innerText = error
  setTimeout(() => document.querySelector("#modal").className = "hidden",3000)
})
}

  


  
  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
