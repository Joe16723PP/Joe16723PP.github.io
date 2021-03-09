const infoSection = document.querySelector('.infoContainer');
const personalProfile = document.querySelector('.personalProfile');
const skillContainer = document.querySelector('.skillSummary');
const mainContainer = document.querySelector('main');
const expContainer = document.querySelector('.expContainer');
const body = document.body;
const DISPLAY_POSITION = 72; // y value of main container



const detectedScreen = (e) => {
  // console.log(w);
  let currentPosition = window.scrollY;
  let isToggleSkillElement = currentPosition > DISPLAY_POSITION;
  let isToggleExpElement = currentPosition > 300;
  if (isToggleSkillElement) {
    // show element
    personalProfile.className = 'sideCard personalProfile displayBtmToTop';
    skillContainer.className = 'mainCard skillSummary displayRightToLeft';
  } else {
    // hide element
    personalProfile.className = 'sideCard personalProfile hidePersonal';
    skillContainer.className = 'mainCard skillSummary hideSkill';
  }
  
  if (isToggleExpElement) {
    expContainer.className = 'container expContainer show';
  } else {
    expContainer.className = 'container expContainer hide';
  }
}

window.addEventListener('scroll', detectedScreen)