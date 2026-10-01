const DATA = {
fr:{
date:"Paris, le 01/10/2026",
paragraphs:[
"J’ai bien pris connaissance de ta lettre, et je dois te dire que j’ai été profondément ému par tout ce que tu as écrit. C’était tout simplement <span class='magic'>✨ MAGIQUE ✨</span>.",
"Je suis conscient que je n’ai pas répondu pendant longtemps, et j’en suis très sincèrement désolé, une fois de plus. Mais le problème, c’est que j’ai obtenu de très mauvaises notes et que j’étais — et je suis encore — à peu de choses de me faire expulser...",
"Tout cela parce que mon ancienne école ne m’avait pas appris les bases dont j’aurais dû disposer pour intégrer cette école, et j’en subis aujourd’hui les conséquences. 😔",
"De ce fait, j’ai dû mettre les réseaux sociaux de côté afin de pouvoir me concentrer et essayer de suivre le rythme du mieux que je pouvais. Et encore aujourd’hui, je ne comprends pas toujours ce que je manipule ni ce que je suis censé faire en persistance. 😔",
"Désormais, je vis selon le principe suivant : <strong>manger, travailler, dormir</strong>, et ce, sans vraiment pouvoir profiter de la vie comme les autres jeunes de mon âge peuvent le faire.",
"Il est vrai que j’aurais pu te prévenir, mais je ne savais absolument pas si tu étais en froid avec moi ou non. Tout me paraissait confus.",
"Ma mère n’a cessé de me demander de réaliser plusieurs tâches simultanément, tout en enchaînant les prises de tête avec moi, et je ne voulais absolument pas répercuter mes phases d’humeur sur mon entourage.",
"J’ai ainsi perdu beaucoup d’amis, mais il faut croire qu’il s’agit du prix à payer pour étudier à Paris. 😔",
"J’apprécie sincèrement ta réaction, mais sache que tu étais totalement en droit d’être en colère contre moi. C’était ma faute et je l’assume entièrement.",
"Merci pour la peine que tu t’es donnée pour moi.",
"J’espère que tu as aimé le format que je t’ai proposé. Cela ne vaut peut-être pas une vraie lettre, mais mon écriture n’est pas agréable à lire :(( ",
"J’ai donc préféré l’adapter à un format qui me correspond davantage : <strong>la programmation.</strong>"
]},
en:{
date:"Paris, October 1, 2026",
paragraphs:[
"I read your letter, and I have to tell you that I was deeply moved by everything you wrote. It was simply <span class='magic'>✨ MAGICAL ✨</span>.",
"I know I haven't replied for a long time, and once again, I am truly sorry. The problem is that I got some very bad grades, and I was — and still am — very close to being expelled...",
"All of this happened because my previous school hadn't taught me the foundations I should have had before joining this school, and I am now dealing with the consequences. 😔",
"Because of that, I had to put social media aside so I could focus and try to keep up as best I could. Even now, I don't always understand what I am working with or what I am supposed to do when it comes to persistence. 😔",
"These days, I live by a simple routine: <strong>eat, work, sleep</strong> — without really being able to enjoy life the way other people my age can.",
"It is true that I could have warned you, but I honestly had no idea whether you were upset with me or not. Everything felt confusing.",
"My mother kept asking me to handle several things at once, while we were also constantly arguing, and I absolutely did not want to take my moods out on the people around me.",
"I ended up losing many friends along the way, but I suppose that is the price I have had to pay for studying in Paris. 😔",
"I genuinely appreciate your reaction, but please know that you had every right to be angry with me. It was my fault, and I take full responsibility for it.",
"Thank you for the effort and care you put into writing to me.",
"I hope you liked the format I chose for my response. It may not be a real handwritten letter, but my handwriting isn't exactly pleasant to read :(( ",
"So I decided to adapt it into a format that suits me better: <strong>programming.</strong>"
]},
es:{
date:"París, 01/10/2026",
paragraphs:[
"He leído tu carta, y tengo que decirte que me conmovió profundamente todo lo que escribiste. Fue simplemente <span class='magic'>✨ MÁGICO ✨</span>.",
"Sé que tardé muchísimo en responderte, y una vez más, lo siento muchísimo de verdad. El problema es que obtuve calificaciones muy malas y estuve —y todavía estoy— a muy poco de ser expulsado...",
"Todo esto porque mi escuela anterior no me enseñó las bases que debería haber tenido para entrar a esta escuela, y ahora estoy sufriendo las consecuencias. 😔",
"Por eso tuve que dejar las redes sociales de lado para poder concentrarme e intentar seguir el ritmo lo mejor que pudiera. Y todavía hoy no siempre entiendo lo que estoy manejando ni qué se supone que debo hacer cuando se trata de persistencia. 😔",
"Ahora vivo siguiendo un principio muy sencillo: <strong>comer, trabajar, dormir</strong>, sin poder disfrutar realmente de la vida como lo hacen otros jóvenes de mi edad.",
"Es verdad que podría haberte avisado, pero sinceramente no sabía si estabas enojada conmigo o no. Todo me parecía confuso.",
"Mi mamá no dejaba de pedirme que hiciera varias cosas al mismo tiempo, mientras además discutíamos constantemente, y yo no quería desquitar mis cambios de humor con las personas que me rodeaban.",
"Así terminé perdiendo a muchos amigos, pero supongo que ese es el precio que he tenido que pagar por estudiar en París. 😔",
"Aprecio sinceramente tu reacción, pero quiero que sepas que tenías todo el derecho a estar enojada conmigo. Fue mi culpa y lo asumo completamente.",
"Gracias por todo el esfuerzo y el cariño que pusiste en escribirme.",
"Espero que te haya gustado el formato que elegí para responderte. Tal vez no sea una carta de verdad, pero mi letra no es precisamente agradable de leer :(( ",
"Así que preferí adaptarlo a un formato que se me da mejor: <strong>la programación.</strong>"
]}
};

const opening=document.getElementById("opening");
const content=document.getElementById("content");
const envelopeButton=document.getElementById("envelopeButton");
const letter=document.getElementById("letter");
const date=document.getElementById("date");

function render(lang, animate=true){
  const data=DATA[lang];
  date.textContent=data.date;
  letter.innerHTML="";
  data.paragraphs.forEach((html,i)=>{
    const p=document.createElement("p");
    p.innerHTML=html;
    letter.appendChild(p);
    if(animate){
      p.style.opacity="0";
      p.style.transform="translateY(12px)";
      setTimeout(()=>{
        p.style.transition="opacity .65s ease, transform .65s ease";
        p.style.opacity="1";
        p.style.transform="none";
      },90+i*75);
    }
  });
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
}

envelopeButton.addEventListener("click",()=>{
  if(opening.classList.contains("opened")) return;
  opening.classList.add("opened");
  setTimeout(()=>{
    content.classList.add("show");
    content.setAttribute("aria-hidden","false");
    render("fr",true);
    setTimeout(()=>content.scrollIntoView({behavior:"smooth"}),350);
  },1200);
});

document.querySelectorAll(".lang").forEach(btn=>{
  btn.addEventListener("click",()=>render(btn.dataset.lang,true));
});
