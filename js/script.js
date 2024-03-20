let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
]


for(let i=0; i<pokemonList.length; i++){
console.log(pokemonList[i])
    if (pokemonList[i].height >0 && pokemonList[i].height<=1){
    console.log(pokemonList[i].name + " is Pikachu");

    }else if (pokemonList[i].height>1.3 && pokemonList[i]<1.4);{
    console.log(pokemonList[i].name + " is Vileplume");
    }

    if (pokemonList[i].height>2 && pokemonList[i].height<3){
    console.log(pokemonList[i].name + " is Gengar");
        }
    }
