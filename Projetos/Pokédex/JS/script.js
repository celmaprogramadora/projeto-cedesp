// variáveis globais

const pokemonName= document.querySelector(".pokemon_name");
const pokemonNumber= document.querySelector(".pokemon_number");
const pokemonImage= document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let seachPokemon = 0;



// conectando com a API

const fetchPokemon= async (pokemon)=> {
const APIResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

if (APIResponse.status===200) {
    const data= await APIResponse.json();

    return data;

} else {
    

}

};

// renderizar os dados da API

const renderPokemon= async (pokemon)=> {
    pokemonName.innerHTML = "carregando...";
    pokemonNumber.innerHTML = "";

const data= await fetchPokemon (pokemon);


if (data) {

    pokemonName.innerHTML=data.name
    pokemonNumber.textContent=data.id;
    pokemonImage.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = ""
    seachPokemon = data.id;

    

    
} else {
    pokemonName.innerHTML = "Não encontrado:c";
    input.value = "";
    pokemonImage.src = "";


    



    
}


console.log(data)

};








//capturarpokemon pelo input:




form.addEventListener("submit",(event) =>{
event.preventDefault();
renderPokemon(input.value.toLowerCase());

});

//Eventos dos botões prev e next
btnNext.addEventListener("click",()=>{
    seachPokemon  += 1;
    renderPokemon(seachPokemon);
    
    
    

})

btnPrev.addEventListener("click", ()=>{
    

    if(seachPokemon > 1){
        seachPokemon  -= 1;
    
    renderPokemon(seachPokemon);
    }
    
})
renderPokemon(2);



