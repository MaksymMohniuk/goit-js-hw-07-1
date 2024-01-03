const listName = document.getElementById('categories');
//console.log(listName);
const listItems = document.querySelectorAll('.item');
//console.log(listItem);
const listItemNumber  = listItems.length;
console.log('Number of categories: ' + listItemNumber);

//const listItem = document.querySelector('.item');
//console.log(listItem);
listItems.forEach ((listItem) => {
    const listName = listItem.querySelector('h2').textContent;
    const listCategory = listItem.querySelectorAll('ul li');
    console.log(`Category: ${listName} 
    Elements: ${listCategory.length}`)
}

) 