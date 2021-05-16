// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left);

console.log(dodger.style.bottom);

dodger.style.bottom="0px";

/*document.addEventListener("keydown", function(e) {
  if(e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers,10);
    dodger.style.left= `${left-1}px`;
  }
});*/
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight() {
<<<<<<< HEAD
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
=======
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 10);
   
    if (right > 0) {
      dodger.style.right = `${left + 1}px`;
>>>>>>> 90666538b5e38d4e05ce45f9e87c133b239e111f
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
<<<<<<< HEAD
        moveDodgerRight();
=======
      moveDodgerRight();
>>>>>>> 90666538b5e38d4e05ce45f9e87c133b239e111f
    }
  });