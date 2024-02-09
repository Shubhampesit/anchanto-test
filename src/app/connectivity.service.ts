import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  private connectivityStatus = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    window.addEventListener('online', () => this.updateConnectivityStatus(true));
    window.addEventListener('offline', () => this.updateConnectivityStatus(false));
  }

  private updateConnectivityStatus(isOnline: boolean): void {
    this.connectivityStatus.next(isOnline);
  }

  getConnectivityStatus(): Observable<boolean> {
    return this.connectivityStatus.asObservable();
  }
}
