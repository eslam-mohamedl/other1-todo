

let myinput = document.getElementById("input");
let myplue = document.getElementById("plus");
let mytextContent = document.querySelector(".task-container .content-task");
let mytasks = document.querySelector(".task-count span");
let mycomplete = document.querySelector(".task-complate .count");
let visible = document.querySelector(".visiable-box");

window.onload = function(){

    
    myplue.onclick = function(){

        myinput.style.width = "100%";
        myinput.focus();
        
    if(myinput.value == ""){

        console.log("empley field");

    }
    
    else{
     
        //create element main span
    let myspan = document.createElement("span");

    //create element child  span delete
    let mydelete = document.createElement("span");

    // create text main span
    let text = document.createTextNode(myinput.value);

    // create text child span delete
    let deleteText = document.createTextNode("x");

    // add class to main span
    myspan.className = "tast-box";

    // add clas to child span delete
    mydelete.className = "delete";

    // add text to main span
    myspan.appendChild(text);

    // add textdelete to child span
    mydelete.appendChild(deleteText);

    // add child span to main span
    myspan.appendChild(mydelete);

    // add main span to content-task
    mytextContent.appendChild(myspan);
    visible.style.display = "block";

    // Empty The Input
    myinput.value = "";

   
    mydelete.addEventListener('click' , function (e) {

        if(e.target.className = "delete"){
           
         e.target.parentNode.remove()
    
        };
        
        
    });
    myspan.addEventListener('click' , function (e) {

        
        if(e.target.classList.contains('tast-box')){
           
         e.target.classList.toggle("finshed");  
         
         countainer();

         console.log(countainer());

    };
   
    });
    clac();


   
    }
    }
    myplue.ondblclick = function(){

        myinput.style.width = "0%";
    
    };
};


function clac(){

    mytasks.innerHTML = document.querySelectorAll(".content-task .tast-box").length;

    mycomplete.innerHTML = document.querySelectorAll(".content-task .finshed").length;

};


function countainer(){


    while(  mycomplete.innerHTML == 0){

        mycomplete.innerHTML++;
    }

}

setTimeout(countainer(),20);













