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

  servers: BehaviorSubject<Server[]> = new BehaviorSubject<Server[]>([])
  currentServer: BehaviorSubject<Server> = new BehaviorSubject(TEST_SERVER)

    // TODO: Implement with backend
  fetchServers() {
    this.http.get('assets/servers.json')
    .pipe(take(1))
    .subscribe({
      next: (servers: any) => {
        this.servers.next(servers)
      },
      error: (e) => {
        console.error(e)
      }
    })
  }
  
  setCurrentServer(server: Server) {
    this.currentServer.next(server)
  }


}
