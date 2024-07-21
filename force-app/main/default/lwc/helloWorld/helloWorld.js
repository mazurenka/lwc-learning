import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
   fullname = "Dev Training"
   title = "aura"

   onchangeHandler(event) {
      this.title = event.target.value
   }


   

}