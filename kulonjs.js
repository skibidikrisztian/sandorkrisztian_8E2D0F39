const topFilmek = [
  { 
    cim: "Interstellar", 
    leiras: "Az Interstellar egy felfedezőcsoport kalandjait meséli el, akik egy újonnan felfedezett féreglyukat használnak, hogy túllépjenek az emberes űrutazás korlátain, és meghódítsák a csillagközi utazás során felmerülő hatalmas távolságokat.", 
    kep: "interstellar_poster.jpg", 
    link: "https://hdtodayz.to/movie/watch-interstellar-hd-19788" 
  },
  { 
    cim: "Whiplash", 
    leiras: "Egy könyörtelen oktató irányítása alatt egy tehetséges fiatal dobos bármi áron a tökéletességre törekszik, még emberiségére is.", 
    kep: "whiplash_poster.jpg", 
    link: "https://hdtodayz.to/movie/watch-whiplash-hd-19644" 
  },
  { 
    cim: "Beef", 
    leiras: "Két ember hagyta, hogy egy közúti baleset berögzüljön az elméjükben, és lassan felemésztse minden gondolatukat és tettüket.", 
    kep: "beef_poster.jpg", 
    link: "https://hdtodayz.to/tv/watch-beef-hd-94993" 
  },
  { 
    cim: "The Batman", 
    leiras: "Egy nézőpontvezérelt noir történet, melyben nagy hangsúlyt fektetnek Batman nyomozómunkájára. Önálló történet, aminek semmi köze a DCEU-hoz.", 
    kep: "thebatman_poster.jpg", 
    link: "https://hdtodayz.to/movie/watch-the-batman-hd-16076" 
  },
  { 
    cim: "Bojack Horseman", 
    leiras: "Ismerd meg a 90-es évek legkedveltebb sitcom lovát – 20 évvel később. BoJack Horseman a nagy sikerű Horsin' Around tévésorozat sztárja volt, de ma már elveszett, Hollywoodban él, mindenre panaszkodik, és színes pulóvereket hord.", 
    kep: "bojackhorseman_poster.jpg", 
    link: "https://hdtodayz.to/tv/watch-bojack-horseman-hd-39035" 
  }
];

function megjelenitFilmek() {
  const container = document.getElementById("filmekessorozatok");
  if (!container) return;

  let db = 0;
  for (let i = 0; i < topFilmek.length; i++) {
    db++;
    const film = topFilmek[i];
    const div = document.createElement("div");
    div.classList.add("film");
    div.innerHTML = `
      <h2>${i + 1}. ${film.cim}</h2>
      <img src="${film.kep}" alt="${film.cim}" width="200">
      <p>${film.leiras}</p>
      <button onclick="megnyit('${film.link}')">Megnézem</button>
    `;
    container.appendChild(div);
  }

  const osszegzes = document.createElement("p");
  osszegzes.textContent = `Összesen ${db} film található az ajánlóban.`;
  container.appendChild(osszegzes);
}

function megnyit(url) {
  window.location.href = url;
}

function addold() {
  const input = document.getElementById("ujFilm");
  const lista = document.getElementById("watchList");
  if (!input || !lista) return;
  const cim = input.value.trim();
  if (cim === "") return;
  const li = document.createElement("li");
  li.textContent = cim;
  lista.appendChild(li);
  input.value = "";
}

document.addEventListener("DOMContentLoaded", megjelenitFilmek);
