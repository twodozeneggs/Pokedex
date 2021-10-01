//pokedex... my favourite seven 
let pokemonRepository = (function () {

    let pokemonList = [
    {
        name: 'Quagsire',
        height: 7.4,
        types: ['water', 'ground'] 
    },
    {
        name: 'Arcanine',
        height: 1.9,
        types: ['fire'],
    },
    {
        name: 'Breloom',
        height: 1.2,
        types: ['grass', 'fighting']
    },
    {
        name: 'Haunter',
        height: 0.8,
        types: ['posion', 'ghost']
    },
    {
        name: 'Dragonite',
        height: 2.2,
        types: ['dragon', 'flying']
    },
    {
        name: 'Armaldo',
        height: 1.5,
        types: ['bug', 'rock']
    },
    {
        name: 'Krokorok',
        height: 4.5,
        types: ['ground', 'dark']
    }
    ];

    function addListitem(pokemon) {

        let pokemonName = pokemon.name; //start var reaction
        let pokemonHeight = pokemon.height;

        //Find Unordered list in index.html
        let ulItem = document.querySelector('.pokemon-list');
        // Create a list item in unordered list
        let liItem = document.createElement('li');
        
        // create button and add class
        let button = document.createElement('button');
        button.innerText = pokemonName;
        button.classList.add('.button-list');

        // Add button to list item
        liItem.appendChild(button);
        // Add list item to Unordered list
        ulItem.appendChild(liItem);

        addEventListener(button, pokemon)
        
    }
    function showDetails(pokemon) {
        console.log(pokemon)
    }
    
    function addEventListener(button, pokemon) {
        button.addEventListener('click', function() {
            showDetails(pokemon);

        })
    }
    function getAll() {
        return pokemonList;
    }
    function add(item) {
        return pokemonList.push(item);
    }
    return{
        getAll: getAll,
        add: add,
        addListitem: addListitem,
    };
})();
for (let i = 0; i < pokemonRepository.getAll().length; i++) {
    let pokemonList = pokemonRepository.getAll()
    let pokemon = pokemonList[i];
    
    pokemonRepository.addListitem(pokemon);

};

