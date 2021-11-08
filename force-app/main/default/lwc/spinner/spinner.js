import { LightningElement, track, api } from 'lwc';

export default class Spinner extends LightningElement {

    @api helpText = 'Please wait while loading...';
    @api size = 'medium'; //Supports all the valid values of lightning:spinner i.e., small, medium and large.
    @api variant = 'base'; //Valid values: base, brand, inverse
    @api showSpinner = false;
    @track spinnerClass;

    connectedCallback() {

        if (this.size == 'small') {
                this.spinnerClass = 'spinner-small';
        } else if (this.size == 'medium') {
                this.spinnerClass = 'spinner-medium';
        } else if (this.size == 'large') {
                this.spinnerClass = 'spinner-large';
        }
    }
}