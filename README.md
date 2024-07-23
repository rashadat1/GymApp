# Bodybuilding Collective

## Overview
<img width="1505" alt="Screenshot 2024-07-23 at 3 31 45 AM" src="https://github.com/user-attachments/assets/452d5327-8d58-4303-b280-1d13a0df80b6">
<img width="1496" alt="Screenshot 2024-07-23 at 3 32 00 AM" src="https://github.com/user-attachments/assets/c63c513b-9cfb-488b-b5cd-917241212593">

The Bodybuilding Collective is a comprehensive web application designed to support bodybuilders and fitness enthusiasts. The app provides an extensive exercise library, a community forum, personalized workout plans, and much more to help users achieve their fitness goals efficiently.

## Features

- **Exercise Library**: Discover new exercises with detailed descriptions and tutorials.
- **Community Forum**: Join discussions, get form critiques, and share tips with other members.
- **Workout Logging and Planning**: Log your workouts, plan future sessions, and get personalized workout recommendations.
- **Popular Blog Posts**: Stay updated with the latest trends and tips in bodybuilding through popular blog posts.

## Tech Stack

- **Frontend**: React, Tailwind CSS, MUI
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **API Integration**: ExerciseDB API from RapidAPI

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL (v12 or later)

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/GymApp.git
    cd GymApp
    ```

2. **Install Frontend Dependencies**

    Navigate to the `gym-app-front-end` directory and install dependencies:

    ```bash
    cd gym-app-front-end
    npm install
    ```

3. **Install Backend Dependencies**

    Navigate to the `gym-app-back-end` directory and install dependencies:

    ```bash
    cd ../gym-app-back-end
    npm install
    ```

4. **Set Up Database**

    Create a PostgreSQL database:

    ```bash
    createdb bodybuilding_collective
    ```

    Run the database migrations (you need to set up the migration scripts):

    ```bash
    # Example command if using a migration tool
    npm run migrate
    ```

5. **Start the Development Servers**

    Start the backend server:

    ```bash
    cd gym-app-back-end
    npm run start
    ```

    Start the frontend server:

    ```bash
    cd ../gym-app-front-end
    npm run start
    ```

    The application should now be running locally at `http://localhost:3000`.

## Project Structure

### Frontend (`gym-app-front-end`)

- `src/`
  - `assets/`: Images, icons, and other static assets
  - `components/`: Reusable React components
  - `pages/`: Page components for different routes
  - `App.js`: Main React component
  - `App.css`: Global styles

### Backend (`gym-app-back-end`)

- `src/`
  - `controllers/`: Express.js controllers for handling API requests
  - `models/`: Database models and schemas
  - `routes/`: Express.js routes
  - `index.js`: Entry point for the backend server

## Usage

### Home Page

The home page provides an overview of the site, featuring a hero section with a welcome message and a navigation bar for quick access to different sections of the site.

### Exercise Library

Browse through a comprehensive library of exercises. Each exercise includes detailed descriptions, tutorials, and tips.

### Community Forum

Join discussions, get form critiques, and share tips with other members in the community forum.

### Workout Logging and Planning

Log your workouts, plan future sessions, and receive personalized workout recommendations based on your goals and progress.

## Customization

### Updating the Logo

To update the logo, replace the logo image in the `src/assets/icons` directory with your desired logo image and ensure the file name matches the import statement in `HomePage.js`.

### Styling

The project uses Tailwind CSS for styling. You can customize the styles by modifying the classes in the component files or updating the global styles in `App.css`.

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Steps to Contribute

1. **Fork the Repository**
2. **Create a Feature Branch**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit Your Changes**

    ```bash
    git commit -m "Add your message here"
    ```

4. **Push to Your Branch**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a Pull Request**

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Thanks to the contributors of ExerciseDB API for providing a comprehensive exercise database.
