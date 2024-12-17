// let buttons = document.querySelectorAll("button");
// let img = document.getElementById("display");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let check = button.innerHTML;
//     if (check == "Egypt") {
//       img.style.backgroundImage = url("../flags/Egypt.jpg");
//     } else if (check == "UAE") {
//       img.style.backgroundImage = url("../flags/UAE.jpg");
//     } else if (check == "Palestine") {
//       img.style.backgroundImage = url("../flags/Palestine.jpg");
//     } else if (check == "Lebanon") {
//       img.style.backgroundImage = url("../flags/Lebanon.jpg");
//     } else {
//       img.style.display = "none";
//     }
//   });
// });

let buttons = document.querySelectorAll("button");
let img = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let check = button.innerHTML;
    if (check == "Egypt") {
      img.style.backgroundImage = 'url("../flags/Egypt.jpg")';
    } else if (check == "UAE") {
      img.style.backgroundImage = 'url("../flags/UAE.jpg")';
    } else if (check == "Palestine") {
      img.style.backgroundImage = 'url("../flags/Palestine.jpg")';
    } else if (check == "Lebanon") {
      img.style.backgroundImage = 'url("../flags/Lebanon.jpg")';
    } else {
      img.style.backgroundImage = "none";
    }
  });
});
