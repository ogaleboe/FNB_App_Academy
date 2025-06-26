
let rootPath = "https://mysite.itversity.org/api/ContactBook/"; // with slash
let apiKey = checkApiKey();

function checkApiKey() {
    if(!localStorage.getItem("apiKey")) {
        window.open("..enterApiKey.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
