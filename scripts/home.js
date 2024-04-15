const variable1 = localStorage.getItem("name");
const variable2 = localStorage.getItem("age");
const variable3 = JSON.parse(localStorage.getItem("person"));
const variable4 = JSON.parse(localStorage.getItem("arr"));

console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);

// -------------------------------------------------------
console.log("-------------------------------------------------------");

const cookies = decodeURI(document.cookie).split("; ");

let value1 = "";
let value2 = "";
let value3 = "";
let value4 = "";

cookies.forEach((cookie) => {
  const array = cookie.split("=");
  if (array[0] === "name") {
    value1 = array[1];
  } else if (array[0] === "age") {
    value2 = array[1];
  } else if (array[0] === "person") {
    value3 = JSON.parse(array[1]);
  } else {
    value4 = JSON.parse(array[1]);
  }
});

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
// -------------------------------------------------------

const remove_age = document.getElementById("remove_age");
const clear = document.getElementById("clear");

remove_age.addEventListener("click", () => {
  localStorage.removeItem("age");
  document.cookie = "age=; max-age=0";
});

clear.addEventListener("click", () => {
  localStorage.clear();
  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0];
    document.cookie = `${name}=; max-age=0`;
  });
});
