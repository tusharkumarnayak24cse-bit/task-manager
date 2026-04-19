# ⚡ Smart Student Task Manager

A beginner-friendly web app to manage student tasks using core **Data Structures (DSA)** — built with pure HTML, CSS, and JavaScript.

---

## 🚀 How to Run

1. Unzip the folder `TaskManager/`
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge)
3. No installation or server needed!

---

## 📁 Folder Structure

```
TaskManager/
├── index.html   → UI structure
├── style.css    → Styling (dark industrial theme)
├── script.js    → All logic + DSA implementations
└── README.md    → This file
```

---

## 🧠 Data Structures Used

| DSA | Where Used | Time Complexity |
|-----|-----------|----------------|
| **Array** | Stores all task objects | Access O(1), Search O(n) |
| **Stack** | Undo deleted tasks (LIFO) | Push/Pop O(1) |
| **Queue** | Order tasks by deadline (FIFO) | Enqueue/Dequeue O(1) |
| **HashMap** (JS Map) | Fast search by task name | Get/Set O(1) |
| **Priority Queue** | Sort High → Medium → Low | Sort O(n log n) |

---

## ✨ Features

- ✅ Add tasks with name, deadline, and priority
- 🗑 Delete tasks
- ↩ Undo last deleted task (Stack)
- ✔ Mark tasks as completed / undo completion
- 🔍 Search tasks by name (HashMap O(1) + Array fallback)
- ⬆ Sort by priority (Priority Queue simulation)
- 📅 Sort by deadline (Queue)
- 📊 Live stats: Total / Done / Pending

---

## 📚 Task Object Structure

```js
{
  id:       1,
  name:     "Complete Math Assignment",
  deadline: "2025-07-20",
  priority: "High",       // "High" | "Medium" | "Low"
  status:   "Pending"     // "Pending" | "Completed"
}
```

---

## ⚠️ Constraints Followed

- ✅ No frameworks — pure HTML, CSS, JavaScript
- ✅ DSA logic clearly commented in `script.js`
- ✅ Beginner-friendly code with explanations
- ✅ Each function handles one feature
