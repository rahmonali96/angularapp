import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderService{
  constructor() {
  }

  getHeaders(): Array<String> {
    return ['Home', 'Archive', 'Category', 'Pages', 'Contacts'];
  }
}

