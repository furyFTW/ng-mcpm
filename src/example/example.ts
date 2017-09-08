import { Component, Directive, Input } from '@angular/core';
import { Injectable } from '@angular/core';
/**
   * Whether a backdrop element should be created for a given modal (true by default).
   * Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
   */
@Component({
    selector: 'ngm-example',
    exportAs: 'NgmExample',
    template: `
    <div>1</div>
    `
})
export class NgmExample {
    constructor() { }
    /**
   * An array or comma separated strings of panel identifiers that should be opened
   */
    @Input() activeIds: string | string[] = [];
    /**
     * Programmatically toggle a panel with a given id.
    */
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