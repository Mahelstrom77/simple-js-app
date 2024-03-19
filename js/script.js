let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]

let pokemonRepo = ('function')
function add(pokemon){
    if(
        typeof pokemon==='height' && 'name' in pokemon
    ){
        pokemonList.push(pokemon);
    } else{
        console.error('pokemon is not correct');
    }
}

function getall(){
    return pokemonList;
}