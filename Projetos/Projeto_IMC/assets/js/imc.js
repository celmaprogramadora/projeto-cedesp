const form = document.getElementById("form");
form.addEventListener("submit",function(event) {
event.preventDefault();
const peso = document.getElementById("weight").value;
const altura = document.getElementById("height").value;

 const imc = peso / (altura *altura)

 document.getElementById("infos").classList.remove("hidden");

let descricao;

const campoImc = document.getElementById("value");

campoImc.classList.add("attention");


// condições do imc
if(imc<18.5) {
    descricao = "você está abaixo do seu peso!"
}
else if((imc>18.5)&&(imc<=25)){
   descricao = "você no seu peso ideal!"
campoImc.style.color = "green" 
}

else if((imc > 25) && (imc <= 30)) {
    descricao = "cuidado! você está acima do peso!"
}


else if((imc>30)&&(imc<=35)){
    descricao = "cuidado você está com obesidade moderada!"
}
    
else if((imc>35)&&(imc<=40)){
       descricao = "cuidado você está com obsidade severa"
}

else {
    descricao = "cuidado você está com obsidade mórbida"
};





document.getElementById("description").textContent = descricao;








campoImc.textContent = imc.toFixed(2)

 
 });

