# GitScout

**Explore GitHub profiles and repositories in one place.**

GitScout is a responsive GitHub profile explorer built with **React, Tailwind CSS, and Axios**. It uses the GitHub REST API to retrieve public user information and repositories, with loading feedback, error handling, and fallback content for missing information.

## Image 

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/b7db34b7-006b-4f31-a5d0-b5bccdd07c81" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/e26f4bd4-2cdb-41aa-924a-b1b67e7f956f" />

## Features

- **GitHub Profile Search** — Search public GitHub users by username.
- **Profile Overview** — Display user information retrieved from the GitHub API.
- **Repository Explorer** — Fetch and display a user's public repositories.
- **HTTP Error Handling** — Handle common API errors, including `404` and `403`, with appropriate feedback.
- **Loading State** — Display a loading indicator while requests are processing.
- **Fallback Content** — Show meaningful placeholders when a profile bio or repository description is unavailable.
- **Responsive Interface** — A dark-themed layout built with Tailwind CSS.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Application logic and state management |
| Tailwind CSS | Responsive styling |
| Axios | HTTP requests and error handling |
| GitHub REST API | Public profile and repository data |
| Vite | Development server and production builds |

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/fvyalwayshigh-sys/gitscout.git
```

**2. Navigate to the project**

```bash
cd gitscout
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## API Integration

GitScout uses GitHub's public REST API.

**Fetch a user profile:**

```http
GET https://api.github.com/users/{username}
```

**Fetch public repositories:**

```http
GET https://api.github.com/users/{username}/repos
```

These public endpoints can be accessed without an API key. However, unauthenticated requests are subject to GitHub's rate limits.

API documentation: [GitHub REST API](https://docs.github.com/en/rest)

## Error Handling

GitScout manages request failures using React state and conditional rendering.

| Error | Behavior |
|---|---|
| `404 Not Found` | Displays feedback when a requested user cannot be found |
| `403 Forbidden` | Displays an error message for restricted or rate-limited requests |
| Other errors | Displays a general error message |

The application also displays loading feedback while fetching data and placeholder text when optional information is missing.

## What I Learned

Building GitScout helped me practice:

- Fetching data from a real REST API using Axios.
- Managing asynchronous requests with `.then()`, `.catch()`, and `.finally()`.
- Handling HTTP response codes.
- Managing loading, success, and error states in React.
- Passing data between components using props.
- Rendering different UI components based on application state.
- Handling missing data without breaking the interface.

## Limitations

- GitHub API rate limits apply to unauthenticated requests.
- Only publicly accessible user information and repositories are retrieved.
- Network availability affects API requests.

## Author

**Muhammad Fudail Wasif**

[GitHub](https://github.com/fvyalwayshigh-sys) · [Portfolio](https://fudail-portfolio-mauve.vercel.app/)

---

Built as a hands-on React and REST API learning project.
