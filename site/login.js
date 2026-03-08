function cadastrar(){

let usuario = document.getElementById("novoUsuario").value;
let senha = document.getElementById("novaSenha").value;
let fotoInput = document.getElementById("fotoPerfil");
let msg = document.getElementById("msg");

if(usuario === "" || senha === ""){
msg.innerText = "Preencha usuário e senha!";
msg.style.color = "red";
return;
}

let foto = fotoInput.files[0];

if(foto){

let reader = new FileReader();

reader.onload = function(e){

let conta = {
usuario: usuario,
senha: senha,
foto: e.target.result
};

localStorage.setItem("conta", JSON.stringify(conta));

/* deixa logado */
localStorage.setItem("logado","true");

alert("Conta criada com sucesso!");

window.location.href = "inicio.html";

};

reader.readAsDataURL(foto);

}else{

let conta = {
usuario: usuario,
senha: senha,
foto: ""
};

localStorage.setItem("conta", JSON.stringify(conta));

localStorage.setItem("logado","true");

alert("Conta criada com sucesso!");

window.location.href = "inicio.html";

}

}