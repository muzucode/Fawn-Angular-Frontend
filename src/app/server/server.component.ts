import { Component, Directive, Input } from '@angular/core';
import { Server } from 'src/types/server';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {


  @Input() data!: Server

}
