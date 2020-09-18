const marked = require('marked');
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

const renderM = (markdown) => {
    htmlView.innerHTML = marked(markdown, { sanitize: true });
}

markdownView.addEventListener('keyup', e => {
    const current = e.target.value;
    renderM(current)
})