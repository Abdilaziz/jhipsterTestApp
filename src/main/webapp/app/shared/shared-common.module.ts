import { NgModule } from '@angular/core';

import { JhipsterTestAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterTestAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterTestAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterTestAppSharedCommonModule {}
