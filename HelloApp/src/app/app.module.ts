import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EvenBindingComponent } from './even-binding/even-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EvenBindingComponent,
    StructuralDirectiveComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
