import {Component, OnInit} from "@angular/core";
import {HeaderService} from "./service/header.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private service: HeaderService) {
  }

  body: Array<String> = [];
  ngOnInit(): void {
    this.body = this.service.getHeaders();
  }
}
