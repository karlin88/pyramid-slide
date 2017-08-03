
function show_value2() {
// get Value of the slider and push value to UI
    var slider = document.getElementById("slider").value;
    document.getElementById("showslider").innerHTML = slider;
    slider = parseInt(slider);

// get value of the character
    var char = document.getElementById("character").value;

// clear div to prep for new pyramid and draw new pyramid
    document.getElementById("pyramid").innerHTML = "";
    printPyramid(slider,char);

    function printPyramid(height,char) {
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
}
