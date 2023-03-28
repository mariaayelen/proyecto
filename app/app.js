const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";


const llamadaApi = fetch(API_CHARACTERS);


llamadaApi
  .then((data) => {
    return data.json();
  })
  
  .then((data) => {
    const $pesonajes = document.getElementById("pesonajes");
    const characters = data.results;

    for (let i = 0; i < characters.length; i++) {
      $pesonajes.innerHTML += `
      <div class="perjs">
           <img src=${characters[i].image} alt "imagen personaje"/>
           <h2>${characters[i].name}</h2>
           <p>Gender: ${characters[i].gender}</p>
           <p>Specie: ${characters[i].species}</p>
           <p>Location: ${characters[i].location.name}</p>
           <p>Origin: ${characters[i].origin.name}</p>
           <p>Status: ${characters[i].status}</p>
        </div>
      `;
    }
  })
  
  .catch((err) => {
    console.log(err);
  });