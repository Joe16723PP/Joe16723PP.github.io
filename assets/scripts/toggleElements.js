const infoSection = document.querySelector(".infoContainer");
const personalProfile = document.querySelector(".personalProfile");
const skillContainer = document.querySelector(".skillSummary");
const mainContainer = document.querySelector("main");
const expContainer = document.querySelector(".expContainer");
const body = document.body;
const DISPLAY_POSITION = 10; // y value of main container

const detectedScreen = (e) => {
  let currentPosition = window.scrollY;
  let isToggleSkillElement = currentPosition > DISPLAY_POSITION;
  let isToggleExpElement = currentPosition > 300;
  onToggleElement(isToggleExpElement, isToggleSkillElement);
};

const onToggleElement = (toggleExp, toggleSkill) => {
  if (toggleSkill) {
    // show element
    personalProfile.className = "sideCard personalProfile displayBtmToTop";
    skillContainer.className = "mainCard skillSummary displayRightToLeft";
  } else {
    // hide element
    personalProfile.className = "sideCard personalProfile hidePersonal";
    skillContainer.className = "mainCard skillSummary hideSkill";
  }

  if (toggleExp) {
    expContainer.className = "container expContainer show";
  } else {
    expContainer.className = "container expContainer hide";
  }
};

const mainToggleElement = () => {
  isDesktop = body.clientWidth > 1200;

  if (isDesktop) {
    window.addEventListener("scroll", detectedScreen);

    window.addEventListener("touchmove", (e) => {
      let clientY = e.touches[0].clientY;
      let currentPosition = clientY;
      let isToggleSkillElement = currentPosition > 100;
      let isToggleExpElement = currentPosition > 300;
      onToggleElement(isToggleExpElement, isToggleSkillElement);
    });
  } else {
    console.log("mobile");
    personalProfile.className = "sideCard personalProfile";
    skillContainer.className = "mainCard skillSummary";
    expContainer.className = "container expContainer";
  }
};

mainToggleElement();
