let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event) {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        console.log(item);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
  })();
  
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });






//pokedex... my favourite seven 
// let pokemonRepository = (function () {
//     let pokemonList = [];
//     let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; 

// pokemonRepository.loadlist().then(function() {
//     pokemonRepository.getAll().foreach(function(pokemon) {
//         pokemonRepository.addListItem(pokemon);
//     });
//     });

//     function addListitem(pokemon) {

//         let pokemonName = pokemon.name; //start var reaction
//         let pokemonHeight = pokemon.height;

//         //Find Unordered list in index.html
//         let ulItem = document.querySelector('.pokemon-list');
//         // Create a list item in unordered list
//         let liItem = document.createElement('li');
        
//         // create button and add class
//         let button = document.createElement('button');
//         button.innerText = pokemonName;
//         button.classList.add('.button-list');

//         // Add button to list item
//         liItem.appendChild(button);
//         // Add list item to Unordered list
//         ulItem.appendChild(liItem);
//          addEventListener(button, pokemon) 
//     }
//     function loadlist() {
//         return fetch(apiUrl).then(function (response) {
//             return response.json();
//             }).then(function (json) {
//                 json.results.forEach(function (item)
//                 {
//                     let pokemon = {
//                         name = item.name,
//                         detailsUrl: item.url
//                     };
//                     add(pokemon);
//             });
//         }).catch(function (e) {
//             console.error(e);
//         })
//     }
//      return {
//         add: add,
//         getAll: getAll,
//         loadlist: loadlist
//     };
// })();
//     function showDetails(pokemon) {
//         console.log(pokemon)
//     }
    
//     function addEventListener(button, pokemon) {
//         button.addEventListener('click', function() {
//             showDetails(pokemon);

//         })
//     }
//     function getAll() {
//         return pokemonList;
//     }
//     function add(item) {
//         return pokemonList.push(item);
//     }
//     return{
//         getAll: getAll,
//         add: add,
//         addListitem: addListitem,
//     };
// })();
// for (let i = 0; i < pokemonRepository.getAll().length; i++) {
//     let pokemonList = pokemonRepository.getAll()
//     let pokemon = pokemonList[i];
    
//     pokemonRepository.addListitem(pokemon);

// };

 // let pokemonList = [
    // {
    //     name: 'Quagsire',
    //     height: 7.4,
    //     types: ['water', 'ground'] 
    // },
    // {
    //     name: 'Arcanine',
    //     height: 1.9,
    //     types: ['fire'],
    // },
    // {
    //     name: 'Breloom',
    //     height: 1.2,
    //     types: ['grass', 'fighting']
    // },
    // {
    //     name: 'Haunter',
    //     height: 0.8,
    //     types: ['posion', 'ghost']
    // },
    // {
    //     name: 'Dragonite',
    //     height: 2.2,
    //     types: ['dragon', 'flying']
    // },
    // {
    //     name: 'Armaldo',
    //     height: 1.5,
    //     types: ['bug', 'rock']
    // },
    // {
    //     name: 'Krokorok',
    //     height: 4.5,
    //     types: ['ground', 'dark']
    // }
    // ];