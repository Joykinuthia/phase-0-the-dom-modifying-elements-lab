// Write your code here!
// remove the main element
document.querySelector("main#main").remove();

//creating new header(h1) element
let newHeader = document.createElement("h1");

//assigning id
newHeader.id = "victory";
newHeader.innerHTML = "Joyrose is the champion";


document.body.appendChild(newHeader);


