let counter = 0;
const objMotos = [
  {
    name: "Scooter Elétrica Voltz EV1",
    price: "619,90R$",
    description:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
  },
  {
    name: "Kawasaki",
    price: "860,90R$",
    description:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
  },
];

const toggleModal = document.getElementById("modal__container");

const showFunction = () => {
  toggleModal.classList.toggle("hide");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == toggleModal) {
    showFunction();
  }
};

const showModal = () => {
  showFunction();
  const modalTitle = document.getElementById("modal__title");
  const modalDescription = document.getElementById("modal__description");
  const modalImage = document.getElementById("modal__image");
  modalTitle.innerHTML = objMotos[counter].name;
  modalDescription.innerHTML = objMotos[counter].description;
  modalImage.src = `./static/moto${counter}.svg`;
};

const move = () => {
  const moto = document.getElementsByClassName("moto")[0];
  const nomeMoto = document.getElementById("nome__moto");
  const precoMoto = document.getElementById("preço__moto");
  if (counter === 0) {
    counter = 1;
  } else {
    counter = 0;
  }
  nomeMoto.innerHTML = objMotos[counter].name;
  precoMoto.innerHTML = objMotos[counter].price;
  moto.src = `./static/moto${counter}.svg`;
};
