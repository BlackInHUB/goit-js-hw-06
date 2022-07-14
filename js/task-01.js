const categoryArray = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryArray.length}`);

categoryArray.forEach(function (el) {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('li').length}`);
});
