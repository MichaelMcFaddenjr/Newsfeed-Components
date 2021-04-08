import data from './Article'

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
const articles = document.querySelector('.articles')

function articleMaker (item) {
    const article = document.createElement('div')
    const articleTitle = document.createElement('h2')
    const articleDate = document.createElement('p')
    const paraOne = document.createElement('p')
    const paraTwo = document.createElement('p')
    const paraThree = document.createElement('p')
    const expandButton = document.createElement('span')

    article.appendChild(articleTitle)
    article.appendChild(articleDate)
    article.appendChild(paraOne)
    article.appendChild(paraTwo)
    article.appendChild(paraThree)
    article.appendChild(expandButton)

    article.classList.add('article')
    articleDate.classList.add('date')
    expandButton.classList.add('expandButton')

    articleTitle.textContent = item.title
    articleDate.textContent = item.date
    paraOne.textContent = item.firstParagraph
    paraTwo.textContent = item.secondParagraph
    paraThree.textContent = item.thirdParagraph
    expandButton.textContent = "+"

    expandButton.addEventListener('click', evt=> {
      article.classList.add('article-open')
    })

    return article
}    

data.forEach((data) => {
  articles.appendChild(
    articleMaker(data)
  )
});
