// header
document.getElementById("list1").innerHTML = "About Us";
document.getElementById("list2").innerHTML = "Suppliers";
document.getElementById("list3").innerHTML = "Products";
document.getElementById("list4").innerHTML = "Contact Us";


document.getElementById("list1bg").innerHTML = "About Us";
document.getElementById("list2bg").innerHTML = "Suppliers";
document.getElementById("list3bg").innerHTML = "Products";
document.getElementById("list4bg").innerHTML = "Contact Us";


  document.querySelector('.burger-menu-cont').addEventListener('click', () => {
    document.querySelector('.dropdown-burger-menu').classList.toggle('show');
  });

// header

// sec1
document.getElementById("haeder-sec1-p2").innerHTML = "BYD Seal U DM-i";
document.getElementById("feature1").innerHTML = "Model:";
document.getElementById("answer1").innerHTML = "Seal U DM-i";
document.getElementById("feature2").innerHTML = "Year:";
document.getElementById("answer2").innerHTML = "2024";
document.getElementById("feature3").innerHTML = "Category:";
document.getElementById("answer3").innerHTML = "Plug-in Hybrid SUV";
document.getElementById("feature4").innerHTML = "Car’s color:";

document.getElementById("price").innerHTML = "2,650,000 EGP ";
document.getElementById("cta-text").innerHTML = "Book Now";






















// localstorage
let product = JSON.parse(localStorage.getItem("selectedProduct"));

if (!product) {
  alert("No product selected!");
  window.location.href = "index.html";
}


document.getElementById("haeder-sec1-p2").innerHTML = product.name;
document.getElementById("answer1").innerHTML = product.name;
document.getElementById("answer2").innerHTML = product.year;
document.getElementById("answer3").innerHTML = product.category;
document.getElementById("price").innerHTML = product.price;



const modelViewer = document.querySelector(".model-one-p2");


modelViewer.src = product.model;
modelViewer.poster = product.poster;


if (product.display) {
  if (product.display.cameraOrbit) {
    modelViewer.setAttribute("camera-orbit", product.display.cameraOrbit);
  }
  if (product.display.fieldOfView) {
    modelViewer.setAttribute("field-of-view", product.display.fieldOfView);
  }
 if (product.display["camera-target"]) modelViewer.cameraTarget = product.display["camera-target"];
 if (product.display.right) modelViewer.style.right = product.display.right;
   if (product.display.top) modelViewer.style.top = product.display.top;
    if (product.display.height) modelViewer.style.height = product.display.height;
}

















