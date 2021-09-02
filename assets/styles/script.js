function ubahimage() {
            var image = document.getElementById('myImage');
            if (image.src.match("assets/images/minion5.png")) 
                { image.src = "assets/images/minion7.png" ;  
            return;
            } 
            if (image.src.match("assets/images/minion7.png")) 
                { image.src = "assets/images/minion9.png" ; 
            return;
            }
            if (image.src.match("assets/images/minion9.png")) 
                { image.src = "assets/images/minion5.png" ; 
            return;
            }
            }


var a=-100;
  setInterval(function(){
   if (a!=0) {
    slide = document.getElementById('slide');
    slide.style="margin-left:"+a+"%;transition: 1s ease-in;";
    if (a== -300) {
     a=0;
    }else{
     a=a+-100;
    }
    return a;

   }else{
    slide = document.getElementById('slide');
    slide.style="margin-left:"+a+"%;";
    if (a== -300) {
     a=0;
    }else{
     a=a+-100;
    }
    return a;
   }

  }, 2000);