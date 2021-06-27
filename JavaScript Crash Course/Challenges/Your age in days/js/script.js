function ageInDays(answer) {
    let birthYear = prompt('Hello friend, what year were you born in?')
    let daysInAge = (2021 - birthYear) * 365.25;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + daysInAge + ' days old');
    h1.setAttribute('id', 'daysInAge');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('daysInAge').remove();
}
