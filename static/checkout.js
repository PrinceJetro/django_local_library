

    // getting  index's product from local variable
    product_name = localStorage.getItem("product-name");
    product_price = localStorage.getItem("product-price");
    product_img = localStorage.getItem("product-img");
    
    try{
    var splittedInput = product_name.split('\n');
    var product_price_el = product_price.split('\n');
    var product_img_el = product_img.split('\n');
}
    catch(err){
        console.log("NO item chosen from index")
    }

    //first product
    try{
        var firstLine = splittedInput[0];
        formatted_first_line = firstLine.replace("and", " ");
        document.getElementById("first_product").innerHTML= formatted_first_line;
        var firstPrice = product_price_el[0];
        document.getElementById("first_price").innerHTML= firstPrice;
        var firstimg = product_img_el[0];
        document.getElementById("first_img").src= firstimg;
        if (splittedInput[1] != null){
    document.getElementById("first_div").style.display="block";

};
    }
    catch(err){
        console.log("Some parameters for the first produvt is useful")
    };


    //second product
    
    try{
        var secondLine = splittedInput[1];
        formatted_second_line = secondLine.replace("and", " ");
        document.getElementById("second_product").innerHTML= formatted_second_line;
        var secondPrice = product_price_el[1];
        document.getElementById("second_price").innerHTML= secondPrice;
        var secondimg = product_img_el[1];
        document.getElementById("second_img").src= secondimg;
        if (splittedInput[2] != null){
    document.getElementById("second_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };


    //third product

    try{
        var thirdLine = splittedInput[2];
        formatted_third_line = thirdLine.replace("and", " ");
        document.getElementById("third_product").innerHTML= formatted_third_line;
        var thirdPrice = product_price_el[2];
        document.getElementById("third_price").innerHTML= thirdPrice;
        var thirdimg = product_img_el[2];
        document.getElementById("third_img").src= thirdimg;
        if (splittedInput[3] != null){
    document.getElementById("third_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };

    //fourth product
    try{
        var fourthLine = splittedInput[3];
        formatted_fourth_line = fourthLine.replace("and", " ");
        document.getElementById("fourth_product").innerHTML= formatted_fourth_line;
        var fourthPrice = product_price_el[3];
        document.getElementById("fourth_price").innerHTML= fourthPrice;
        var fourthimg = product_img_el[3];
        document.getElementById("fourth_img").src= fourthimg;
        if (splittedInput[4] != null){
    document.getElementById("fourth_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };

    //fifth product

    try{
        var fifthLine = splittedInput[4];
        formatted_fifth_line = fifthLine.replace("and", " ");
        document.getElementById("fifth_product").innerHTML= formatted_fifth_line;
        var fifthPrice = product_price_el[4];
        document.getElementById("fifth_price").innerHTML= fifthPrice;
        var fifthimg = product_img_el[4];
        document.getElementById("fifth_img").src= fifthimg;
        if (splittedInput[5] != null){
    document.getElementById("fifth_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };



    //sixth product

    try{
        var sixthLine = splittedInput[5];
        formatted_sixth_line = sixthLine.replace("and", " ");
        document.getElementById("sixth_product").innerHTML= formatted_sixth_line;
        var sixthPrice = product_price_el[5];
        document.getElementById("sixth_price").innerHTML= sixthPrice;
        var sixthimg = product_img_el[5];
        document.getElementById("sixth_img").src= sixthimg;
        if (splittedInput[6] != null){
    document.getElementById("sixth_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };


    //seventh product

    try{
        var seventhLine = splittedInput[6];
        formatted_seventh_line = seventhLine.replace("and", " ");
        document.getElementById("seventh_product").innerHTML= formatted_seventh_line;
        var seventhPrice = product_price_el[6];
        document.getElementById("seventh_price").innerHTML= seventhPrice;
        var seventhimg = product_img_el[6];
        document.getElementById("seventh_img").src= seventhimg;
        if (splittedInput[7] != null){
    document.getElementById("seventh_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };

    //eighth product

    try{
        var eighthLine = splittedInput[7];
        formatted_eighth_line = eighthLine.replace("and", " ");
        document.getElementById("eighth_product").innerHTML= formatted_eighth_line;
        var eighthPrice = product_price_el[7];
        document.getElementById("eighth_price").innerHTML= eighthPrice;
        var eighthimg = product_img_el[7];
        document.getElementById("eighth_img").src= eighthimg;
        if (splittedInput[8] != null){
    document.getElementById("eighth_div").style.display="block";
};
    }
    catch(err){
        console.log(err.message)
    };




     // getting  gadget's product from local variable
     gadget_name = localStorage.getItem("gadget-name");
     gadget_price = localStorage.getItem("gadget-price");
     gadget_img = localStorage.getItem("gadget-img");
     try{
    var gadget_input = gadget_name.split('\n');
     var gadget_price_el = gadget_price.split('\n');
     var gadget_img_el = gadget_img.split('\n');
     
     }
     catch(err){
        console.log("No item chosen from gadget")
     }
 
     //first gadget
     try{
         var ninethLine = gadget_input[0];

         document.getElementById("nineth_product").innerHTML= ninethLine;
         var ninethPrice = gadget_price_el[0];
         document.getElementById("nineth_price").innerHTML= ninethPrice;
         var ninethimg = gadget_img_el[0];
         document.getElementById("nineth_img").src= ninethimg;
         if (gadget_input[1] != null){
     document.getElementById("nineth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
 
     //second gadget
     
     try{
         var tenthLine = gadget_input[1];
         formatted_tenth_line = tenthLine.replace("and", " ");
         document.getElementById("tenth_product").innerHTML= formatted_tenth_line;
         var tenthPrice = gadget_price_el[1];
         document.getElementById("tenth_price").innerHTML= tenthPrice;
         var tenthimg = gadget_img_el[1];
         document.getElementById("tenth_img").src= tenthimg;
         if (gadget_input[2] != null){
     document.getElementById("tenth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
 
     //third gadget
 
     try{
         var eleventhLine = gadget_input[2];
         formatted_eleventh_line = eleventhLine.replace("and", " ");
         document.getElementById("eleventh_product").innerHTML= formatted_eleventh_line;
         var eleventhPrice = gadget_price_el[2];
         document.getElementById("eleventh_price").innerHTML= eleventhPrice;
         var eleventhimg = gadget_img_el[2];
         document.getElementById("eleventh_img").src= eleventhimg;
         if (gadget_input[3] != null){
     document.getElementById("eleventh_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
     //fourth gadget
     try{
         var twelvethLine = gadget_input[3];
         formatted_twelveth_line = twelvethLine.replace("and", " ");
         document.getElementById("twelveth_product").innerHTML= formatted_twelveth_line;
         var twelvethPrice = gadget_price_el[3];
         document.getElementById("twelveth_price").innerHTML= twelvethPrice;
         var twelvethimg = gadget_img_el[3];
         document.getElementById("twelveth_img").src= twelvethimg;
         if (gadget_input[4] != null){
     document.getElementById("twelveth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
// getting female product


     female_name = localStorage.getItem("female-name");
     female_price = localStorage.getItem("female-price");
     female_img = localStorage.getItem("female-img");
     try{
    female_input = female_name.split('\n');
     var female_price_el = female_price.split('\n');
     var female_img_el = female_img.split('\n');
     
     }
     catch(err){
        console.log("No item chosen from female")
     }
 
     //first female
     try{
         var thirteenthLine = female_input[0];

         document.getElementById("thirteenth_product").innerHTML= thirteenthLine;
         var thirteenthPrice = female_price_el[0];
         document.getElementById("thirteenth_price").innerHTML= thirteenthPrice;
         var thirteenthimg = female_img_el[0];
         document.getElementById("thirteenth_img").src= thirteenthimg;
         if (female_input[1] != null){
     document.getElementById("thirteenth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
 
     //second female
     
     try{
         var fourteenthLine = female_input[1];
         formatted_fourteenth_line = fourteenthLine.replace("and", " ");
         document.getElementById("fourteenth_product").innerHTML= formatted_fourteenth_line;
         var fourteenthPrice = female_price_el[1];
         document.getElementById("fourteenth_price").innerHTML= fourteenthPrice;
         var fourteenthimg = female_img_el[1];
         document.getElementById("fourteenth_img").src= fourteenthimg;
         if (female_input[2] != null){
     document.getElementById("fourteenth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
 
     //third female
 
     try{
         var fifteenthLine = female_input[2];
         formatted_fifteenth_line = fifteenthLine.replace("and", " ");
         document.getElementById("fifteenth_product").innerHTML= formatted_fifteenth_line;
         var fifteenthPrice = female_price_el[2];
         document.getElementById("fifteenth_price").innerHTML= fifteenthPrice;
         var fifteenthimg = female_img_el[2];
         document.getElementById("fifteenth_img").src= fifteenthimg;
         if (female_input[3] != null){
     document.getElementById("fifteenth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
     //fourth female
     try{
         var sixteenthLine = female_input[3];
         formatted_sixteenth_line = sixteenthLine.replace("and", " ");
         document.getElementById("sixteenth_product").innerHTML= formatted_sixteenth_line;
         var sixteenthPrice = female_price_el[3];
         document.getElementById("sixteenth_price").innerHTML= sixteenthPrice;
         var sixteenthimg = female_img_el[3];
         document.getElementById("sixteenth_img").src= sixteenthimg;
         if (female_input[4] != null){
     document.getElementById("sixteenth_div").style.display="block";
 };
     }
     catch(err){
         console.log(err.message)
     };
 
     
// getting game product


game_name = localStorage.getItem("game-name");
game_price = localStorage.getItem("game-price");
game_img = localStorage.getItem("game-img");
try{
game_input = game_name.split('\n');
var game_price_el = game_price.split('\n');
var game_img_el = game_img.split('\n');

}
catch(err){
   console.log("No item chosen from game")
}

//first game
try{
    var seventeenthLine = game_input[0];

    document.getElementById("seventeenth_product").innerHTML= seventeenthLine;
    var seventeenthPrice = game_price_el[0];
    document.getElementById("seventeenth_price").innerHTML= seventeenthPrice;
    var seventeenthimg = game_img_el[0];
    document.getElementById("seventeenth_img").src= seventeenthimg;
    if (game_input[1] != null){
document.getElementById("seventeenth_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};


//second game

try{
    var eighteenthLine = game_input[1];
    formatted_eighteenth_line = eighteenthLine.replace("and", " ");
    document.getElementById("eighteenth_product").innerHTML= formatted_eighteenth_line;
    var eighteenthPrice = game_price_el[1];
    document.getElementById("eighteenth_price").innerHTML= eighteenthPrice;
    var eighteenthimg = game_img_el[1];
    document.getElementById("eighteenth_img").src= eighteenthimg;
    if (game_input[2] != null){
document.getElementById("eighteenth_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};


//third game

try{
    var nineteenthLine = game_input[2];
    formatted_nineteenth_line = nineteenthLine.replace("and", " ");
    document.getElementById("nineteenth_product").innerHTML= formatted_nineteenth_line;
    var nineteenthPrice = game_price_el[2];
    document.getElementById("nineteenth_price").innerHTML= nineteenthPrice;
    var nineteenthimg = game_img_el[2];
    document.getElementById("nineteenth_img").src= nineteenthimg;
    if (game_input[3] != null){
document.getElementById("nineteenth_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};

//fourth game
try{
    var twentythLine = game_input[3];
    formatted_twentyth_line = twentythLine.replace("and", " ");
    document.getElementById("twentyth_product").innerHTML= formatted_twentyth_line;
    var twentythPrice = game_price_el[3];
    document.getElementById("twentyth_price").innerHTML= twentythPrice;
    var twentythimg = game_img_el[3];
    document.getElementById("twentyth_img").src= twentythimg;
    if (game_input[4] != null){
document.getElementById("twentyth_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};

// getting men product


men_name = localStorage.getItem("men-name");
men_price = localStorage.getItem("men-price");
men_img = localStorage.getItem("men-img");
try{
 men_input = men_name.split('\n');
var men_price_el = men_price.split('\n');
var men_img_el = men_img.split('\n');

}
catch(err){
   console.log("No item chosen from men")
}

//first men
try{
    var twentyfirstLine = men_input[0];

    document.getElementById("twentyfirst_product").innerHTML= twentyfirstLine;
    var twentyfirstPrice = men_price_el[0];
    document.getElementById("twentyfirst_price").innerHTML= twentyfirstPrice;
    var twentyfirstimg = men_img_el[0];
    document.getElementById("twentyfirst_img").src= twentyfirstimg;
    if (men_input[1] != null){
document.getElementById("twentyfirst_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};


//second men

try{
    var twentysecondLine = men_input[1];
    formatted_twentysecond_line = twentysecondLine.replace("and", " ");
    document.getElementById("twentysecond_product").innerHTML= formatted_twentysecond_line;
    var twentysecondPrice = men_price_el[1];
    document.getElementById("twentysecond_price").innerHTML= twentysecondPrice;
    var twentysecondimg = men_img_el[1];
    document.getElementById("twentysecond_img").src= twentysecondimg;
    if (men_input[2] != null){
document.getElementById("twentysecond_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};


//third men

try{
    var twentythirdLine = men_input[2];
    formatted_twentythird_line = twentythirdLine.replace("and", " ");
    document.getElementById("twentythird_product").innerHTML= formatted_twentythird_line;
    var twentythirdPrice = men_price_el[2];
    document.getElementById("twentythird_price").innerHTML= twentythirdPrice;
    var twentythirdimg = men_img_el[2];
    document.getElementById("twentythird_img").src= twentythirdimg;
    if (men_input[3] != null){
document.getElementById("twentythird_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};

//fourth men
try{
    var twentyfourthLine = men_input[3];
    formatted_twentyfourth_line = twentyfourthLine.replace("and", " ");
    document.getElementById("twentyfourth_product").innerHTML= formatted_twentyfourth_line;
    var twentyfourthPrice = men_price_el[3];
    document.getElementById("twentyfourth_price").innerHTML= twentyfourthPrice;
    var twentyfourthimg = men_img_el[3];
    document.getElementById("twentyfourth_img").src= twentyfourthimg;
    if (men_input[4] != null){
document.getElementById("twentyfourth_div").style.display="block";
};
}
catch(err){
    console.log(err.message)
};




// number of products
try{
    
if (splittedInput == null){
    splittedInput.length = 0
};
if (gadget_Input == null){
    gadget_Input.length = 0
};
if (female_Input == null){
    female_Input.length = 0
};
if (game_Input == null){
    game_Input.length = 0
};
if (men_Input == null){
    men_Input.length = 0
};
}
catch(err){
    console.log(err.message)
}








  function reset_order()
  {
    localStorage.removeItem("product-name");
  localStorage.removeItem("product-price");
  localStorage.removeItem("product-img");
    localStorage.removeItem("gadget-name");
  localStorage.removeItem("gadget-price");
  localStorage.removeItem("gadget-img");
    localStorage.removeItem("female-name");
  localStorage.removeItem("female-price");
  localStorage.removeItem("female-img");
    localStorage.removeItem("game-name");
  localStorage.removeItem("game-price");
  localStorage.removeItem("game-img");
    localStorage.removeItem("men-name");
  localStorage.removeItem("men-price");
  localStorage.removeItem("men-img");
  localStorage.removeItem("price");
  localStorage.removeItem("item");
  localStorage.removeItem("img");
  
  
  }

   



   
    lala = document.getElementsByClassName("sss");
    kl = 0;
    for(let i = 0 ; i < lala.length;i++){
        
        kl+= +lala[i].innerText;
        console.log("one lap complete")
        console.log(kl)
        }
        document.getElementById("tot").innerHTML = kl
    






//send the data
function caller(){
  
    index_product = localStorage.getItem("product-name");
    gadget_product = localStorage.getItem("gadget-name");
    games_product = localStorage.getItem("game-name");
    men_product = localStorage.getItem("men-name");
    female_product = localStorage.getItem("female-name");
    num = 2348088981691;
    
       
  customer = window.prompt("Please Enter your name");
  if (customer == null){
      return alert("Please enter your name to proceed");
      document.getElementById("check").href="checkout.html"
  }
 
      
  
  $("#check").click(function(){
   $("#index_cart").val(`${index_product}`); 
   $("#gadget_product_cart").val(`${gadget_product}`);
   $("#men_product_cart").val(`${men_product}`);
   $("#female_product_cart").val(`${female_product}`);
   $("#games_product_cart").val(`${games_product}`);
   $("#name").val(`${customer}`); 
  });

  if (index_product == null){
    index_product = " "
  };
  if (gadget_product == null){
    gadget_product = " ";
  };
  if (games_product == null){
    games_product = " ";
  };
  if (men_product == null){
    men_product = " ";
  };
  if (female_product == null){
    female_product = " ";
  };
 
  if(index_product === " " && gadget_product === " " && men_product === " " && female_product === " " && games_product === " "){
    return alert("Please select some good to checkout")
  }
  
  else if (index_product || gadget_product || men_product || female_product || games_product ){
    document.getElementById("form").action = "mailto:JetroSupermarket@gmail.com";
  }


  
  
  
  //var win = window.open(`https://wa.me/${num}?text=Hi%20I%20am%20${customer}%20I%20Want%20the%20${index_product}%20and${gadget_product}`, '_blank');
    console.log(`${index_product}`)
    localStorage.removeItem("product-name");
    localStorage.removeItem("product-price");
    localStorage.removeItem("product-img");
      localStorage.removeItem("gadget-name");
    localStorage.removeItem("gadget-price");
    localStorage.removeItem("gadget-img");
      localStorage.removeItem("female-name");
    localStorage.removeItem("female-price");
    localStorage.removeItem("female-img");
      localStorage.removeItem("game-name");
    localStorage.removeItem("game-price");
    localStorage.removeItem("game-img");
      localStorage.removeItem("men-name");
    localStorage.removeItem("men-price");
    localStorage.removeItem("men-img");
    localStorage.removeItem("price");
    localStorage.removeItem("item");
    localStorage.removeItem("img");
    document.getElementById("check").style.display="none"
     }
  
