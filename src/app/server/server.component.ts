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

  getDistributionLogoAssetPath(key: string): string {
    let serverImages: {[index: string]: string} = {
      'ubuntu': 'assets/img/os-distributions/logo-ubuntu.png',
      'macos': 'assets/img/os-distributions/logo-macos.png',
      'fedora': 'assets/img/os-distributions/logo-fedora.png',
      'windows': 'assets/img/os-distributions/logo-windows.png',
      'centos': 'assets/img/os-distributions/logo-centos.png',
      'debian': 'assets/img/os-distributions/logo-debian.png',
      'arch': 'assets/img/os-distributions/logo-arch.png',
    }

    key = key.toLowerCase()
    return serverImages[key] 
  }
}
