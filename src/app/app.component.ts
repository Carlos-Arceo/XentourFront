import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './shared/ui/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'XentourFront';

  tours: any;
  infoCompany: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.loadTours();
    //this.loadInfoCompany();
  }



  loadInfoCompany() {
      this.apiService.getInfoCompany().subscribe(
        (data: any) => {
          this.infoCompany = data; // Asignar los datos recibidos
        },
        (error) => {
          console.error('Error al cargar la información de la compañía', error); // Manejo de errores
        }
      );
  }

}
