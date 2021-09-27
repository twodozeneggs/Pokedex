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

function getAll() {
    return pokemonList;
}
function add(item) {
    return pokemonList.push(item);
}

for (let i = 0; i < pokemonList.length; i++) {
    let pokemonName = pokemonList[i].name; //start var reaction
    let pokemonheight = pokemonList[i].height;
    return {
        getAll: getAll,
        add: add,
    };
});

pokemonRepository.getAll().forEach (function (pokemon) {
    let pokemonName = pokemon.name;
    let pokemonheight = pokemon.height;

    if (pokemonList[i].height >= 2) {
        document.write(

        for (let i=0; i < pokemonList.length; i++) {
            "- Thats a big one!" +
            '</p>'
        );

        console.log(
            pokemonName +
            '' +
            '(Height: ' +
            pokemonheight +
            ')' +
            " - Thats a big one!"
        );
        } else {
            document.write(
                "<p>" + pokemonList[i].name + " (" + "height " + pokemonList[i].height + ") " + "- Wow thats big! <br />")
             console.log(pokemonList[i].name + " " + "(height: " + pokemonheight + ") ");
        }
    }  
    //  if(pokemonList[i].height < 2){
   //     reaction = "oh thats cute! <br />" //reaction height when the pokemon height is less than 2m
    //}   else if (pokemonHeight > 2 && pokemonHeight <= 4){
      //  reaction = "This one is big <br />"; // reaction when height is between 2m and 4m   
    //} else {
      //  reaction = "That's not fitting inside <br />"; // reaction if height is larger than 4m
    //}
        //document.write(
        //(pokemonList[i].name + " ( " + "height: " + pokemonList[i].height + ") - " + reaction <br />"); //sending HTML the pokemon's name, height and reaction 
    // }
