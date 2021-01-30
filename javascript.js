let buttonCreate = document.createElement("button");
let containerCreate = document.createElement("div");
let text = document.createTextNode("Add Square")
let body = document.getElementsByTagName("body")[0];
let clickCount = 0;
let colors = ["yellow", "orange", "blue", "red", "green", "purple"];

window.addEventListener("DOMContentLoaded", function () {
    buttonCreate.appendChild(text);
    body.appendChild(buttonCreate);
    body.appendChild(containerCreate);
    containerCreate.setAttribute("class", "container");


    buttonCreate.addEventListener("click", function () {
        clickCount += 1;
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "black-sq");
        newDiv.setAttribute("id", clickCount);
        newDiv.addEventListener("click", randomColor);
        newDiv.addEventListener("dblclick", deleteSibling);
        newDiv.addEventListener("mouseover", mouseOverFunction);

        containerCreate.appendChild(newDiv);
    }

    );

    function randomColor() {
        let currentDiv = event.target;
        let currentDivID = currentDiv.getAttribute("id");
        currentDiv.addEventListener("click", function () {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            currentDiv.style.backgroundColor = randomColor;
        });

    }

    function deleteSibling() {
        let currentDiv = event.target;
        let currentDivID = currentDiv.getAttribute("id");
        let rightNeighbor = currentDiv.nextSibling;
        let leftNeighbor = currentDiv.previousSibling;
            if (currentDivID % 2 == 0) {
                if (rightNeighbor !== null) {
                    console.log(rightNeighbor);
                    rightNeighbor.remove();
                } else {
                    window.alert("Don't be a square. There's no square after there.");
                }
            } if (currentDivID % 2 != 0) {
                if (leftNeighbor !== null) {
                    leftNeighbor.remove();
                } else {
                    window.alert("That's odd. There's no square before there");
                }

            }
        }

    function mouseOverFunction() {
        let currentDiv = event.target;
        let currentDivID = currentDiv.getAttribute("id");
        currentDiv.innerHTML = currentDivID;
        currentDiv.addEventListener("mouseout", function (e2) {// program to check if
            currentDiv.innerHTML = ''
        })



    };

}
)