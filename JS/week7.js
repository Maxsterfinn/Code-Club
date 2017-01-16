function moreDolphins() {
    var text = document.createElement('p');
    text.textContent = 'Some stuff about dolphins?';
    document.body.appendChild(text);
}
value = 0;
function button1() {
    value++;
    var getFlashingButton = document.getElementById("changer");
        description = document.createElement("p");
        picture = document.createElement("img");
        firstLine = document.getElementById("line1")
    switch (value) {
        case 1:
            document.body.style.backgroundColor = "beige";
            description.textContent = 'Notice how I can do things like change the background color without editing the html file?';
            firstLine.parentNode.insertBefore(description, firstLine.nextSibling);
            break;
        case 2:
            picture.setAttribute("src", "https://media1.giphy.com/media/SRVxosCHmh7J6/200_s.gif")
            description.textContent = 'How about pictures?';
            firstLine.parentNode.insertBefore(description, description.nextSibling);
            firstLine.parentNode.insertBefore(picture, description.nextSibling);
            break;
        case 3:
            description.textContent = 'So this means that we can add modified the HTMLgithub document with JavaScript.';
            firstLine.parentNode.insertBefore(description, description.nextSibling);
    }
}
function mathQuestion() {
    var answer = document.forms["answerForm"]["answer"].value;
    if (answer == 4) {
        alert("Congratulations! You answered correctly!");
    } else {
        alert("Sorry, you answered incorrectly. :(");
    }
}
/*
function createTicTacToe() {
    "use strict";
    var board = document.createElement("div");
        b1 = document.createElement("div"),
        b2 = document.createElement("div"),
        b3 = document.createElement("div"),
        b4 = document.createElement("div"),
        b5 = document.createElement("div"),
        b6 = document.createElement("div"),
        b7 = document.createElement("div"),
        b8 = document.createElement("div"),
        b9 = document.createElement("div");
    board.appendChild(document.createTextNode("something"));
    board.style.width = "300px";
    board.style.height = "300px";
    board.style.backgroundColor = "#DDDDDD";
    document.getElementsByTagName("article").appendChild(board);
}
function tictactoe() {
    "use strict";
    var X = 'X',
        O = 'O',
        None = ' ';
}*/