window.setTimeout (function() {
    
    var colors = generateRandomColors(6);

    var squares = document.querySelectorAll(".square");

    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");

    var h1 =  document.querySelector("h1");
    var resetButton = document.querySelector("#reset");
    var easyBtn = document.getElementById("easyBtn");
    var hardBtn = document.querySelector("#hardBtn");
    
    easyBtn.addEventListener("click", function() {
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
    });
    
    hardBtn.addEventListener("click", function() {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
    });
    

    resetButton.addEventListener("click", function() {
        // generate all new colors
        colors = generateRandomColors(6);

        //pick a new random color from array
        pickedColor = pickColor();

        // change colorDisplay to match picked color
        colorDisplay.textContent = pickedColor;

        //change colors of squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }
        h1.style.background = "#232323";
        messageDisplay.textContent = "";
        resetButton.textContent = "New Colors";
    });

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
              var clickedColor = this.style["background-color"]
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct !";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again";

            }
        });
    }

    function changeColors(color) {
        // loop thru all squares
        for (var i = 0; i < squares.length; i++) {
            //change the color to match given color
            squares[i].style.background = color;
        }
    }

    function pickColor() {
        //pick a random number
        var random = Math.floor(Math.random() * colors.length);
        return colors[random]
    }

    function generateRandomColors(num) {
        //make an array
        var arr = [];
        //repeat num times
      
        for (var i = 0; i < num; i++) {
          
          //get random color and push into arr
          arr.push(randomColor());

        }
        //return that array
        return arr;
    }

    function randomColor() {
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        
        //pick a "green" from 0 - 255
        var g = Math.floor(Math.random() * 256);

        //pick a "blue" from 0  to 255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

}, 500);



