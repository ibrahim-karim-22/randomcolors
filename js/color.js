/*const list = document.querySelector('#container');
function randNum() {
    let hex = Math.floor(Math.random() * 16777215);//this is the highest number in 6 digit hex
    this will ensure the hex string is at least 6 characters long. 
    padding with zeros if necessary. tostring(16) converts a number to its string representation
    in this case the base of 16 is provided since hex is a base 16 numeral system
    pad start(targetLength, padString) ensures a string reaches a certain length by adding
    characters to the begenning of a string until desired length is reached. since hex requires
    6 numbers hence we put 6 and '0' in case its lesss than six it will add it to the left
    hex = '#' + hex.toString(16).padStart(6, '0');
}*/
function getRandomColor() {
    const letters = '01234567789ABCDEF';
    let color = '#'; //by init # it will be the starting point for hex color code.
    for (let i = 0; i < 6; i++) { //loop will iterate 6 times
        color += letters[Math.floor(Math.random() * 16)];//random character of string of hex characters letters is init to 16 characters
    }
    return color;//will return 6 characters due to 6 itereations
}
//event listener for clicking colorBtn
document.getElementById('colorBtn').addEventListener('click', function(){
    const color = getRandomColor();
//style container
//let color/image chosen by getRandomColor appear on the page
    document.getElementById('container').style.backgroundColor = color;
    document.getElementById('container').style.padding = '55px';
    document.getElementById('container').style.border = '5px';
    document.getElementById('container').style.borderStyle = 'dashed';
    document.getElementById('container').style.borderRadius = '122px';
    document.getElementById('container').style.borderColor = 'black';
//let the info/text of color chosen by getRandomColor appear on the page
    document.getElementById('colorCode').innerText = 'Color Code:\n' + color;
    document.getElementById('colorCode').style.fontFamily = 'Protest Revolution, sans-serif';
    //document.getElementById('colorCode').style.paddingLeft = '3px';
    document.getElementById('colorCode').style.fontSize = '122px';
});
//attatch moueover event listener
document.getElementById('colorBtn').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'lightgreen';
});
//attach a mouseout event listener
document.getElementById('colorBtn').addEventListener('mouseout', function(){
    this.style.backgroundColor = 'lightblue';
});
//attach a click event listener
document.getElementById('resetBtn').addEventListener('click', function(){
    document.getElementById('container').style.backgroundColor = '#FFFFFF';
    document.getElementById('colorCode').innerText = '#FFFFFF';
});