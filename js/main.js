"use strict";
// Aside Toggle
const aside = document.querySelector("aside");
const togglerOn = document.querySelector(".toggler-on");
const togglerOff = document.querySelector(".toggler-off");
const main = document.querySelector("main");
const header = document.querySelector("header");

togglerOn.addEventListener("click", function () {
  aside.classList.add("visible");
  main.classList.add("move");
  header.classList.add("move");
  this.style.opacity = "0";
});
togglerOff.addEventListener("click", function () {
  aside.classList.remove("visible");
  main.classList.remove("move");
  header.classList.remove("move");
  togglerOn.style.opacity = "1";
});
//====================================================
//Options ON/OFF
const option = document.querySelectorAll(".option");

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function (e) {
    if (e.target.checked === true) {
      option[i].classList.add("checked");
      option[i].firstElementChild.firstElementChild.textContent = "ON";
    } else if (e.target.checked === false) {
      option[i].classList.remove("checked");
      option[i].firstElementChild.firstElementChild.textContent = "OFF";
    }
  });
}
//====================================================
//DropDown Toggle Margin
const dropTog = document.querySelector(".dropdown-toggle");
const options = document.querySelector(".options");
const item = document.querySelectorAll(".dropdown-item");
const room = document.querySelector(".thermometer h4");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    options.classList.remove("down");
    let roomName = item[i].textContent;
    room.textContent = `${roomName} Temperature`;
    dropTog.textContent = roomName;
    if (item[i].textContent === dropTog.textContent) {
      item[i].textContent = item[i].textContent;
    }
    item[i].textContent === "Kitchen Room"
      ? (value.textContent = "20°C")
      : item[i].textContent === "Bath Room"
      ? (value.textContent = "21°C")
      : item[i].textContent === "Bedroom Room"
      ? (value.textContent = "22°C")
      : (value.textContent = "22°C");
  });
}
dropTog.addEventListener("click", function () {
  options.classList.toggle("down");
});
//====================================================
// Devices ON/OFF
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const devices = document.querySelectorAll(".device");
const input = document.querySelectorAll(".device input");

//All At The Same Time
on.addEventListener("click", function () {
  this.style.backgroundColor = "#0180f5";
  off.style.backgroundColor = "black";
  for (let i = 0; i < devices.length; i++) {
    devices[i].classList.remove("off");
    devices[
      i
    ].firstElementChild.lastElementChild.firstElementChild.textContent = "ON";
  }
  for (let j = 0; j < devices.length; j++) {
    input[j].checked = true;
  }
});

off.addEventListener("click", function () {
  this.style.backgroundColor = "#0180f5";
  on.style.backgroundColor = "black";
  for (let i = 0; i < devices.length; i++) {
    devices[i].classList.add("off");
    devices[
      i
    ].firstElementChild.lastElementChild.firstElementChild.textContent = "OFF";
  }
  for (let j = 0; j < devices.length; j++) {
    input[j].checked = false;
  }
});

//All Alone
const colors = ["#7230f9", "#0180f5", "#f86959", "#2fc09f"];

for (let i = 0; i < devices.length; i++) {
  devices[i].addEventListener("click", function (e) {
    if (e.target.checked === true) {
      devices[i].style.cssText = `background-color : ${colors[i]} !important`;
      devices[
        i
      ].firstElementChild.lastElementChild.firstElementChild.textContent = "ON";
    } else if (e.target.checked === false) {
      devices[i].style.cssText = `background-color : grey !important`;
      devices[
        i
      ].firstElementChild.lastElementChild.firstElementChild.textContent =
        "OFF";
    }
  });
}
//====================================================
//Thermometer Counter
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let value = document.querySelector(".value");
const thermometer = document.querySelector(".thermometer");

plus.addEventListener("click", function () {
  let newValue = Number(parseInt(value.textContent, 10) + 1);
  value.textContent = `${newValue}°C`;
  if (newValue >= 40) {
    thermometer.style.backgroundColor = "#ff0000bf";
  } else if (newValue > 10 && newValue < 40) {
    if (
      document.head.lastElementChild.getAttribute("href") === "css/style.css"
    ) {
      thermometer.style.backgroundColor = "transparent";
    } else if (
      document.head.lastElementChild.getAttribute("href") === "css/light.css"
    ) {
      thermometer.style.backgroundColor = "white";
    }
  }
});

minus.addEventListener("click", function () {
  let newValue = Number(parseInt(value.textContent, 10) - 1);
  value.textContent = `${newValue}°C`;
  if (newValue <= 10) {
    thermometer.style.backgroundColor = "#0180f58f";
  } else if (newValue > 10 && newValue < 40) {
    if (
      document.head.lastElementChild.getAttribute("href") === "css/style.css"
    ) {
      thermometer.style.backgroundColor = "transparent";
    } else if (
      document.head.lastElementChild.getAttribute("href") === "css/light.css"
    ) {
      thermometer.style.backgroundColor = "white";
    }
  }
});
//===============================================
//Notifications
const nofTog = document.querySelector(".notif-tog");
const notifications = document.querySelector(".notifications");
const readAll = document.querySelector(".read-all");

document.addEventListener("click", (event) => {
  if (event.target == nofTog) {
    notifications.classList.toggle("show");
  } else if (
    !notifications.contains(event.target) &&
    notifications.classList.contains("show")
  ) {
    notifications.classList.remove("show");
    actions.classList.remove("show");
  }
});

//Actions

const actionsToggler = document.querySelectorAll(".actionsToggler");
const closeActions = document.querySelector(".closeActions");
const actions = document.querySelector(".actions");

const today = document.querySelector(".today");
const yesterday = document.querySelector(".yesterday");
const lastWeek = document.querySelector(".last-week");

const todayNotifications = document.querySelectorAll(".today .col-");
const yesterdayNotifications = document.querySelectorAll(".yesterday .col-");
const lastWeekNotifications = document.querySelectorAll(".last-week .col-");
const removeNotification = document.querySelector(".removeNotif");
const readNotification = document.querySelector(".readNotif");

for (let i = 0; i < actionsToggler.length; i++) {
  actionsToggler[i].addEventListener("click", function () {
    actions.classList.add("show");
  });
}
closeActions.addEventListener("click", function () {
  actions.classList.remove("show");
});

//No Notifications

const allNotifications = document.querySelectorAll(
  ".notifications-container .col-"
);
const allNot = [...allNotifications];
const displayNoNotificationsMsg = function () {
  const allNotifications = document.querySelectorAll(
    ".notifications-container .col-"
  );
  const notificationsContainer = document.querySelector(
    ".notifications-container"
  );
  const noNotifications = document.querySelector(".no-notifications");
  const allNot = [...allNotifications];
  const isEmpty = allNot.every((el) => el.classList.contains("d-none"));
  if (isEmpty) {
    notificationsContainer.classList.add("d-none");
    noNotifications.classList.remove("d-none");
  }
};

//Read All
readAll.addEventListener("click", function () {
  allNot.forEach((e) => e.classList.remove("read"));
});

//Today

const todayNot = [...todayNotifications];
const todayP = document.createElement("p");
const todayMsg = document.createTextNode("No notifications today");
todayP.appendChild(todayMsg);
todayP.style.marginTop = "15px";

for (let notif = 0; notif < todayNotifications.length; notif++) {
  todayNotifications[notif].addEventListener("click", function () {
    actions.addEventListener("click", (e) => {
      if (e.target === removeNotification) {
        todayNotifications[notif].classList.add("d-none");
        actions.classList.remove("show");
        const isEmpty = todayNot.every(function (el) {
          return el.classList.contains("d-none");
        });
        if (isEmpty) {
          today.append(todayP);
          displayNoNotificationsMsg();
        }
      }
      if (e.target === readNotification) {
        todayNotifications[notif].classList.remove("read");
        actions.classList.remove("show");
      }
    });
  });
}

//Yesterday

const yesterdayNot = [...yesterdayNotifications];

const yesterdayP = document.createElement("p");
const yesterdayMsg = document.createTextNode("No notifications yesterday");
yesterdayP.appendChild(yesterdayMsg);
yesterdayP.style.marginTop = "15px";

for (let notif = 0; notif < yesterdayNotifications.length; notif++) {
  yesterdayNotifications[notif].addEventListener("click", function () {
    actions.addEventListener("click", (e) => {
      if (e.target === removeNotification) {
        yesterdayNotifications[notif].classList.add("d-none");
        actions.classList.remove("show");
        const isEmpty = yesterdayNot.every(function (el) {
          return el.classList.contains("d-none");
        });
        if (isEmpty) {
          yesterday.append(yesterdayP);
          displayNoNotificationsMsg();
        }
      }
      if (e.target === readNotification) {
        yesterdayNotifications[notif].classList.remove("read");
        actions.classList.remove("show");
      }
    });
  });
}
//last Week

const lastWeekNot = [...lastWeekNotifications];
const lastWeekP = document.createElement("p");
const lastWeekMsg = document.createTextNode("No notifications yesterday");
lastWeekP.appendChild(lastWeekMsg);
lastWeekP.style.marginTop = "15px";

for (let notif = 0; notif < lastWeekNotifications.length; notif++) {
  lastWeekNotifications[notif].addEventListener("click", function () {
    actions.addEventListener("click", (e) => {
      if (e.target === removeNotification) {
        lastWeekNotifications[notif].classList.add("d-none");
        actions.classList.remove("show");
        const isEmpty = lastWeekNot.every(function (el) {
          return el.classList.contains("d-none");
        });
        if (isEmpty) {
          lastWeek.append(lastWeekP);
          displayNoNotificationsMsg();
        }
      }
      if (e.target === readNotification) {
        lastWeekNotifications[notif].classList.remove("read");
        actions.classList.remove("show");
      }
    });
  });
}

//===============================================
//Profile
const userName = document.querySelector(".userName");
const mainUserName = document.querySelector(".mainUserName");
const permission = document.querySelector(".permission");

const profile = document.querySelector(".profile");

const images = document.querySelectorAll(".users img");
const avatar = document.querySelector(".avatar");
const profilePic = document.querySelector(".profilePic");

const profileTog = document.querySelector(".profileTog");
const save = document.querySelector(".save");

document.addEventListener("click", (event) => {
  if (event.target == profileTog) {
    profile.classList.toggle("show");
  } else if (
    !profile.contains(event.target) &&
    profile.classList.contains("show")
  ) {
    profile.classList.remove("show");
  }
});
let arr = [];

for (let img = 0; img < images.length; img++) {
  images[img].addEventListener("click", function (e) {
    permission.textContent = "Full Access";
    if (e.target === images[0]) {
      userName.textContent = "Dad";
      profilePic.src = "imgs/dad.png";
    } else if (e.target === images[1]) {
      userName.textContent = "Mom";
      profilePic.src = "imgs/mom.png";
    } else if (e.target === images[2]) {
      userName.textContent = "Sis";
      profilePic.src = "imgs/sis.png";
    } else if (e.target === images[3]) {
      userName.textContent = "Sis";
      profilePic.src = "imgs/sis2.png";
    } else if (e.target === images[4]) {
      userName.textContent = "Walid Zakan";
      profilePic.src = "imgs/avatar.png";
      permission.textContent = "Admin";
    }
    arr.unshift(e.target);
  });
}

save.addEventListener("click", function () {
  profile.classList.remove("show");
  mainUserName.textContent = userName.textContent;
  avatar.src = profilePic.src;
  images[4].classList.remove("d-none");
  for (let el = 0; el < arr.length; el++) {
    arr[el].classList.remove("d-none");
    arr[0].classList.add("d-none");
  }
});

//===============================================
//ModeToggle
const lightMode = document.querySelector(".lightMode");
const darkMode = document.querySelector(".darkMode");
let cssSheet = document.head.lastElementChild.getAttribute("href");

//Light Mode
lightMode.addEventListener("click", function () {
  cssSheet = "css/light.css";
  document.head.lastElementChild.setAttribute("href", cssSheet);
  lightMode.classList.add("d-none");
  darkMode.classList.remove("d-none");
  thermometer.style.backgroundColor = "white";
});
//Dark Mode
darkMode.addEventListener("click", function () {
  cssSheet = "css/style.css";
  document.head.lastElementChild.setAttribute("href", cssSheet);
  darkMode.classList.add("d-none");
  lightMode.classList.remove("d-none");
  thermometer.style.backgroundColor = "transparent";
});
