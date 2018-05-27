
// Click Add Button To Add Pattern
    // Blank Slate upon load, header/title removed
    // Upon successful 1st step add, show the patternTitle again #visible
document.getElementById("addButton").addEventListener("click", function (){
    document.getElementById('patternTitle').innerHTML = '<h1 id="patternTitleText" class="stitchBorder center">My WIP Project</h1>';
});


//Open Counter
var toggleCounter = document.querySelector("#step1");
toggleCounter.addEventListener("click", function () {
    if (!document.querySelector("#step1").classList.contains("rowCountClose")) {
        document.querySelector("#rowCountAdd").innerHTML =
            '<div id="rowCounterCard">' +
            '<div class="counter w3-card rowCounter">' +
            '<button class="w3-button w3-circle w3-white w3-border w3-border-light-green w3-hover-light-green" id="rowMinus">' + '-' + '</button>' +
            '<p class="rowNumber" id="rowCount">' + '</p>' +
            '<button class="w3-button w3-circle w3-white w3-border w3-border-light-green w3-hover-light-green" id="rowPlus">' + '+' + '</button>' +
            '<p class="center"><button class="w3-text-red w3-small w3-btn w3-round w3-ripple w3-border w3-border-red"  id="rowReset">Reset</button>' + '</p>' +
            +'</div>' +
            '</div>';
        document.querySelector("#step1").innerHTML = 'Close Counter';
        document.querySelector("#step1").classList.add("rowCountClose");
    } else if (document.querySelector("#step1").classList.contains("rowCountClose")){

        document.querySelector("#rowCounterCard").innerHTML = '';
        document.querySelector("#step1").classList.remove("rowCountClose");
        document.querySelector("#step1").innerHTML = 'Row Counter';
    }
});


// Click Delete Step Button
var deleteStep = function () {
    document.getElementById("deleteButtonTest").innerHTML = "";
};

document.getElementById("deleteStepButton").addEventListener("click", deleteStep);


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

    if(rowCountNumber === 0){
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



// Delete the Current Pattern
