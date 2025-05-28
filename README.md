# Gowagr Assessment

---

## Project Overview

This project is an assessment for the Gowagr Squad Games. It involves building a user interface (UI) that interacts with the Gowagr API.

---

## Tech Stack

- **Next.js:** A React framework for production.
- **Fetch API:** For making HTTP requests.

---

## Installation & Setup

To get started with this project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/coolbuhzor/gowagr-assesment.git](https://github.com/coolbuhzor/gowagr-assesment.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd gowagr-assesment
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Environment Variable:**
    Create a `.env.local` file in the root of your project and add your API base URL:
    ```
    NEXT_PUBLIC_API_BASE_URL=your_gowagr_api_base_url_here
    ```
    _Replace `your_gowagr_api_base_url_here` with the actual base URL of the Gowagr API._

---

## Usage

You can interact with the application by visiting the deployed URL, or you can run it locally:

1.  **Run in development mode:**
    ```bash
    npm run dev
    ```
    This will start the development server, usually accessible at `http://localhost:3000`.

---

## Development & Contributing

We welcome contributions to this project! Please follow these guidelines:

1.  **Branching:** Create a new branch for your features or bug fixes.
    ```bash
    git checkout -b feature/your-feature-name
    ```
2.  **Pull Requests:** Once your changes are ready, raise a pull request to the `main` branch.
3.  **Component Structure:** All React components should be placed within the `components` folder and named in `kebab-case` (eg`my-component.tsx`).
4.  **Assets:** All static assets (images, fonts, etc.) should be stored in the `public` folder.
