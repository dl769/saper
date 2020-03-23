//game preparation

function preloadsUnseen(){
    $('.preloads').remove();
}

function starter (){
    erase();
    addIds();
    plantAllBombs(size);
    howManyPointsRequired();    //count points,width of board and flags required 

    otherFields.push(0);     //starts enumerating from 1;

    countTips();

}

function erase(){
    locatedBombs = [];              //stores bombs location to prevent planting two on the same field
    otherFields = [];               //stores location of nonBombFields
    locationOfEmptyFields = [];     //stores location of empty fields 
    clickedFields = [];
    pointsRequired = 0;
    flagsLeft =0;
    flagsNeeded =0;
    widthOfBoard= 0   

}
var urldiff=0;
function getDifficultyByURL(){

    var curr = window.location.href;
    urldiff = curr.slice(-1);   //last letter of url addres
}

function locationreload(){

    var selection = document.getElementById('difficulty').value;
    var url = window.location.href;   

/*adding href to difficulty*/

    if(urldiff != 'Y' && urldiff != 'I' && urldiff != 'x'){
        url = window.location.href;   
        url = url + "?" + selection;
    }
    else{
        if(urldiff=='Y') url = url.substring(0, url.length - 6);
        if(urldiff=='I') url = url.substring(0, url.length - 7);
        if(urldiff=='x') url = url.substring(0, url.length - 5);

        url = url + "?" + selection;
    }
    document.location.href = url;

}
function selectedMap(){

    //var selection = document.getElementById('difficulty').value
    //var selection = c;

    getDifficultyByURL()
    if(urldiff=='Y'){
        $("#currentDF").html("ŁATWY");
        appendEasy();
    }
    if(urldiff=='I'){
        $("#currentDF").html("ŚREDNI");
        appendMedium();
    }
    if(urldiff=='x'){
        $("#currentDF").html("TRUDNY");
        appendHard();
    }
    
}

function howManyPointsRequired(){
    if(size ==81){
        pointsRequired = 81-10;
        flagsNeeded = 10;
        widthOfBoard = 9;
    }
    if(size == 256){
        pointsRequired = 256-40;
        flagsNeeded = 40;
        widthOfBoard = 16;
    }
    if(size == 480){
        pointsRequired = 480-100;
        flagsNeeded = 100;
        widthOfBoard = 30;

    }
}

function addIds(){//adding individual id to each field
    for(let c=1; c<sizePlusOne; c++){

        $('#p').attr('onclick', 'checkThisField('+c+')');
        $('#p').attr('class', 'f');
        $('#p').attr('id', c);
    }
}


function plantAllBombs(size){
    if(size==81){
        for(let c=0; c<10; c++){
            plantBombs();
       }
    }
    if(size==256){
        for(let c=0; c<40; c++){
            plantBombs();
        }
    }
    if(size==480){
        for(let c=0; c<100; c++){
            plantBombs();
        }
    }
}


function plantBombs(){

    var b = Math.floor(Math.random() * size) + 1;

    if(locatedBombs.includes(b)){
        plantBombs();
    }
    locatedBombs.push(b);
}