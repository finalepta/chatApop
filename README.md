<div align="center">
  <a href="https://github.com/finalepta/chatApp">
    <img src="client/public/speech-bubble-svgrepo-com.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Chat App</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/finalepta/chatApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fastidious-caramel-a438c3.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/finalepta/chatApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/finalepta/chatApp/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



## About The Project

This project is a full-stack chat application using the latest technologies and frameworks. It is designed to provide an easy to use and functional chat experience. We have combined Node.js, Vue, and Socket.io to create an efficient and robust chat application.

The application consists of both a client-side and server-side component. On the client side, we are using Vue and Socket.io to create a powerful and interactive user interface. On the server side, we are using Node.js and Express to create a secure API to manage chat rooms and messages. 

This project is designed to allow users to create rooms, join them, and send and receive messages in real-time. I have implemented a variety of features to make the experience of using the application easier and more enjoyable. 

Full project is built from scratch by me. Design, frontend, backend, and other stuff were made by myself. I think this is pretty impressive pet project for developer, who has been learning about 6 months. 
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

As mentioned above, key technologies are Vue, Node.js and Socket.io, but there are more to mention in the list:
#### Front-end: 
* ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) as SCSS
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  (both client and server sides)

#### Back-end:
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In order to start this project from local PC, you need to follow this steps below:

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/finalepta/chatApp.git
   ```
2. Install NPM packages in both client and server folders
   ```sh
   npm install
   ```
3. Make `.env` files in client and server folders
    * For **client** folder .env should contain only one line: 
      ```sh 
      VITE_APP_HOST_URL=<your-local-host>
      ```
    * For **server** folder it has couple lines more:
      ```sh
      PORT=8000
      MONGODB_URI=<your-mongo-db-uri>
      SECRET_KEY=<secret-key-for-jwt-token>
      ```
4. Run in both folders starting script and you are settled!
    ```sh
    npm run dev
    ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
