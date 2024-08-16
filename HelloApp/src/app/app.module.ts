import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EvenBindingComponent } from './even-binding/even-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EvenBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
