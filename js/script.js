let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]


for(let i=0; i<pokemonList.height; i++){
console.log(pokemonList[i])
if (pokemonList[i].height <19 && person[i].age >13){
    console.log(person[i].name + " is a teenager");
  }else if (person[i].age <13){
    console.log(person[i].name + " is a child");
  }else {
    console.log(person[i].name + " is an adult");
  }
}
