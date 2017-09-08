import { Component, Directive, Input,OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
/**
   * Whether a backdrop element should be created for a given modal (true by default).
   * Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
   */
@Component({
    selector: 'ngm-example',
    exportAs: 'NgmExample',
    template: `
    <div>{{label}}</div>
    `
})
export class NgmExample implements OnInit{
    
    /**
   * An array or comma separated strings of panel identifiers that should be opened
   */
    @Input() label: string;
    /**
     * Programmatically toggle a panel with a given id.
    */
    constructor() { }

    ngOnInit() {
        console.log(name);
    }

    toggle(panelId: string) {

    }
}

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
@Injectable()
export class NgmExampleConfig {
    closeOthers = false;
    type: string;
}