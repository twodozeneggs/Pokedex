//pokedex... my favourite seven 
let PokemonList = [
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

for (let i = 0; i < PokemonList.length; i++) {
    let reaction = ""; //start var reaction
    let pokemonheight = pokemonlist[i].height;

    if(pokemonList[i].height < 2){
        reaction = "oh thats cute! <br />" //reaction height when the pokemon height is less than 2m
    }   else if (pokemonHeight > 2 && pokemonHeight <= 4){
        reaction = "This one is big <br />"; // reaction when height is between 2m and 4m   
    } else {
        reaction = "That's not fitting inside <br />"; // reaction if height is larger than 4m
    }
        document.write(
        (pokemonList[i].name + " ( " + "height: " + pokemonList[i].height + ") - " + reaction "<br />"); //sending HTML the pokemon's name, height and reaction 
    }

    

