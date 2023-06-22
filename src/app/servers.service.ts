import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { TEST_SERVER } from 'src/dummies/dummies';
import { Server } from 'src/types/server';


@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(
    private http: HttpClient
  ) { }

  currentServer: BehaviorSubject<Server> = new BehaviorSubject(TEST_SERVER)

  // TODO: Implement with backend
  fetchServers(): Observable<any> {
    return this.http.get('assets/servers.json')
  }
  setCurrentServer(server: Server) {
    this.currentServer.next(server)
  }

}
