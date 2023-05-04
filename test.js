let scriptElement = document.querySelector('script');
let script = document.createElement("script");

let largeur = window.screen.width;
console.log(largeur)
function changeScript() 
{
  if (largeur < 426 || largeur < 769) {
    console.log("oui")
    if (scriptElement.src.includes("script.js") || scriptElement.src.includes("test.js")) {
      scriptElement.parentNode.removeChild(scriptElement);
      script.src = "mobile.js";
      document.head.appendChild(script);
      script.src = "test.js";
      document.head.appendChild(script);
    }
  } else {
    console.log("non")
    if (scriptElement.src.includes("mobile.js") || scriptElement.src.includes("test.js")) {
      scriptElement.parentNode.removeChild(scriptElement);
      script.src = "script.js";
      document.head.appendChild(script);
      script.src = "test.js";
      document.head.appendChild(script);
    }
  }
}

changeScript()