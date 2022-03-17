import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };

  public items: Array<any> = [

    { icon: 'help-circle-outline', text: 'Me Ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar Conta' },
    { icon: 'card-outline', text: 'Configurar Cartão' },
    { icon: 'phone-portrait-outline', text: 'Configuração do App' }
    
  ];

}
