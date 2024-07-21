import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   fullname = "Dev Training"
   title = "aura"
   onchangeHandler(event) {
      this.title = event.target.value
   }

   address = {
      city: "Kracow",
      postcode: 3008,
      country: "Poland",
      }
   
   trackHandler(event) {
      //this.address.city = event.target.value
      this.address = {...this.address, "city": event.target.value}
   }


   

}