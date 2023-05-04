let scriptElement = document.querySelector('script');
let script = document.createElement("script");

let largeur = window.screen.width;
console.log(largeur)
function changeScript() 
{
  if (largeur < 426 || largeur < 769) {
    console.log("oui")
    if (scriptElement.src.includes("cv.js") || scriptElement.src.includes("testCv.js")) {
      scriptElement.parentNode.removeChild(scriptElement);
      script.src = "mobileCv.js";
      document.head.appendChild(script);
      script.src = "testCv.js";
      document.head.appendChild(script);
    }
  } else {
    console.log("non")
    if (scriptElement.src.includes("mobileCv.js") || scriptElement.src.includes("testCv.js")) {
      scriptElement.parentNode.removeChild(scriptElement);
      script.src = "cv.js";
      document.head.appendChild(script);
      script.src = "testCv.js";
      document.head.appendChild(script);
    }
  }
}

changeScript()