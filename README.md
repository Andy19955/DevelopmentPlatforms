# development-platforms-ca

This is an Express project for my course assignment for the Development Platforms course.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Andy19955/development-platforms-ca.git
   cd development-platforms-ca
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   - Create a MySQL database
   - Import the database schema from the `DevelopmentPlatforms.sql` file.

4. **Configure environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   JWT_SECRET=your_secure_jwt_secret_key
   PORT=3000
   ```

### Running the Project

**Development mode**:

```bash
npm run dev
```

**Production mode**:

```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT token

### Articles

- `GET /articles` - Get all articles (public)
- `POST /articles` - Create a new article (requires authentication)

## Motivation

I chose to do option 1, Express.js API. The reason for this was because I wanted to explore how things are working in the backend for a project like this, and how to make endpoints. I have previously worked a lot with databases (using phpmyadmin) and PHP, but this project gave me an introduction to TypeScript and how to work with that.

What I liked about the development process was that I learned how to create endpoints. Previously I have been doing this by using JavaScript and running fetch calls to PHP scripts, but by using Express.js API, I think it was a lot smoother.

I found it a bit challenging in the beginning of the course by figuring out how everything was connected with the routes, middleware etc., but after the course progressed, the pieces connected one by one.

The benefits of developing a custom API I think are that you have more control of how the API is looking, what data you want to receive and what data you want to send. By doing that, you know your backend in and out. That would also make it easier to expand the application or debugging.
