//wish icon
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});

//add to cart functiom
w = ` ` ; 
j = ` ` ;  
k = ` ` ;  
function cart_function(){
  i = 0;
  
  
  num = 2348088981691;
  var product_title;
  
$(".cart").click(function(event) {
 
  console.log(i)
  
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
localStorage.setItem("men-name", product_title_el);


product_price_storage_el = product_price_el ;
localStorage.setItem("men-price", product_price_el);

product_img_storage_el = product_img_el ;
localStorage.setItem("men-img", product_img_el);
 
    }); 
  };

  cart_function()

    