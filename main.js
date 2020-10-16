let dropdownCollection = document.querySelectorAll(".custom-dropdrowns");

let dropdownArray = Array.from(dropdownCollection);

dropdownArray.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        console.log(dropdown);
        (!dropdown.classList.contains('active')) ? 
            dropdown.classList.add('active') :
            dropdown.classList.remove('active') 
    })
});