import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, take, tap } from 'rxjs/operators';
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
  fetchServers(): Observable<Server[]> {
    return this.http.get<Server[]>('assets/servers.json').pipe(
      tap(servers => this.servers.next(servers))
    );
  }

  getCurrentServer(): Observable<Server> {
    return this.currentServer.asObservable();
  }
  setCurrentServer(server: Server) {
    this.currentServer.next(server)
  }

  getServerById(serverId: number): Server {
    let s = {}
    this.servers.subscribe(servers => {
      console.log(servers)
      s = (servers.find(s => s.Id === serverId)) as Server
      console.log(s)
    })

    return s as Server
  }

}
