const hoursContainer = document.querySelector('.timer__hours');
const minutesContainer = document.querySelector('.timer__minutes');
const secondsContainer = document.querySelector('.timer__seconds');

// Время в секундах для отсчета (например, 1 час = 3600 секунд)
let timeLeft = 3600; 

const updateClock = () => {
    // Преобразуем оставшееся время в часы, минуты и секунды
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // Обновляем текст в соответствующих блоках
    hoursContainer.innerText = String(hours).padStart(2, '0');
    minutesContainer.innerText = String(minutes).padStart(2, '0');
    secondsContainer.innerText = String(seconds).padStart(2, '0');

    // Уменьшаем время на одну секунду
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        alert("Время истекло!");
    }
};

// Запускаем таймер, который обновляется каждую секунду
const timerInterval = setInterval(updateClock, 1000);

// Инициализируем начальное значение
updateClock();
