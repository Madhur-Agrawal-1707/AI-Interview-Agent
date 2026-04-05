# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





## Steps to create the client side of the project:

7. now i will work on client side. first i created a new folder named client and then i initialized a new React project using Vite by running the command npm create vite@latest in the terminal. i also installed all the required dependencies for the client side using npm i command.

8. after then i remaoved all the unnecessary files and change the fav icon to a custom one. for changing the fav icon i just added the image in the public folder and change the link in the index.html file to point to the new image. i also added some more few images in my assets folder to use it my project further.

9. then i installed tailwindCSS in my project to style the components. i followed the official documentation of tailwindcss to install it in my project. i impoted tailwind css in my index.css to use it in my project. i also added the tailwind css plugin in the vite.config.js file to use it in my project.

10. after this i install some more dependencies like react-router-dom for routing im my project and axios for making API calls to the server and react-icons for using icons in my project.

11. then i have to set-up my react-router-dom to use in my project. i wrapped my App component with BrowserRouter in the main.jsx file to use routing in my project. then i created two pages Home and Auth in the pages folder and set-up the routes for these pages in the App.jsx file.