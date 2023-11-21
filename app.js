function validacao(){
    const nome = document.getElementsByClassName("nome").value;
    const email = document.querySelector("#email").value;
    const senha1 = document.getElementsByClassName("senha1").value;
    const senha2 = document.getElementsByClassName("senha2").value;

    //validação de campos vazios
   if(nome == '' || email == '' || senha1 == '' || senha2 == ''){
    alert("Por favor, preencha os campos vazios!")
    return
   }
   //validação do campo do email
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if(emailRegex.test()){
    alert("Digite um E-mail válido!")
    return
   }
   //verificando o tamanho da senha
   if(senha1.length > 8 || senha2.length > 8){
    alert("A senha excedeu a quantidade de caracteres.")
    return
   }
   if(senha1 !== senha2 || senha2 !== senha1){
    alert("A senhas não coincidem, Digite novamente.")
    return
   }
   alert("Seu cadastro  foi realizado com sucesso!")
}
function darkMode(){
    const pagina = document.body;

    pagina.classList.toggle("dark-mode");

    const botao = document.getElementById("bdark");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if(isDarkMode == true){
       botao.textContent = "Modo Claro"
    }else{
       botao.textContent = "Modo Escuro"
}}

