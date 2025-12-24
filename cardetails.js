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
    const products = JSON.parse(localStorage.getItem("products")) || [];

    if (products.length > 0) {
      product = products[0];              
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
      );
    } else {
      console.error("No products found in localStorage");
      return;
    }
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


document.getElementById("header-sec4").innerHTML = "Car Specifications";
document.getElementById("subhedaer1-sec4").innerHTML = "Engine Power";
document.getElementById("subhedaer2-sec4").innerHTML = "Kwh Rating ";
document.getElementById("subhedaer3-sec4").innerHTML = "Top Speed";


document.getElementById("header-sec5").innerHTML = "Similar Models";
document.getElementById("link-sec5").innerHTML = "View All";
document.getElementById("model1-sec5").innerHTML = "Model:";
document.getElementById("model2-sec5").innerHTML = "Model:";
document.getElementById("model3-sec5").innerHTML = "Model:";
document.getElementById("cta1-sec5").innerHTML = "View product ";
document.getElementById("cta2-sec5").innerHTML = "View product ";
document.getElementById("cta3-sec5").innerHTML = "View product ";

const row = document.querySelector('.row2-sec5-p2');
const card3 = document.querySelector('.cardd3-sec5-p2');

function checkWrap() {
  const rowTop = row.getBoundingClientRect().top;
  const cardTop = card3.getBoundingClientRect().top;

  card3.style.marginTop = cardTop > rowTop ? '-118px' : '0';
}

window.addEventListener('resize', checkWrap);
checkWrap();


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

// sec4
if (product.specs_sec4) {
  document.getElementById("spec1-img").src = product.specs_sec4.spec1.img;
  document.getElementById("spec1-title").innerHTML = product.specs_sec4.spec1.title;
  document.getElementById("spec1-desc").innerHTML = product.specs_sec4.spec1.desc;

  document.getElementById("spec2-img").src = product.specs_sec4.spec2.img;
  document.getElementById("spec2-title").innerHTML = product.specs_sec4.spec2.title;
  document.getElementById("spec2-desc").innerHTML = product.specs_sec4.spec2.desc;
    document.getElementById("spec2-img2").src = product.specs_sec4.spec2.img2;
  document.getElementById("spec2-title2").innerHTML = product.specs_sec4.spec2.title2;

  document.getElementById("spec3-img").src = product.specs_sec4.spec3.img;
  document.getElementById("spec3-title").innerHTML = product.specs_sec4.spec3.title;
  document.getElementById("spec3-desc").innerHTML = product.specs_sec4.spec3.desc;
    document.getElementById("spec3-img2").src = product.specs_sec4.spec3.img2;
  document.getElementById("spec3-title2").innerHTML = product.specs_sec4.spec3.title2;
}


// sec5
if (product.similarModels) {
  const imgs = document.querySelectorAll(".row2-sec5-p2 .imgs-sec5-p2");
  const subtitles = document.querySelectorAll(".subtitles-sec5-p2");
  const models = document.querySelectorAll(".model-sec5-p2");

  product.similarModels.forEach((item, index) => {
    if (imgs[index]) imgs[index].src = item.img;
    if (subtitles[index]) subtitles[index].innerHTML = item.subtitle;
    if (models[index]) models[index].innerHTML = item.model;
  });
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

  
// animationsec3
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container-model-sec3-p2").forEach(container => {
  ScrollTrigger.create({
    trigger: container,
    start: "top 85%",
    toggleActions: "restart none restart none",

    onEnter: () =>
      gsap.fromTo(
        container,
        { opacity: 0, x: 300 },  
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }  
      ),

    onEnterBack: () =>
      gsap.fromTo(
        container,
        { opacity: 0, x: 300 },  
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      )
  });
});



// animationsec4
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card1-sec4-p2").forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    toggleActions: "restart none restart none",

    onEnter: () =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 400 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" } 
      ),

    onEnterBack: () =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 400 },  
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
  });
});




gsap.utils.toArray(".card-2-sec4-p2").forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    toggleActions: "restart none restart none",

    onEnter: () =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 400 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" } 
      ),

    onEnterBack: () =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 400 },  
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
  });
});








































});













