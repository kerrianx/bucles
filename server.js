const express = require('express');
const app = express();
const port = 9990;

// Configuration for the EJS template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route for the main page
app.get('/', (req, res) => {
  const data = {
    forLoopData: [],
    forInLoopData: {},
    whileLoopData: [],
    doWhileLoopData: [],
    testForData:[],
    frutas: []
  };

  // testing for

  for(let y=0;y<=10;y++){
    data.testForData.push(`Este es el test numero ${y}`);
  }

  // For loop
  for (let i = 0; i < 5; i++) {
    data.forLoopData.push(`For loop iteration: ${i}`);
  }
  console.log('For Loop:', data.forLoopData);

  // For-in loop
  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    data.forInLoopData[key] = obj[key];
  }
  console.log('For-In Loop:', data.forInLoopData);

  // While loop
  let j = 0;
  while (j < 5) {
    data.whileLoopData.push(`While loop iteration: ${j}`);
    j++;
  }
  console.log('While Loop:', data.whileLoopData);

  // Do-while loop
  let k = 0;
  do {
    data.doWhileLoopData.push(`Do-while loop iteration: ${k}`);
    k++;
  } while (k < 5);
  console.log('Do-While Loop:', data.doWhileLoopData);

  
//********************tarea***********************//
const frutas=['manzana','pera','piña','naranja','limon','banano','sandia','guayaba','mandarina','fresa','melon']



for (let i =0; i< frutas.length;i++){
  data.frutas.push(frutas[i]);
}

console.log(data.frutas)
  
  
  
  res.render('index', { data });


});




// Start the server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
