//my list of pokemon for the array//
let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
];
//start of my loop//
for(let i=0; i<pokemonList.length; i++)
{
    if(pokemonList[i].height<=1){
        document.write(pokemonList[i].name +"pikachu");
    }

    else if(pokemonList[i].height>1 && pokemonList[i].height<2.5){
        document.write(pokemonList[i].name + "vileplume");  
    }
    
    else{
        document.write(pokemonList[i].name + "gengar");
    }
}