window.addEventListener("load", init);

function main() {
  // for(let i = 0; i < lista.length; i++){
  //
  // }
}

function megjelenit(list) {
  const MAIN = document.querySelector("main");
  let htmlkod = "";
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    htmlkod += `<div>
                  <h2>${list[i].nev}</h2>
                  <p>${list[i].mondat}</p>
                </div>`;
  }

  MAIN.innerHTML += htmlkod;
}

function elem(tipus, szulo, content, i = 0) {
  let elemek = document.querySelectorAll(szulo);
  const SZUL = elemek[i];
  console.log(elemek.length - 1);
  const TIP = document.createElement(tipus);

  TIP.innerHTML = content;
  SZUL.appendChild(TIP);
}

function init() {
  const list = [
    {szemeszíne: "kék", kor: 20, testverek_szama: 2, nev: "Peti", mondat: "A kedd!" },
    {
    szemeszíne: "kék", kor: 20, testverek_szama: 2, nev: "Gergo", mondat: "A kedd masodszor!",
    },
    {
      szemeszíne: "kék",
      kor: 20,
      testverek_szama: 2,
      nev: "Niki",
      mondat: "Délelőtt kint játszottam a kutyussal",
    },
    {
      szemeszíne: "barna",
      kor: 20,
      testverek_szama: 1,
      nev: "Asztrik",
      mondat: "Kedden, mert ott nem történt semmi.",
    },
    {
      szemeszíne: "barna",
      kor: 20,
      testverek_szama: 2,
      nev: "GergőT",
      mondat: "Kedd a legjóbb nap.",
    },
    {
      szemeszíne: "barna",
      kor: 24,
      testverek_szama: 2,
      nev: "Sanyi",
      mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    },
    {
      szemeszíne: "lila",
      kor: 20,
      testverek_szama: 2,
      nev: "Márton",
      mondat: "Nem volt angol hétfőn",
    },
    {
      szemeszíne: "barna",
      kor: 20,
      testverek_szama: 2,
      nev: "Dominik",
      mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    },
    {
      szemeszíne: "piros",
      kor: 21,
      testverek_szama: 5,
      nev: "Marci",
      mondat: "Ha gyenge vagy akkor legalább ne sírj",
    },
    {
      szemeszíne: "zöld",
      kor: 20,
      testverek_szama: 2,
      nev: "Bence",
      mondat: "Pillanat türelmet kérek javítom a mikrofont.",
    },
  ];

  const obj = {
    nev: "Peti",
    mondat: "A kedd",
    kor: 19,
    nem: "férfi",
    testverek_szama: 2,
  };

  for (const x in obj) {
    console.log("kulcs", x);
    console.log("kulcshoz tartozó érték", obj[x]);
  }

  for (let index = 0; index < list.length; index++) {
    console.log("következő elem **************");
    const obj = list[index];
    for (const x in obj) {
      console.log("kulcs", x);
      console.log("kulcshoz tartozó érték", obj[x]);
    }
  }
  megjelenit(list);
  tabla(list); 
}

function elemlet(list) {
  for (let i = 0; i < list.length; i++) {
    const div = document.createElement("div");
    const h = document.createElement("h3");
    const p = document.createElement("p");
    document.body.appendChild(div);
    div.appendChild(h);
    div.appendChild(p);

    const text = document.createTextNode(lista[i].nev);
    p.appendChild(document.createTextNode(lista[i].mondat));
    h.appendChild(text);
  }
}

function tabla(list) {
  const article = document.querySelector("article");
  let htmlkod = "";

  htmlkod += `<table>
                      <thead>
                          <tr>
                              <td>szeme színe</td>
                              <td>kor</td>
                              <td>testvérek száma</td>
                              <td>név</td>
                              <td>mondat</td>
                          </tr> 
                      </thead>
                      <tbody>`;
  for (let i = 0; i < list.length; i++) {
    htmlkod += `<tr>`
    for (const j in list[i]) {
      htmlkod += `<td>${list[i][j]}</td>`
    }
    htmlkod += `<td><button>Törlés</button></td>`
    htmlkod += `</tr>`;
  }
  htmlkod += `</tbody>
                    </table>`;
  article.innerHTML += htmlkod;

  const buttonElemek = document.querySelectorAll("tabel button")
  for(let index = 0; index < buttonElemek.length; index++){
    buttonElemek[index].addEventListener("click",torles);
  }
}

function gomb(lista){
  
}

function torles(){
  lista.splice(1,3)
  console.log(lista);
  tabla(lista)
}

function atlageletkor(list){
  let szamok = 0;
  let db = 0;
  for (let i = 0; i < list.length; i++) {
    szamok += list[i].kor; 
    db+=1
  }
  var atlag = szamok / db;
  return(atlag);
}