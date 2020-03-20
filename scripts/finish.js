///loseorwin

function victory(){
    stopTimer();
    var totalTime = r-1;
    alert('Gratulacje, wygrana w '+totalTime+' sekund!' );

    endOfTheGame = true;

}

function endGameDefeat(locationOfClick){

   $('.theSun').html('<img src="img/sunU.png" class="sunIMG" onclick=selectedMap();>')
   var d= $("a[onclick]").length;   //returns number of elements unchecked 

   stopTimer();
   endOfTheGame = true;

    for (let h=1; h<sizePlusOne; h++){
        if(h==locationOfClick){

            $('#'+locationOfClick).html('<img src="img/bombDefeat.png">')
            //clicked bomb marked to distract it

        }

        else{
            if (locatedBombs.includes(h)){
                $('#'+h).html('<img src="img/bomb.png">')
            }
            else{
                $('#'+h).html('<img src="img/'+otherFields[h]+'.png">')
            }
            //showing all fields
        }
    }
}
