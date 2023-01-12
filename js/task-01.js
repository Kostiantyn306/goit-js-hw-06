
// const len = document.querySelector('ul').children.length;
// console.log(len)

const elementNumberUl = document.querySelectorAll(".item");
console.log(`Number of categories: ${elementNumberUl.length}`)

const allElements = document.querySelectorAll('li.item')
 
allElements.forEach(function(num) {

    const everName = num.children
    console.log("Category:", everName[0].textContent)
    const everNum = num.children
    console.log("Elements:", everNum[1].children.length)
    
});

