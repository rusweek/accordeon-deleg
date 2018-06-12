window.addEventListener('load', function(e){
    let wrapper = document.querySelector('.wrapper');
    
    let active = document.getElementsByClassName('activ');
    let title = document.getElementsByClassName('title');
    
        

     wrapper.addEventListener('click', function(e){
         console.log(active[0]);
         if (active.length > 0 && active[0] !== e.target.nextElementSibling){
             active[0].classList.remove('activ');
         };
         
         console.log(e.target.nextElementSibling);
         
          
         let act = e.target;
         act.nextElementSibling.classList.toggle('activ');
     });
        
   
});