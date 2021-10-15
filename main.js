Webcam.set({
height: 300,
width: 350,
image_format: "png",
png_quality: 100
});

webcam= document.getElementById("camera");

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    })
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8vVnTXTOD/model.json",model_loaded);

function model_loaded(){
    console.log("model loaded");
}

prediction_one="";
prediction_two="";

function speak(){
var api= window.speechSynthesis;
speak_data="The first prediction is"+prediction_one;
speak_data2="And the second prediction is"+prediction_two;
converted_data= new SpeechSynthesisUtterance(speak_data+speak_data2);
api.speak(converted_data);
}

function predict_emoji(){
    img = document.getElementById("captured_image");
    classifier.classify(img, got_result);
}


function got_result(error, results){
if(error){
    console.error(error);
}else{
    console.log(results);


    prediction_one= results[0].label;
    prediction_two= results[1].label;

    speak();

    document.getElementById("result_emotion_name").innerHTML= results[0].label;
    document.getElementById("result_emotion_name2").innerHTML= results[1].label;


  if(results[0].label== "Sad"){
      document.getElementById("emoji_1").innerHTML= "&#128549";
  } 
  if(results[1].label== "Sad"){
    document.getElementById("emoji_2").innerHTML= "&#128549";
} 
if(results[0].label== "Relaxed"){
    document.getElementById("emoji_1").innerHTML= "&#128524;";
} 
if(results[1].label== "Relaxed"){
  document.getElementById("emoji_2").innerHTML= "&#128524;";
} 
if(results[0].label== "Wink"){
    document.getElementById("emoji_1").innerHTML= "&#128521;";
} 
if(results[1].label== "Wink"){
  document.getElementById("emoji_2").innerHTML= "&#128521;";
} 
if(results[0].label== "Shock"){
    document.getElementById("emoji_1").innerHTML= "&#128561;";
} 
if(results[1].label== "Shock"){
  document.getElementById("emoji_2").innerHTML= " &#128561;";
} 
if(results[0].label== "Stuck Out Tongue"){
    document.getElementById("emoji_1").innerHTML= "&#128539;";
} 
if(results[1].label== "Stuck Out Tongue"){
  document.getElementById("emoji_2").innerHTML= "&#128539;";
} 
if(results[0].label== "Smiley"){
    document.getElementById("emoji_1").innerHTML= "&#128512;";
} 
if(results[1].label== "Smiley"){
  document.getElementById("emoji_2").innerHTML= "&#128512;";
} 




}


}
