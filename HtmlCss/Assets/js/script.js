const nome = window.document.getElementById('nome')
// const input = window.document.getElementsByTagName('input')

//funções
function lerNome() {
  const txtNome = document.querySelector('#txtNome')
  if(nome.value.length < 3){
    txtNome.innerHTML = '<small>Nome inválido</small>'
  }else{
    txtNome.innerHTML = '<small>Nome válido</small>'
  }

}
