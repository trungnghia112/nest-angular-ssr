import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.currentUser.pipe(
      take(1),
      map((user: User) => !!(user && user.roles.admin)),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error('Access denied - Admins only');
        }
      })
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanReadGuard implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.currentUser.pipe(
      take(1),
      map(user => !!(user && this.auth.canRead(user))), // <-- important line
      tap(canView => {
        if (!canView) {
          console.error('Access denied. Must have permission to view content');
        }
      })
    );
  }
}
