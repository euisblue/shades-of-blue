(function () {
    const container = document.querySelector('div.container');
    const containerWrapper = document.querySelector('div.container > .wrapper');

    let requestURL = 'https://raw.githubusercontent.com/yuueu/shades-of-blue/main/src/blue.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var blue = request.response;
        console.log(blue);
        // populateBlue(blue);
    }

    function populateBlue(blue) {
        // blue.forEach(element => {
            // let div = document.createElement('div');
            // div.textContent = element["name"];
            // container.append(div);
        // });

    }
})(window);