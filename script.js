// Typing effect
const typingElement=document.querySelector(".typing");
const words=["Fullstack Developer","MERN Expert","UI/UX Designer","Problem Solver"];
let i=0,j=0,isDeleting=false;
function type(){
  let word=words[i];
  typingElement.textContent=word.substring(0,j);
  if(!isDeleting && j<word.length){j++;setTimeout(type,150);}
  else if(isDeleting && j>0){j--;setTimeout(type,80);}
  else if(!isDeleting && j===word.length){isDeleting=true;setTimeout(type,1200);}
  else if(isDeleting && j===0){isDeleting=false;i=(i+1)%words.length;setTimeout(type,300);}
}
type();

// Menu toggle
const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector("nav ul");
menuToggle.onclick=()=>navLinks.classList.toggle("show");

// Dark mode
document.getElementById("darkToggle").onclick=(e)=>{e.preventDefault();document.body.classList.toggle("dark");};

// OPTIONAL: Particle background effect
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let particlesArray=[];
class Particle{
  constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.size=Math.random()*2;this.speedX=Math.random()-0.5;this.speedY=Math.random()-0.5;}
  update(){this.x+=this.speedX;this.y+=this.speedY;if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;}}
  draw(){ctx.fillStyle="#ffd369";ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.closePath();ctx.fill();}
}
function init(){particlesArray=[];for(let i=0;i<100;i++){particlesArray.push(new Particle());}}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let p of particlesArray){p.update();p.draw();}requestAnimationFrame(animate);}
init();animate();
window.onresize=()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;init();}