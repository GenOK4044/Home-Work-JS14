'use strict'

$(function () {
	


	var test = [
		{
			question : "Ваше имя?",
			answer   : [
				"Михаил",
				"Евгений",
				"Андрей"
			],
			rightAnswer: "Евгений"
		},
		{
			question : "Ваша фамилия?",
			answer   : [
				"Попов",
				"Антонов",
				"Спирков"
			],
			rightAnswer: "Спирков"
		},
		{
			question : "Ваш возраст?",
			answer   : [
				"26",
				"27",
				"28"
			],
			rightAnswer: "26"
		},
	];

  localStorage.setItem('data', JSON.stringify(test)); //заливаем обьект в локальное хранилище приведя его в строку перед этим//
  var testItems = JSON.parse(localStorage.getItem('data'));//достаем из локального хранилища строку и преобразуем ее в обьект//


  var htmlQuestion = $('#questions-generate').html();//генерируем вопросы//
  var content = tmpl(htmlQuestion, {
    data: testItems
  });

  $('form').append(content);





	function checkAnswer() {

  		var rightAnswerArray = [];//массив правильных ответов//

  		for (var i = 0; i < testItems.length; i++) {
			rightAnswerArray.push(testItems[i].rightAnswer);//добавляем правильные варианты ответов в массив//
  		};

  		var userChecked = [];//массив ответов юзера//    
		var userAnswer1 = $('input[name="checkbox0"]:checked').val();
 		var userAnswer2 = $('input[name="checkbox1"]:checked').val();
 		var userAnswer3 = $('input[name="checkbox2"]:checked').val();
   
     	userChecked.push(userAnswer1, userAnswer2, userAnswer3);


function hideModalWindow() {
	$('.modalDialog').css('display','none');
}
$('.clo').on('click', hideModalWindow);



  
  		if (userChecked.toString() == rightAnswerArray.toString()) {//сравниваем массивы приведя их в строки//
    		$('.modalDialog').css('display','block')
  		} else {
     		alert('no')
  		};

	}


$('.check').on('click', checkAnswer);
});


