let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {
    modalContainer.innerHTML='';
    let type = pokemon.types[0].type.name;
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add(type+'-pokemon');
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('btn');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.forms[0].name;
    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: '+pokemon.height/10 +' m';
    let typeElement = document.createElement('p');
    typeElement.innerText = 'Type: ' +type;
    let img = document.createElement('img');
    img.classList.add('modal-img');
    img.src = pokemon.sprites.other['official-artwork']['front_default'];

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(typeElement);
    modal.appendChild(img);

    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
  
    window.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    let pokemonlist = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
      pokemonlist.push(pokemon);
    }

    function getAll () {
      return pokemonlist;
    }

    function pokemonEventListener(button, pokemon) {
      button.addEventListener('click', showDetails.bind(this, pokemon, button));
    }

    function showLoadingMessage(){
      let loadingMsg = document.querySelector('main');
      let button = document.createElement('button');
      button.innerText = 'Loading Pokemon List...';
      button.classList.add('pokemon-Button-Style');
      loadingMsg.appendChild(button);
    }

    function hideLoadingMessage() {
      let loadingMsg = document.querySelector('main > button');
      loadingMsg.parentElement.removeChild(loadingMsg);
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      showLoadingMessage();
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        hideLoadingMessage();
        showModal(details);
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        // hideLoadingMessage();
        console.error(e);
      });
    }

    function addColor(pokemon, button) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        let type = details.types[0].type.name;
        button.classList.add(type+'-pokemon');
      }).catch(function (e) {
        console.error(e);
      });
    }

    function addListItem(pokemon) {
      let pokemonListElement = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-Button-Style','btn','btn-primary');
      listItem.classList.add('group-list-item');
      addColor(pokemon, button);
      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);
      pokemonEventListener(button, pokemon);
    }

    function loadList() {
      showLoadingMessage();
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          // console.log(pokemon.detailsUrl)
          add(pokemon);
        });
        hideLoadingMessage();
        }).catch(function (e) {
          hideLoadingMessage();
          console.error(e);
        })
    }

    function showDetails(item) {
      loadDetails(item).then(function () {
        console.log(item);
      });
    }

    return {
      add         : add,
      getAll      : getAll,
      addListItem : addListItem,
      loadList    : loadList,
      loadDetails : loadDetails,
      showDetails : showDetails
    };

  }) ();

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      // console.log(pokemon.name)
      pokemonRepository.addListItem(pokemon);
    });
  });




//






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