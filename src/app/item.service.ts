import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiServerUrl=environment.apiBaseUrl;
 
  

  constructor(private httpClient:HttpClient) { }

 public getItems():Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.apiServerUrl}/item/all`);
    
  }

  public addItem(item:Item):Observable<Item>{
    return this.httpClient.post<Item>(`${this.apiServerUrl}/item`,item)
  }


  public updateItem(item:Item):Observable<Item>{
    return this.httpClient.put<Item>(`${this.apiServerUrl}/item/update`,item);
  }
}
