# The Atomic Blog

The Atomic Blog is a simple, dynamic blogging application built with React, allowing users to create, search, and manage blog posts. The project demonstrates the use of React hooks, the Context API, and dynamic UI state management, making it a great example of a modern React application. It also features a dark mode toggle, archive functionality, and a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📝 **Create Posts**: Users can add new blog posts with a title and body.
- 🔍 **Search Posts**: Search functionality to filter posts based on the content.
- 🌙 **Dark Mode Toggle**: Smooth dark mode toggle using React state.
- 🗂 **Post Archive**: Archive feature displaying a large set of pre-generated posts, which users can add as new posts.
- ⚡ **Fast and Responsive**: The app is designed to be responsive and works well on both desktop and mobile devices.
- 🎨 **Minimal UI**: Simple and user-friendly design focused on readability and ease of use.

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **JavaScript (ES6+)**: Core logic of the application.
- **CSS**: Custom styles for layout and design.
- **Faker.js**: Generates random content for the posts.

## Setup and Installation

To get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/atomic-blog.git
   ```
2. Navigate to the project directory:
   ```bash
   cd atomic-blog
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

- `npm start`  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

- `npm test`  
  Launches the test runner. You can implement tests to ensure the app behaves as expected.

- `npm run build`  
  Builds the app for production into the build folder. The build is optimized for performance and ready to be deployed.

## Project Structure

Here’s a brief overview of the key files and folders in the project:

```
atomic-blog/
│
├── public/                 # Public assets
│   └── index.html          # Main HTML file
│
├── src/                    # Source files
│   ├── App.js              # Main component
│   ├── PostContext.js      # Context API for managing posts state
│   ├── components/         # Reusable components (Header, Footer, Form, etc.)
│   ├── styles.css          # Main CSS file
│   └── index.js            # Entry point for React
│
└── README.md               # Project documentation
```

## Live Demo

A live demo of the project can be found here: [Atomic Blog Demo](#)

## Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository and create a pull request. For major changes, please open an issue to discuss what you’d like to change.

## License

This project is open source and available under the MIT License.

## Additional Notes

This project was built as a personal project to demonstrate my React and JavaScript skills. It includes key features like dynamic state management, dark mode functionality, and API integration using context, all built with best practices in mind.
