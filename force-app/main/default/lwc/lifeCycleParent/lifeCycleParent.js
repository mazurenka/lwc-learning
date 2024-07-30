import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor() {
        super()
        console.log('parent contructpr called')
    }
    connectedCallback() {
        console.log('parent connected callback called')
    }
    
}