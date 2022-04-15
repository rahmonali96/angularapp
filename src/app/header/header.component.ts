import {Component, OnInit} from "@angular/core";
import {HeaderService} from "./service/header.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private service: HeaderService) {
  }

  body: any;
  ngOnInit(): void {
    this.service.getHeaders().subscribe(data => {
      this.body = data
    });
  }
}
