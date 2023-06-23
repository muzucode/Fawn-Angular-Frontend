import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { Server } from 'src/types/server';

@Component({
  selector: 'app-server-overview',
  templateUrl: './server-overview.component.html',
  styleUrls: ['./server-overview.component.scss']
})
export class ServerOverviewComponent {

  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  dataSubscription!: Subscription
  data!: Server

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.data = data['server']
    })
  }
}
