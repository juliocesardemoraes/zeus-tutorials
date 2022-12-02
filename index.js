//Lock mouse when scrolling
let lockmouse = false;

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
 * @param {string} actualSectionId the id of the section you want to animate from
 * @param {string} nextSectionId the id of the section you want to animate to
 */
const handleAnimation = async (actualSectionId, nextSectionId, down = true) => {
  const actualSection = document.getElementById(actualSectionId);
  const nextSection = document.getElementById(nextSectionId);
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

  //FIRST SECTION TRANSITION SHOW
  nextSection.classList.add("show");
  nextSection.classList.add(transition.show);
  await delay(delayMilliseconds);
  nextSection.classList.remove("hide");
  nextSection.classList.remove(transition.show);
};

const sections = [
  "main__section",
  "website__section",
  "about__section",
  "contact__section",
  "teste__section",
];

$(window).on("wheel", async function (event) {
  if (event.originalEvent.deltaY !== 0 && lockmouse === false) {
    if (event.originalEvent.deltaY < 0) {
      //Scroll up

      for (let i = 0; i < sections.length - 1; i++) {
        const selector = `#${sections[i + 1]}`;
        if ($(selector).is(":visible")) {
          lockmouse = true;
          await handleAnimation(sections[i + 1], sections[i], false);
          lockmouse = false;
          break;
        }
      }
    } else {
      //Scroll down

      for (let i = 0; i < sections.length - 1; i++) {
        const selector = `#${sections[i]}`;
        if ($(selector).is(":visible")) {
          lockmouse = true;
          await handleAnimation(sections[i], sections[i + 1], true);
          lockmouse = false;
          break;
        }
      }
    }
  }
});
