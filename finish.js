///loseorwin

function victory(){
    stopTimer();
    var totalTime = r-1;
    alert('Congratulations, you won in '+totalTime+' seconds!' );

    endOfTheGame = true;

}

function endGameDefeat(locationOfClick){

   $('.theSun').html('<img src="sunU.png" class="sunIMG" onclick=selectedMap();>')
   var d= $("a[onclick]").length;   //returns number of elements unchecked 
   console.log('el:',d);
   stopTimer();
   endOfTheGame = true;

    for (let h=1; h<sizePlusOne; h++){
        if(h==locationOfClick){

            $('#'+locationOfClick).html('<img src="bombDefeat.png">')
            //clicked bomb marked to distract it

        }

        else{
            if (locatedBombs.includes(h)){
                $('#'+h).html('<img src="bomb.png">')
            }
            else{
                $('#'+h).html('<img src="'+otherFields[h]+'.png">')
            }
            //showing all fields
        }
    }
}
