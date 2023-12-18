# Chat with your PDF

This project consists of uploading a pdf to the system and creating a list of chat upon it, but not limited to:

- Uploading a pdf
- Fetching the text of the pdf
- Creating text embeddings for each page of the pdf and storing them in a database
- User can ask questions about the pdf and the system will find the most relevant page and create the answer from relevant text
- Store pdfs and user messages for later use

![desktop-main-image](/screenshots/desktop-main.png)

## Tech stack

- `React:` A JavaScript library for building user interfaces.
- `Next.js 13 (w/ app router):` A javascript framework works top on the React and uses all the benefits of React. It helps for SSG, SSR and routing.
- `Tailwind.css:` A utility-first CSS framework that enables rapid UI development with pre-defined styles and components. Flexbox and Grid structure has been used for creating the layout.
- `Typescript:` Type safe version of Javascript.
- `Prisma:` An ORM toolkit for database processings.
- `Pinecone:` A vector database for storing, manipulating and searching vector data.
- `mongodb:` A database for storing and manipulating user, chat and message data.

## Live Site

Check out the [live site](https://chat-pdf.netlify.app).

## Folder Structure

- `src/app`: Contains the source code of the Nextjs application. It uses Nextjs app router.
  - `page.tsx`: Entry point of the application that runs when routing is `/`.
  - `actions`: It contains all the actions of the application.
  - `api`: It contains all the api routes of the application.
  - `chat`: It contains all the chat related page and components.
  - `sign-in`: It contains all the sign-in related page and components.
  - `sign-out`: It contains all the sign-out related page and components.
- `src/components`: Contains reusable React components used throughout the application.
- `src/libs`: Contains utility functions used throughout the application. Embedding, storing and searching functions are included.
- `globals.css`: Contains Tailwind directives and custom styles for the application.
- `screenshots`: Includes screenshots of the application.
-

## Deployment

To deploy the application to production, run `npm run build`. This will create an optimized build in the dist folder, which can be deployed to a web server or hosting service of your choice.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions to the project are welcome! Feel free to open issues and pull requests for bug fixes, improvements, or new features.

## Author

- Website - [mehmetakifakkus](https://mehmetakifakkus.github.io)
- Frontend Mentor - [@mehmetakifakkus](https://www.frontendmentor.io/profile/mehmetakifakkus)
-

## License

This project is licensed under the [MIT License](LICENSE).

## Screenshots

![desktop-main-image](/screenshots/desktop-main.png)

## What npm package to install for this project?

For State Management:

- Zustand from [this link](https://github.com/pmndrs/zustand)

For DB:

- prisma from [this link](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)
- prisma-client from [this link](https://www.prisma.io/docs/concepts/components/prisma-client)
- @prisma/client @auth/prisma-adapter from [this link](https://authjs.dev/reference/adapter/prisma)

For form creating and field validation:

- react-hook-form
- react-select

For authorization (with credentials and well-know 3rd parties such as Google and Facebook)

- clerk

For date manipulation

- date-fns
- moment

Others:

- query-string (creating query string from an object)
- react-hot-toast (for user feedback in animation)
