let numberQuestions, count;
let game = {
    run() {
        'use strict';
        numberQuestions = 0;
        count = 0;
        while (numberQuestions<5) {
            renderer.render(++numberQuestions);
            const letter = questionnaire.getLetter();
            if (letter === null) {
                console.log("Игра окончена.");
                return;
            }
            questionnaire.checker(letter);
            renderer.clear();
        }
        let continueAnswer = prompt(`Ваш счет: ${count}. Хотите сыграть снова?\nДля положительного ответа введите "y"`);
        if (continueAnswer === 'y'){
            game.run();
        }
    },

    init() {
        'use strict';
        console.log("Добро пожаловать на игру 'Кто хочет стать миллионером'!");
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();
