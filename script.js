// COUNTDOWN
let timeLeft=5;
let countdown=document.getElementById("countdown");
let timer=setInterval(()=>{
    timeLeft--;
    countdown.innerHTML="Starting in "+timeLeft+"...";
    if(timeLeft<=0){
        clearInterval(timer);
        countdown.style.display="none";
        document.getElementById("mainContent").style.display="block";
    }
},1000);

// UNLOCK YES
function checkInput(){
    let input=document.getElementById("loveInput").value;
    if(input==="I love Ardi"){
        document.getElementById("yesBtn").style.display="inline-block";
    }
}

// MOVE NO
function moveButton(){
    let btn=document.getElementById("noBtn");
    btn.style.left=Math.random()*(window.innerWidth-100)+"px";
    btn.style.top=Math.random()*(window.innerHeight-50)+"px";
}

// YES CLICK
function yesClicked(){
    document.getElementById("bgMusic").play();
    document.body.innerHTML+="<h1>CONFIRMED 💕 FOREVER LOVE 😍</h1>";
    startFireworks();
}

// SCREENSHOT REMINDER
function takeScreenshot(){
    alert("Take screenshot and send to Ardi 😏💖");
}

// HEARTS
setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="💖";
    heart.style.left=Math.random()*window.innerWidth+"px";
    heart.style.fontSize=(20+Math.random()*30)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
},300);

// FIREWORKS
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function startFireworks(){
    setInterval(()=>{
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height/2;
        for(let i=0;i<40;i++){
            let angle=Math.random()*2*Math.PI;
            let speed=Math.random()*5;
            animateParticle(x,y,Math.cos(angle)*speed,Math.sin(angle)*speed);
        }
    },800);
}

function animateParticle(x,y,dx,dy){
    let life=50;
    function draw(){
        if(life<=0)return;
        ctx.beginPath();
        ctx.arc(x,y,2,0,2*Math.PI);
        ctx.fillStyle="white";
        ctx.fill();
        x+=dx;
        y+=dy;
        life--;
        requestAnimationFrame(draw);
    }
    draw();
}

// QR SCANNER
function startQR(){
    const qr=new Html5Qrcode("reader");
    qr.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 200 },
        qrMessage=>{
            alert("QR Scanned 💌: "+qrMessage);
        }
    );
}
startQR();
