const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themeToggler=document.querySelector(".theme-toggler");

const date =document.getElementById("date");
const day =document.getElementById("day");
const month= document.getElementById("month");
const year =document.getElementById("year");

const today= new Date();
const weekdays=["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Saturday"];
const allmonths=["January","February","March","April","May","June","July","August","September","October","November","December"];


date.innerHTML=(today.getDate<10?"0":"")+today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=allmonths[today.getMonth()];
year.innerHTML=today.getFullYear();


menuBtn.addEventListener('click', ()=>{
  sideMenu.style.display="block";
});

closeBtn.addEventListener('click', ()=>{
  sideMenu.style.display="none";
});

themeToggler.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-theme-variables');
  
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});

signUpButton.addEventListener('click', ()=>{
  main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', ()=>{
  main.classList.remove("right-panel-active");
});



