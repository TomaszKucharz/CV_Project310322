const liAboutMe = document.getElementById(`liAboutMe`);
const liResume = document.getElementById(`liResume`);
const liProject = document.getElementById(`liProject`);
const liContact = document.getElementById(`liContact`);
const infoTab = ["text do okna textAboutMe"];
const resumeTab = ["text do okna textAboutMe"];
const contactTab = ["text do okna textAboutMe"];
const infoUser = document.getElementById(`infoUser`);

liAboutMe.addEventListener(
  `click`,
  (showInfo = () => {
    infoUser.innerHTML = "";
    const elementh1_AboutMe = document.createElement(`h1`);
    elementh1_AboutMe.textContent = "Hello";
    const elementp_AboutMe = document.createElement(`p`);
    infoUser.append(elementh1_AboutMe);
  })
);

// ******************************

liResume.addEventListener(
  `click`,
  (showResume = () => {
    infoUser.innerHTML = "";
    infoUser.textContent = "TEXT 2";
  })
);

// ******************************

liProject.addEventListener(
  `click`,
  (showProject = () => {
    infoUser.textContent = "";
  })
);

// ******************************

liContact.addEventListener(
  `click`,
  (showContact = () => {
    infoUser.textContent = "";
    const contactH1 = document.querySelector(`#infoUser h1`);
    const contactP = document.querySelectorAll(`#infoUser a`)[0];
    contactH1.style.fontSize = "30px";
    contactH1.style.margineTop = "30px";
    contactH1.textContent = "adres e-mail:";
    contactP.textContent = "tkucharz@frontendwebsite.com";
  })
);
