
var daire = document.querySelector(".hoty");
var btnWidth = document.getElementById("start-btn");


btnWidth.addEventListener("click" , function(){

    // setTimeout(function(){

   
    // if(daire.style.transform == "scale(2.5)"){
    //     daire.style.transform = "scale(1)"
    // }else{
    //     daire.style.transform = "scale(2.5)"
    // }
    // } , 15)
    daire.style.width = "300px"
    daire.style.height = "300px" 
    daire.style.transition = "width 2s ,height 2s"
    // daire.style.width = "200px"
    // daire.style.height = "200px" 
    setTimeout(function(){
        daire.style.width = "100px";    
        daire.style.height = "100px" ;

    },1500)
    
    // btnWidth.addEventListener("click" , function(){

        // daire.style.width = "100px";    
        // daire.style.height = "100px" ;
    // })
})


