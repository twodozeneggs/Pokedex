//pokedex... my favourite seven 
let pokemonRepository = (function() { 
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

for (let i = 0; i < PokemonList.length; i++) {
    let reaction = "";
    let PokemonHeight = pokemonList[i].height;

    if (PokemonHeight < 1) {
        reaction =  "Wow what a cutie!";
    } else if (PokemonHeight >1 && PokemonHeight <= 5){
        reaction = "This one is pretty big";
    }
    document.write(
        pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - '+ reaction + '<br>'
    );

    }

