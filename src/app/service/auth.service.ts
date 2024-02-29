import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticated = false;
  private storageKey = 'authToken';

  constructor(private router: Router) {
    this.isAuthenticated = this.getStoredAuthStatus();
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public login() {
    this.isAuthenticated = true;
    this.storeAuthStatus(true);
  }

  public logout() {
    this.isAuthenticated = false;
    this.clearAuthData();
    this.router.navigate(['']);
  }

  private storeAuthStatus(status: boolean) {
    localStorage.setItem(this.storageKey, status.toString());
  }

  private getStoredAuthStatus(): boolean {
    const storedStatus = localStorage.getItem(this.storageKey);
    return storedStatus ? JSON.parse(storedStatus) : false;
  }

  private clearAuthData() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('loggedInUser');
  }
}
