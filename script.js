window.onload=function() {
  var pos=0;
  var boxr=document.getElementById('boxr');
  var boxb=document.getElementById('boxb');
  var boxg=document.getElementById('boxg');
  var boxy=document.getElementById('boxy');  
  var t=setInterval(move, 10);
  var dir=0;
  var mult=1;
  var mult1=1;
  var count=1;
  /*var zer=1;*/
  
  var dx = Math.round(Math.random())
  var dy = Math.round(Math.random())
    
  function move() {
    if(pos>=150){
     dir=1;
         }
    else if (pos<=0){
      dir=0;
      count+=1;
    }
     if (dir==1) {
       pos-=1;
     }
    else{
      pos+=1; 
    }
      mult=count%2;
     
    /* if (count%3>0){mult1=1;}
     else{mult1=0;}
    if (count%6==0){mult1=1;
                   mult=1;}*/
    if (count%4==1){
    mult1=1;
    mult=0;
    } 
    else if (count%4==3){
    mult1=0;
    mult=1;
    }
    else {
    mult1=1;
    mult=1;
    }
    
      boxr.style.left=pos*mult+'px';
      boxr.style.top=(pos)*mult1+'px';  
    
      boxb.style.left=150-pos*mult1+'px';
      boxb.style.top=(pos)*mult+'px';   
    
      boxg.style.left=pos*mult1+'px';
      boxg.style.top=150-pos*mult+'px'; 
    
      boxy.style.left=150-pos*mult+'px';
      boxy.style.top=150-pos*mult1+'px';     
  }
  
}