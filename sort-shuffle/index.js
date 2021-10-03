let numbers = [1,2,3,4,5,6,7,8,9],
squareCards = document.getElementById("card-list");

window.onload = () => {
    sort()
};

const sort = () => {
    numbers.sort((a,b) => a-b);
    renderMethod(numbers)
};

const shuffle = () => {
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    renderMethod(numbers);
};

const renderMethod = (numbers) => {
    squareCards.innerHTML="";
    numbers.forEach((item, index) => {
        squareCards.innerHTML += '<li key=' + item + '>' + item + '</li>'
      })
};

// const shuffle = () => {
//     //Randomness are biased to a certain extend
//     numbers.sort(() => 0.5 - Math.random());
//     renderMethod(numbers);
// };