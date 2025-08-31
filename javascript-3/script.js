const rating = document.getElementById('Rating');
const  Display = document.getElementById('Display');

rating.addEventListener('click' , function(){
    
     let star = 0;;
     for(let i = 0 ; i <=5 ; i++){
          star+=i;
     }
    Display.innerText = star;

})