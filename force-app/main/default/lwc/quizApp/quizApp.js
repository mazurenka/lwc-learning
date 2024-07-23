import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers

    myQuestions = [
        {
            id: "Question 1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question 2",
            question: "Which of the file is invalid in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question 3",
            question: "Which one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        },

    ]

    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const { name, value } = event.target
        //const name = event.target.name
        //const value = event.target.value
        this.selected = {...this.selected, [name]:value}
    }
}