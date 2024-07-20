var lengthButtons=document.querySelectorAll("button").length;

for (var a=0;a<lengthButtons;a++){
    document.querySelectorAll(".drum")[a].addEventListener("click", function(){
    // this.style.color="red"
    var buttonInnerHTML=this.innerHTML;

    sound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    
    }); 
}

function sound(key){
    switch (key) {
        case "w":
            var drum=new Audio('./sounds/crash.mp3');
            drum.play();
            
            break;
        case "a":
            var drum=new Audio('./sounds/kick-bass.mp3');
            drum.play();
            
            break;
        
        case "s":
            var drum=new Audio('./sounds/snare.mp3');
            drum.play();
                
            break;

        case "d":
            var drum=new Audio('./sounds/tom-1.mp3');
            drum.play();
                
            break;

        case "j":
            var drum=new Audio('./sounds/tom-2.mp3');
            drum.play();
                
            break;
        case "k":
            var drum=new Audio('./sounds/tom-3.mp3');
            drum.play();

            break;
            
        case "l":
            var drum=new Audio('./sounds/tom-4.mp3');
            drum.play();                    
                
            break;
    
        default:
            break;
    }
}

document.addEventListener("keydown",function(news){
    sound(news.key);

    buttonAnimation(news.key);
});

function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+currentKey);

    // activeButton.style.opacity=0.5;
    // // // activeButton.style.boxShadow= 0 3px 4px 0 #DBEDF3;
    // // activeButton.style=".pressed";
    // setTimeout(function (){
    
    //     activeButton.style.opacity=1;
    // },100);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed",200)
    });



}






