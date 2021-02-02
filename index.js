const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("object");
const emailError = document.querySelector("#object + span.error");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

//show mail syntax error
function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please add a valid email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please add a valid email address";
  }

  emailError.className = "error active";
}

//hide the loading spinner

function loadingHide(){
  document.getElementById("mockupLoading").style.display = "none";
  
}

//show the loading spinner

function loadingShow(){
  document.getElementById("mockupLoading").style.display = "block";
      setTimeout("loadingHide()",500);
}



//Do the email search from main mockup, 
function mainSearch() {
  let status;
  let mail = document.getElementById("object").value;
  let url =
    "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + mail;
  loadingShow();

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(url);
      console.log();
      if (Object.entries(data).length === 0) {
        document.getElementById("mockupNoResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupResult").style.display = "none";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("mockupResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupNoResult").style.display = "none";

        //place results into the HTML
        document.getElementById("nameResult").innerHTML =
          data.first_name + " " + data.last_name;
        document.getElementById("descriptionResult").innerHTML =
          data.description;
        document.getElementById("addressResult").innerHTML = data.address;
        document.getElementById("phoneResult1").innerHTML =
          data.phone_numbers[0];
        document.getElementById("phoneResult2").innerHTML =
          data.phone_numbers[1];
        document.getElementById("phoneResult3").innerHTML =
          data.phone_numbers[2];
        document.getElementById("emailResult").innerHTML = data.email;
        document.getElementById("relativeResult1").innerHTML =
          data.relatives[0];
        document.getElementById("relativeResult2").innerHTML =
          data.relatives[1];
        window.scrollTo(0, 0);
      }
    })
    .catch((err) => console.log(err));
}

//Do the email search from no result mockup
function noResultsSearch() {
  loadingShow();
  document.getElementById("mockupResult").style.display = "none";
  document.getElementById("mockupNoResult").style.display = "none";
  let mail = document.getElementById("objectNoResult").value;
  let url =
    "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + mail;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (Object.entries(data).length === 0) {
        document.getElementById("mockupNoResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupResult").style.display = "none";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("mockupResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupNoResult").style.display = "none";

        //place results into the HTML
        document.getElementById("nameResult").innerHTML =
          data.first_name + " " + data.last_name;
        document.getElementById("descriptionResult").innerHTML =
          data.description;
        document.getElementById("addressResult").innerHTML = data.address;
        document.getElementById("phoneResult1").innerHTML =
          data.phone_numbers[0];
        document.getElementById("phoneResult2").innerHTML =
          data.phone_numbers[1];
        document.getElementById("phoneResult3").innerHTML =
          data.phone_numbers[2];
        document.getElementById("emailResult").innerHTML = data.email;
        document.getElementById("relativeResult1").innerHTML =
          data.relatives[0];
        document.getElementById("relativeResult2").innerHTML =
          data.relatives[1];
        window.scrollTo(0, 0);
      }
    })
    .catch((err) => console.log(err));
}

//Do the email search from result mockup
function resultsSearch() {
  loadingShow();
  document.getElementById("mockupResult").style.display = "none";
  document.getElementById("mockupNoResult").style.display = "none";
  let mail = document.getElementById("objectResult").value;
  let url =
    "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + mail;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (Object.entries(data).length === 0) {
        document.getElementById("mockupNoResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupResult").style.display = "none";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("mockupResult").style.display = "block";
        document.getElementById("mockupMain").style.display = "none";
        document.getElementById("mockupNoResult").style.display = "none";

        //place results into the HTML
        document.getElementById("nameResult").innerHTML =
          data.first_name + " " + data.last_name;
        document.getElementById("descriptionResult").innerHTML =
          data.description;
        document.getElementById("addressResult").innerHTML = data.address;
        document.getElementById("phoneResult1").innerHTML =
          data.phone_numbers[0];
        document.getElementById("phoneResult2").innerHTML =
          data.phone_numbers[1];
        document.getElementById("phoneResult3").innerHTML =
          data.phone_numbers[2];
        document.getElementById("emailResult").innerHTML = data.email;
        document.getElementById("relativeResult1").innerHTML =
          data.relatives[0];
        document.getElementById("relativeResult2").innerHTML =
          data.relatives[1];
        window.scrollTo(0, 0);
      }
    })
    .catch((err) => console.log(err));
}
