import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skipLast, take, tap } from 'rxjs';
import { ServersService } from 'src/app/servers.service';
import { Server } from 'src/types/server';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
  ){
    this.serversService.setActiveManagementView(this.activatedRoute.snapshot.data['title'])
  }

  files: any[] = []
  currentServer!: Server

  ngOnInit() {  
    this.serversService.currentServer.subscribe(server => this.currentServer = server) 
    this.serversService.fetchFilesFromServer(this.currentServer.Id, '/')
    .subscribe(files => {
      this.files = files
    })

  }

}
