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
        console.log(pokemonList[i].name +" is pikachu");
    }
    else if(pokemonList[i].height>1 && pokemonList[i].height<2.5){
        console.log(pokemonList[i].name + " is vileplume");  
    }
    else{
        console.log(pokemonList[i].name + " is gengar");
    }document.write(pikachu,vileplume,gengar);
}