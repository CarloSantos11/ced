// https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState)
  if (request.readyState === 4) {
    console.log(request, request.responseText)
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/')
request.send();