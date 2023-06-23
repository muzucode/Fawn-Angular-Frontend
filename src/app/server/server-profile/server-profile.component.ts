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
    private activatedRoute: ActivatedRoute
  ) {}

  data!: any

  ngOnInit() {  
    // Set server data from resolver
    this.activatedRoute.data.subscribe(data => {
      console.log(data)
      this.data = data
    })

  }
}
