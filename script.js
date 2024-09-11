'use strict';

//working with classes
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//btncsShowModal мы назвали, так как так как кнопок 3 
// Выбираем несколько элементов с одинаковым классом с помощью querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
// Создадим функцию, которая будет закрыват модульное окно, чтобы не копировать в разных местах
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const openModal = function () {
  modal.classList.remove('hidden'); 
  overlay.classList.remove('hidden');
}

//когда  цикле пишем толко ону строчку, мы можем не открывать блок кода с помоью { }
for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent); // Выводим текстовый контент трех кнопок в консоль   
  //Мы подключили функцию обработчика события на все три кнопки с помощью цикла for 
  btnsOpenModal[i].addEventListener('click', openModal
    // console.log('Button cliсked');


    // МЫ ОБРАЩАЕМСЯ К ЭЛЕМЕНТУ С ПОМОЩЬЮ ПЕРЕМЕННОЙ КОТОРУЮ ИНИЦИИРОВАЛИ ВЫШЕ
    // КОГДА МЫ ИСПОЛЬЗУЕМ МЕТОД classList И С ПОСЛЕДУЮЩИМИ МЕТОДАМИ ТАКИЕ КАК REMOVE, ADD, И Т.Д. 
    // ТОЧКУ ДЛЯ ОБОЗНАЧЕНИЯ КЛАССА СТАВИТЬ НЕ НАДО ТАК КАК МЫ ВЗАИМОДЕЙСТВУЕМ С КЛАССОМ ПРИ ПОМОЩИ МЕТОДА. 
    // А ТОЧКУ ИСПОЛЬЗОВАЛИ ДЛЯ ВЫБОРА ЭЛЕМЕНТА 
    // modal.classList.remove('hidden'); // Также можно обращаться к нескольким классам через запятую
    // overlay.classList.remove('hidden');

  );


// чтобы окно закрывалось при нажатии на крестик и используем функцию которую мы записали в переменную.
//Таким образом она вызовется тогда, когда на элементе произойдет клик
btnCloseModal.addEventListener('click', closeModal);

// чтобы окно закрывалось при нажатии на экран за пределами модульного окна
overlay.addEventListener('click', closeModal);
*/





// Handling an 'Esc' keypress event Закрытие модального окна с помощью клавиши Esc
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboards events(Спобытия клавиатурных клавиш) - это глобальные события и они не привязаны к одному специфичному элементу
// DOCUMENT ЯВЛЯЕТСЯ БОЛЬШИМ ОБЪЕКТОМ ХРАНЯЩИЙ МНОГО МЕТОДОВ
// У события клавиатуры есть 3 состояний: когда клавиша нажата keydown
// когда клавиша зажата keypress
// когда клавиша возвращается в изначальное положение keyup

// handler - обработчик

// TODO ВАЖНо
// В Любое время когда событие случается js на самом деле генерирует объект. И этот объект содержит всю информацию о самом событии и мы можем получить доступ к объекту инде обработчику функции 
// Когда событие совершается у нас есть доступ к информации о событии в функции обработчика события как ниже
// TODO

// Для того чтобы узнать какая клавиша была нажата, нужно передать в параметр функции событие(e) - но его можно назвать хоть как либо

//document.addEventListener('keydown', function(e){

//Когда есть (e) js вызовит эту функцию с объектом события в качестве аргумента. Это работает потому что мы не вызываем эту функцию здесь или (здесь сама не вызывается)
// Мы не вызываем функцию. Мы только define(определяем) её здесь 
// Простыми словами мы говорим. js вызови функцию когда случается событие клавиша нажатаю И когда ты это сделаешь(js то есть) пожалуйста пройди в объект события, как аргумент 

// console.log('A key was pressed'); // Выведенажататся просто сообщение, но не выведется какая имено клавиша нажата  
//})

document.addEventListener('keydown', function (e) {
  //console.log(e);  // Здесь определится объект KeyboradEvent и в ключе code: 'Будет написана клавиша, которая была нажата', и в ключе key:'Escape'
  console.log(e.key); //  Теперь у объекта выберем именно ключ key, и в консоли выведтся значение данного ключа  

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //Когда модуль не содержит хиден, то есть он активею мы будем закрыть окно с помощью функции 
      closeModal(); // Здесь нам требуется вызвать функцию. Потому что когда эта функция здесь существует, нам нужно чтобы когд внутри ее выполнился    
  }
});