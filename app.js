var inputTxt = document.querySelector("#translate-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#translate-output");

//server url funtranslation api (Application Programming interface)
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something went wrong  try again after sometime");
}

function getTranslation() {
    //getting textarea value----input
    var inputText = inputTxt.value;
    //calling server --- processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", getTranslation);