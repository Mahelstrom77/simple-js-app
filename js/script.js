let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
]
let name1='Pikachu';
    let name4="(height:7)"

let name2='Vileplume';
    let name5="(height:2)"

let name3='Gengar';
    let name6="(height:2.5)"



for(let i=0; i<pokemonList.length; i++){
    console.log(pokemonList[i])

if (pokemonList[i].height >0 && pokemonList[i].height<=1){
            console.log(pokemonList[i].name + " is Pikachu");
                document.write(name1,name4)
                    
}

if (pokemonList[i].height>1 && pokemonList[i].height<2.4){
            console.log(pokemonList[i].name + " is Vileplume");
                document.write(name2,name5)
    }

if (pokemonList[i].height>2 && pokemonList[i].height<3){
            console.log(pokemonList[i].name + " is Gengar");
                document.write(name3,name6)
        }

if(pokemonList[i].height>2.1){
        console.log('Wow, your big!')
    }
}
   