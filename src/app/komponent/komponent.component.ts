import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-komponent",
  templateUrl: "./komponent.component.html",
  styleUrls: ["./komponent.component.scss"]
})
export class KomponentComponent implements OnInit {
  constructor() {}
  myContext = { $implicit: "World", localSk: "Svet", polski: "Świecie" };

  ngOnInit() {}
}
