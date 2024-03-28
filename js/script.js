//my list of pokemon for the array//
let pokemonList=[
    {name: "pikachu", height: 1, type: ['electric']},
    {name: "vileplume", height: 2, type: ['grass', 'poison']},
    {name: "gengar", height: 2.5, type: ['ghost', 'poison']}
];
//for adding in my strings//
let text1='(height:1)'
let text2='(height:2)'
let text3='(height:2.5)'


//start of my loop//
for(let i=0; i<pokemonList.length; i++)
{
    if(pokemonList[i].height<=1){
        document.write(pokemonList[i].name +text1);
        
    }
    else if(pokemonList[i].height>1 && pokemonList[i].height<2.5){
        document.write(pokemonList[i].name + text2);
  
    }
    else{
        document.write(pokemonList[i].name +text3);

    }
    //conditional write in//
    if(pokemonList[i].height>2){
        document.write('Wow, thats Big!')
    }
}