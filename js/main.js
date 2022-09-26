const btn_inc =document.querySelectorAll('[data-incrementer]');
const btn_dec =document.querySelectorAll('[data-decrementer]');
const product_total = document.querySelector('#product-total');
const subtotals = document.querySelectorAll('.subtotal');
const remove_btn = document.querySelectorAll('.remove');
const aimee_btn = document.querySelectorAll('.btn-aimee');
const btn_barre = document.querySelector('.bars');
function calculateTotal(){
  var total=0 ;
  for(const element of subtotals){
    total = total +parseFloat(element.innerHTML);
  }
  product_total.innerHTML=total;
}




btn_dec.forEach(element => {
    element.addEventListener('click',(event) => {
        var parent=event.target.parentNode;
        var parentP = parent.parentNode;
        var quantity =parentP.childNodes[3].childNodes[1];
        var subtotal =parentP.childNodes[5];
        var price = parentP.childNodes[1];
        if(Number(quantity.innerHTML)>1) {
            quantity.innerHTML=Number(quantity.innerHTML)-1;
            subtotal.innerHTML = parseFloat(price.innerHTML)*Number(quantity.innerHTML);
            calculateTotal();
        }else{
            quantity.innerHTML="1";
        }
    });
});

btn_inc.forEach(element => {
    element.addEventListener('click',(event) => {
        var parent=event.target.parentNode;
        var parentP = parent.parentNode;
        var quantity =parentP.childNodes[3].childNodes[1];
        var subtotal =parentP.childNodes[5]
        var price = parentP.childNodes[1];
        quantity.innerHTML=Number(quantity.innerHTML)+1;
        subtotal.innerHTML = parseFloat(price.innerHTML)*Number(quantity.innerHTML);
        calculateTotal();
    });
});

remove_btn.forEach(element => {
    element.addEventListener('click',(event) => {
        var parent=event.target.parentNode;
        parent.remove();
    });
});

aimee_btn.forEach(element => {
    element.addEventListener('click',(event) => {
        var elt = event.target;
        if(elt.style.color == "red" && elt.style.borderColor == "red"){
            elt.style.color ="black";
            elt.style.borderColor = "black";
        }else{
            elt.style.color ="red";
            elt.style.borderColor = "red";
        }
        
    });
});


btn_barre .addEventListener('click' , function(){
  const barre_nav =document.querySelector('.header-main');
  const barre_nav_utility =document.querySelector('.header-utility');
  const barre_nav_title =document.querySelector('.navbar-title');
  if(barre_nav.style.display==="block" && barre_nav_utility.style.display==="block" && barre_nav_title.style.display==="block" ) 
  {
    barre_nav.style.display ="none";
    barre_nav_utility.style.display ="none";
    barre_nav_title.style.display="none";
  }
  else {
    barre_nav.style.display ="block";
    barre_nav_utility.style.display ="block";
    barre_nav_title.style.display="block";
  }

});

let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  
  if(slides.length !== 0){
     for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 5 seconds
  }
 
}
showSlides();


// Get the modal
var modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".testimonial-img img")
var modalImg = document.querySelector("#img01");
img.forEach(element => {
    element.addEventListener('click',(event) => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
      }  );
});

// Get the modal
var modal_product = document.querySelector("#myModal-prod");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var item = document.querySelectorAll(".featured-item")
var productImg = document.querySelector("#img-produit");
var name_product=document.querySelector("#nom-produit")
var prix = document.querySelector("#prix-produits");
item.forEach(element => {
    element.addEventListener('click',(event) => {
      console.log(element.childNodes[5].innerText)
      modal_product.style.display = "block";
      productImg.src = element.childNodes[3].src;
      productImg.alt=element.childNodes[3].alt;
      name_product.innerHTML=element.childNodes[5].innerText;
      prix.innerHTML=element.childNodes[7].innerText;
      }  );
});
// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

span.forEach(element => {
  element.addEventListener('click',(event) => {
  modal.style.display = "none";
  });
});

var closeModal = document.querySelectorAll(".close_desc");

closeModal.forEach(element => {
  element.addEventListener('click',(event) => {
    modal_product.style.display = "none";
  });
});






