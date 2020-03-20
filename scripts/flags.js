var flagsLeftD = 0;
var flagsLeftJ = 0;
var flagsLeftS = 0;
$(document).ready(function(){
    

    //RIGHTCLICKFLAG
    $(".f").mousedown(function(event){
        if(event.which == 3 && !endOfTheGame)
        {console.log('dfdfd')
            var id = this.id;
            let flagCapt = $('#'+id).html()
            
            if(!this.hasAttribute("name")){             //prevents putting flags on unhidden fields
                $('#'+id).html('<img src="img/flag.png">')
                $('#'+id).attr('alt','flagged')
                flagsLeft= flagsNeeded - $("a[alt]").length;
                if(flagsLeft>99){
                    $('.flagsNo').html('<img src="img/t1.png"  class="tt"><img src="img/t0.png"  class="tt"><img src="img/t0.png"  class="tt">')
                }
               if(flagsLeft>-1 && flagsLeft<100){
                    flagsLeftJ = flagsLeft%10 
                    flagsLeftD = (flagsLeft - flagsLeftJ)/10;
                    $('.flagsNo').html('<img src="img/t0.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
               }
                if(flagsLeft<0){
                    tempF = flagsLeft *(-1);
                    flagsLeftJ = tempF%10 
                    flagsLeftD = (tempF - flagsLeftJ)/10;
                    $('.flagsNo').html('<img src="img/minus.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
                }

            }
            if(flagCapt == '<img src="img/flag.png">'){     //letting uncheck flag
                $('#'+id).html('<img src="img/field.png">')
                $('#'+id).removeAttr('alt')
                flagsLeft= flagsNeeded - $("a[alt]").length;

                if(flagsLeft>99){
                    $('.flagsNo').html('<img src="img/t1.png"  class="tt"><img src="img/t0.png"  class="tt"><img src="img/t0.png"  class="tt">')
                }
                if(flagsLeft>-1 && flagsLeft<100){
                    flagsLeftJ = flagsLeft%10 
                    flagsLeftD = (flagsLeft - flagsLeftJ)/10;
                    $('.flagsNo').html('<img src="img/t0.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
                }
                if(flagsLeft<0){
                    tempF = flagsLeft *(-1);    //modulo for <0 is different
                    flagsLeftJ = tempF%10 
                    flagsLeftD = (tempF - flagsLeftJ)/10;
                    $('.flagsNo').html('<img src="img/minus.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
                }

             }
        }
    });
    //RIGHTCLICKFLAG
   
});

function updateFlags(){
    flagsLeft= flagsNeeded - $("a[alt]").length;

    if(flagsLeft>99){
        $('.flagsNo').html('<img src="img/t1.png"  class="tt"><img src="img/t0.png"  class="tt"><img src="img/t0.png"  class="tt">')
    }
    if(flagsLeft>-1 && flagsLeft<100){
        flagsLeftJ = flagsLeft%10 
        flagsLeftD = (flagsLeft - flagsLeftJ)/10;
        $('.flagsNo').html('<img src="img/t0.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
    }
    if(flagsLeft<0){
        tempF = flagsLeft *(-1);    //modulo for <0 is different
        flagsLeftJ = tempF%10 
        flagsLeftD = (tempF - flagsLeftJ)/10;
        $('.flagsNo').html('<img src="img/minus.png"  class="tt"><img src="img/t'+flagsLeftD+'.png"  class="tt"><img src="img/t'+flagsLeftJ+'.png"  class="tt">')
    }
}