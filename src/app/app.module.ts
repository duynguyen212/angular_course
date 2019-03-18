import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { EventBindingComponent } from "./components/event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
