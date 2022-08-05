## Getting Started

### **Must have Node.js installed to run this program**

<br>

**[Download Node.js Here](https://nodejs.org/en/download/)**

<br>

After installing verify installing by typing `node -v` and `npm -v` to verify everything installed properly. Once installed type:

```
npm install
```

or

```
npm i
```

in the terminal, in the root directory of the program. This will install all packages included in the package.json.

---

<br>

## Starting the server

<br>

Included in the file is a .env-template, create a file named `.env` and using that template populate the env variables with the required variables to connect to the database.

Starting the server in development with nodemon: run

```
npm run dev
```

in the termind, nodemon watches for file changes and restarts the server if it detects any changes. Alternatively run

```
npm run start
```

starts the server with node and any changes to any files the server will need to be manually restarted for changes to take effect.

Both commands should either return a message in the console saying

```
Server is running on port [PORT NUMBER]
Successfully connected to database
```

or an error message. To test the connection navigate to http://localhost:8080/ in the browser and you should see a JSON response `message: Successful Connection`.

---

<br>

## Creating the PDF

<br>

The API endpoint to create the PDF is `http://localhost:8080/api/ponies`. If the PDF is successfully created created the browser will return a response `message: Successfully retrieved all ponies. PDF created [date] [time]. As well as a message in the console stating the PDF was created [date] [time].

The created PDF will be saved to the ./pdfs file in the root directory.

---

<br>

## Updating the Available Photos Array

There's no need to update the available photos array manually. I've included a scraper function that returns all `View Image` buttons from the lineage page, and formats the href into link provided to the PDF.

---

## Documentation

<br>

[Link for the documentation](https://adam-paul952.github.io/generatepdf-docs/)
