
//recebe a bandeira escolhida e a salva no localstorage 
document.addEventListener('DOMContentLoaded', (event) => {
    var dropdownItems = document.querySelectorAll(".dropdown-menu a");
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            var selectedImg = this.querySelector('img').getAttribute("src");
            var buttonHtml = '<img src="' + selectedImg + '" width="30px" height="30px">';
            document.querySelector(".dropdown-toggle").innerHTML = buttonHtml;
            localStorage.setItem('selectedImg', selectedImg);
        });
    });

    var storedImg = localStorage.getItem('selectedImg');
    if (storedImg) {
        var buttonHtml = '<img src="' + storedImg + '" width="30px" height="30px">';
        document.querySelector(".dropdown-toggle").innerHTML = buttonHtml;
    }
});