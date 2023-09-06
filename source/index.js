var buttoncolours=[ "red", "blue", "green", "yellow" ];
var  gamePattern=[];
var userClickedPattern=[];

var flag=false;

var lavel=0;

$(document).keypress(function(){
   if(flag!=true){
    $("#level-title").html("level - "+lavel);
       nextsequence();
       
       flag=true;
   }
  
});
$(document).click(function(){
    if(flag!=true){
        $("#level-title").html("level - "+lavel);
           nextsequence();
           
           flag=true;
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
      
        if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
           nextsequence();
        },1000);
        
      }
    
    }else{
        console.log("wrong");
         playSound("wrong");

         $("#level-title").text("Game Over, Press Any Key to Restart");
         $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);

        startOver();
    }
}


function nextsequence(){
    lavel++;
    $("#level-title").html("level - "+lavel);
 userClickedPattern=[]
var randomnumber=Math.floor(Math.random()*(3+1));
var  randomChosenColour=buttoncolours[randomnumber];

gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100); 
  
playSound(randomChosenColour);


}
 
   

   $(".btn").click(function(){
   var userChosenColour= $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
   
   });

   function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
   }

  function animatePress(currentColour){
    
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){$("#"+currentColour).removeClass("pressed")},100);


    }
    
   function startOver(){
    lavel=0;
    gamePattern=[];
    flag=false;
   }
