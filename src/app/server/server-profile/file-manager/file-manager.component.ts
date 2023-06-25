import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs';
import { ServersService } from 'src/app/servers.service';

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

  ngOnInit() {   
    this.serversService.fetchFilesFromDir('/')
    .pipe(
      tap(file => console.log('Received file: ' + file.title))
    )
    .subscribe(file => {
      this.files.push(file)
    }).unsubscribe()

  }

}
