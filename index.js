//Lock mouse when scrolling
let lockmouse = false;

//Get sections that have the class kuon so we can animate it
const sections = document.querySelectorAll(".kuon");

//Hide all sections that aren't the first
for (let i = 1; i < sections.length; i++) {
  sections[i].classList.add("hide");
}

/**
 * Delay time that the animation is rendered when loaded
 * @param {Number} time miliseconds to wait for the next line to be executed
 * @returns
 */
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * An animation function with a delay of 1 second between animation
 * transitions.
 * @param {string} actualSectionId the html element that you want to animate from
 * @param {string} nextSectionId the html element that you want to animate to
 */
const handleAnimation = async (actualSection, nextSection, down = true) => {
  const transition = {
    hide: down ? "hide__transition" : "hide__transition__bottom",
    show: down ? "show__transition" : "show__transition__top",
  };
  //How much we're delaying the animation
  const delayMilliseconds = 500;

  //FIRST SECTION TRANSITION HIDE
  actualSection.classList.add(transition.hide);
  await delay(delayMilliseconds);
  actualSection.classList.add("hide");
  actualSection.classList.remove("show");
  actualSection.classList.remove(transition.hide);

  //NEXT SECTION TRANSITION SHOW
  nextSection.classList.add("show");
  nextSection.classList.add(transition.show);
  await delay(delayMilliseconds);
  nextSection.classList.remove("hide");
  nextSection.classList.remove(transition.show);
};

/**
 * Function for removing scroll text
 * @param {Number} index Check if it's the first element
 */
const removeScrolldown = async (index) => {
  const delayMilliseconds = 500;
  if (index == 0) {
    const scrollElement = document.getElementById("show__scroll");
    scrollElement.classList.add("hide__transition__bottom");
    await delay(delayMilliseconds);
    scrollElement.classList.add("hide");
    scrollElement.classList.remove("show__block");
    scrollElement.classList.remove("hide__transition__bottom");
  }
};

/**
 * Function for showing the text when you're in the first section
 * @param {Number} index
 */
const showScroll = async (index) => {
  const delayMilliseconds = 500;

  if (index == 1) {
    const scrollElement = document.getElementById("show__scroll");
    scrollElement.classList.add("show__block");
    scrollElement.classList.add("show__transition__text");
    await delay(delayMilliseconds);
    scrollElement.classList.remove("show__transition__text");
  }
};

$(window).on("wheel", async function (event) {
  if (event.originalEvent.deltaY !== 0 && lockmouse === false) {
    if (event.originalEvent.deltaY < 0) {
      //Scroll up
      for (let i = 0; i < sections.length; i++) {
        if ($(sections[i]).is(":visible") && i > 0) {
          lockmouse = true;
          showScroll(i);
          await handleAnimation(sections[i], sections[i - 1], false);
          lockmouse = false;
          break;
        }
      }
    } else {
      //Scroll down
      for (let i = 0; i < sections.length - 1; i++) {
        if ($(sections[i]).is(":visible")) {
          lockmouse = true;
          removeScrolldown(i);
          await handleAnimation(sections[i], sections[i + 1], true);
          lockmouse = false;
          break;
        }
      }
    }
  }
});
