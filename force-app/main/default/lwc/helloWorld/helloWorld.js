import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name //undefined
    age = 30;
    fullname = "Salesforce poland";
    showData = false;
    details = {
        name: "dummy",
        area: "Earth"
    }
    userList = ["A", "B", "C"]
}