let myque = document.querySelectorAll(".subcontainer .que");
console.log(myque);

myque.forEach(function(que){
    console.log(que);

    que.addEventListener("click",function(){
        console.log("clicked");

        let ans = this.nextElementSibling;
        console.log(ans);

        if(ans.style.display == "block")
        {
            ans.style.display = "none";
        }
        else{
            ans.style.display = "block"
        }
    })
})