import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServersService } from 'src/app/servers.service';
import { Server } from 'src/types/server';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-connect-to-server',
  templateUrl: './connect-to-server.component.html',
  styleUrls: ['./connect-to-server.component.scss']
})
export class ConnectToServerComponent {
  constructor(
    private serversService: ServersService,
    private toastrService: ToastrService,
    private clipboard: Clipboard
  ){}

  currentServer!: Server
  sshCommand: string = '' 
  pemCommand: string = '' 

  ngOnInit() {
    this.serversService.currentServer.subscribe(server => {
      this.currentServer = server
    })
    
    this.sshCommand = `ssh -i "${this.currentServer.PrivateKeyPath}" ubuntu@${this.currentServer.AddressIPv4}`
    this.pemCommand = `ssh -i "${this.currentServer.PrivateKeyPath}.pem" ubuntu@${this.currentServer.AddressIPv4}`
  }

  copyCommand(command: string) {
    // copy command to clipboard
    this.clipboard.copy(command)
    this.toastrService.info('Copied to clipboard.')

  }
}
