import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  providers: [NewsService]
})
export class NoticiasPage implements OnInit {

  constructor(public newsService:NewsService, public loadingController: LoadingController) { }

  public news_list = Array<any>();
  public page:number = 1;

  carregaPagina() {
    this.newsService.getNews().subscribe(
      data => {
        const response = (data as any);
       // if(this.page == 1) {
          this.news_list = response.articles;
       // } else {
       // this.news_list = this.news_list.concat(response.articles);
       // }
      },
      erro => {
        console.log("Erro");
      }
    )
  }

  ionViewDidEnter() {
    this.efeitoLoading();
    this.carregaPagina();
  }

  async efeitoLoading() {
    const loading = await this.loadingController.create({
      spinner: "circular",
      duration: 2000,
      message: 'Carregando...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  efeitoRefresh(event) {
    this.page = 1;
    this.carregaPagina()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
  }

}
