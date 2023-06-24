import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './server/server-profile/file-manager/file-manager.component';
import { ServersDashboardComponent } from './servers-dashboard/servers-dashboard.component';
import { SshComponent } from './server/server-profile/ssh/ssh.component';
import { VhostsComponent } from './vhosts/vhosts.component';
import { MetricsComponent } from './metrics/metrics.component';
import { SslTlsComponent } from './ssl-tls/ssl-tls.component';
import { ServerProfileComponent } from './server/server-profile/server-profile.component';
import { ServersResolver } from './servers.resolver';
import { ServerResolver } from './server.resolver';
import { ServerOverviewComponent } from './server/server-profile/server-overview/server-overview.component';

const routes: Routes = [
  {
    path: 'servers',
    component: ServersDashboardComponent,
    resolve: {
      servers: ServersResolver
    },
  },
  {
    path: 'servers/:serverId',
    component: ServerProfileComponent,
    resolve: {
      server: ServerResolver,
    },
    children: [
      {
        path: '',
        component: ServerOverviewComponent
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
