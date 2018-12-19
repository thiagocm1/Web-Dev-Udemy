const bodyElement = document.getElementsByTagName("body")[0];
(function () {
    bodyElement.innerHTML = "<h1>novo h1 dinamico </h1>" + bodyElement.innerHTML;
})();