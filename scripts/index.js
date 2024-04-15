const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const variable1 = "houssein"; //String
  const variable2 = "27"; //String

  const variable3 = {
    name: "John",
    age: 25,
    is_graduate: false,
  }; //JS Object

  const variable4 = [
    1,
    false,
    "Hi",
    {
      long: 0,
      lat: 0,
    },
  ];

  localStorage.setItem("name", variable1);
  localStorage.setItem("age", variable2);
  localStorage.setItem("person", JSON.stringify(variable3));
  localStorage.setItem("arr", JSON.stringify(variable4));

  // -------------------------------------------------------

  const three_days = 60 * 60 * 24 * 3;

  document.cookie = `name=${variable1}; max-age=${three_days}`;
  document.cookie = `age=${variable2}; max-age=${three_days}`;
  document.cookie = `person=${JSON.stringify(
    variable3
  )}; max-age=${three_days}`;
  document.cookie = `arr=${JSON.stringify(variable4)}; max-age=${three_days}`;
  window.location.href = "./home.html";
});
