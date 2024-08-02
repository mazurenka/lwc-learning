import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor() {
        super()
        console.log('child contructpr called')
    }
    interval
    connectedCallback() {
        console.log('child connected callback called')
        throw new Error('Loading of Child Component failed')
    }
    renderedCallback() {
        console.log('child rendered callback called')
    }
    disconnectedCallback() {
        alert("Child disconnectedCallback called ! ")
    }
}