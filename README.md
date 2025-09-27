# 🍽️ Food Cards App

A simple web application that fetches and displays food items based on a **country** using [TheMealDB API](https://www.themealdb.com/).  
It allows users to search for meals by entering a country name and dynamically shows food cards with images and names.

---

## 🚀 Features
- 🔎 Search meals by country (e.g., American, Italian, Indian, etc.)
- 🎴 Dynamic food cards layout using **Tailwind CSS**
- ⚡ Asynchronous data fetching with **JavaScript Fetch API**
- 🎨 Responsive grid design for displaying food items

---

## 🛠️ Tech Stack
- **HTML5** – Structure of the app  
- **Tailwind CSS** – Styling and responsive design  
- **JavaScript (Vanilla JS)** – Fetch API integration and DOM manipulation  
- **TheMealDB API** – Free meal database API

---

## 📂 Project Structure
```
📦 food-cards-app
 ┣ 📜 index.html     # Main HTML file
 ┣ 📜 script.js      # JavaScript logic
 ┗ 📜 README.md      # Documentation
```

---

## ⚙️ How It Works
1. Enter a **country name** (like `American`, `Italian`, etc.) in the search box.
2. Click **Search** or press **Enter**.
3. The app fetches data from TheMealDB API:
   ```
   https://www.themealdb.com/api/json/v1/1/filter.php?a=<country>
   ```
4. Meals are displayed as responsive cards with:
   - 🖼️ Image of the meal  
   - 🍴 Name of the meal  

If no country is entered, it defaults to **American** cuisine.

---

## ▶️ Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/food-cards-app.git
   ```
2. Open `index.html` in your browser.
3. Start searching for meals by entering a country name.

---

## 📸 Screenshot (Example)
> _(You can add a screenshot of the app interface here later for better presentation.)_

---

## 💡 Future Improvements
- Display more meal details (ingredients, recipe, etc.)
- Add loading and error states
- Save last searched country in local storage
- Improve UI/UX with animations

---

## 🙌 Credits
- [TheMealDB](https://www.themealdb.com/) for providing the free meals API  
- [Tailwind CSS](https://tailwindcss.com/) for styling  

---
