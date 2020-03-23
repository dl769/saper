var locatedBombs = [];              //stores bombs location to prevent planting two on the same field
var otherFields = [];               //stores location of nonBombFields
var locationOfEmptyFields = [];     //stores location of empty fields 
var clickedFields = [];
var size = 0;
var sizePlusOne = 0;
var pointsRequired = 0;
var flagsLeft =0;
var widthOfBoard= 0        
let endOfTheGame = false;
var flagsNeeded =0;

$(document).ready(function(){
    
    selectedMap();
    preloadsUnseen();
});


function countTips(){

    counterOfSingleField = 0;

    for (let i=1; i<sizePlusOne; i++){

        if (i%widthOfBoard == 1){//LEFT SIDE
            if (locatedBombs.includes(i-widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'-8');
            if (locatedBombs.includes(i-widthOfBoard+1)) counterOfSingleField++; console.log(i, counterOfSingleField,'-7');
            if (locatedBombs.includes(i+1))              counterOfSingleField++; console.log(i, counterOfSingleField,'1');
            if (locatedBombs.includes(i+widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'8');
            if (locatedBombs.includes(i+widthOfBoard+1)) counterOfSingleField++; console.log(i, counterOfSingleField,'9');
        }
        if (i%widthOfBoard == 0){//RIGHT SIDE
            if (locatedBombs.includes(i-widthOfBoard-1)) counterOfSingleField++; console.log(i, counterOfSingleField,'-9');
            if (locatedBombs.includes(i-widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'-8');
            if (locatedBombs.includes(i-1))               counterOfSingleField++; console.log(i, counterOfSingleField,'-1');
            if (locatedBombs.includes(i+widthOfBoard-1)) counterOfSingleField++; console.log(i, counterOfSingleField,'7');
            if (locatedBombs.includes(i+widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'8');
        }
        if (i%widthOfBoard !=0 && i%widthOfBoard != 1){//REST
            if (locatedBombs.includes(i-widthOfBoard-1)) counterOfSingleField++; console.log(i, counterOfSingleField,'-9');
            if (locatedBombs.includes(i-widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'-8');
            if (locatedBombs.includes(i-widthOfBoard+1)) counterOfSingleField++; console.log(i, counterOfSingleField,'-7');
            if (locatedBombs.includes(i-1))              counterOfSingleField++; console.log(i, counterOfSingleField,'-1');
            if (locatedBombs.includes(i+1))              counterOfSingleField++; console.log(i, counterOfSingleField,'1');
            if (locatedBombs.includes(i+widthOfBoard-1)) counterOfSingleField++; console.log(i, counterOfSingleField,'7');
            if (locatedBombs.includes(i+widthOfBoard))   counterOfSingleField++; console.log(i, counterOfSingleField,'8');
            if (locatedBombs.includes(i+widthOfBoard+1)) counterOfSingleField++; console.log(i, counterOfSingleField,'9');
        }

        otherFields.push(counterOfSingleField);
        counterOfSingleField=0;
    }
    
}


function unHide(no){

    if(otherFields[no]==0){

    var no1=no-widthOfBoard-1;
    var no2=no-widthOfBoard;
    var no3=no-widthOfBoard+1;
    var no4=no-1;
    var no5=no+1;
    var no6=no+widthOfBoard-1;
    var no7=no+widthOfBoard;
    var no8=no+widthOfBoard+1;


        if (no%widthOfBoard == 1){//LEFT SIDE  
            
            $('#'+no2).html('<img src="img/'+otherFields[no2]+'.png">'); $('#'+no2).attr('name','c'); $('#'+no2).removeAttr('alt')//-8 
            $('#'+no3).html('<img src="img/'+otherFields[no3]+'.png">'); $('#'+no3).attr('name','c'); $('#'+no3).removeAttr('alt')//-7
            $('#'+no5).html('<img src="img/'+otherFields[no5]+'.png">'); $('#'+no5).attr('name','c'); $('#'+no5).removeAttr('alt')//1
            $('#'+no7).html('<img src="img/'+otherFields[no7]+'.png">'); $('#'+no7).attr('name','c'); $('#'+no7).removeAttr('alt')//8
            $('#'+no8).html('<img src="img/'+otherFields[no8]+'.png">'); $('#'+no8).attr('name','c'); $('#'+no8).removeAttr('alt')//9
        }
        
        if (no%widthOfBoard == 0)//RIGHT side
        {
            $('#'+no1).html('<img src="img/'+otherFields[no1]+'.png">'); $('#'+no1).attr('name','c'); $('#'+no1).removeAttr('alt')//-9
            $('#'+no2).html('<img src="img/'+otherFields[no2]+'.png">'); $('#'+no2).attr('name','c'); $('#'+no2).removeAttr('alt')//-8
            $('#'+no4).html('<img src="img/'+otherFields[no4]+'.png">'); $('#'+no4).attr('name','c'); $('#'+no4).removeAttr('alt')//-1
            $('#'+no6).html('<img src="img/'+otherFields[no6]+'.png">'); $('#'+no6).attr('name','c'); $('#'+no6).removeAttr('alt')//+7
            $('#'+no7).html('<img src="img/'+otherFields[no7]+'.png">'); $('#'+no7).attr('name','c'); $('#'+no7).removeAttr('alt')//+8
        }
        if(no%widthOfBoard !=0 && no%widthOfBoard!=1){
        $('#'+no1).html('<img src="img/'+otherFields[no1]+'.png">'); $('#'+no1).attr('name','c'); $('#'+no1).removeAttr('alt')
        $('#'+no2).html('<img src="img/'+otherFields[no2]+'.png">'); $('#'+no2).attr('name','c'); $('#'+no2).removeAttr('alt')
        $('#'+no3).html('<img src="img/'+otherFields[no3]+'.png">'); $('#'+no3).attr('name','c'); $('#'+no3).removeAttr('alt')
        $('#'+no4).html('<img src="img/'+otherFields[no4]+'.png">'); $('#'+no4).attr('name','c'); $('#'+no4).removeAttr('alt')
        $('#'+no5).html('<img src="img/'+otherFields[no5]+'.png">'); $('#'+no5).attr('name','c'); $('#'+no5).removeAttr('alt')
        $('#'+no6).html('<img src="img/'+otherFields[no6]+'.png">'); $('#'+no6).attr('name','c'); $('#'+no6).removeAttr('alt')
        $('#'+no7).html('<img src="img/'+otherFields[no7]+'.png">'); $('#'+no7).attr('name','c'); $('#'+no7).removeAttr('alt')
        $('#'+no8).html('<img src="img/'+otherFields[no8]+'.png">'); $('#'+no8).attr('name','c'); $('#'+no8).removeAttr('alt')
        }
    }
    //atrr name => we know that this was checked, attr alt => field's flag removed
    updateFlags();
}


function showFreeSpaces ()
{
    
    for (let k=1; k<sizePlusOne; k++){
        
        let s = $('#'+k).html()
        
         if(s == '<img src="img/0.png">'){
            $('#'+k).click();
            $('#'+k).removeAttr('onclick')
            clickedFields.push(k);
        }
    }
}



function checkThisField(no){

    var isFlagHere = document.getElementById(no).hasAttribute("alt");

    if(!endOfTheGame && !isFlagHere){
        clickedFields.push(no);

        if (locatedBombs.includes(no)){     
            $('#'+no).html('<img src="img/bombDefeat.png">')
            alert ('Bomb, you lose!');
            endGameDefeat(no);
        }
        else
        {

            $('#'+no).removeAttr('alt');    //removes flag if necessary
            updateFlags();

            $('#'+no).html('<img src="img/'+otherFields[no]+'.png">')
            $('#'+no).removeAttr('onclick')
            $('#'+no).attr('name','c')

                if(otherFields[no]==0){
                    unHide(no);
                    showFreeSpaces();
                    
                }
        }

        

        var elementsClicked = $("a[name]").length;   //returns number of elements unchecked 

        if(elementsClicked>=pointsRequired){
            victory();
        }
    }


}