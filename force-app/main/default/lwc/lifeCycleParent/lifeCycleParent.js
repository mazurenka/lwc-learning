import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
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
    handleClick() {
        this.isChildVisible = !this.isChildVisible
    }
}