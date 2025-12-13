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
























