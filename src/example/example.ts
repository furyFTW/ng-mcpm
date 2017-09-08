import { Component, Directive, } from '@angular/core';

@Component({
    selector: 'ngm-example',
    template: `
    <div>1</div>
    `
})
export class NgmExample {
    constructor() { }
}
export interface NgmModalOptions {
    /**
     * Whether a backdrop element should be created for a given modal (true by default).
     * Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
     */
    backdrop?: boolean | 'static';

    /**
     * An element to which to attach newly opened modal windows.
     */
    container?: string;

    /**
     * Whether to close the modal when escape key is pressed (true by default).
     */
    keyboard?: boolean;

    /**
     * Size of a new modal window.
     */
    size?: 'sm' | 'lg';

    /**
     * Custom class to append to the modal window
     */
    windowClass?: string;
}
