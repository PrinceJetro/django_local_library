

// image slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//wish icon
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});

	


});

//to comfirm  checkboxes
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}




//WhatsApp send 
function send_handle(){


    let num=document.getElementById("number").value;
    let msg= document.getElementById("msg").value;
    let name= document.getElementById("name").value;
    let first= document.getElementById("one");
    let second= document.getElementById("two");
    let third= document.getElementById("three");
       if (first.checked == true){  
          var y = document.getElementById("one").value;  
             
        }   
        else{
            var y = "";  
        };
        if (second.checked == true){  
          var n = document.getElementById("two").value;  
            
        }
        else{
            var n = "";
        };    
        if (third.checked == true){  
          var ne = document.getElementById("three").value;      
        }    
        else{
            var ne = "";
        };
       
    var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20%20${name}%20%20${msg}\n ${y} \n ${n}\n ${ne}`, '_blank');
   // win.focus();
  }




  //search
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    document.getElementById("myUL").style.display = "block";
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
 
function togglesearch(){
    document.getElementById("myUL").style.display = "none";

}


//add to cart functiom
w = ` ` ; 
j = ` ` ;  
k = ` ` ;  
function cart_function(){
  i = 0;
  
  

  var product_title;
  
$(".cart").click(function(event) {
 
  console.log("you calicked me "+i)
  
/* Prevent default click action behavior */
event.preventDefault();

/* Hide the progress container that is a descendant of the saeme
anscestor of the download button being clicked */
let product_title = $('.product-title', $(this).parent()).html();

let product_price = $('.item-price', $(this).parent()).text();

let product_img = $(this).parents(".col-sm-3").find(".img-fluid").attr('src');

no = window.prompt(`How Many ${product_title} Do You Plan To Purchase? ` );
if (isNaN(no)) 
{
  alert("Must input numbers");
  return false;
}

  alert(`${product_title} has been added to cart`)
  i++;
  product_title_el =  w+=product_title + " " + " X " + no + `\n`;


  product_price_el = j+=(parseInt(j = product_price) * no) + ` \n`;
  delete (no); 
  
  
 
  product_img_el = k += product_img + ` \n`;
  
  
  console.log(product_title_el)
  
product_title_storage_el = product_title_el ;
localStorage.setItem("product-name", product_title_el);


product_price_storage_el = product_price_el ;
localStorage.setItem("product-price", product_price_el);

product_img_storage_el = product_img_el ;
localStorage.setItem("product-img", product_img_el);

 
  }); 
};
cart_function()
















