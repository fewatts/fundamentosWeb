// const input = window.document.getElementsByTagName('input')
const txtNome = document.querySelector('#txtNome')
const txtEmail = document.querySelector("#txtEmail")
const txtAssunto = document.querySelector("#txtAssunto")

nomeok = emailok = assuntook = false

//funções
function lerNome() {
  if(nome.value.length < 3){
    txtNome.innerHTML = '<small>Nome inválido</small>'
    txtNome.style.color = 'red'
  }else{
    txtNome.innerHTML = '<small>Nome válido</small>'
    txtNome.style.color = 'green'
    nomeok = true
  }

}
function lerEmail() {
  if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = '<small>E-mail inválido</small>'
    txtEmail.style.color = 'red'
  }else{
    txtEmail.innerHTML = '<small>E-mail válido</small>'
    txtEmail.style.color = 'green'
    emailok = true
  }

}
function lerAssunto() {
  if(assunto.value.length > 100 || assunto.value.length < 3){
    txtAssunto.innerHTML = '<small>Assunto deve ter no mínimo 3 e no máximo 100 caracteres!</small>'
    txtAssunto.style.color = 'red'
  }else{
    txtAssunto.innerHTML = '<small>Campo validado</small>'
    txtAssunto.style.color = 'green'
    assuntook = true
  }

}
function enviarForm(){
  if(nomeok == true && emailok == true && assuntook == true){
    alert('Formulário enviado com sucesso!')
  }else{
    alert('Preencha o formulário corretamente antes de enviar!')
  }
    
}
