const myDictionary = [];
let index = 0;

function addWord() {
  const addInput = document.getElementById("new-word-input");
  myDictionary[index++] = addInput.value;
  console.log(myDictionary);
}

let founded = false;

function searchWord() {
  const searchInput = document.getElementById("search-word-input").value;
  myDictionary.forEach(function (element) {
    if (searchInput === element) {
      founded = true;
    }
  });
  checkExistance();
}

//Check if the word exists or not and print a message in page.
function checkExistance() {
  const checkWordExistance = document.getElementById("check-word-existance");
  if (founded == true) {
    checkWordExistance.textContent = "Exists";
    founded = false;
  } else {
    checkWordExistance.textContent = "Does not exist";
  }
}
