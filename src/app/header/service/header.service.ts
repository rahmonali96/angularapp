import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class HeaderService{
  url = 'http://127.0.0.1:8080/angular/getheaders';
  constructor(private httpClient: HttpClient) {
  }

  getHeaders() {
    return this.httpClient.get<any>(this.url);
  }
}

