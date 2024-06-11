
// variables to get elements
let selectDrink = document.querySelectorAll('#img-select-drink');

let drinkPreview = document.querySelectorAll('#img-drink-preview');

console.log(selectDrink)

function handlePreview() {
    selectDrink.forEach((val, index) => {
        val.addEventListener('click', () => {
            drinkPreview.forEach((val) => {
                if (val.classList.contains('show')) {
                    val.classList.remove('show');
                } else {
                }
            })
            drinkPreview[index].classList.add('show');
        })
    });
}

handlePreview();