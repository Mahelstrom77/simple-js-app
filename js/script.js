let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
]
let name1='Pikachu';
let name2='Vileplume';
let name3='Gengar';

for(let i=0; i<pokemonList.length; i++){
console.log(pokemonList[i])
    if (pokemonList[i].height >0 && pokemonList[i].height<=1){
            console.log(pokemonList[i].name + " is Pikachu");
                document.write(name1)
}

     if (pokemonList[i].height>1 && pokemonList[i].height<2.4){
            console.log(pokemonList[i].name + " is Vileplume");
                document.write(name2)
    }

    if (pokemonList[i].height>2 && pokemonList[i].height<3){
            console.log(pokemonList[i].name + " is Gengar");
                document.write(name3)
        }
}
   