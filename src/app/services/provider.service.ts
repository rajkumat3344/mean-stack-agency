import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //URL endpoint to our Express app
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  //GET All records
  getProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
