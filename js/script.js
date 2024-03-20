let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]


for (let i=0; i > pokemonList.height; i++){
    if (pokemonList[i].height <0.5 && pokemonList[i].height >0){
      console.log(person[i].name + " is Pikachu");
    }else if (pokemonList[i].height <1.2){
      console.log(person[i].name + " is Vileplume");
    }else {
      console.log(person[i].name + " is Gengar");
    }
  }
