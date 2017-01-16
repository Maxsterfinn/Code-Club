function changeBackground(){
    document.body.style.backgroundColor = "white";
}
function changeBody(){
    var elem = document.getElementById("dom");
    var picture = document.createElement("img");
    picture.src = "https://img.clipartfest.com/05e2feae0e49468d6559e5765620763e_pow-clipart-words-of-the-week-batman-pow-clipart_1500-1159.jpeg";
    elem.parentNode.insertBefore(picture, elem);
}
