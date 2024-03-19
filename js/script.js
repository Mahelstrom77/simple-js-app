let pokemonList=[
    {name: "pikachu", height: 0.4, type: ['electric']},
    {name: "vileplume", height: 1.2, type: ['grass', 'poison']},
    {name: "gengar", height: 1.5, type: ['ghost', 'poison']}
]


for(let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].height<1){
    console.log(pokemonList[i].name + " is Pikachu");
    document.write(Pikachu)
    let name='Pikachu';
    let message= (height=0.4);
    console.log(name+message);
    if (height===0.4){
        console.log('Wow, your small');}

    }else if (pokemonList[i].height>1 && pokemonList[i].height<1.4);{
    console.log(pokemonList[i].name + " is Vileplume");
    document.write(Vileplume)
    let name='Vileplume';
    let message= (height=1.4);
    console.log(name+message);
    
    }else {
    console.log(pokemonList[i].name + " is Gengar");
    document.write(Gengar)
    let name='Gengar';
    let message= (height=1.5);
    console.log(name+message);
    }
}