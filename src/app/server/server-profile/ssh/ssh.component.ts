import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ServersService } from 'src/app/servers.service';
import { SSHKeypair } from 'src/types/ssh-keypair';

@Component({
  selector: 'app-ssh',
  templateUrl: './ssh.component.html',
  styleUrls: ['./ssh.component.scss']
})
export class SshComponent {
  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
  ){}

  keypairs: SSHKeypair[] = []


  ngOnInit() {
    this.serversService.fetchSSHKeysOnServer()
    .pipe(
      tap(keypair => console.log('Received keypair:', keypair))
    )
    .subscribe(keypair => {
      this.keypairs.push(keypair)
    })

    this.serversService.setActiveManagementView(this.activatedRoute.snapshot.data['title'])
  }
}
