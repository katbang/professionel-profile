const button = document.querySelector("button");
window.addEventListener("load", switchLanguage);
button.classList.add("on");
button.addEventListener("mousedown", switchLanguage);

function switchLanguage() {
  const on = button.getAttribute("class");
  if (on == "on") {
    button.classList.remove("on");
    button.textContent = "En";
    document.querySelector("h1").textContent = "Multimediedesign- studerende";
    document.querySelectorAll("h2").forEach((headline) => {
      headline.textContent = "Hej";
    });
    document.querySelectorAll(".about").forEach((text) => {
      text.innerHTML = ` Mit navn er <strong>Katrine Bang Nielsen</strong>, og jeg er en
              færdiguddannet multimediedesigner fra Københavns Erhvervsakademi
              <strong>(KEA)</strong>,`;
    });
    document.querySelectorAll(".add-on").forEach((text) => {
      text.innerHTML = `  På min uddannelse har jeg haft valgfaget
              <strong>Frontend</strong>.`;
    });
    document.querySelector(".box2 p").textContent =
      "På mit studie har jeg tilegnet mig færdigheder indenfor:";
    document.querySelectorAll(".react").forEach((text) => {
      text.innerHTML = `På mit valfag har jeg kodet i <strong>REACT</strong> og<strong
                >Next.js</strong>`;
    });
    document.querySelector(
      ".skills"
    ).innerHTML = `Jeg har gennem mit arbejde med ASTRO haft en komponentbaseret
    tilgang til designet af mine <strong>digitale løsninger</strong>.
    Som en del af mit studie har jeg derudover arbejdet med
    <strong>databaser</strong> som Restdb og SupaBase, og jeg har fået
    kendskab til en række forskellige designprocesser som Double
    Diamond og Design Thinking. De webløsninger, som jeg udviklet har
    været henholdsvis <strong>dynamiske</strong> og
    <strong>statiske</strong>.`;
    document.querySelectorAll(".traits").forEach((text) => {
      text.textContent = `  Når det kommer til kodning er jeg en arbejdshest, som finder glæde
      i kompleksiteten ved problemløsning. Som person er jeg positiv,
      detaljeorienteret, udviklingsdrevet og smilende. Jeg elsker at
      tage en udfordring op, og jeg har et stort gåpåmod.`;
    });
    document.querySelectorAll(".projects").forEach((text) => {
      text.textContent =
        "Herunder kan du klikke dig ind på tre af mine tidligere projekter:";
    });
  } else {
    button.classList.add("on");
    button.textContent = "Da";
    document.querySelector("h1").textContent = "Multimedia Design graduate";
    document.querySelectorAll("h2").forEach((headline) => {
      headline.textContent = "Hi";
    });
    document.querySelectorAll(".about").forEach((text) => {
      text.innerHTML = `My name is <strong>Katrine Bang Nielsen</strong>, and I've gratuated in Multimedia Design from
      <strong>KEA</strong>.`;
    });
    document.querySelectorAll(".add-on").forEach((text) => {
      text.innerHTML = ` As part of my studies I've taken the elective course
      <strong>Front-end</strong>.`;
    });
    document.querySelector(".box2 p").textContent =
      "I have the following skills:";
    document.querySelectorAll(".react").forEach((text) => {
      text.innerHTML = ` During my elective course I've programmed in <strong> REACT </strong> and <strong> Next.js </strong>.`;
    });
    document.querySelector(
      ".skills"
    ).innerHTML = `Through my work with ASTRO I have had a component-based
    approach to the design of my <strong>digital solutions</strong>.
    As part of my studies I have also worked with
    <strong>databases</strong> like Restdb and SupaBase and I have got
    to know different design processes such as Double
    Diamond and Design Thinking. I have developed both <strong>dynamic</strong> and
    <strong>static</strong> web interfaces.`;
    document.querySelectorAll(".traits").forEach((text) => {
      text.textContent = `  I'm a workaholic when it comes to coding, and I find joy in the complexity of problem solving. I am positive, detail-oriented, development-driven and friendly, and I'm always up for a challenge.`;
    });
    document.querySelectorAll(".projects").forEach((text) => {
      text.textContent = "Here are some links to my previous projects:";
    });
  }
}
