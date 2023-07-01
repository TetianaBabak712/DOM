
// <!-- 1. Удалить из списка не машины -->

document.querySelectorAll('li')[2].remove();
document.querySelectorAll('li')[3].remove();



// <!-- 2. с помощью джаваскрипт добавить ко всем li элементам класс listItem  и к ul элементу класс list из style.css

const classUl = document.querySelector('ul');
classUl.classList.add('list');


const classLi = document.querySelectorAll('li').forEach(el=>el.textContent == el.classList.add('listItem'));


// <!-- 3. добавить в начало списка новый элемент li с текстом Bugatti-->

const firstLi = document.querySelector('.list');

const newLi = document.createElement('li');

newLi.innerText = 'Bugatti';

firstLi.prepend(newLi);

firstLi.classList.add('listItem')

// <!-- 4. добавить в конец списка новый элемент li с текстом Ford-->

const lastLi = document.querySelector('.list');

const newLiLast = document.createElement('li');

newLiLast.innerText = 'Ford';

lastLi.appendChild(newLiLast);

lastLi.classList.add('listItem')


// <!-- 5. Добавить в форму с помощью джаваскрипт инпут для имени, фамилии, пароля и подтверждения пароля -->
const inputs = document.querySelector('form');
inputs.innerHTML = '<input /> <input /> <input /> <input />';
inputs[0].placeholder = 'Name';
inputs[1].placeholder = 'Surname';
inputs[inputs.length - 2].placeholder = 'Password';
inputs[inputs.length - 1].placeholder = 'Confirm password';





// <!-- 6. Добавить на страницу любую картинку м помощью джаваскрипт -->

const image = document.createElement('img');

image.src = 'https://i.cenyavto.com/2022/10/CrFI.jpg';

document.querySelector('form').appendChild(image)


// <!-- 7. Удалить из параграфа класс red и italic -->

const p = document.querySelector('p');

p.classList.remove('red', 'italic')



// <!-- 8. С помощью джаваскрипт добавить в див h1 тэг с текстом - this is h1 tag -->
// <!-- 9. установить h1 тэгу цвет текста - синий и размер шрифта 40 пикселей -->

const h1 = document.createElement('h1');

h1.innerText = 'this is h1 tag';

document.querySelector('#h1Wrapper').append(h1);

h1.style.color = 'blue';
h1.style.fontSize = '40px';


