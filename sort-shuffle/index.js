let numbers = [1,2,3,4,5,6,7,8,9],
squareCards = document.getElementById("card-list");

window.onload = () => {
    sort()
};

const sort = () => {
    numbers.sort((a,b) => a-b);
    renderMethod(numbers)
}

const shuffle = () => {
    numbers.sort(() => 0.5 - Math.random());
    renderMethod(numbers);
};

const renderMethod = (numbers) => {
    squareCards.innerHTML="";
    numbers.forEach((item, index) => {
        squareCards.innerHTML += '<li key=' + item + '>' + item + '</li>'
      })
}