import { NgModule, ModuleWithProviders } from '@angular/core';

// Import section
import { NgmExampleModule } from './example/example.module';

// export section
export { NgmExampleModule } from './example/example.module';

const NGM_MODULES = [
    NgmExampleModule
];

@NgModule({
    imports: [
        NgmExampleModule.forRoot()
    ],
    exports: NGM_MODULES,
})

export class NgmRootModule {

}

@NgModule({ imports: NGM_MODULES, exports: NGM_MODULES })
export class NgmModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgmRootModule
        };
    }
}
