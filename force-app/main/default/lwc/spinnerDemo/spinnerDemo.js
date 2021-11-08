import { LightningElement } from 'lwc';

export default class SpinnerDemo extends LightningElement {

    showSpinner = false;
    spinnerHandler(event) {
        this.showSpinner = true;
        window.setTimeout(()=>{ 
            this.showSpinner = false;
            window.clearTimeout(timer)
        }, 3000)
    }
}