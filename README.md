# nc-games

This is the front-end of the NC Games project, which is a board game review site. It provides a user interface for browsing and interacting with game reviews. The front-end is built with React and utilizes the backend API for data retrieval.

## Installation
1. Clone the repository 
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   ```
   npm install
   ```

## Usage
To start the development server, run the following command:
```
npm start
```

The application will be served at `http://localhost:3000`.

## Components
The front-end consists of several components that are responsible for different parts of the application:

- `App`: The main component that sets up the routes and navigation for the application.
- `Header`: Renders the header section of the application.
- `Navbar`: Displays the navigation bar with links to different sections of the site.
- `Reviews`: Displays a list of reviews.
- `ReviewCard`: Renders a single review with its details and comments.
- `CommentList`: Shows a list of comments for a specific review.
- `CategoryList`: Displays a list of categories.

These components are located in the respective files within the `src/components` directory.

## API Integration
The front-end interacts with the backend API to fetch data. The `api.js` file contains functions that make API requests using the `axios` library. Here are some key functions used:

- `fetchReviews`: Fetches all reviews.
- `fetchReview`: Fetches a single review by its ID.
- `fetchComments`: Fetches comments for a specific review.
- `fetchCategories`: Fetches all categories.
- `fetchReviewsByCategory`: Fetches reviews based on a specific category.

These functions are imported and used in the relevant components to retrieve data from the backend.

## Deployment
To deploy the front-end to a production environment, you can build the application using the following command:
```
npm run build
```
This will create a production-ready build in the `build` directory. You can then deploy the contents of this directory to a static hosting service or server of your choice.
