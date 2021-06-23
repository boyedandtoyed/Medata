clips = ['polygon(50% 0%, 0% 100%, 100% 100%)',
'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',
'inset(5% 20% 15% 10%)',
'polygon(0 0, 44% 26%, 99% 0%, 77% 48%, 67% 79%, 59% 100%, 17% 62%, 0% 47%)',
'circle(50% at 50% 50%)',
'ellipse(25% 40% at 50% 50%)',
null
]

shapes = document.querySelectorAll(".shapes");


shapes.forEach((shape)=>{
shape.style.top = (Math.random() * window.innerHeight) + "px";
shape.style.left = (Math.random() * window.innerWidth - 100)+ "px";
shape.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
shape.style.width = (Math.random()* 300)+ "px";
shape.style.height = shape.style.width;
shape.style.animationDelay = (Math.random() * 10) +"s";
shape.style.setProperty("--top", (Math.random()*720 +"px")) ;
shape.style.setProperty("--left", (Math.random()*1920+"px"));
shape.style.clipPath = clips[Math.floor(Math.random() * clips.length)]
})


shapes.forEach((shape)=>{
    shape.addEventListener("mousemove",(e)=>{
        e.target.style.left = e.screenX+"px";
        e.target.style.top = e.screenY+"px";
        e.target.style.opacity =1;
        e.target.style.animationPlayState = "paused";
        e.target.style.zIndex = '10';
        e.target.style.transform = "scale(1)";
    })
    shape.addEventListener("mouseleave", (e)=>{
        e.target.style.opacity = 0.1;
        e.target.style.animationPlayState = "running";
        e.target.style.zIndex = '0';
        e.target.style.transform = "scale(0.5)";


    })
}
)

let h1 = document.querySelector('main h1')

document.onload(h1.classList.add('active'))