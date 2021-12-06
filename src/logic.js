(function () {
    const container = document.querySelector('div.container');
    const containerWrapper = document.querySelector('div.container > .wrapper');

    let req = new XMLHttpRequest();
    var blue;

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
          blue = JSON.parse(req.responseText);
          populate(blue);
      }
    };
    
    req.open("GET", "https://api.jsonbin.io/b/61ae044701558c731ccf35d8/latest");
    req.setRequestHeader("secret-key", "$2b$10$qWldbeLTOtl7KSOhqohB/OhZ3SeyKG4H4khqWAgaerXGKB7TqJIny");
    req.send();

    function populate(blue) {
        colorNames = Object.keys(blue);
        for(let i = 0; i<colorNames.length; ++i) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let hex = blue[colorNames[i]];

            
            p2.textContent = hex;
            p.textContent = colorNames[i];

            div.classList.add("colorpad");
            div.style.backgroundColor = hex;

            div.append(p);
            div.append(p2);
            containerWrapper.append(div);

            div.onclick = () => {
                copyColor(hex);
                document.querySelector('div.alert').style.right = "-5px";
                setTimeout(() => {
                    document.querySelector('div.alert').style.right = "-205px";
                },1000);
            }
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    function copyColor(color) {
        console.log(color);
        navigator.clipboard.writeText(color);
    }
})(window);