# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Run the following commands to setup the project:

### npm install

This command will install all the required dependencies for the project.

### npm start

This command will start the development server on [port 3000](http://localhost:3000).

## Development

### TypeScript

TypeScript is used to simplify the development process, by letting us catch errors at compile time that would otherwise only be caught at runtime. Additionally, typing our data and component props makes the code more readable.

### Styled Components

Styled Components is used for convenience of layout and styling by using a CSS-in-JS approach, and reducing boilerplate CSS.

## Testing

### Jest + React Testing Library

Jest and React Testing Library are used for testing our components, the way they render, and the way the interactable elements behave.

## Possible Improvements

### Data persistance

The data for the columns and cards could be implemented using local storage, so that the data is not lost when the page is refreshed.

I decided against this approach, as a more realistic approach would be to implement a backend that would handle the persistence of the data.

### Data processing on FE

There's a lot of additional code related to data processing that's currently being done on the frontend, but would have backend implementations in a real world scenario.

Specifically the functionalities regarding updating the cards which would be simplified with a backend implementation, where we could make our API calls to the backend and update the cards, and just refetch the updated data after.
