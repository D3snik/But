document.getElementById('clickButton').addEventListener('click', showOptions);

function showOptions() {
    var optionsContainer = document.getElementById('options');
    optionsContainer.style.display = 'block';

    var randomNumber = Math.random();
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');

    if (randomNumber < 0.9) { // 80% chance
        option1.style.display = 'block';
        option2.style.display = 'none';
    } else { // 20% chance
        option1.style.display = 'none';
        option2.style.display = 'block';
    }
}
