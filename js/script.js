//my list of pokemon for the array//
let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
]
//start of my loop//
for(let i=0; i<pokemonList.length; i++){
    console.log(pokemonList[i])

if (pokemonList[i].height >0 && pokemonList[i].height<=1){
            console.log(pokemonList[i].name + " is Pikachu");
                document.write(pokemonList[i].name + "(height:1)")                 
    }

if (pokemonList[i].height>1 && pokemonList[i].height<2.4){
            console.log(pokemonList[i].name + " is Vileplume");
                document.write(pokemonList[i].name + "(height:2)")
    }

if (pokemonList[i].height>2 && pokemonList[i].height<3){
            console.log(pokemonList[i].name + " is Gengar");
                document.write(pokemonList[i].name + "(height:2.5)");
    }
    //conditional to tell that this pokemon is big//
    }
    let height=2;
    let result;
    if(height>2){
        result='Wow, its big!';
    }
    else{
        result='normal height';
    }

   