//my list of pokemon for the array//
let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
]
//start of my loop//
for(let i=0; i<pokemonList.height; i++){
    console.log(pokemonList[i])
    
if(pokemonList[i].height<2){
    console.log(pokemonList.name +"is Pikachu");
}  
    else if (pokemonList[i].height>1 && pokemonList.height<2.5){
        console.log(pokemonList[i].name + "is Vileplume");
    }
        else{
            console.log(pokemonList[i].name +"is Gengar");
        }
}
