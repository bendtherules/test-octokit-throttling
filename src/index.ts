import { MyLibrary } from './MyLibrary';

console.log('See this in your browser console: Typescript Webpack Starter Launched');

const myLibrary = new MyLibrary();
const result = myLibrary.getRepos();

console.log(myLibrary);
console.log(`A random number ${result}`);
