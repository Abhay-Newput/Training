//Acessing Elements------->

// Get Element By ID
var eleId = document.getElementById("heading");
console.log(eleId);

//Get Element by Class Name
var eleClass = document.getElementsByClassName("main");
console.log(eleClass);

var elelist = document.getElementsByClassName("list");
console.log(elelist);

//Get Element by Tag
var eleTag = document.getElementsByTagName("div");
console.log(eleTag);

// Get Element by query Selector
var eleQuery = document.querySelector("div");
console.log(eleQuery);

// Get Element by Querry selector all
var eleQAll = document.querySelectorAll("div");
console.log(eleQAll);

//Manipulating Elements------------>

//Inner Text
eleId.innerText = "Inner Text";
console.log(eleId.innerText);

//Tect Content
eleId.textContent = "Hi now text Content";
console.log(eleId.textContent);

//inner html
eleImgs = document.getElementsByClassName("img");
for (let i = 0; i < eleImgs.length; i++) {
  eleImgs[i].innerHTML = "<strong>Strong Tag</strong>";
  console.log(eleImgs[i].innerHTML);
}

// Change Attributes
var eleAtr = document.getElementsByTagName("ul")[0];
eleAtr.setAttribute("style", "list-style-type:none");

//Add class
var oldclass = document.getElementsByClassName("main");
for (let i = 0; i < oldclass.length; i++) {
  oldclass[i].classList.add("new-class");
}

//remove class
var remClass = document.getElementsByClassName("lola");
for (let i = 0; i < remClass.length; i++) {
  remClass[i].classList.remove("lola");
}

//Change Style
eleId.style.color = "red";

for (let i = 0; i < oldclass.length; i++) {
  oldclass[i].style.backgroundColor = "pink";
}

//-----------Creating and removing element-------------

//Creating a element

var parentEle = document.getElementsByClassName("curd");

//Create
var newEle = document.createElement("p");
for (let i = 0; i < parentEle.length; i++) {
  parentEle[i].appendChild(newEle);
}

//Remove
for (let i = 0; i < parentEle.length; i++) {
  var childDiv = parentEle[i].getElementsByClassName("div")[0];
  parentEle[i].removeChild(childDiv);
}

//--------------Travelsal----------->

//Acess Parent Node
var traPa = eleId.parentNode;
console.log("nanana", traPa);

//Access Child Node
var traCh = [];
for (let i = 0; i < eleClass.length; i++) {
  traCh.push(eleClass[i].childNodes);
}
console.log("babababa", traCh);

//---------Event handling------------>
var eleA = document.querySelector("a");
eleA.addEventListener("click", function () {
  alert("hii there");
});

//Event
function displayDate() {
  console.log("clicked");
}

// var originalContent = document.getElementById("myElement").innerHTML;

// function mouseOver(onj) {
//   if (!originalContent) {
//     originalContent = onj.innerHTML;
//   }
//   onj.innerHTML = "OHHHH Yeaahhhhh";
// }

// function mouseLeave(onj) {
//   onj.innerHTML = originalContent;
// }

/// Node Type
console.log("node type", eleId.nodeName);

//Node Name
console.log("node type", eleId.nodeName);

//Has Child
console.log("node type", eleId.hasChildNodes());

// Clone the node

const cloneNode = eleId.cloneNode(true);
console.log("cloned node id", cloneNode);

const divID = document.getElementById("list-items");
const cloneDiv = divID.cloneNode(true);

console.log("cloned div", cloneDiv);

// Form validation

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  console.log("form", x);
}

//Dispatch event
const button = document.getElementById("myButton");
//custom event
const clickEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  view: window,
});

button.dispatchEvent(clickEvent);

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
