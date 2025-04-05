let boxes = document.querySelectorAll('.box');
boxes.forEach(box =>{
    box.addEventListener('click',function(){
        const color = window.getComputedStyle(box).backgroundColor;
        document.body.style.backgroundColor = color;
    })
})
 
let btn = document.querySelector("button");
btn.addEventListener('click',function(){
    location.reload()
})
