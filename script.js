const inputEl = document.querySelector("#password");
let passwordLength = 16;

function generatePassword() {
  const chars =
    "abcdefghjlmnpqrstuvwxyzABCDEFGHJLMNPQRSTUVWXYZ123456789?!@&*()[]";

  let password = "";

  //faz o sorteio dos caracteres
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  // a senha que é gerada e está dentro da variável password joga para dentro do input

  inputEl.value = password;
}

//API do navegador (clipboard-> é a ária de transferência) inputEl pega o que está escrito no input
function copy() {
  navigator.clipboard.writeText(inputEl.value);
}

// faz a ligação com o DOM
const passwordLengthEl = document.querySelector("#password-length");
//inclui o evento de arastar 'rang' e escuta o evento input
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  generatePassword();
});

//Elemento DOM do button
const copyButtonEl = document.querySelector("#copy");
//escuta o evento de click do butão e chama a função copy
copyButtonEl.addEventListener("click", copy);

generatePassword();
