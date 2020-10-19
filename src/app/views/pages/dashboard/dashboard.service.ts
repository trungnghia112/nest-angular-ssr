import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService: ApiService) {
  }

  getTotalProviders() {
    return this.apiService.get('/adproviders/total');
  }

  getTotalWebsites() {
    return this.apiService.get('/websites/total');
  }
}
