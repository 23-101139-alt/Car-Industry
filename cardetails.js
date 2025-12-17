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


// sec1-animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".containermodel-sec1-p2").forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    toggleActions: "restart none restart none",

    onEnter: () =>
      gsap.fromTo(
        card,
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      ),

    onEnterBack: () =>
      gsap.fromTo(
        card,
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      )
  });
});















// sec1

document.addEventListener("DOMContentLoaded", () => {

  let product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!product) {
    alert("No product selected!");
    window.location.href = "index.html";
    return;
  }

  // PAGE TEXT CONTENT
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

 
  
  document.getElementById("numb-1-sec2").innerHTML = product.numb1_sec2 || "-";
  document.getElementById("para-1-sec2").innerHTML = product.para1_sec2 || "-";
  document.getElementById("numb-2-sec2").innerHTML = product.numb2_sec2 || "-";
  document.getElementById("para-2-sec2").innerHTML = product.para2_sec2 || "-";
  document.getElementById("numb-3-sec2").innerHTML = product.numb3_sec2 || "-";
  document.getElementById("para-3-sec2").innerHTML = product.para3_sec2 || "-";



  document.getElementById("header-sec3").innerHTML = "Main Features ";
  document.getElementById("para-sec3").innerHTML = product.para_sec3 || "-";
  document.getElementById("subheader-sec3").innerHTML = "Best Highlights:";

const container = document.getElementById("highlightsContainer");

container.innerHTML = ""; 

product.highlights_sec3.forEach(text => {
  const row = document.createElement("div");
  row.className = "row-sec3-p2";

  row.innerHTML = `
    <img src="pic/pic40.png" class="arrow-img-sec3-p2">
    <h3 class="info-sec3-p2">${text}</h3>
  `;

  container.appendChild(row);
});

  const modelViewerr = document.querySelector(".model-one-p2-sec3");
  modelViewerr.src = product.model;
  modelViewerr.poster = product.poster2;

if (product.display2) {
  if (product.display2.cameraOrbit) modelViewerr.setAttribute("camera-orbit", product.display2.cameraOrbit);
  if (product.display2.fieldOfView) modelViewerr.setAttribute("field-of-view", product.display2.fieldOfView);
  if (product.display2["camera-target"]) modelViewerr.cameraTarget = product.display2["camera-target"];
  if (product.display2.right) modelViewerr.style.right = product.display2.right;
  if (product.display2.top) modelViewerr.style.top = product.display2.top;
  if (product.display2.height) modelViewerr.style.height = product.display2.height;
}



  // MODEL VIEWER SETUP
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

  
  // COLORsBUTTONS
  const colorButtons = document.querySelectorAll(".color1-p2, .color2-p2, .color3-p2");


  const modelButtonColors = {
    "byd-seal-u": ["#8A9604", "#033977", "#AA1717"],
    "byd-u9": ["#CB9A00", "#0000FF", "#00FF00"],
    "byd-seal-u2": ["#51F9E8", "#c57506ff", "#198adbff"],
    "audi-r8": ["#04B63A", "#192ea4ff", "#b61515ff"],
    "bmw-m850": ["#3CA7F7", "#d8ea17ff", "#ec0d0dff"],
    "lotus-emira": ["#73726E", "#0defb6ff", "#0931d1ff"],
    "yangwang-u7": ["#0aca0aff", "#6d8000ff", "#0a57caff"],
    "mclaren-gt": ["#00568D", "#800004ff", "#00800fff"],
    "nissan-gtr": ["#BDB52F", "#005ccdff", "#00ff51ff"]
  };


  function updateColorButtons(productId) {
    const colors = modelButtonColors[productId] || ["#8A9604", "#033977", "#AA1717"];
    colorButtons.forEach((btn, index) => {
      if (colors[index]) {
        btn.style.background = colors[index];
        btn.dataset.color = colors[index];
      }
    });
  }
  updateColorButtons(product.id);


  const excludeKeywords = ["mirror", "tire", "rim", "wheel", "glass", "light"];
  const excludeColors = [
    [0, 0, 0],    
    [10, 10, 10],   
    [20, 20, 20]  
  ];

  function isBlackish(color) {
  
    return excludeColors.some(ex => Math.abs(color[0]*255 - ex[0]) <= 20 &&
                                    Math.abs(color[1]*255 - ex[1]) <= 20 &&
                                    Math.abs(color[2]*255 - ex[2]) <= 20);
  }


  modelViewer.addEventListener("load", () => {
    const materials = modelViewer.model.materials;

    let bodyMaterials = materials.filter(mat => {
      if (!mat.pbrMetallicRoughness) return false;
      const nameLower = mat.name.toLowerCase();
      if (excludeKeywords.some(kw => nameLower.includes(kw))) return false;
      const baseColor = mat.pbrMetallicRoughness.baseColorFactor || [1,1,1,1];
      if (isBlackish(baseColor)) return false;
      return true;
    });

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



// animationsec2



  gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".numbers-sec2-p2").forEach(el => {
  const rawText = el.textContent.trim();

  const endValue = parseInt(rawText.replace(/\D/g, ""), 10);

  const hasPlus = rawText.includes("+");

  const counter = { value: 0 };

  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",

    onEnter: () => {
      counter.value = 0;

      gsap.to(counter, {
        value: endValue,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent =
            Math.floor(counter.value) + (hasPlus ? "+" : "");
        }
      });
    },

    onEnterBack: () => {
      counter.value = 0;

      gsap.to(counter, {
        value: endValue,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent =
            Math.floor(counter.value) + (hasPlus ? "+" : "");
        }
      });
    }
  });
});

  











});













