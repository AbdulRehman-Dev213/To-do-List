# Todo List App

A simple, responsive Todo List application built with HTML, CSS, and vanilla JavaScript. Create tasks, edit existing ones, mark them as completed, and remove them through a clean, dark-themed interface.

## Features

- **Add Tasks:** Create new tasks using the input field or by pressing Enter.
- **Edit Tasks:** Update existing task descriptions.
- **Delete Tasks:** Remove tasks when they are no longer needed.
- **Mark as Completed:** Check off completed tasks with a custom checkbox design.
- **Completion-Based Editing:** The edit button is disabled when a task is marked as completed.
- **Input Validation:** Prevents empty or whitespace-only tasks from being added.
- **Responsive Layout:** Adapts to smaller screens using CSS media queries.
- **Custom Styling:** Dark-themed interface with reusable CSS custom properties, hover effects, and styled controls.

## Tech Stack

- **HTML5** — Application structure and semantic markup.
- **CSS3** — Layout, responsive styling, custom properties, transitions, and checkbox styling.
- **JavaScript (ES6+)** — DOM manipulation, event handling, and interactive functionality.
- **Font Awesome 6** — Edit and delete icons.
- **Google Fonts** — Poppins, Inter, and Playfair Display font imports.

## Project Structure

```text
todo-list-app/
├── index.html
├── style.css
└── script.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

Navigate to the project directory and open `index.html` in your browser.

Alternatively, use the Live Server extension in Visual Studio Code for local development.

No package installation or build tools are required.

## How to Use

1. Enter a task in the input field.
2. Click **Add** or press **Enter** to create it.
3. Click the pencil icon to edit a task.
4. Update the task in the input field and click **Add** to save the changes.
5. Use the checkbox to mark a task as completed.
6. Click the trash icon to remove a task.

## Implementation Highlights

- Uses `querySelector()` to access DOM elements.
- Uses `createElement()` to create task elements dynamically.
- Uses event listeners to handle clicks, keyboard input, and checkbox changes.
- Uses `textContent` to update existing task descriptions.
- Uses a variable to track the task currently being edited.
- Uses CSS custom properties to maintain consistent colors and styling.
- Uses Flexbox and media queries to support responsive layouts.

## Current Limitations

- Tasks are not saved between page refreshes because persistent storage has not been implemented.
- Tasks exist only in the current page session.
- The application uses client-side JavaScript without a backend or database.

## Future Improvements

- Add persistent storage using `localStorage`.
- Add task filtering for all, active, and completed tasks.
- Add task counters and a clear-completed option.
- Improve keyboard accessibility and button labels.
- Separate DOM creation, application logic, and event handling as the application grows.

## Author

**Abdul Rehman**
Aspiring Frontend Developer
