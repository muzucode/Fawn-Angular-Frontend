import { Component, HostListener } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ServersService } from 'src/app/servers.service';
import { Database } from 'src/types/database';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {

  constructor(
    private serversSerivce: ServersService,
    public dialog: MatDialog
  ){}

  databases: Database[] = []
  currentDatabase!: Database
  isAddDatabaseModalVisible: boolean = false

  ngOnInit() {
    this.serversSerivce.fetchDatabasesOnServer()
    .pipe()
    .subscribe(database => {
      console.log(database)
      this.databases.push(database)
    })
  }

  toggleAddDatabaseModal() {
    this.isAddDatabaseModalVisible = !this.isAddDatabaseModalVisible
  }
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.isAddDatabaseModalVisible = false;
  }
}
