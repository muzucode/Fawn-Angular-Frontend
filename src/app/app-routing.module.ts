import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ServersDashboardComponent } from './servers-dashboard/servers-dashboard.component';
import { SshComponent } from './ssh/ssh.component';
import { VhostsComponent } from './vhosts/vhosts.component';
import { MetricsComponent } from './metrics/metrics.component';
import { SslTlsComponent } from './ssl-tls/ssl-tls.component';
import { ServerProfileComponent } from './server/server-profile/server-profile.component';
import { ServersResolver } from './servers.resolver';

const routes: Routes = [
  {
    path: '',
    component: ServersDashboardComponent
  },
  {
    path: 'server/:serverId',
    component: ServerProfileComponent,
    resolve: {
      servers: ServersResolver
    }
  },
  {
    path: 'file-manager', 
    component: FileManagerComponent
  },  
  {
    path: 'ssh', 
    component: SshComponent
  },  
  {
    path: 'vhosts', 
    component: VhostsComponent
  },
  {
    path: 'metrics', 
    component: MetricsComponent
  },
  {
    path: 'ssl-tls', 
    component: SslTlsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
