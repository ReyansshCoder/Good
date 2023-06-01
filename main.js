function setup(){
c=createCanvas(280, 280)
c.center()
background("white") 
c.mouseReleased(classifyCanvas)
LOL=window.speechSynthesis
mymodel=ml5.imageClassifier("DoodleNet")
}

function draw(){
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed){
line (pmouseX, pmouseY, mouseX, mouseY)
}}

function classifyCanvas(){
mymodel.classify(c,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)}
        else{
            console.log(results)
            document.getElementById("nm").innerHTML=results[0].label
            document.getElementById("cd").innerHTML=Math.round(results[0].confidence*100)+" %"
            sp=new SpeechSynthesisUtterance(results[0].label)
            LOL.speak(sp)
             }}
 
             function mitao(){
                background("white")
             }