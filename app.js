
const array=['websites', 'UX/UI', 'webapps','games','softwares'];

const interval=1000;
let index=0;

function changeWord (){
document.getElementsByTagName('em')[0].innerHTML=array[index];
index=(index+1)%array.length;
setTimeout(changeWord, interval);
}

changeWord();

//console.log(em[0].innerHTML);

var slideText = document.getElementsByClassName("text1");
var workimg= document.getElementsByTagName('img');
slideText.style.left ='0%';
workimg.style.left='0%';

///Slide in text//





