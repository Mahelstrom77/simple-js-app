let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]


for(let i=0; i<pokemonList.length; i++){
    console.log(i);
    
    if (pokemonList[i].height<1){
    console.log(pokemonList[i].name + " is Pikachu");

    }else if (pokemonList[i].height>1 && pokemonList[i].height<1.4);{
    console.log(pokemonList[i].name + " is Vileplume");
    }
}