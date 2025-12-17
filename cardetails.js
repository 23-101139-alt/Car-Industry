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



document.addEventListener("DOMContentLoaded", () => {


  let product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!product) {
    alert("No product selected!");
    window.location.href = "index.html";
    return;
  }

  // pagechangecontent
  document.getElementById("haeder-sec1-p2").innerHTML = product.name;
  document.getElementById("feature1").innerHTML = "Model:";
  document.getElementById("answer1").innerHTML = product.name;
  document.getElementById("feature2").innerHTML = "Year:";
  document.getElementById("answer2").innerHTML = product.year;
  document.getElementById("feature3").innerHTML = "Category:";
  document.getElementById("answer3").innerHTML = product.category;
  document.getElementById("feature4").innerHTML = "Car’s color:";
  document.getElementById("price").innerHTML = product.price;
  document.getElementById("cta-text").innerHTML = "Book Now";

  // editsmodel
  const modelViewer = document.querySelector(".model-one-p2");
  modelViewer.src = product.model;
  modelViewer.poster = product.poster;

  if (product.display) {
    if (product.display.cameraOrbit) modelViewer.setAttribute("camera-orbit", product.display.cameraOrbit);
    if (product.display.fieldOfView) modelViewer.setAttribute("field-of-view", product.display.fieldOfView);
    if (product.display["camera-target"]) modelViewer.cameraTarget = product.display["camera-target"];
    if (product.display.right) modelViewer.style.right = product.display.right;
    if (product.display.top) modelViewer.style.top = product.display.top;
    if (product.display.height) modelViewer.style.height = product.display.height;
  }


  // COLORchange

  const colorButtons = document.querySelectorAll(".color1-p2, .color2-p2, .color3-p2");


  const specialBodyMaterials = {
    "audi-r8": ["Car_Body", "Body_Mat"],
    "lotus-emira": ["Body"],
    "mclaren-gt": ["CarPaint"],
    "nissan-gtr": ["r8Vehicle_Exterior_mm_ext1", "MAT02", "MAT03"]
  };


  const specialExcludeMaterials = {
    "nissan-gtr": ["CARBON", "black_GLass", "r8Vehicle_Exterior_mm_windows1", "r8Vehicle_Exterior_mm_lights1", "r8Vehicle_Exterior_mm_tyre1", "r8Vehicle_Exterior_mm_wheel1"]
  };


  const excludeKeywords = ["mirror", "tire", "rim", "wheel", "glass", "light"];

  modelViewer.addEventListener("load", () => {
    const materials = modelViewer.model.materials;
    let bodyMaterials = [];

    if (specialBodyMaterials[product.id]) {

      bodyMaterials = materials.filter(mat =>
        specialBodyMaterials[product.id].some(key => mat.name.toLowerCase() === key.toLowerCase())
      );


      bodyMaterials = bodyMaterials.filter(mat =>
        !(excludeKeywords.some(kw => mat.name.toLowerCase().includes(kw)) ||
          (specialExcludeMaterials[product.id] && specialExcludeMaterials[product.id].includes(mat.name)))
      );

    } else {

      bodyMaterials = materials.filter(mat =>
        (mat.name.toLowerCase().includes("body") || mat.name.toLowerCase().includes("paint")) &&
        !excludeKeywords.some(kw => mat.name.toLowerCase().includes(kw))
      );
    }

    if (bodyMaterials.length === 0) {

      bodyMaterials = materials.filter(mat =>
        mat.pbrMetallicRoughness &&
        !excludeKeywords.some(kw => mat.name.toLowerCase().includes(kw)) &&
        !(specialExcludeMaterials[product.id] && specialExcludeMaterials[product.id].includes(mat.name))
      );
    }


    colorButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const rgba = cssColorToRGBA(btn);
        bodyMaterials.forEach(mat => {
          if (mat.pbrMetallicRoughness) {
            mat.pbrMetallicRoughness.setBaseColorFactor(rgba);
            mat.pbrMetallicRoughness.setMetallicFactor(mat.pbrMetallicRoughness.metallicFactor ?? 0.5);
            mat.pbrMetallicRoughness.setRoughnessFactor(mat.pbrMetallicRoughness.roughnessFactor ?? 0.25);
            if (mat.clearcoat !== undefined) {
              mat.clearcoatFactor = 1.0;
              mat.clearcoatRoughnessFactor = 0.05;
            }
          }
        });
      });
    });
  });

  function cssColorToRGBA(element) {
    const color = getComputedStyle(element).backgroundColor;
    const nums = color.match(/\d+/g).map(Number);
    return [nums[0]/255, nums[1]/255, nums[2]/255, 1];
  }

});














