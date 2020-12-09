import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api = 'http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=5a87e9bd2efe4aacadf754ee19015a77'; //chave aleatória

  constructor(public http:HttpClient) { }

  public getNews() {
    let news = this.api

    return this.http.get(news)
  }
}
