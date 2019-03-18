import { Component, OnInit } from "@angular/core";

@Component({
  selector: "data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  public authorName: string = "NGUYEN";
  public age: number = 40;
  public isMarried: boolean = true;
  public imgLink: string =
    "http://image.superstreetonline.com/f/117761589+re0+cr1+ar0/2012-bmw-z4-sdrive28i-left-front-1.jpg";

  public isValid = false;
  public isBordered: boolean = false;
  public isChecked: number = 0; // Gia su 0 thi remove class, 1 thi add class

  public user: object = {
    name: "Object",
    dateCreated: "01/01/2019"
  };

  constructor() {}

  ngOnInit() {}

  showObject() {
    return `Object name: ${this.user["name"]}`;
  }
}
