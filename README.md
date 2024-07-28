# E-Commerce Back End

## Description

The E-Commerce Back End is a RESTful API built with Express.js and Sequelize to interact with a PostgreSQL database. This application serves as the back end for an e-commerce platform, providing endpoints to manage categories, products, and tags. It allows for CRUD (Create, Read, Update, Delete) operations and demonstrates how to set up and use Sequelize with PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/e-commerce-back-end.git

   ```sh
   git clone https://github.com/your-username/your-repo-name.git

2. **Navigate to the project directory:**

   ```sh
   cd e-commerce-back-end

3. **Install dependencies:**

    ```sh
    npm install
    

4. **Create a**  `.gitignore` file (if not already created) with the following content to exclude unnecessary files:
    
    ```sh
    node_modules/
    .DS_Store/

5. **Create a** `.env` file in the root directory with your PostgreSQL database credentials:

    ```sh
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password

6. **Create your database schema:**

    ```sh
    psql -U your_database_user -d your_database_name -f path/to/your/schema.sql

7. **Seed the database with initial data:**
    
    ```sh
    npm run seed

## **Usage**

1. **Start the server:**

    ```sh
    npm start

2. **Test the API endpoints** using tools like Insomnia or Postman. The API provides the following routes:

- GET /api/categories - Retrieve all categories

- GET /api/categories/:id - Retrieve a single category by ID

- POST /api/categories - Create a new category

- PUT /api/categories/:id - Update a category by ID

- DELETE /api/categories/:id - Delete a category by ID

- GET /api/products - Retrieve all products

- GET /api/products/:id - Retrieve a single product by ID

- POST /api/products - Create a new product

- PUT /api/products/:id - Update a product by ID

- DELETE /api/products/:id - Delete a product by ID

- GET /api/tags - Retrieve all tags

- GET /api/tags/:id - Retrieve a single tag by ID

- POST /api/tags - Create a new tag

- PUT /api/tags/:id - Update a tag by ID

- DELETE /api/tags/:id - Delete a tag by ID

## **Contibuting**

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit your changes with descriptive messages
4. Push your changes to your forked repository
5. Create a pull request to the original repository

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.