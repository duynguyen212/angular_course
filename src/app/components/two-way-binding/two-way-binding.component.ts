import { Component, OnInit } from "@angular/core";

@Component({
  selector: "two-way-binding",
  templateUrl: "./two-way-binding.component.html",
  styleUrls: ["./two-way-binding.component.css"]
})
export class TwoWayBindingComponent implements OnInit {
  public name: string = "";
  public gender: number = 0; //0 is female, 1 is male
  constructor() {}

  ngOnInit() {}
}
