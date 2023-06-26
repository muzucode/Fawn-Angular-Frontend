import { Component } from '@angular/core';
import { ServersService } from 'src/app/servers.service';
import { Database } from 'src/types/database';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {

  constructor(
    private serversSerivce: ServersService
  ){}

  databases: Database[] = []
  currentDatabase!: Database

  ngOnInit() {
    this.serversSerivce.fetchDatabasesOnServer()
    .pipe()
    .subscribe(database => {
      console.log(database)
      this.databases.push(database)
    })
  }
}
