window.onload = function () {
  const spanData = document.getElementById('spanData');
  const spanFone = document.getElementById('spanFone');
  spanData.textContent = 'campo não obrigatório';
  spanFone.textContent = 'campo não obrigatório';
  document.querySelector('#limpar').style.display = 'none';
  document.querySelector('#envio').style.display = 'none';
  document.querySelector('#alterar').style.display = 'none';
  const botaoVerif = document.querySelector('#verificador');
  botaoVerif.addEventListener('click', validaForm);
};

function mostrarBotoes() {
  document.querySelector('#limpar').style.display = 'block';
  document.querySelector('#envio').style.display = 'block';
  document.querySelector('#alterar').style.display = 'block';
}

const form = document.getElementsByName('formulario');

function mostrarDados() {
  const nome = document.querySelector('#nome');
  const email = document.querySelector('#email');
  const cpf = document.querySelector('#cpf');
  const data = document.querySelector('#data');
  const telefone = document.querySelector('#telefone');
  const resultado = document.querySelector('.resultado');
  const radio = document.getElementsByName('estadocivil');
  const checkbox = document.getElementsByName('motivo');
  resultado.style.color = 'white';
  resultado.style.background = 'rgb(108, 74, 182)';
  resultado.innerHTML = 'DADOS INSERIDOS' + '<br>';
  resultado.innerHTML += 'Nome: ' + nome.value + '<br>';
  resultado.innerHTML += 'Cpf: ' + cpf.value + '<br>';
  resultado.innerHTML += 'Email: ' + email.value + '<br>';
  resultado.innerHTML += 'Data: ' + data.value + '<br>';
  resultado.innerHTML += 'Telefone: ' + telefone.value + '<br>';
  resultado.innerHTML += 'Estado Civil: ';
  for (let item of radio) {
    if (item.checked) resultado.innerHTML += item.value + '<br>';
  }
  resultado.innerHTML += 'Motivo(s) do Contato: ';
  for (let item of checkbox) {
    if (item.checked) resultado.innerHTML += item.id + ',';
  }
}

function validaForm(e) {
  let quantValidador = 0;
  const form = document.querySelector('form');
  console.log(e);
  console.log(form);
  e.preventDefault();
  const spanNome = document.getElementById('spanNome');
  const spanCpf = document.getElementById('spanCpf');
  const spanEmail = document.getElementById('spanEmail');
  const bordaNome = document.getElementById('nome');
  const bordaCpf = document.getElementById('cpf');
  const bordaEmail = document.getElementById('email');
  //VERIFICA NOME VAZIO

  if (form.nome.value == '') {
    spanNome.textContent = 'NOME NÃO PODE SER VAZIO';
    bordaNome.style.border = ' 2px solid red';
    return false;
  } else {
    quantValidador++;
    spanNome.textContent = '';
    bordaNome.style.border = ' 2px solid gray';
  }

  //VERIFICA CPF VAZIO
  if (form.cpf.value == '') {
    spanCpf.textContent = 'CPF NÃO PODE SER VAZIO';
    bordaCpf.style.border = ' 2px solid red';
    return false;
  } else {
    if (form.cpf.value.length != 11) {
      spanCpf.textContent = 'CPF TEM QUE TER 11 DÍGITOS';
      bordaCpf.style.border = ' 2px solid red';
      return false;
    } else {
      quantValidador++;
      spanCpf.textContent = '';
      bordaCpf.style.border = ' 2px solid gray';
    }
  }

  //VERIFICA EMAIL VAZIO @  e .com
  if (form.email.value == '') {
    spanEmail.textContent = 'EMAIL NÃO PODE SER VAZIO';
    bordaEmail.style.border = ' 2px solid red';
    return false;
  } else {
    if (form.email.value.search('@') == -1) {
      spanEmail.textContent = 'Email sem @';
      bordaEmail.style.border = ' 2px solid red';
      return false;
    } else if (form.email.value.indexOf('.com') == -1) {
      spanEmail.textContent = 'Email sem .com';
      bordaEmail.style.border = ' 2px solid red';
      return false;
    } else {
      quantValidador++;
      spanEmail.textContent = '';
      bordaEmail.style.border = ' 2px solid gray';
    }
  }

  // VERIFICA SE ESCOLHEU ESTADO CIVIL
  let verificaRadio = false;
  const listaCivil = document.querySelectorAll('.alternativas');
  const tituloCivil = document.getElementById('civil');
  const bordaCivil = document.querySelector('.estadoCivil');
  for (let radio of listaCivil)
    if (radio.checked) {
      quantValidador++;
      tituloCivil.textContent = 'Estado civil';
      bordaCivil.style.border = '2px solid gray';
      verificaRadio = true;
      break;
    } else {
      tituloCivil.textContent = 'Escolha pelo menos 1';
      bordaCivil.style.border = '2px solid red';
    }

  if (!verificaRadio) return false;

  //VERIFICA MOTIVO CONTATO PELO MENOS 1
  const listaContato = document.querySelectorAll('.alternativas2');
  const tituloCont = document.querySelector('.contato');
  const bordaContato = document.querySelector('.motivoContato');
  let quant = 0;
  for (let checkbox of listaContato) {
    if (checkbox.checked) {
      quant++;
    }
  }
  if (quant == 0 || quant > 2) {
    tituloCont.textContent = 'Escolha apenas 1 ou 2 opções';
    bordaContato.style.border = '2px solid red';
    return false;
  } else {
    quantValidador++;
    tituloCont.textContent = 'Motivo do Contato';
    bordaContato.style.border = '2px solid gray';
  }
  /////VERIFICA SE FORMVALIDO == TRUE OU FALSE/////
  //const verifi = e.submitter.innerHTML;

  /////VERIFICA SE FORMVALIDO == TRUE OU FALSE/////
  if (quantValidador != 5) {
    e.preventDefault();
    return false;
  } else {
    quantValidador = 0;
    e.preventDefault();
    mostrarDados();
    visualizaOpc();
    mostrarBotoes();

    const buttonEnviar = document.querySelector('#envio');
    buttonEnviar.addEventListener('click', e => {
      e.preventDefault();
      quantValidador = 0;

      if (form.nome.value == '') {
        spanNome.textContent = 'NOME NÃO PODE SER VAZIO';
        bordaNome.style.border = ' 2px solid red';
        return false;
      } else {
        quantValidador++;
        spanNome.textContent = '';
        bordaNome.style.border = ' 2px solid gray';
      }

      if (form.cpf.value == '') {
        spanCpf.textContent = 'CPF NÃO PODE SER VAZIO';
        bordaCpf.style.border = ' 2px solid red';
        return false;
      } else {
        if (form.cpf.value.length != 11) {
          spanCpf.textContent = 'CPF TEM QUE TER 11 DÍGITOS';
          bordaCpf.style.border = ' 2px solid red';
          return false;
        } else {
          quantValidador++;
          spanCpf.textContent = '';
          bordaCpf.style.border = ' 2px solid gray';
        }
      }

      if (form.email.value == '') {
        spanEmail.textContent = 'EMAIL NÃO PODE SER VAZIO';
        bordaEmail.style.border = ' 2px solid red';
        return false;
      } else {
        if (form.email.value.search('@') == -1) {
          spanEmail.textContent = 'Email sem @';
          bordaEmail.style.border = ' 2px solid red';
          return false;
        } else if (form.email.value.indexOf('.com') == -1) {
          spanEmail.textContent = 'Email sem .com';
          bordaEmail.style.border = ' 2px solid red';
          return false;
        } else {
          quantValidador++;
          spanEmail.textContent = '';
          bordaEmail.style.border = ' 2px solid gray';
        }
      }

      for (let radio of listaCivil)
        if (radio.checked) {
          quantValidador++;
          tituloCivil.textContent = 'Estado civil';
          bordaCivil.style.border = '2px solid gray';
          verificaRadio = true;
          break;
        } else {
          tituloCivil.textContent = 'Escolha pelo menos 1';
          bordaCivil.style.border = '2px solid red';
        }

      if (!verificaRadio) return false;

      quant = 0;
      for (let checkbox of listaContato) {
        if (checkbox.checked) {
          quant++;
        }
      }
      if (quant == 0 || quant > 2) {
        tituloCont.textContent = 'Escolha apenas 1 ou 2 opções';
        bordaContato.style.border = '2px solid red';
        return false;
      } else {
        quantValidador++;
        tituloCont.textContent = 'Motivo do Contato';
        bordaContato.style.border = '2px solid gray';
      }

      if (quantValidador != 5) {
        e.preventDefault();
        return false;
      }

      document.location.reload(true);
    });
  }
  document.querySelector('#alterar').addEventListener('click', alterar);
}

function alterar() {
  document.getElementById('nome').disabled = false;
  document.getElementById('email').disabled = false;
  document.getElementById('cpf').disabled = false;
  document.getElementById('telefone').disabled = false;
  document.getElementById('data').disabled = false;
  document.getElementById('estadoCivil').disabled = false;
  document.getElementById('motivoContato').disabled = false;
}
function resetar() {
  document.location.reload(true); //recarregar a pagina
}
function visualizaOpc() {
  //não deixa usuario alterar campos
  document.getElementById('nome').disabled = true;
  document.getElementById('email').disabled = true;
  document.getElementById('cpf').disabled = true;
  document.getElementById('telefone').disabled = true;
  document.getElementById('data').disabled = true;
  document.getElementById('estadoCivil').disabled = true;
  document.getElementById('motivoContato').disabled = true;
  document.querySelector('#verificador').style.display = 'none';
}
