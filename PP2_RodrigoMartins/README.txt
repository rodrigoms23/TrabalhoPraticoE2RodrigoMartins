Autor do Trabalho: Rodrigo Martins de Souza
Link onde a p�gina est� hospedada

não entendi o que era pra fazer caso enviasse o formulário então coloquei pra relogar a página , do mesmo que o limpar os dados
Meu código depois que clica no verificar e aparece os botoes , o alterar e o limpar funcionam certinho, mas hora que clico pra enviar e peço pra entrar na função de validar o formulario ele da um bug, ou ele verifica e envia mesmo estando errado ,ou não envia mesmo tando certo ou errado
 nessa função ai
 function enviar() {
  validaForm();
  console.log('entrei antes');
  if (enviarForm == true) document.location.reload(true);
}
se eu colocasse 
if(validaForm)
ele da reload em qualquer caso
mas se eu colocasse validaForm == true ou === ele começa a não enviar ,tentei criar uma variavel global e fazer o teste mas mesmo assim não dava 
tive que fazer as verificações tudo de novo pra dar certo