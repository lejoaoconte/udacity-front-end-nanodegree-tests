import axios from "axios";
function handleSubmit(event) {
  event.preventDefault();

  const resultsArea = document.getElementById("results");
  const formText = document.getElementById("name").value;
  document.getElementById("name").value = "";

  resultsArea.innerHTML = "<h1 class='submit-messages'>Loading...</h1>";

  if (formText === "") {
    resultsArea.innerHTML =
      "<h1 class='submit-messages'>URL is empty, please enter a URL</h1>";
  } else if (!Client.formURLChecker(formText)) {
    resultsArea.innerHTML =
      "<h1 class='submit-messages'>Please enter a valid URL</h1>";
  } else {
    console.log("::: Form Submitted :::");
    axios
      .post("http://localhost:8055/api", { data: { url: formText } })
      .then(({ data }) => {
        if (data.status.msg === "OK") {
          const list = `
            <h1>Results</h1>
            <ul id='list-results'>
              <li class="list-results-items">Agreement: <span>${data.agreement}</span></li>
              <li class="list-results-items">Subjectivity: <span>${data.subjectivity}</span></li>
              <li class="list-results-items">Irony: <span>${data.irony}</span></li>
              <li class="list-results-items">Confidence: <span>${data.confidence}</span></li>
            </ul>
          `;

          resultsArea.innerHTML = list;
        } else {
          resultsArea.innerHTML =
            "<h1 class='submit-messages'>Error on Submit</h1>";
        }
      });
  }
}

export { handleSubmit };
