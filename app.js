// =========================
// QUESTIONS
// =========================

const questions = [
{
text:"🌸 داستان ما از کجا شروع شد؟",
options:["پارک ملت 🌳","پارک لاله 🌷","رشت 🌧️","شهرقدس 🏙️"],
correct:1
},
{
text:"👀 وقتی اولین بار عارف رو دیدم کجا بودیم؟",
options:["سر تمرین ورزشی 🏃‍♀️","کافه ☕","دانشگاه 🎓","پارک 🌿"],
correct:0
},
{
text:"📩 اولین پیام عارف چی بود؟",
options:[
"سلام خوبی؟ 🙂",
"اسمت فاطمه‌ست یا فرشته؟ 😄",
"چند سالته؟ 🤔",
"کجایی؟ 📍"
],
correct:1
},
{
text:"🏃‍♀️ تمرین‌هامون معمولاً کجا بود؟",
options:["پارک ملت 🌳","پارک لاله 🌷","باشگاه 💪","ورزشگاه آزادی 🏟️"],
correct:0
},
{
text:"🚗 عارف معمولاً برای تمرین با من چیکار می‌کرد؟",
options:[
"می‌آورد و می‌برد ❤️",
"فقط می‌رسوند 🚗",
"پیام می‌داد 📱",
"هیچی 😶"
],
correct:0
},
{
text:"🎁 اولین هدیه‌ای که عارف برام خرید چی بود؟",
options:["گل 🌹","عروسک 🧸","جوراب 🧦","کتاب 📖"],
correct:2
},
{
text:"🍰 اولین بار بعد از دعوامون برای آشتی چی بردم؟",
options:["گل 🌹","کیک و شیرینی 🎂","شکلات 🍫","کتاب 📖"],
correct:1
},
{
text:"💙 رنگ مورد علاقه عارف چیه؟",
options:["آبی 💙","قرمز ❤️","سبز 💚","مشکی 🖤"],
correct:0
},
{
text:"🩷 رنگ مورد علاقه من چیه؟",
options:["بنفش 💜","صورتی 🩷","آبی 💙","سفید 🤍"],
correct:1
},
{
text:"🌍 اولین سفر مشترکمون کجا بود؟",
options:["شمال 🌲","رشت 🌧️","کیش 🏝️","اصفهان 🕌"],
correct:1
},
{
text:"💋 اولین بوسه‌مون کجا بود؟",
options:["رشت 🌧️","پارک ملت 🌳","شهرقدس 🏙️","پارک لاله 🌷"],
correct:2
},
{
text:"💞 من اسم عارف رو چی گذاشتم؟",
options:[
"قهرمان زندگی 🦸‍♂️",
"عشق زندگی ❤️",
"معجزه زندگیم ✨",
"همراه زندگیم 🤍"
],
correct:2
},
{
text:"😊 بیشتر از همه دوست دارم وقتی عارف ... ؟",
options:[
"میخنده 😄",
"شوخی میکنه 😂",
"حالمو میپرسه ❤️",
"اخم میکنه 😐"
],
correct:0
},
{
text:"✨ به نظر من قشنگ‌ترین ویژگی عارف چیه؟",
options:[
"چشم‌هاش 👀",
"لبخندش 😊",
"مهربونیش ❤️",
"همه چیش 😍"
],
correct:3
},
{
text:"🫶 هر وقت دلم می‌گیره اولین کسی که میخوام باهاش حرف بزنم کیه؟",
options:[
"مامانم 👩",
"دوستم 🧑",
"عارف ❤️",
"هیچکس 😶"
],
correct:2
},
{
text:"🌈 بزرگ‌ترین آرزومون چیه؟",
options:[
"سفر ✈️",
"خونه مشترک 🏡",
"موفقیت کاری 💼",
"همه اینا کنار هم 💞"
],
correct:3
},
{
text:"💍 عارف برای من بیشتر شبیه چیه؟",
options:[
"دوست 👬",
"همراه 🚶‍♂️",
"خانواده 👨‍👩‍👧",
"همه اینا 🤍"
],
correct:3
},
{
text:"🌙 چرا این آسمون رو ساختم؟",
options:[
"برای سرگرمی 🎮",
"برای امتحان کردن تو 🧠",
"برای اینکه بدونی چقدر دوستت دارم ❤️",
"برای بازی 🎯"
],
correct:2
}
];

// =========================
// MEMORIES
// =========================

const memories = [
{
title:"✨ شروع یک معجزه",
text:"✨ همه چیز از پارک لاله شروع شد... جایی که هیچ‌کدوممون نمی‌دونستیم قراره داستانی اینقدر قشنگ شکل بگیره. اون روز شاید مثل بقیه روزها به نظر می‌رسید، اما در واقع شروع یکی از زیباترین فصل‌های زندگی من بود. 🌙❤️"
},
{
title:"🌸 حس متفاوت",
text:"🌸 اون روز سر تمرین یه حس عجیبی داشتم... انگار دلم آروم آروم بهم می‌گفت امروز با همه روزهای قبل فرق داره. نمی‌دونستم قراره یه آدم خاص وارد زندگیم بشه و همه چیز رو قشنگ‌تر کنه. ✨"
},
{
title:"📩 اولین پیام",
text:"📩 «اسمت فاطمه‌ست یا فرشته؟» شاید فقط یه جمله بود، اما برای من شروع یه دنیا خاطره شد. همون پیامی که بی‌خبر از آینده، مسیر زندگیم رو عوض کرد. 💕"
},
{
title:"🏃‍♀️ تمرین‌های دونفره",
text:"🏃‍♀️ تمرین‌ها دیگه فقط تمرین نبودن... هر مسیر رفت و برگشت، هر خنده و هر گفت‌وگو تبدیل به یه خاطره قشنگ می‌شد که هنوزم توی ذهنم زنده‌ست. 💖"
},
{
title:"🚗 همراه همیشگی",
text:"🚗 تو فقط همراهم نبودی؛ هر بار که دنبالم می‌اومدی یا کنارم بودی، یه حس امنیت و آرامش عجیبی با خودت می‌آوردی. حسی که هنوزم وقتی یادت می‌افتم توی دلم زنده میشه. 🤍"
},
{
title:"🧦 اولین هدیه",
text:"🧦 شاید برای بقیه فقط یه جفت جوراب بود، اما برای من یادگاری اولین توجه و اولین نشونه‌های عشق تو بود. هنوزم وقتی یادش می‌افتم لبخند می‌زنم. 😊❤️"
},
{
title:"🎂 آشتی شیرین",
text:"🎂 اولین دعوامون هم نتونست ما رو از هم دور کنه. کیک و شیرینی فقط یه بهونه بود؛ چیزی که مهم بود این بود که هیچ‌کدوممون نمی‌خواستیم همدیگه رو از دست بدیم. 💞"
},
{
title:"💙 رنگ آسمون",
text:"💙 آبی فقط یه رنگ نیست... رنگ آرامش توئه. هر بار که به آسمون نگاه می‌کنم یا رنگ آبی رو می‌بینم، ناخودآگاه یاد تو و حس خوب حضورت می‌افتم. ☁️✨"
},
{
title:"🩷 رنگ قلب من",
text:"🩷 صورتی همیشه رنگ مورد علاقه من بود، اما از وقتی تو اومدی، انگار قشنگ‌تر از قبل شد؛ چون هر بار می‌بینمش یاد احساسات قشنگی می‌افتم که توی قلبم ساختی. 🌸💕"
},
{
title:"🌿 اولین سفر",
text:"🌿 رشت فقط یه شهر نبود؛ اولین سفر مشترکمون بود. سفری که توش کلی خندیدیم، کلی خاطره ساختیم و فهمیدیم کنار هم بودن از هر مقصدی قشنگ‌تره. 🚗💚"
},
{
title:"💋 شهرقدس",
text:"💋 بعضی لحظه‌ها هیچ‌وقت از ذهن آدم پاک نمیشن... اون روز توی شهرقدس یکی از همون لحظه‌ها بود. لحظه‌ای که هنوزم با یادآوریش قلبم تندتر می‌زنه. ❤️✨"
},
{
title:"🌠 معجزه زندگیم",
text:"🌠 یه روز فهمیدم بهترین اسم برای تو همینه؛ معجزه زندگیم. چون درست وقتی وارد زندگیم شدی که انتظارش رو نداشتم و همه چیز رو قشنگ‌تر از قبل کردی. 🌙🤍"
},
{
title:"😊 خنده‌هات",
text:"😊 یه چیزی توی خنده‌هات هست که می‌تونه حتی بدترین روزهای منو هم روشن کنه. خنده‌هات همیشه یکی از محبوب‌ترین صداهای دنیاست برای من. 💛"
},
{
title:"❤️ وجود تو",
text:"❤️ ویژگی بدی تو وجود تو مگه هست آخه مرد 🥹💕"
},
{
title:"🤍 تکیه‌گاه من",
text:"🤍 هر وقت حالم خوب نیست یا دلم می‌گیره، ناخودآگاه دلم می‌خواد با تو حرف بزنم. چون تو همیشه آرومم می‌کنی و بهم یادآوری می‌کنی که تنها نیستم. 🌹"
},
{
title:"🏡 رویاهامون",
text:"🏡 رویاهامون شاید زیاد باشن، اما قشنگ‌ترینشون اینه که کنار هم بهشون برسیم. مهم نیست مقصد کجاست، مهم اینه که تو کنارمی. ✨❤️"
},
{
title:"🌙 خانه امن",
text:"🌙 تو فقط عشق من نیستی... تو خونه امن قلب منی. جایی که هر وقت خسته میشم یا دلم می‌گیره، دلم می‌خواد بهش برگردم. 🤍✨"
},
{
title:"🌙✨ رسیدن به ماه",
text:"🌙✨ این آسمون رو ساختم تا بدونی چقدر برام ارزشمندی. خواستم ستاره به ستاره، خاطره به خاطره، دوباره همه مسیر قشنگی که با هم اومدیم رو مرور کنیم. ممنونم که وارد زندگیم شدی، بهم امید دادی، عشق دادی و باعث شدی دوباره به آینده لبخند بزنم. تولدت مبارک معجزه زندگیم... دوستت دارم بیشتر از چیزی که کلمات بتونن توصیفش کنن. ❤️🥹✨"
}
];


// =========================
// GAME STATE
// =========================

let game = {
level:0,
activeStar:0,
finished:false
};

// =========================
// STORAGE
// =========================

function saveGame(){
localStorage.setItem(
"birthday-game",
JSON.stringify(game)
);
}

function loadGame(){

const saved =
localStorage.getItem("birthday-game");

if(saved){
game = JSON.parse(saved);
}
}

// =========================
// STARS
// =========================

function renderStars(){

const layer =
document.getElementById("starsLayer");

layer.innerHTML = "";

for(let i=0;i<questions.length;i++){

const star =
document.createElement("div");

star.className="star";

if(i===game.activeStar){
star.classList.add("active");
}

star.innerHTML="✦";

star.style.top =
(Math.random()*85+5)+"%";

star.style.left =
(Math.random()*85+5)+"%";

star.onclick=()=>openStar(i);

layer.appendChild(star);
}

if(game.finished){

const moon =
document.createElement("div");

moon.className="moon";
moon.innerHTML="🌙";

moon.onclick=showFinal;

layer.appendChild(moon);
}
}

// =========================
// OPEN QUESTION
// =========================

function openStar(id){

if(id!==game.activeStar)
return;

const q =
questions[game.level];

showQuestion(q);
}

// =========================
// QUESTION MODAL
// =========================

function showQuestion(q){

const modal =
document.getElementById("modalContainer");

let optionsHtml="";

q.options.forEach((o,index)=>{

optionsHtml += `
<button
class="option"
onclick="checkAnswer(${index})">
${o}
</button>
`;

});

modal.innerHTML=`
<div class="overlay">
<div class="panel">

<h2>${q.text}</h2>

<div class="options">
${optionsHtml}
</div>

</div>
</div>
`;
}

// =========================
// CHECK ANSWER
// =========================

function checkAnswer(index){

const q =
questions[game.level];

const buttons =
document.querySelectorAll(".option");

buttons.forEach((btn,i)=>{

if(i===q.correct){

btn.classList.add("correct");

}else if(i===index){

btn.classList.add("wrong");
}

});

if(index!==q.correct)
return;

setTimeout(()=>{

showMemory();

},500);
}

// =========================
// MEMORY
// =========================

function showMemory(){

const memory =
memories[game.level];

document.getElementById("modalContainer").innerHTML=`

<div class="overlay">

<div class="memory-card">

<h2>${memory.title}</h2>

<p>${memory.text}</p>

<button
class="continue-btn"
onclick="continueGame()">

ادامه ✨

</button>

</div>

</div>
`;
}

// =========================
// CONTINUE
// =========================

function continueGame(){

game.level++;
game.activeStar++;

if(game.level>=questions.length){

game.finished=true;
}

saveGame();

document.getElementById(
"modalContainer"
).innerHTML="";

renderStars();
}

// =========================
// FINAL PAGE
// =========================

function showFinal(){

const birthDate =
new Date("2002-06-20");

const now =
new Date();

const life =
now - birthDate;

const days =
Math.floor(
life/(1000*60*60*24)
);

const hours =
Math.floor(
life/(1000*60*60)
);

const minutes =
Math.floor(
life/(1000*60)
);

const seconds =
Math.floor(
life/1000
);

const years =
(days/365.25).toFixed(1);

const months =
Math.floor(days/30.44);

const weeks =
Math.floor(days/7);

const heartBeats =
(minutes*72).toLocaleString();

const breaths =
(minutes*16).toLocaleString();

document.body.insertAdjacentHTML(
"beforeend",
`
<div class="final">

<div class="final-card">

<div class="moon-title">
🌙✨
</div>

<h1>
تولدت مبارک ترقوه‌ی من،
عارف جان دلم ❤️
</h1>

   <h3>
       ۱۳۸۱/۰۳/۳۰
   </h3>

   <p class="love-text">

       امروز فقط روز تولد تو نیست...

       روزیه که دنیا یکی از مهربون‌ترین،
       خوش‌سلیقه‌ترین،
       قوی‌ترین و دوست‌داشتنی‌ترین آدم‌هاشو
       به خودش هدیه داد.

       تو برای من فقط یه آدم نیستی...

       تو معجزه‌ی زندگی منی.

       همون کسی که درست وقتی انتظارش رو نداشتم،
       سر راه زندگیم قرار گرفت
       و باعث شد دوباره به زندگی،
       به آینده
       و به عشق امیدوار بشم.

   </p>

<div class="stats-grid">

<div class="stat">
<span>${years}</span>
<small>سال زندگی</small>
</div>

<div class="stat">
<span>${months}</span>
<small>ماه زندگی</small>
</div>

<div class="stat">
<span>${weeks}</span>
<small>هفته زندگی</small>
</div>

<div class="stat">
<span>${days.toLocaleString()}</span>
<small>روز زندگی</small>
</div>

<div class="stat">
<span>${hours.toLocaleString()}</span>
<small>ساعت زندگی</small>
</div>

<div class="stat">
<span>${minutes.toLocaleString()}</span>
<small>دقیقه زندگی</small>
</div>

<div class="stat">
<span>${seconds.toLocaleString()}</span>
<small>ثانیه زندگی</small>
</div>

</div>

<div class="life-box">

❤️ قلب مهربونت حدود

<strong>${heartBeats}</strong>

بار تپیده

<br><br>

🌬️ حدود

<strong>${breaths}</strong>

نفس کشیدی


                <br /><br />

                و توی تمام این لحظه‌ها،
                بدون اینکه خودت بدونی،
                زندگی آدم‌های زیادی رو قشنگ‌تر کردی...

                مخصوصاً زندگی من رو ❤️

</div>

 <p class="ending">

     ممنونم که اومدی...

     ممنونم که موندی...

     ممنونم که معجزه‌ی زندگی من شدی...

     تولدت مبارک عشق قشنگم 🌙✨❤️

 </p>

<div class="heart-big">
❤️
</div>

</div>

</div>
`
);
}

// =========================
// GALAXY
// =========================

function initGalaxy(){

const canvas =
document.getElementById("galaxy");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const stars=[];

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*1.8,
speed:Math.random()*0.6+0.1

});

}

function draw(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

for(const s of stars){

ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.radius,
0,
Math.PI*2
);

ctx.fillStyle="white";
ctx.fill();

s.y+=s.speed;

if(s.y>canvas.height){

s.y=0;
s.x=Math.random()*canvas.width;

}

}

requestAnimationFrame(draw);
}

draw();
}

// =========================
// START
// =========================

loadGame();
renderStars();
initGalaxy();