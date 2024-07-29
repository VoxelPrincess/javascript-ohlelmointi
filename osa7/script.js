class Auto {
  constructor(regNumber, manufacturer, model, owner, price, color) {
    this.regNumber = regNumber;
    this.manufacturer = manufacturer;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const carForm = document.getElementById("carForm");
const carTable = document.createElement("table");
const tableHead = document.createElement("thead"); // Создаем элемент thead
const tableBody = document.createElement("tbody"); // Создаем элемент tbody
const headerRow = document.createElement("tr"); // Создаем строку для заголовков

// Заголовки таблицы
const headers = ["Reg Number", "Manufacturer", "Model", "Owner", "Price", "Color"];

// Добавляем каждый заголовок в строку заголовков
headers.forEach((headerText) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});

// Добавляем строку заголовков в thead
tableHead.appendChild(headerRow);

// Добавляем thead и tbody в таблицу
carTable.appendChild(tableHead);
carTable.appendChild(tableBody);

document.body.appendChild(carTable);

const cars = [];

carForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const regNumber = carForm.elements["regNumber"].value;
  const manufacturer = carForm.elements["manufacturer"].value;
  const model = carForm.elements["model"].value;
  const owner = carForm.elements["owner"].value;
  const price = carForm.elements["price"].value;
  const color = carForm.elements["color"].value;

  const newCar = new Auto(regNumber, manufacturer, model, owner, price, color);
  cars.push(newCar);

  carForm.reset();

  displayCars();
});

function displayCars() {
  tableBody.innerHTML = ""; // Очищаем tbody

  cars.forEach(function (car) {
    const row = tableBody.insertRow(); // Добавляем строку в tbody
    row.innerHTML = `
      <td>${car.regNumber}</td>
      <td>${car.manufacturer}</td>
      <td>${car.model}</td>
      <td>${car.owner}</td>
      <td>${car.price}</td>
      <td>${car.color}</td>
    `;
  });
}

// Функция для поиска автомобиля по регистрационному номеру
function searchCarByRegNumber(regNumber) {
  const foundCar = cars.find((car) => car.regNumber === regNumber);
  return foundCar;
}

// Обработчик события для отправки формы поиска
carForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchRegNumber = document.getElementById("searchRegNumber").value;
  const searchResultsContainer = document.getElementById("searchResults");

  try {
    const foundCar = searchCarByRegNumber(searchRegNumber);
    if (foundCar) {
      // Если найден автомобиль, отобразить его данные
      searchResultsContainer.textContent = `
        Manufacturer: ${foundCar.manufacturer}, 
        Model: ${foundCar.model}, 
        Owner: ${foundCar.owner}
      `;
    } else {
      // Если автомобиль не найден, отобразить сообщение об ошибке
      searchResultsContainer.textContent = "Car not found.";
    }
  } catch (error) {
    // Если возникла ошибка, отобразить сообщение об ошибке
    searchResultsContainer.textContent = "Error occurred while searching: " + error.message;
  }
});
