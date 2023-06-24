import { Component } from '@angular/core';
import { take, tap } from 'rxjs';
import { ServersService } from 'src/app/servers.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {

  constructor(
    private serversService: ServersService
  ){}

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
