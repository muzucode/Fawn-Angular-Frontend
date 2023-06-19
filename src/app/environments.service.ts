import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {

  constructor(
    private http: HttpClient
  ) { }

  _currentEnvironment: BehaviorSubject<string> = new BehaviorSubject('Default')

  fetchEnvironments(): Observable<any> {
    return this.http.get('assets/environments.json')
  }
  fetchCurrentEnvironment(): Observable<any> {
    return this.http.get('assets/current-environment.json')
  } 

  set currentEnvironment(value: any) {
    this._currentEnvironment.next(value)
  }
  get currentEnvironment(): Observable<string> {
    return this._currentEnvironment
  }
}
