"use strict";
//Accessing Elements
const play_elem=document.querySelectorAll(".icons");
const player_display=document.querySelector(".disp-1");
const new_game_btn=document.querySelector("#ng");
const box1=play_elem[0].innerHTML;
const box2=play_elem[1].innerHTML;
const box3=play_elem[2].innerHTML;
const box4=play_elem[3].innerHTML;
const box5=play_elem[4].innerHTML;
const box6=play_elem[5].innerHTML;
const box7=play_elem[6].innerHTML;
const box8=play_elem[7].innerHTML;
const box9=play_elem[8].innerHTML;

let current_play;
let gamegrid;
let answer;
let win_var;

const winning_postions=[
    [0,1,2] , [3,4,5] , [6,7,8] , [0,4,8] , [2,4,6] , [0,3,6] , [1,4,7] , [2,5,8]
];

function init(){
    current_play="X";
    player_display.innerHTML="Player-" + current_play;
    gamegrid=["","","","","","","","" , ""];
    play_elem.forEach((elem)=>{
        elem.innerHTML="";
        elem.classList.remove("win");
    });

    play_elem.forEach((elem)=>{
        elem.classList.remove("no-use");
    });
    win_var=false;
};
init();


play_elem.forEach((box , index)=>{
    box.addEventListener("click" , ()=>{
        handleclick(index);
        console.log(index);
    });
});

function handleclick(index){
    if(gamegrid[index]===""){
        play_elem[index].innerHTML=current_play;
        gamegrid[index]=current_play;
        check();
        swapturn();
        player_display.innerHTML="Player-"+current_play;
        
        if(win_var){
            
            play_elem.forEach((elem)=>{
                elem.classList.add("no-use");
            });
            new_game_btn.classList.remove("inactive");
            alert("Winner is "+answer);
        }
    }

};
function swapturn(){
    if(current_play==="X"){
        current_play="O";
    }
    else {
        current_play="X";
    }
};
new_game_btn.addEventListener("click" , init);

function check(){

    winning_postions.forEach((pos)=>{
        if((gamegrid[pos[0]]!=="" || gamegrid[pos[1]]!=="" || gamegrid[pos[2]]!=="") && ((gamegrid[pos[0]]===gamegrid[pos[1]] && gamegrid[pos[1]]===gamegrid[pos[2]]))){
                if(gamegrid[pos[0]]=="X"){
                        answer="X";
                }
                else {
                    answer="O";
                }
                play_elem[pos[0]].classList.add("win");
                play_elem[pos[1]].classList.add("win");
                play_elem[pos[2]].classList.add("win");

                win_var=true;
        }
        

    }) 
};