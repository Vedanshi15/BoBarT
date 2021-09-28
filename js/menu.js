window.onload = function() {
    ready();

    function ready() {        
        var menuOption = document.getElementsByClassName("menu-options-title");
        for (var i = 0; i < menuOption.length; i++) {
            var button = menuOption[i];
            
            button.addEventListener('click', viewSelectedMenuInfo);
        }
    }

    function viewSelectedMenuInfo(event) {
        var itemContainer = event.target;
        var menuSelected = itemContainer.parentElement;
        var menuImage = menuSelected.getElementsByClassName('menu-image')[0].src;
        var menuDescription = menuSelected.getElementsByClassName('menu-option-description')[0].innerHTML;
        var calories = menuSelected.getElementsByClassName('calories')[0].innerHTML;
        var popUp = document.getElementById("popup");

        var popupContent = `
        <div style="background-color: purple; margin: auto; padding: 20px; border: 1px solid #888; width: 50%; text-align: center">
            <span class="close">&times;</span>
            <img class="cart-item-image" src="${menuImage}" width="100" height="100">
            <p class="cart-item-title">${menuDescription}</p>
            <p>${calories}</p>
        </div>`;

        popUp.innerHTML = popupContent;
        popUp.style.display = "block";

        var closeButton = document.getElementsByClassName("close");
        for (i = 0; i < closeButton.length; i++) {
            closeButton[i].addEventListener("click", closeModal);
        }        
    }

    function closeModal() {
        var popUp = document.getElementById("popup");
        popUp.style.display = "none";
    }
}