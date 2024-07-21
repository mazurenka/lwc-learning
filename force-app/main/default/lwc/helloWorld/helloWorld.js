import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

   /***Data binding example */
   fullname = "Dev Training"
   title = "aura"
   onchangeHandler(event) {
      this.title = event.target.value
   }

   /***@track binding example */
   @track address = {
      city: "Kracow",
      postcode: 3008,
      country: "Poland",
      }
   trackHandler(event) {
      this.address.city = event.target.value
   }

   /***getter example */
   users = ["Leon Kennedy", "Carlos Oliveira", "Jill Valentine"]

   get firstUser() {
      return this.users[0]
   }

   

}






















