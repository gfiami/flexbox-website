let fullDate = new Date();
let stringDate = fullDate.toDateString();
let splitedDate = stringDate.split(" ");
let today = ` ${splitedDate[2]} ${splitedDate[1]} ${splitedDate[3]}`;
document.querySelector(".date").innerText = today;
