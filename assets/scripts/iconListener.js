const iconKeys = {
  github: {
    link: "https://github.com/Joe16723PP?tab=repositories",
    icon: "fab fa-github-square",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/jirot-chaitamart-63713417b/",
    icon: "fab fa-linkedin",
  },
  phone: {
    link: "0892734298",
    icon: "fas fa-phone-square-alt",
  },
  email: {
    link: "joe16723@gmail.com",
    icon: "fas fa-envelope-square",
  },
};

// create icon
const createIcon = () => {
  const iconContainer = document.querySelector(".socialGroup");
  for (const icon in iconKeys) {
    if (Object.hasOwnProperty.call(iconKeys, icon)) {
      // const element = iocnKeys[icon];
      iconContainer.innerHTML += `<span class="socialIcon" id="${icon}"
      ><i class="${iconKeys[icon].icon}"></i
    ></span>`;
    }
  }
};
// add icon listener
const addIconListener = () => {
  const iconList = document.querySelectorAll(".socialGroup .socialIcon");
  iconList.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      url = iconKeys[icon.id].link;
      if (icon.id === "email") {
        window.open(`mailto:${url}`);
      } else if (icon.id === "phone") {
        window.open(`tel:${url}`);
      } else {
        window.open(url);
      }
    });
  });
};

const main = () => {
  createIcon();
  addIconListener();
};

main();
