import { Component, inject } from '@angular/core';
import { ServicesStateService } from '../../../services/services-state.service';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-list.component.html',
  styles: ``
})
export class ServiceListComponent {
  //#region Variables globales
  servicesState = inject(ServicesStateService);
  //#endregion

  //#region Constructores
  constructor() { }
  //#endregion

  //#region Eventos
  ngOnInit() {}
  //#endregion
}
