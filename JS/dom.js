// let btn =document.createElement("button");
// btn.innerText="lets click";
// console.log(btn);

// let div=document.querySelector("div")
// div.append(btn)
// div.prepend(btn)
// div.before(btn);
// div.after(btn);
// btn.remove()

let btn = document.querySelector("#btn2")
let body = document.querySelector("body");
let currMode="light";

btn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.style.backgroundColor="black";
    }else{
        currMode = "light";
        body.style.backgroundColor="white";
    }
    console.log(currMode);
})