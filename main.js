function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    cameraa = createCapture(VIDEO);
    cameraa.size(300, 300);
    cameraa.hide();
    posenettt = ml5.poseNet(cameraa, modelLoaded);
}
function savepic() {
    save("mypicture.png");
}
function draw() {
    image(cameraa, 0, 0, 300, 300);
}
function modelLoaded() {
    console.log("Pose net initialized sucessfully");
    posenettt.on("pose", getResults);
}
function getResults(results) {
    if (results.length > 0) {
        //console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX :", noseX);
        console.log("noseY :", noseY);
    }
}