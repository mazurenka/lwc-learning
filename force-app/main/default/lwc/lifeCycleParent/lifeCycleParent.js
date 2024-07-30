import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor() {
        super()
        console.log('parent contructpr called')
    }
    connectedCallback() {
        console.log('parent connected callback called')
    }
    renderedCallback() {
        console.log('parent rendered callback called')
    }
    disconnectedCallback() {
        console.log('parent disconnected callback called')
    }
}