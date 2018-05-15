
// Blank Slate upon load, remove header/title
// window.onload = function(){
    // document.getElementById('patternTitle').style.visibility = "hidden";
// }


// Click Add Button To Add Pattern
// Upon successful 1st step add, show the patternTitle again #visible


//Click Row Counter Button To Count the Stitch for the Pattern Step
var rowCountNumber = 0;

var rowCountDisplay = function(){
    document.getElementById("rowCount").innerText = rowCountNumber;
    if(rowCountNumber === 0){
        document.getElementById("rowCount").style.color = "#ff3300";
    };
    if(rowCountNumber > 0){
        document.getElementById("rowCount").style.color = "black";
    };
};

window.addEventListener("load", rowCountDisplay);

document.getElementById("rowPlus").addEventListener("click", function(){
    rowCountNumber += 1;
    rowCountDisplay();
});

document.getElementById("rowMinus").addEventListener("click", function(){
    if(rowCountNumber > 0){
        rowCountNumber -= 1;
        rowCountDisplay();
    };

    if(rowCountNumber ===0){
        document.getElementById("rowCount").style.color = "#ff3300";
    };

});

    //Reset Count
    document.getElementById("rowReset").addEventListener("click", function(){
        rowCountNumber = 0;
        rowCountDisplay();
    });


// Close Counter Button Upon CLick Event
var hideCounter = function(){
    document.getElementById("rowCounterCard").innerHTML = "";
};

document.getElementById("closeCount").addEventListener("click", hideCounter);

// Click Delete Step Button
var deleteStep = function(){
    document.getElementById("deleteButtonTest").innerHTML = "";

};

document.getElementById("deleteStepButton").addEventListener("click", deleteStep);


// Delete the Current Pattern
