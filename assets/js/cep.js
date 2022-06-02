const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

// Validate CEP Input
cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);

  console.log(key);

  console.log(onlyNumbers.test(key));

  // allow only numbers
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

// Evento to get address
cepInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  //   Check if we have a CEP
  if (inputValue.length === 8) {
    getAddress(inputValue);
  }
});

// Get address from API
const getAddress = async (cep) => {

  cepInput.blur();

  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  console.log(data);
  console.log(formInputs);
  console.log(data.erro);

  // Show error and reset form
  if (data.erro === "true") {
 
    

    addressForm.reset();
    toggleMessage("CEP Inválido, tente novamente.");
    return;
  }

  // Activate disabled attribute if form is empty
 

  addressInput.value = data.logradouro;
  cityInput.value = data.localidade;
  neighborhoodInput.value = data.bairro;
  regionInput.value = data.uf;

};

// Add or remove disable attribute


// Show or hide loader


// Show or hide message
const toggleMessage = (msg) => {
  const fadeElement = document.querySelector("#fade");
  const messageElement = document.querySelector("#message");

  const messageTextElement = document.querySelector("#message p");

  messageTextElement.innerText = msg;

  fadeElement.classList.toggle("hide");
  messageElement.classList.toggle("hide");
};

// Close message modal

// Save address
addressForm.addEventListener("submit", (e) => {
  e.preventDefault();


  setTimeout(() => {

    toggleMessage("Endereço salvo com sucesso!");

    addressForm.reset();
  }, 1000);
});
