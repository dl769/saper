let r=1;
var timeInverval = setInterval(function(){ 
        if(r<10){
            var s =0;
            var d =0;
            $('.timer').html('<img src="t'+s+'.png" class="tt"><img src="t'+d+'.png" class="tt"><img src="t'+r+'.png" class="tt">'); 
        }
        if(r<100 && r>9){ 
            var j = r%10;
            var d = (r-j)/10;
            var s = 0;
            $('.timer').html('<img src="t'+s+'.png" class="tt"><img src="t'+d+'.png" class="tt"><img src="t'+j+'.png" class="tt">'); 
        }
        if(r>99 && r<1000){
            var d = r%100;      
            var s = (r-d)/100;       
            var j = r%10;      
            d = (d-j)/10;

            $('.timer').html('<img src="t'+s+'.png" class="tt"><img src="t'+d+'.png" class="tt"><img src="t'+j+'.png" class="tt">'); 
        }

        r++;
    }, 1000); 

    function stopTimer(){
         clearInterval(timeInverval);
    }





