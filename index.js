const menu = document.getElementById("items__small");

const renderShowList = () => {
  menu.classList.toggle("show");
};

const renderRemoveList = () => {
  menu.classList.toggle("hide");
};

const renderList = () => {
  menu.classList.toggle("hide");
  setTimeout(renderShowList, 1);
};

const removeFromView = () => {
  menu.classList.toggle("show");
  setTimeout(renderRemoveList, 300);
};
