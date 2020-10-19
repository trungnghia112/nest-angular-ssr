import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  data$: any;
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: ApiService) {
  }

  get(slug: string) {
    return this.http.get(`/categories?slug=${slug}&_embed`);
  }
}
