//pokedex... my favourite seven 
let PokemonList = [
{
    name: 'Quagsire',
    height: 1.4,
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
    height: 1.6,
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
    height: 1,
    types: ['ground', 'dark']
}
];

for (let i = 0; i < PokemonList.length; i++){
    if(pokemonList[i].height >= 2){
        document.write(pokemonList[i].name + " ( " + "height " + pokemonList[i].height + ") " + "-Wow that's big! <br />");
    }
    else{
        document.write(pokemonList[i] + " ( " + "height " + pokemonList[i].height + ") <br />");
    }
    }
