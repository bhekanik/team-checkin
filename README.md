# Team Check-in Generator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-team--checkin.surge.sh-ff8fa3?style=flat-square)](https://team-checkin.surge.sh/)
[![GitHub](https://img.shields.io/badge/GitHub-bhekanik%2Fteam--checkin-1a1a2e?style=flat-square&logo=github)](https://github.com/bhekanik/team-checkin)

> A simple, beautiful check-in question generator for remote teams to build trust and relationships.

![Screenshot](https://team-checkin.surge.sh/screenshot.png)

## ✨ Features

- **130+ Check-in Questions** across 7 categories:
  - 🌍 Culture & Background (40 questions)
  - 🧊 Icebreaker
  - 👥 Team Building
  - 💭 Personal
  - 💼 Work
  - 😄 Fun
  - 🧘 Reflection

- **Mark as Done** - Track which questions you've already used
- **Progress Persistence** - Your done state is saved in localStorage
- **Copy to Clipboard** - One-click copying of questions
- **Keyboard Navigation** - Use arrow keys to navigate
- **Category Filtering** - Filter by question type
- **Mobile Friendly** - Works great on all devices

## 🚀 Live Demo

Try it now: **[team-checkin.surge.sh](https://team-checkin.surge.sh/)**

## 🎯 Why Use This?

Check-ins create better meetings. They're backed by science, and anyone can do it. Perfect for:

- Daily standups
- Team retrospectives
- One-on-ones
- Virtual team building
- Getting to know new teammates

## 🛠️ Tech Stack

- Vanilla HTML, CSS, JavaScript
- No frameworks or build tools
- LocalStorage for persistence
- Deployed on Surge.sh

## 🏃‍♂️ Running Locally

```bash
# Clone the repository
git clone https://github.com/bhekanik/team-checkin.git

# Navigate to the folder
cd team-checkin

# Start a local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

Or simply open `index.html` in your browser.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous question |
| `→` | Next question |
| `C` | Copy current question |
| `D` | Mark as done/undo |

## 📁 Project Structure

```
team-checkin/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # Application logic
├── package.json    # Node metadata
└── README.md       # This file
```

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new questions
- Improve accessibility
- Add new features
- Fix bugs

## 📝 License

MIT License - feel free to use this for your own team!

## 🙏 Credits

Created by [Bhekani Khumalo](https://bhekani.com)

---

If you find this useful, please consider [starring the repo](https://github.com/bhekanik/team-checkin) ⭐
