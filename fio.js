let username = document.querySelector("#userinput");
let transform = document.querySelector("#transform");
let userinput;
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let middlename = document.querySelector("#patronymic");
let newArray;
let filteredNewArray;

//Bulgakova olga igorevna

function transformUsername() {
  document.querySelector(".array").innerHTML = "";
  document.querySelector(".array").innerHTML += username.value;
  console.log(username.value);

  if (username.value == "") {
    document.querySelector(".array").innerHTML += "No data entered";
  }

  let clean = username.value.trim("username");
  console.log(clean);

  newArray = clean.split(" ");
  console.log(newArray);
  filteredNewArray = newArray.filter(Boolean);

  for (let i = 0; i < filteredNewArray.length; i++) {
    let big = "";
    let small = "";
    let innerarray = filteredNewArray[i];
    for (let y = 0; y < innerarray.length; y++) {
      if (y == 0) big = innerarray[y].toUpperCase();
      else small += innerarray[y].toLowerCase();
    }
    innerarray = big + small;
    filteredNewArray[i] = innerarray;
    console.log(innerarray);
  }
  console.log(filteredNewArray);

  firstname.value = filteredNewArray[1];
  console.log(firstname.value);

  lastname.value = filteredNewArray[0];
  console.log(lastname.value);

  middlename.value = filteredNewArray[2];
  console.log(middlename.value);
}

document.querySelector(".clearData").addEventListener("click", () => {
  username.value = "";
  document.querySelector(".array").innerHTML = "";
  firstname.value = "";
  lastname.value = "";
  middlename.value = "";
});
