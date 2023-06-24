import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, of, throwError } from 'rxjs';
import { catchError, retry, take, tap } from 'rxjs/operators';
import { TEST_SERVER } from 'src/dummies/dummies';
import { File } from 'src/types/file';
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
  isServerPageActive: BehaviorSubject<boolean> = new BehaviorSubject(false)

  // TODO: Implement with backend
  fetchServers(): Observable<Server[]> {
    console.log('Fetching servers...')
    return this.http.get<Server[]>('assets/servers.json').pipe(
      take(1),
      tap(servers => this.servers.next(servers))
    );
  }


  getCurrentServer(): Observable<Server> {
    return this.currentServer.asObservable();
  }
  setCurrentServer(server: Server) {
    this.currentServer.next(server)
  }
  fetchServer(serverId: string): Observable<Server> {
    console.log('Fetching server')
    return this.http.get<Server>(`assets/server/${serverId}.json`).pipe(take(1));
  }
  setIsServerPageActive(status: boolean) {
    this.isServerPageActive.next(status)
  }
  fetchFilesFromDir(dirPath: string): Observable<File> {
    // TODO: Send API request with dirPath QSP
    let files: File[] = [
      {title: 'Sean.txt'},
      {title: 'README.txt'},
      {title: 'Caroline.txt'},
    ]
    
    return from(files)
  }

}
