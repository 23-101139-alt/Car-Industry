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
document.getElementById("header-sec1").innerHTML = "Automotive";
document.getElementById("title1-sec1").innerHTML = "2024 BYD Seal U DM-i";
document.getElementById("2-sec1").innerHTML = "02";
document.getElementById("s-title-sec1").innerHTML = "Electric Motors";
document.getElementById("5-sec1").innerHTML = "05";
document.getElementById("s-title2-sec1").innerHTML = "Driving Modes";

document.getElementById("left-text1-sec1").innerHTML = "Engine";
document.getElementById("left-text2-sec1").innerHTML = "5.5 L";
document.getElementById("left-text3-sec1").innerHTML = " Power";
document.getElementById("left-text4-sec1").innerHTML = " 218 kw";
document.getElementById("left-text5-sec1").innerHTML = " Range";
document.getElementById("left-text6-sec1").innerHTML = " 200 km";

document.getElementById("cta-sec1").innerHTML = "View product ";




// animationsec1
gsap.registerPlugin(ScrollTrigger);

gsap.from(".container-model-one-sec1", {
  x: -200,       
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".sec1",

    toggleActions: "restart none restart none",
      invalidateOnRefresh: true
  }
});



gsap.from(".text-box-sec1", {
  opacity: 0,
       duration: 1,
       delay: 0.5, 
  scrollTrigger: {
    trigger: ".sec1",
    start: "top 80%",
    toggleActions: "restart none restart none",
      invalidateOnRefresh: true
  }
});


gsap.from(".cta-sec1", {
  opacity: 0,
     duration: 1,
       delay: 0.5, 
    clearProps: "opacity",
  scrollTrigger: {
    trigger: ".sec1", 
    start: "top 80%",
    toggleActions: "restart none restart none",
      invalidateOnRefresh: true
  }
});


gsap.from(".cont-left-sec1", {
  opacity: 0,
     duration: 1,
       delay: 0.5, 


  scrollTrigger: {
    trigger: ".sec1",
    start: "top 80%",
    toggleActions: "restart none restart none",
      invalidateOnRefresh: true
  }
});

// endanimationsec1



// sec2
document.getElementById("header-sec2").innerHTML = "Featured Models";


let cardssec2 = [
  { model: "models/2024_byd_yangwang_u9.glb",
     poster: `models/poster2.png`,
    title:`BYD Yangwang U9`,
    stitle:`An electric supercar built for extreme performance.`,
 height: "210%" },
      { model: "models/2024_byd_seal.glb",
     poster: `models/poster3.png`,
    title:`BYD Seal`,
    stitle:`A refined EV crafted for comfort and agility.` ,
 height: "95%" },
       { model: "models/2019_audi_r8_coupe.glb",
     poster: `models/poster4.png`,
    title:`Audi_r8_coupe`,
    stitle:`Advanced electric performance with premium style.` ,
 height: "210%" },
        { model: "models/2020_bmw_m850i_gran_coupe.glb",
     poster: `models/poster5.png`,
    title:`BMW M850i Gran Coupe`,
    stitle:`A perfect blend of speed, comfort, and precision.` ,
 height: "210%" },

];

for (let i = 0; i < cardssec2.length; i++) {

  document.getElementById("cards-sec2").innerHTML += `
                    <div class="main-card-sec2">
                            <div class="model-container">
                            <model-viewer 
                                src="${cardssec2[i].model}"
                                ar ar-modes="webxr scene-viewer quick-look"
                                camera-controls 
                                tone-mapping="neutral" 
                                poster="${cardssec2[i].poster}" 
                                class="models-sec2"
                                camera-orbit="-90deg 90deg 1.2m"
                                min-camera-orbit="0.5m"
                                max-camera-orbit="3m"
                                style="height: ${cardssec2[i].height}; width: 100%;"
                                shadow-intensity="1"
 
                                camera-target="0 0 0"
                                disable-zoom
                                disable-tap>
    <button slot="ar-button"class="custom-ar-btn" >
        
    </button>
                            </model-viewer>
                                <button class="cta-sec2">
                                    <a href="#" class="link-sec2">
                                        <img src="pic/pic9.png">
                                    </a>
                                </button>

                            </div>
                            <div class="text-box-sec2">
                                <h2 class="title-sec2">${cardssec2[i].title}</h2>
                                <h3 class="small-text-sec2">${cardssec2[i].stitle}</h3>
                            </div>
                        </div>

  `;
}



// animationsec2
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".main-card-sec2").forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    toggleActions: "restart none restart none", 
    onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }),
    onLeaveBack: () => gsap.set(card, { opacity: 0, y: 200 }) 
  });
});


// endanimationsec2


// sec3
document.getElementById("header-sec3").innerHTML = "Car Explorer";
document.getElementById("para-sec3").innerHTML = "The Lotus Emira V6 features precision-engineered elements that enhance both performance and aerodynamics. Its sculpted side air intakes feed cool air directly to the supercharged V6 engine, improving efficiency and power delivery. Subtle aero vents along the body help channel airflow smoothly around the car, reducing drag and increasing stability at high speeds. The sleek, lightweight mirrors are shaped to minimize wind resistance while maintaining clear visibility, completing the Emira’s balance of functional design and striking sports-car aesthetics.";

document.getElementById("hs1-sec3").innerHTML = "Air Intake";
document.getElementById("hs2-sec3").innerHTML = "Electric mirror";
document.getElementById("hs3-sec3").innerHTML = "Aero Vents";

document.getElementById("parahs3-sec3").innerHTML = "The Emira’s aero vents direct airflow to boost cooling and enhance stability.";



document.getElementById("parahs2-sec3").innerHTML = "The Lotus Emira V6 features electric adjustable mirrors for quick, visibility control.";
document.getElementById("parahs1-sec3").innerHTML = "The Emira’s air intake feeds the engine with cooler, denser air for better performance and efficiency."



const hotspot1 = document.querySelector('.Hotspot-1');
const hotspot2 = document.querySelector('.Hotspot-2');
const hotspot3 = document.querySelector('.Hotspot-3');
const para1 = document.querySelector('.HotspotPara-1');
const para2 = document.querySelector('.HotspotPara-2');
const para3 = document.querySelector('.HotspotPara-3');


para1.style.display = 'none';
para2.style.display = 'none';
para3.style.display = 'none';

function togglePara(para) {
    if (para.style.display === 'none' || para.style.display === '') {
        para.style.display = 'block';
    } else {
        para.style.display = 'none';
    }
}


hotspot1.addEventListener('click', () => togglePara(para1));
hotspot2.addEventListener('click', () => togglePara(para2));
hotspot3.addEventListener('click', () => togglePara(para3));




document.getElementById("cta-sec3").innerHTML = "View More Details ";





// animation sec3


gsap.registerPlugin(ScrollTrigger);


gsap.set(".model-sec3", {
  scale: 0.4,
  transformOrigin: "center center"
});


gsap.set(
  [".Hotspot-1", ".Hotspot-2", ".Hotspot-3"],
  { opacity: 0, pointerEvents: "none" }
);

const modelTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3",
    start: "top 75%",
    toggleActions: "restart none restart none",
    invalidateOnRefresh: true
  }
});


modelTL.to(".model-sec3", {
  scale: 1,
  duration: 1.4,
  ease: "power3.out",
    delay: 0.5
});


modelTL.to(
  [".Hotspot-1", ".Hotspot-2", ".Hotspot-3"],
  {
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    pointerEvents: "auto"
  },
  "-=0.3" 
);
ScrollTrigger.create({
  trigger: ".sec3",
  start: "top 75%",
  onLeaveBack: () => {
    gsap.set(".model-sec3", { scale: 0.7 });
    gsap.set(
      [".Hotspot-1", ".Hotspot-2", ".Hotspot-3"],
      { opacity: 0, pointerEvents: "none" }
    );
  }
});



// endanimation sec3


// animation sec4

gsap.registerPlugin(ScrollTrigger);

const marquee = document.querySelector(".marquee");
const row = marquee.querySelector(".container-imgs-sec4");
const rowWidth = row.scrollWidth;

gsap.to(".marquee", {
  x: `-${rowWidth / 2}px`,   
  duration: 11,              
  ease: "none",
  repeat: -1,
  modifiers: {
    x: x => {
      return `${parseFloat(x) % (rowWidth / 2)}px`;
    }
  }
});

// endanimation sec4
































