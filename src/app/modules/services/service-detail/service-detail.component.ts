import { Component, effect, inject, Input, input } from '@angular/core';
import { ServiceDetailStateService } from '../../../services/service-detail.state';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-detail.component.html',
  styles: ``
})
export class ServiceDetailComponent {
  //#region Variables globales
  serviceDetailState = inject(ServiceDetailStateService).state;
  private activatedRoute = inject(ActivatedRoute); // Inyección del servicio ActivatedRoute
  public id!: number; // El ID será asignado desde la URL
  //#endregion

  //#region Constructores
  constructor() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam; // Convierte el parámetro a número
        this.serviceDetailState.getById(this.id); // Llama al método con el ID obtenido
      } else {
        console.warn('No ID provided in route');
      }
    });
    effect(()=>{
      this.serviceDetailState.getById(this.id);
    })
  }
  //#endregion

  //#region Eventos
  ngOnInit() {}
  //#endregion
}
