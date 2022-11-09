const renderList = () => {
  console.log("HERE");
  const list = document.getElementById("nav__small__links");
  const checkIfHide = list.classList.contains("component__hide");

  if (checkIfHide) {
    list.classList.remove("component__hide");
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.add("whiteBackground");
  } else {
    list.classList.add("component__hide");
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.remove("whiteBackground");
  }
};
