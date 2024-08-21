let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=input.value;

let delBtn=document.createElement("button");
 delBtn.innerText="delete";
 delBtn.classList.add("delete");
 ul.appendChild(item);
 item.appendChild(delBtn);

input.value="";
});
ul.addEventListener("click",function(event){
 if(event.target.nodeName=="BUTTON"){
  let par=event.target.parentElement;
  par.remove();
 }
})

