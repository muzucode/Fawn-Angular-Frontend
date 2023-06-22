import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from 'src/app/servers.service';
import { Server } from 'src/types/server';

@Component({
  selector: 'app-server-profile',
  templateUrl: './server-profile.component.html',
  styleUrls: ['./server-profile.component.scss']
})
export class ServerProfileComponent {

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  data!: Server

  ngOnInit() {
    let serverId = (this.route.snapshot.paramMap.get('serverId')) as string
    this.data = this.serversService.getServerById(+serverId)
    console.log(this.data)
  }
}
