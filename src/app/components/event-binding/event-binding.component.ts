import { Component, OnInit } from "@angular/core";

@Component({
  selector: "event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"]
})
export class EventBindingComponent implements OnInit {
  username = "";
  name = "";

  constructor() {}

  count = 0;

  ngOnInit() {}

  onClickMe() {
    alert("You clicked me");
  }

  onCounting() {
    this.count += 1;
  }

  onKeyUp(event) {
    //console.log(event);
    this.username = event.target.value;
  }

  onEnterKeyUp(ev) {
    this.name = ev.target.value;
  }
}
