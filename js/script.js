// funzione che crea la colonna
function createColumns() {
  const col = document.createElement("div");
  col.classList.add("col-12", "col-md-6", "col-lg-4");

  return col;
}

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
  // creo la colonna
  const col = createColumns();

  //   all'interno della colonna inserisco le info del team
  col.innerHTML = `<div class="card m-2">
  <div class="card-img-top">
    <img src="./img/${team[i].image}" class="img-fluid">
  </div>
    <div class="card-body">
        <h2>
            ${team[i].name}
        </h2>
        <p>
         <strong>Role:</strong> ${team[i].role} 
        </p>
    </div>
 
</div>`;

  teamsContainer.appendChild(col);
}
