let renderer = {
    map: "",

    render(num) {
        'use strict';
        this.question = questions[num];
        this.map =`Вопрос: ${this.question.question}\na:${this.question.a}\tb:${this.question.b}\nc:${this.question.c}\td:${this.question.d}`;
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = "";
    }
};


