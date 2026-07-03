'use strict';


// ===============================
// Toggle Function
// ===============================

const elementToggleFunc = function (elem) {

  if (elem) {
    elem.classList.toggle("active");
  }

}



// ===============================
// Sidebar Mobile Menu
// ===============================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


if (sidebarBtn && sidebar) {

  sidebarBtn.addEventListener("click", function () {

    elementToggleFunc(sidebar);

  });

}



// ===============================
// Testimonials Modal
// ===============================

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");



const testimonialsModalFunc = function () {

  if(modalContainer && overlay){

    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");

  }

};



testimonialsItem.forEach(item => {


  item.addEventListener("click", function(){


    if(
      modalImg &&
      modalTitle &&
      modalText
    ){

      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");


      if(avatar){
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }


      if(title){
        modalTitle.innerHTML = title.innerHTML;
      }


      if(text){
        modalText.innerHTML = text.innerHTML;
      }


      testimonialsModalFunc();

    }


  });


});



if(modalCloseBtn){

  modalCloseBtn.addEventListener(
    "click",
    testimonialsModalFunc
  );

}


if(overlay){

  overlay.addEventListener(
    "click",
    testimonialsModalFunc
  );

}





// ===============================
// Custom Select
// ===============================


const select = document.querySelector("[data-select]");

const selectItems = document.querySelectorAll("[data-select-item]");

const selectValue = document.querySelector("[data-selecct-value]");


if(select){


select.addEventListener(
"click",
function(){

elementToggleFunc(this);

});


}



selectItems.forEach(item =>{


item.addEventListener(
"click",
function(){


if(selectValue){

selectValue.innerText = this.innerText;

}


if(select){

elementToggleFunc(select);

}


});


});







// ===============================
// Filter Portfolio
// ===============================


const filterItems = document.querySelectorAll("[data-filter-item]");

const filterBtn = document.querySelectorAll("[data-filter-btn]");



const filterFunc = function(selectedValue){



filterItems.forEach(item=>{


if(
selectedValue === "all" ||
selectedValue === item.dataset.category
){

item.classList.add("active");


}

else{


item.classList.remove("active");


}


});


};



filterBtn.forEach(button=>{


button.addEventListener(
"click",
function(){



const selectedValue =
this.innerText.toLowerCase();



if(selectValue){

selectValue.innerText =
this.innerText;

}



filterFunc(selectedValue);



filterBtn.forEach(btn=>{

btn.classList.remove("active");

});



this.classList.add("active");



});


});






// ===============================
// Contact Form Validation
// ===============================


const form = document.querySelector("[data-form]");

const formInputs = document.querySelectorAll("[data-form-input]");

const formBtn = document.querySelector("[data-form-btn]");



if(form){



formInputs.forEach(input=>{


input.addEventListener(
"input",
function(){



if(form.checkValidity()){


if(formBtn){

formBtn.removeAttribute("disabled");

}


}

else{


if(formBtn){

formBtn.setAttribute(
"disabled",
""
);

}


}



});


});



}







// ===============================
// Page Navigation
// ===============================


const navigationLinks =
document.querySelectorAll("[data-nav-link]");


const pages =
document.querySelectorAll("[data-page]");



navigationLinks.forEach(link=>{


link.addEventListener(
"click",
function(){



pages.forEach(page=>{


if(
this.innerHTML.toLowerCase()
===
page.dataset.page
){


page.classList.add("active");

}


else{


page.classList.remove("active");

}



});



navigationLinks.forEach(nav=>{

nav.classList.remove("active");

});


this.classList.add("active");



window.scrollTo(0,0);



});


});