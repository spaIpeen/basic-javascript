let questionnaire = {
    getLetter() {
        'use strict';
        const availableLetter = ['a', 'b', 'c', 'd'];
        while (true) {
            let letter = prompt('Введите букву варианта ответа, "Отмена" для выхода.');
            if (!availableLetter.includes(letter) && letter != null) {
                alert('Введите один из доступных вариантов ответа(a, b, c, d).');
                continue;
            }
            return letter;
        }
    },

    checker(letter) {
        'use strict';
        switch (letter) {
            case 'a':
                if (numberQuestions == 4){
                    count += 1;
                }
                break;
            case 'b':
                if (numberQuestions == 3 || numberQuestions == 2){
                    count += 1;
                }
                break;
            case 'c':
                if (numberQuestions == 5){
                    count += 1;
                }
                break;
            case 'd':
                if (numberQuestions == 1){
                    count += 1;
                }
                break;
        }
    },
};
