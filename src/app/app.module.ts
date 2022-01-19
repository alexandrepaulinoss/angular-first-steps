import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassStyleComponent } from './ng-class-style/ng-class-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ListComponent,
    NgIfComponent,
    NgClassStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
