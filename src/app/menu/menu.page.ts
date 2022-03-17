import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public options: Array<any> = [

    { icon: 'person-add-outline', text: "Indicar Amigos" },
    { icon: 'phone-portrait-outline', text: "Recarga do Celular" },
    { icon: 'wallet-outline', text: "Depositar" },
    { icon: 'options-outline', text: "Ajustar Limite" },
    { icon: 'help-circle-outline', text: "Me Ajuda" },
    { icon: 'barcode-outline', text: "Pagar" },
    { icon: 'lock-open-outline', text: "Bloquear Cartão" },
    { icon: 'card-outline', text: "Cartão Virtual" },

  ];
  public slidesOptions: any = { slidesPerView: 3, freeMode: true};
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }


  _openSideNav(){
    this.menu.enable(true,'menu-content');
    this.menu.open('menu-content')
  }
}
