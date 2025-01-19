import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getServices(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/Xentour/Service/GetServices`)
      .pipe(
        map((response: any) => response.data)  // Aquí se especifica que `response` es de tipo `any`
      );
  }

  GetServiceDetailById(serviceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Xentour/Service/GetServiceDetailById/${serviceId}`)
      .pipe(
        map((response: any) => response.data) // Aquí se mapea la respuesta para obtener únicamente los datos relevantes
      );
  }




  getInfoCompany() {
    return this.http.get(`${this.apiUrl}/Xentour/InfoCompany/InfoCompany`); // Usando la base URL
  }
}
