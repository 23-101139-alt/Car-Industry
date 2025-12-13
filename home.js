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


















