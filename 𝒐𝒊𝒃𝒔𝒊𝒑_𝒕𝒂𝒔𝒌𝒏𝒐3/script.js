
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
var celsiusEmoji = document.getElementById("celsiusEmoji");
var fahrenheitEmoji = document.getElementById("fahrenheitEmoji");

//console.log will print values on page in inspect in console box
//console.log(celsius,fahrenheit);
//alert will prompt a message box of hello on page 
//alert('hello');

function celToFar()
{
    let output = ( parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function farTocel()
{
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function updateEmojis() 
{
    var celsiusInput = parseFloat(celsius.value);
    var fahrenheitInput = parseFloat(fahrenheit.value);
  
    if (celsiusInput <= 0) 
    {
        celsiusEmoji.innerHTML = "❄️";
        celsiusEmoji.style.color = "blue";
    } 
    else if (celsiusInput > 0 && celsiusInput < 100) 
    {
        celsiusEmoji.innerHTML = "😊";
        celsiusEmoji.style.color = "black";
    } 
    else 
    {
        celsiusEmoji.innerHTML = "🔥";
        celsiusEmoji.style.color = "red";
    }

    if (fahrenheitInput <= 32) 
    {
        fahrenheitEmoji.innerHTML = "❄️";
        fahrenheitEmoji.style.color = "blue";
    } 
    else if (fahrenheitInput > 32 && fahrenheitInput < 212) 
    {
        fahrenheitEmoji.innerHTML = "😊";
        fahrenheitEmoji.style.color = "black";
    } 
    else 
    {
        fahrenheitEmoji.innerHTML = "🔥";
        fahrenheitEmoji.style.color = "red";
    }
}

function resetValues() 
{
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsiusEmoji").innerHTML = "";
    document.getElementById("fahrenheitEmoji").innerHTML = "";
  }
  

  
  