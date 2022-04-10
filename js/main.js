const liAboutMe = document.getElementById(`liAboutMe`);
const liResume = document.getElementById(`liResume`);
const liProject = document.getElementById(`liProject`);
const liContact = document.getElementById(`liContact`);
const infoUser = document.getElementById(`infoUser`);
const P1Tab = [
  "Jako człowiek o ścisłym umyśle a zarazem pasjonat języków programowania dobrze odnajduję się w zakamarkach kodowania.",
];
const P2Tab = [
  " Choć kiedyś sam front-end był dla mnie odległy, to rozwój wyżej wspomnianych technologii i związanych z nią możliwości pochłonął moją uwagę a kiedy postanowiłem spróbować to stało się to moją wielką pasją.",
];
const P3Tab = [
  " Teraz chętnie się nią dzielę. Prywatnie: żeglarz, miłośnik szerokich wód i morskich przygód. ",
];
const P1TabResume = [
  "W 2020 roku podjąłem decyzję w życiu zawodowym, zmiany profilu na to co zawsze mnie kusiło i w czym czułem się dobrze - programowanie. W tym celu, skupiłem moje szkolenie i zdobywanie wiedzy na frontend i programowaniu w JavaScript. Do tej pory ukończyłem n/w szkolenia. Cały czas jednak poszerzam swoje umiejętności by nadążyć za oczekiwaniami branżowymi. ",
];
const captTabResume = [
  "Prowadzenie jednostek żaglowych dla firm turystycznych, współpraca z www.mosrkiemile.pl. Zarządzanie daną jednostką, bezpieczeństwo,szkolenia dla klientów, serwis jednostek.",
];
const cemTabResume = [
  "Kierownik produkcji i przedstawiciel handlowy do nawiązywania i potrzymywania konraktów z firmami  inwestycyjno-inżynieryjnymi",
];
const oceanTabResume = [
  " Własna działalność.Prowadzenie firmy usuługowej w branży turystycznej. Firma świdadczyła usłgi w transporcie morskim i szkoleniach żeglarskich.W późniejszym okresie zakres oferowanych usług dotyczył też prowadzenia jednostek właścicielskich",
];
const annTabResume = [
  "organizacja pracy działu sprzedaży i serwis cześci silników elelketrycznych.kreowanie marki na rynku krajowym,opracowanie i prezentacja ofert handlowych, analiza rynku pod względem działań konkurencji",
];
const bostaTabResume = [
  "[zarządzanie działem produkcji mas betonowych na trzech zakładach produkcji, kontakty z kluczowymi klientami i wykonawcami, opracowywanie i prezentacja ofert handlowych, analiza rynku i konkurencji",
];
const atlasTabResume = [
  "realizacja polityki handlowej i promocyjnej firmy, nawiązywanie i podtrzymanie kontaktów z klientami (inwestorzy, dystrybutorzy, wykonawcy)",
];

liAboutMe.addEventListener(
  `click`,
  (showInfo = () => {
    infoUser.innerHTML = "";
    const elementh1_AboutMe = document.createElement(`h1`);
    elementh1_AboutMe.textContent = "";
    elementh1_AboutMe.style.marginTop = "40px";
    elementh1_AboutMe.style.fontSize = "30px";
    const elementp_AboutMe = document.createElement(`p`);
    elementp_AboutMe.classList.add(`elementP1`);
    elementp_AboutMe.textContent = P1Tab;
    const elementp2_AboutMe = document.createElement(`p`);
    elementp2_AboutMe.classList.add(`elementP2`);
    elementp2_AboutMe.textContent = P2Tab;
    const elementp3_AboutMe = document.createElement(`p`);
    elementp3_AboutMe.textContent = P3Tab;
    infoUser.append(elementh1_AboutMe);
    infoUser.append(elementp_AboutMe);
    infoUser.append(elementp2_AboutMe);
    infoUser.append(elementp3_AboutMe);
  })
);

// ******************************

liResume.addEventListener(
  `click`,
  (showResume = () => {
    infoUser.innerHTML = "";
    infoUser.style.fontSize = "15px";
    const elementh3_Resume = document.createElement(`h3`);
    elementh3_Resume.classList.add(`elementH3`);
    elementh3_Resume.textContent = "Branża IT, od 2020";
    elementh3_Resume.style.color = "brown";
    infoUser.appendChild(elementh3_Resume);
    const elementp1_Resume = document.createElement(`p`);
    elementp1_Resume.textContent = P1TabResume;
    infoUser.append(elementp1_Resume);
    const certyficat_Resume = document.createElement(`p`);
    certyficat_Resume.style.color = "black";
    certyficat_Resume.textContent = "Certyfikaty (Udemy) :";
    certyficat_Resume.style.textDecoration = "underline";
    certyficat_Resume.style.color = "blue";
    infoUser.append(certyficat_Resume);
    const certyficatp1_Resume = document.createElement(`p`);
    certyficatp1_Resume.textContent =
      "nr: UC-56e9943a-d81d-40fb-8686-fbf84a09df2b - Frontend";
    infoUser.append(certyficatp1_Resume);
    const certyficatp2_Resume = document.createElement(`p`);
    certyficatp2_Resume.textContent =
      "nr: UC-5dfcdb39-d330-4a16-ab91-292e11ad5dfc - Webdeveloper";
    infoUser.append(certyficatp2_Resume);
    const certyficatp3_Resume = document.createElement(`p`);
    certyficatp3_Resume.textContent =
      "nr: UC-6f28e9db-ec62-4e65-Bd64-O2b7e65aaed7 - JavaScript";
    infoUser.append(certyficatp3_Resume);
    const certyficatp4_Resume = document.createElement(`p`);
    certyficatp4_Resume.textContent =
      "nr: UC-5f1c1eef-0845-413e-a7f9-8272dbeb25c1 - Bootstrap";
    infoUser.append(certyficatp4_Resume);
    const elementCapt_Resume = document.createElement(`h3`);
    elementCapt_Resume.textContent =
      "Kapitan jedn. żagl. 2021-2022 - Morskie Mile";
    elementCapt_Resume.style.marginTop = "30px";
    elementCapt_Resume.style.color = "brown";
    infoUser.append(elementCapt_Resume);
    const elementCapt1_Resume = document.createElement("p");
    elementCapt1_Resume.textContent = captTabResume;
    infoUser.append(elementCapt1_Resume);
    const elementCem_Resume = document.createElement(`h3`);
    elementCem_Resume.textContent = "CEMEX Polska 2018-2020, Bielsko Biała";
    elementCem_Resume.style.marginTop = "30px";
    elementCem_Resume.style.color = "brown";
    infoUser.append(elementCem_Resume);
    const elementCem1_Resume = document.createElement("p");
    elementCem1_Resume.textContent = cemTabResume;
    infoUser.append(elementCem1_Resume);
    const elementOcean_Resume = document.createElement(`h3`);
    elementOcean_Resume.textContent =
      "Ocean Odyssey Morskie Czartery 2014-2018";
    elementOcean_Resume.style.marginTop = "30px";
    elementOcean_Resume.style.color = "brown";
    infoUser.append(elementOcean_Resume);
    const elementOceanP_Resume = document.createElement("p");
    elementOceanP_Resume.textContent = oceanTabResume;
    infoUser.append(elementOceanP_Resume);
    const elementAnn_Resume = document.createElement(`h3`);
    elementAnn_Resume.textContent =
      "„ANNMAR” Import - Export Kierownik sprzedaży 2009-2012";
    elementAnn_Resume.style.marginTop = "30px";
    elementAnn_Resume.style.color = "brown";
    infoUser.append(elementAnn_Resume);
    const elementAnnP_Resume = document.createElement("p");
    elementAnnP_Resume.textContent = annTabResume;
    infoUser.append(elementAnnP_Resume);
    const elementBost_Resume = document.createElement(`h3`);
    elementBost_Resume.textContent =
      "PPMB Bosta Beton grupa CRH Szef Regionu Śląska 2008-2009";
    elementBost_Resume.style.marginTop = "30px";
    elementBost_Resume.style.color = "brown";
    infoUser.append(elementBost_Resume);
    const elementBostP_Resume = document.createElement("p");
    elementBostP_Resume.textContent = bostaTabResume;
    infoUser.append(elementBostP_Resume);
    const elementAtlas_Resume = document.createElement(`h3`);
    elementAtlas_Resume.textContent =
      "Grupa Atlas - Dolina Nidy Doradca Techniczno-Handlowy 2004-2009";
    elementAtlas_Resume.style.marginTop = "30px";
    elementAtlas_Resume.style.color = "brown";
    infoUser.append(elementAtlas_Resume);
    const elementAtlasP_Resume = document.createElement("p");
    elementAtlasP_Resume.textContent = atlasTabResume;
    elementAtlasP_Resume.style.marginBottom = "30px";
    infoUser.append(elementAtlasP_Resume);

    const elementF = document.createElement(`h3`);
    elementF.textContent = "Wykształcenie:";
    elementF.style.textAlign = "left";
    elementF.style.marginLeft = "2vw";
    elementF.style.textDecoration = "underline";
    const elementF1 = document.createElement(`h5`);
    elementF1.textContent = `1997 – 2003 Politechnika Śląska w Gliwicach`;
    elementF1.style.textAlign = "left";
    elementF1.style.marginLeft = "2vw";
    elementF1.style.marginTop = "20px";
    const elementF2 = document.createElement(`P`);
    elementF2.textContent = "wydział: konstrukcje budowlane";
    elementF2.style.textAlign = "left";
    elementF2.style.marginLeft = "2vw";
    const elementF3 = document.createElement(`h5`);
    elementF3.textContent = `1992 – 1997 Technikum Budowlane`;
    elementF3.style.textAlign = "left";
    elementF3.style.marginLeft = "2vw";
    elementF3.style.marginTop = "20px";
    const elementF4 = document.createElement(`P`);
    elementF4.textContent = "specjalizacja: budownictwo ogólne";
    elementF4.style.textAlign = "left";
    elementF4.style.marginLeft = "2vw";
    infoUser.append(elementF);
    infoUser.append(elementF1);
    infoUser.append(elementF2);
    infoUser.append(elementF3);
    infoUser.append(elementF4);
  })
);

// ******************************

// liProject.addEventListener(
//   `click`,
//   (showProject = () => {
//     setInterval(() => {
//       infoUser.textContent = "zerknij na moją strone www";
//     }, 2000);
//   })
// );

// ******************************

liContact.addEventListener(
  `click`,
  (showContact = () => {
    infoUser.textContent = "";
    const emailH3 = document.createElement(`h3`);
    emailH3.style.marginTop = "8vh";
    emailH3.textContent = "e-mail:";
    const emailP = document.createElement(`p`);
    emailP.textContent = "tkucharz@frontendwebsite.com";
    const phoneH3 = document.createElement(`h3`);
    phoneH3.style.marginTop = "5vh";
    phoneH3.textContent = "phone:";
    const phoneP = document.createElement(`p`);
    phoneP.textContent = "+48 609 994 309";
    // const linkedH3 = document.createElement(`h3`);
    // linkedH3.style.marginTop = "5vh";
    // linkedH3.style.marginBottom = "20px";
    // linkedH3.textContent = "linked:";
    // const linkedP = document.createElement(`a`);
    // linkedP.style.marginTop = "5vh";
    // linkedP.href = "https://www.linkedin.com/in/tomasz-kucharz-a40707228/";
    // linkedP.textContent = "linked";

    infoUser.append(emailH3);
    infoUser.append(emailP);
    infoUser.append(phoneH3);
    infoUser.append(phoneP);
    // infoUser.append(linkedH3);
    // infoUser.append(linkedP);
  })
);
