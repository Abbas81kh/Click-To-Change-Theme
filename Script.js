const boxes = document.querySelectorAll('.box');
const h1 = document.querySelector("h1");
const main_content = document.querySelector("#main-content");
const box =  document.querySelectorAll(".box");


boxes.forEach(box =>{
    box.addEventListener('click',function(){
        const color = window.getComputedStyle(box).backgroundColor;
        document.body.style.backgroundColor = color;

        if(box.style.backgroundColor == "black" ||
            box.style.backgroundColor == "rgb(0, 0, 0)") 
        {
            h1.style.color = "white";
            box.style.borderColor = "white"
            main_content.style.borderColor = "white"
        } else{
            h1.style.Color = "black"
            main_content.style.borderColor = "black"
            box.style.borderColor = "white"
        }
        
    })
});


 
let btn = document.querySelector("button");
btn.addEventListener('click',function(){
    location.reload()
})
