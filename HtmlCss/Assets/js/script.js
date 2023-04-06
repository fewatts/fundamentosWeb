const nome = window.document.getElementById('nome')
// const input = window.document.getElementsByTagName('input')
const txtNome = document.querySelector('#txtNome')
const txtEmail = document.querySelector("#txtEmail")
const txtAssunto = document.querySelector("#txtAssunto")
//funções
function lerNome() {
  if(nome.value.length < 3){
    txtNome.innerHTML = '<small>Nome inválido</small>'
  }else{
    txtNome.innerHTML = '<small>Nome válido</small>'
  }

}
function lerEmail() {
  if(email.value.indexOf("@") == -1) {
    txtEmail.innerHTML = '<small>E-mail inválido</small>'
  }else{
    txtEmail.innerHTML = '<small>E-mail válido</small>'
  }

}
function lerAssunto() {
  if(assunto.value.length < 4){
    txtAssunto.innerHTML = '<small>Assunto deve ter mais de 4 caracteres!</small>'
  }else{
    txtAssunto.innerHTML = '<small>Campo validado</small>'
  }

}
