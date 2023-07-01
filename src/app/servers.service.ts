import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, of, throwError } from 'rxjs';
import { catchError, retry, take, tap } from 'rxjs/operators';
import { TEST_SERVER } from 'src/dummies/dummies';
import { Database } from 'src/types/database';
import { File } from 'src/types/file';
import { Server } from 'src/types/server';
import { SSHKeypair } from 'src/types/ssh-keypair';


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
  activeManagementView: BehaviorSubject<string> = new BehaviorSubject('Default')

  // TODO: Implement with backend
  fetchServers(): Observable<Server[]> {
    console.log('Fetching servers...')
    return this.http.get<Server[]>('/api/servers').pipe(
      take(1),
      tap(servers => {
        console.log(servers)
        this.servers.next(servers)
      })
    );
  }
  fetchServer(serverId: string): Observable<Server> {
    console.log('Fetching server')
    return this.http.get<Server>(`/api/servers/${serverId}`).pipe(take(1));
  }

  getCurrentServer(): Observable<Server> {
    return this.currentServer.asObservable();
  }
  setCurrentServer(server: Server) {
    this.currentServer.next(server)
  }

  setIsServerPageActive(status: boolean) {
    this.isServerPageActive.next(status)
  }
  fetchFilesFromDir(dirPath: string): Observable<File> {
    // TODO: Send API request with dirPath QSP
    let files: File[] = [
      {title: 'File1.txt'},
      {title: 'README.txt'},
      {title: 'Another.txt'},
      {title: 'Lorem.txt'},
      {title: 'Ipsum.txt'},      
      {title: 'File1.txt'},
      {title: 'README.txt'},
      {title: 'Another.txt'},
      {title: 'Lorem.txt'},
      {title: 'Ipsum.txt'},
    ]
    
    return from(files)
  }
  fetchSSHKeysOnServer(): Observable<SSHKeypair> {
    let keypairs: Observable<SSHKeypair> = from<SSHKeypair[]>([
      {
        label: 'github',
        privateKey: 'kjhfkjgvhgcvxherswea56r6tgilt9dsw34azto7tftdht',
        publicKey: 'MEgCQQCo9+BpMRYQ/dLDS2CyJxRF+j6ctbT3Qp84+KeFhnii7NT7fELilKUSnxS30WAvQCCo2yU1orfgqr41mM70MBAgMBAAE='
      },
      {
        label: 'bitbucket',
        privateKey: 'kjhfkjgvhgcvxherswea56r6tgilt9dsw34azto7tftdht',
        publicKey: 'MEgCQQCo9+BpMRYQ/L3DS2CyJxRF+j6ctbT3Qp84+KeFhnii7NT7fELilKUSnxS30WAvQCCo2yU1orfgqr41mM70MBAgMBAAE='
      },
      {
        label: 'Mercury',
        privateKey: 'kjhfkjgvhgcvxherswea56r6tgilt9dsw34azto7tftdht',
        publicKey: 'MEgCQQCo9+BpMhQ/dL3DS2CyJxRF+j6ctbT3Qp84+KeFhnii7NT7fELilKUSnxS30WAvQCCo2yU1orfgqr41mM70MBAgMBAAE='
      },      
      {
        label: 'Jupiter',
        privateKey: 'kjhfkjgvhgcvxherswea56r6tgilt9dsw34azto7tftdht',
        publicKey: 'MEgCQQCo9+BpRYQ/dL3DS2CyJxRF+j6ctbT3Qp84+KeFhnii7NT7fELilKUSnxS30WAvQCCo2yU1orfgqr41mM70MBAgMBAAE='
      },      
      {
        label: 'Saturn',
        privateKey: 'kjhfkjgvhgcvxherswea56r6tgilt9dsw34azto7tftdht',
        publicKey: 'MEgCQQCo9+BpMRYQ/dL3DS2CyxRF+j6ctbT3Qp84+KeFhnii7NT7fELilKUSnxS30WAvQCCo2yU1orfgqr41mM70MBAgMBAAE='
      },
    ])

    return keypairs
  }
  fetchDatabasesOnServer(): Observable<Database> {
    return from<Database[]>([
      {
        name: 'myfirstdb',
        distribution: 'MySQL',
        distributionVersion: '18.1',
        size: '56'
      },
      {
        name: 'myfirstdb',
        distribution: 'MySQL',
        distributionVersion: '18.1',
        size: '56'
      },
      {
        name: 'myfirstdb',
        distribution: 'MySQL',
        distributionVersion: '18.1',
        size: '56'
      },
      {
        name: 'myfirstdb',
        distribution: 'MySQL',
        distributionVersion: '18.1',
        size: '56'
      },
      {
        name: 'myfirstdb',
        distribution: 'MySQL',
        distributionVersion: '18.1',
        size: '56'
      },
      
    ])
  }
  setActiveManagementView(viewTitle: string) {
    this.activeManagementView.next(viewTitle)
  }
  getActiveManagementView(): BehaviorSubject<string> {
    return this.activeManagementView
  }

}
