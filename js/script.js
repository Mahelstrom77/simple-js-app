let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]


for(let i=0; i<pokemonList.length; i++){
console.log(pokemonList[i])
    if (pokemonList[i].height<=0 && pokemonList[i].height<0.4){
    console.log(pokemonList[i].name + " is Pikachu");

    }if (pokemonList[i].height>0.5 && pokemonList[i].height<1.4);{
    console.log(pokemonList[i].name + " is Vileplume");
    }

    if (pokemonList[i].height>=1.5 && pokemonList[i].height<2){
    console.log(pokemonList[i].name + " is Gengar");
        }
    }
