const listEl = document.querySelector('#categories');
const addClasslistEl = listEl.classList.add('list');
const itemElements = listEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemElements.length}`);

const result = itemElements.forEach(item => {
  const titleClass = item.querySelector('h2').classList.add('title-list');
  const titleEl = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li');
  for (const item of categoryElements) {
    const addClassCategoryEl = item.classList.add('item-list');
  }
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${categoryElements.length}`);
});
