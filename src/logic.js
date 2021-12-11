(function () {
    const container = document.querySelector('div.container');
    const containerWrapper = document.querySelector('div.container > .wrapper');
    const headerTitle = document.querySelector('.header');
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

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    
    function populate(blue) {
        hexLists = Object.values(blue).sort();
        for(let i = 0; i<hexLists.length; ++i) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let colorName = getKeyByValue(blue, hexLists[i]);

            p2.textContent = hexLists[i];
            p.textContent = colorName;

            div.classList.add("colorpad");
            div.style.backgroundColor = hexLists[i];

            div.append(p);
            div.append(p2);
            containerWrapper.append(div);

            div.onclick = () => {
                copyColor(hexLists[i]);
                p2.textContent = "Copied";
                headerTitle.style.color = hexLists[i];
                setTimeout(() => {
                    p2.textContent = hexLists[i];
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