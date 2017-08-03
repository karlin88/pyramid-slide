var slider = document.getElementById("slidervalue").value;
document.getElementById("showslider").innerHTML = slider;
var char = document.getElementById("character").value;
printPyramid(slider,char);

function printPyramid(height,character) {

    // TODO
    // print that pyramid!
    var output = "";
    for (i = 1;i <= height; i++) {
        output = output + "\xa0".repeat(height-i);
        output = output + char.repeat(i+1);
        var para = document.createElement("p");
        var node = document.createTextNode(output)
        para.appendChild(node);
        document.getElementById("pyramid").appendChild(para);
        output = "";
    }
}