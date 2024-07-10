//  creo array di oggetti

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(team);

// recupreo l'elemento del dom in cui andare a mettere le colonne con i film

const teamsContainer = document.getElementById("teams-container");

//  ciclo l'array
for (let i = 0; i < team.length; i++) {
  teamsContainer.innerHTML += `${team[i].name} ${team[i].role} ${team[i].image}<br>`;
}
