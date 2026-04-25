const API_URL = "http://localhost:3000/meals";

let selectedDate = new Date().toISOString().split("T")[0];
let allMeals = [];

const welcome = document.getElementById("welcome");
const app = document.getElementById("app");
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const editName = document.getElementById("editName");

const diary = document.getElementById("diary");
const profile = document.getElementById("profile");
const modal = document.getElementById("modal");
const mealsList = document.getElementById("meals-list");

function init() {
  const savedName = localStorage.getItem("userName");

  if (savedName) {
    showApp(savedName);
  } else {
    welcome.classList.remove("hidden");
    app.classList.add("hidden");
  }
}

function saveName() {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Digite seu nome para começar.");
    return;
  }

  localStorage.setItem("userName", name);
  showApp(name);
}

function showApp(name) {
  welcome.classList.add("hidden");
  app.classList.remove("hidden");

  greeting.textContent = `Olá, ${name} 👋`;
  editName.value = name;

  loadMeals();
}

function updateName() {
  const newName = editName.value.trim();

  if (!newName) {
    alert("Digite um nome válido.");
    return;
  }

  localStorage.setItem("userName", newName);
  greeting.textContent = `Olá, ${newName} 👋`;
  alert("Nome atualizado!");
}

function showDiary() {
  diary.classList.remove("hidden");
  profile.classList.add("hidden");
}

function showProfile() {
  profile.classList.remove("hidden");
  diary.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");

  document.getElementById("date").value = selectedDate;

  const now = new Date();
  document.getElementById("time").value = now.toTimeString().slice(0, 5);
}

function closeModal() {
  modal.classList.add("hidden");
}

async function loadMeals() {
  try {
    const response = await fetch(API_URL);
    allMeals = await response.json();

    renderCalendar();
    renderMealsByDate();
  } catch (error) {
    mealsList.innerHTML = `
      <div class="empty">
        <h4>Não foi possível carregar as refeições</h4>
        <p>Confira se o backend está rodando.</p>
      </div>
    `;
    console.error(error);
  }
}

function renderCalendar() {
  const calendar = document.getElementById("week-calendar");
  calendar.innerHTML = "";

  const today = new Date();

  for (let i = -3; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const isoDate = date.toISOString().split("T")[0];
    const dayName = date
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .replace(".", "");
    const dayNumber = date.getDate();

    const hasMeal = allMeals.some((meal) => meal.date === isoDate);

    const dayButton = document.createElement("button");
    dayButton.className = `day-card ${isoDate === selectedDate ? "active" : ""}`;
    dayButton.innerHTML = `
      <span>${dayName}</span>
      <strong>${dayNumber}</strong>
      ${hasMeal ? "<small></small>" : ""}
    `;

    dayButton.onclick = () => {
      selectedDate = isoDate;
      renderCalendar();
      renderMealsByDate();
    };

    calendar.appendChild(dayButton);
  }

  updateCurrentDate();
}

function updateCurrentDate() {
  const date = new Date(selectedDate + "T00:00:00");

  const formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long"
  });

  document.getElementById("current-date").textContent = formattedDate;
}

function renderMealsByDate() {
  const mealsOfDay = allMeals.filter((meal) => meal.date === selectedDate);
  renderMeals(mealsOfDay);
}

function renderMeals(meals) {
  mealsList.innerHTML = "";

  if (!meals.length) {
    mealsList.innerHTML = `
      <div class="empty">
        <h4>Nenhuma refeição por aqui ainda</h4>
        <p>Comece adicionando suas refeições do dia.</p>
      </div>
    `;
    return;
  }

  meals.forEach((meal) => {
    const card = document.createElement("div");
    card.className = "meal-card";

    card.innerHTML = `
      ${meal.imageUrl ? `<img src="${meal.imageUrl}" alt="${meal.title}">` : ""}
      <div class="meal-info">
        <h4>${meal.title}</h4>
        <p>${formatType(meal.type)} • ${meal.time}</p>
        <p>${meal.description || ""}</p>
        <p>${formatDate(meal.date)}</p>
      </div>
    `;

    mealsList.appendChild(card);
  });
}

async function createMeal() {
  const title = document.getElementById("title").value.trim();
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const image = document.getElementById("image").files[0];

  if (!title || !type || !date || !time) {
    alert("Preencha título, tipo, data e hora.");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("type", type);
  formData.append("description", description);
  formData.append("date", date);
  formData.append("time", time);

  if (image) {
    formData.append("image", image);
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error("Erro ao criar refeição");
    }

    selectedDate = date;
    closeModal();
    clearForm();
    loadMeals();
  } catch (error) {
    alert("Erro ao salvar refeição.");
    console.error(error);
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("image").value = "";
}

function formatType(type) {
  const types = {
    cafe: "Café da manhã",
    almoco: "Almoço",
    jantar: "Jantar",
    lanche: "Lanche"
  };

  return types[type] || type;
}

function formatDate(date) {
  if (!date) return "";

  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}

init();