const wrapperEl = document.querySelectorAll('.wrapper');

var divs = document.querySelectorAll(".wrapper").length;
var x = Math.floor(divs);
addIdToWrapper();

function addIdToWrapper(){  
  for (let i = 0; x ; i++ ){
    if (i < x ) {
      wrapperEl[i].setAttribute("id", i+1);
      

    } else{
      break;  
    };
  };
};

const popupContainerEl =document.querySelector(".popup-container");
const popupBtnEL =document.querySelector(".popup-btn");
const slideContainerEL =document.querySelector(".slide-container");
const infoBtnEl = document.querySelector(".info-btn");
const tipsBtnEL = document.querySelector(".tips-btn");
const aboutUsContainerEl = document.querySelector(".aboutUs-container");
const tipsContainerEl = document.querySelector(".tips-container");
const closeAboutUSEl = document.querySelector(".close-aboutUS");
const closeTipsEl = document.querySelector(".close-tips");
const surfaceEl = document.querySelector(".surface");

popupBtnEL.addEventListener("click", ()=>{
         
          popupContainerEl.classList.add("active"); // hide div with effect
          slideContainerEL.classList.remove("active");
          surfaceEl.classList.remove("up");
          setTimeout(function (){
            popupContainerEl.remove() ;
            
          },700);
          
          
});

infoBtnEl.addEventListener("click", ()=>{
             aboutUsContainerEl.classList.remove("active");
} );

tipsBtnEL.addEventListener("click", ()=>{
          tipsContainerEl.classList.remove("active");
} );


closeAboutUSEl.addEventListener("click", ()=>{
          aboutUsContainerEl.classList.add("active");
});

closeTipsEl.addEventListener("click", ()=>{
          tipsContainerEl.classList.add("active");
}); 

    

var UpNoo = document.querySelectorAll(".wrapper");

  const CountUp = UpNoo.length;
  console.log(UpNoo);
  UpNoo[0].classList.add('up')
  for( let i =1 ; i < CountUp; i ++ ){
    UpNoo[i].classList.remove('up');
  }
  console.log(UpNoo);



var checkboxes = document.getElementsByName("groupe");
const imageEl = document.querySelectorAll(".input-img");
for (var i=0; i< 4; i++){
  checkboxes[i].addEventListener("change", function(){
    if (this.checked){
      const checkboxClass = this.classList.value;
      
      
      
      
      for (var i =0 ;i <4 ;i++){
        if (imageEl[i].id === checkboxClass){
          imageEl[i].style.width = "65px" ;
          imageEl[i].style.height = "65px";
        };
        
       
      };
      
      console.log(checkboxClass, typeof(checkboxClass));
      

      for( var j=0; j<4; j++){
        if (checkboxes[j] != this){
          checkboxes[j].checked = false;
            imageEl[j].style.width = "55px";
            imageEl[j].style.height = "55px";
            

        };
      };
     
    }  else {
      console.log("none checked");
     
      
      for (var i =0 ;i <4 ;i++){
          imageEl[i].style.width = "55px" ;
          imageEl[i].style.height = "55px";

        
        };
       
      };
      
      addIdToWrapper();
      
      
      wrapperEl.classList.remove("up");
    
        
       
  });
 } ;  

 

checkboxes.forEach((checkboxe)=>{
  checkboxe.addEventListener("change",()=>{
      const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      var NewElement = document.getElementById(1);
      
        if  (selectedCheckboxes.length === 0){
          wrapperEl.forEach((wrapper)=>{
           
            wrapper.classList.remove("up");
            wrapper.removeAttribute('id');
            
            addIdToWrapper();
            
            NewElement.classList.add('up');
            y=1;
          

        });
        }
        
        
        
        
        else if (selectedCheckboxes.length ===1) {
          const selectedCheckboxeClass = selectedCheckboxes[0].classList[0];
          wrapperEl.forEach((wrapper)=>{
            if (wrapper.getAttribute('name') !== selectedCheckboxeClass){
              
              
              wrapper.removeAttribute('id');
              wrapper.classList.remove("up");
              y=1;
              
            } else{
              
              nameEl = 'div[name="' + selectedCheckboxeClass + '"]';

              const wrapperNew = document.querySelectorAll(nameEl);
                const count = wrapperNew.length;

                wrapperNew[0].classList.add('up');
              
                wrapper.removeAttribute('id');
               addIdToWrapperNew();
               y=1;

               
                    
               
              function addIdToWrapperNew(){  
                for (let i = 0; count ; i++ ){
                  if (i < count ) {
                    wrapperNew[i].setAttribute("id" , i+1)
                  } else{
                    break;  
                  };
                };
              };
              
             
            };
            
          });
          
        } 
      });
      
  });

 var y = 1;

let startX;
let startY;
let dist=0;

document.addEventListener("touchstart", function(e){
  startX = e.touches[0].pageX;
  startY = e.touches[0].pageY;
} );

document.addEventListener("touchmove", function(e){
  dist = e.touches[0].pageX- startX;
});


document.addEventListener("touchend", function(e){
  if (Math.abs(dist) > 50){
    if (dist > 0) {
      prevItem();
    } else{
      nextItem();
    };
  };

 startX = 0;
 startY = 0;
 dist = 0; 
});


document.addEventListener("click" , function(event){
  var xi = event.clientX;
  var yi = event.clientY;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var bottomHeight = windowHeight - ((windowWidth * 16/9)+30);
  if (document.querySelector(".popup-container")){
  console.log("wait");
  }else{
  if (xi< windowWidth/2 && yi < windowHeight - bottomHeight ){
    prevItem();
  }else if (xi>= windowWidth/2 && yi < windowHeight - bottomHeight){
    
    nextItem();
  };
};
}) ;



HighID();
function HighID(){
  let heighestID = 0;
  let wrapperNum = document.getElementsByClassName("wrapper");
for (let i = 0; i< wrapperNum.length; i++){
  
  let  idx = Math.floor(wrapperNum[i].id);
  if (idx > heighestID){
    heighestID = idx;
  }
} 
return heighestID;
};



function prevItem(){
  
  let heighestID=HighID();
  console.log("first y after change:",y );
  var element = document.getElementById(y);
  var UpNo = document.querySelectorAll(".up");
  const CountUp = UpNo.length;
  console.log(UpNo);
  for( let i =1 ; i < CountUp; i ++ ){
    UpNo[i].classList.remove('up');
  }
  console.log(UpNo);
      
  if(y > 1 && CountUp <2){
    
    element.classList.remove("up"); 
  
    y = y -1;
    var element = document.getElementById(y);
        element.classList.add("up"); 
  
  console.log("this is the first y:",y );
  }else if (y =  1){
      
     element.classList.remove("up"); 
     y = heighestID;
     var element = document.getElementById(y);
         element.classList.add("up"); 
     
  }else {
    console.log("y equal to zero");
  
  };
};

function nextItem(){
  let heighestID=HighID();  
  console.log( "second y after change:",y);
      var element = document.getElementById(y);
      var UpNo = document.querySelectorAll(".up");
  const CountUp = UpNo.length;

  for( let i =1 ; i < CountUp; i ++ ){
    UpNo[i].classList.remove('up');
  }
  console.log(UpNo);

  if (  y < heighestID && CountUp< 2){
       
        element.classList.remove("up"); 

        y = y +1;

      var element = document.getElementById(y);
    element.classList.add("up"); 
    console.log("this is the second y:",y);
  }else if(y = heighestID){
    
    element.classList.remove("up"); 
    y = 1;
    var element = document.getElementById(y);
        element.classList.add("up"); 
  }else {
    console.log("y equal to zero");
  
      
  };

};



































//var slideIndex = 1 ;
//showDivs(slideIndex);

//function plusDivs(n){
   // showDivs(slideIndex += n);
//}

//function showDivs(n){
  //  var i = 1;
    //var x = document.getElementsByClassName("mySliders");
    //if (n > x.length) {slideIndex = 1 }
    //if (n<1) {slideIndex = x.length}
    //for (i=0; i < x.length; i++){
    //    x[i].getElementsByClassName.display ="none"
    //}
    //x[slideIndex-1].getElementsByClassName.display = "block";
//}