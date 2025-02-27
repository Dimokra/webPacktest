import '../styles/index.css';
import { userName, greet } from "./user.js"
import def from './helper.js';
(function () {
    const secret = "klj"
    console.log(secret)
})()

// console.log(secret) //secret is not defined

greet(userName)

def()