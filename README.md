# Restaurant

Steps to configure the repo : 

**Front End**

Port running on localhost:3000 

1)In the Home file you should go to the line No.42 and change the URL with your own.

  useEffect(() => {
    const apiUrl = 'http://**IP**:5000/Dishes';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) { ....


2)You should do the same with informations.js file in line No.28 
          useEffect(() => {
            const apiUrl = 'http://**IP**:5000/Dishes';
            fetch(apiUrl)
              .then((response) => {
                if (!response.ok) { ....

                
The packages you gonna need are : 

```
    "@chakra-ui/react": "^2.8.1",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^10.16.4",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.16.0",
    "react-scripts": "5.0.1",
    "sort-by": "^1.2.0",
    "web-vitals": "^2.1.4"
```

**Back End**

Server Running on port 5000.

Package.json : 

```
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.5.0",
    "cors": "^2.8.5",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

