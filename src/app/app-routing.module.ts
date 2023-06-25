import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './server/server-profile/file-manager/file-manager.component';
import { ServersDashboardComponent } from './servers-dashboard/servers-dashboard.component';
import { SshComponent } from './server/server-profile/ssh/ssh.component';
import { VhostsComponent } from './vhosts/vhosts.component';
import { MetricsComponent } from './server/server-profile/metrics/metrics.component';
import { SslTlsComponent } from './ssl-tls/ssl-tls.component';
import { ServerProfileComponent } from './server/server-profile/server-profile.component';
import { ServersResolver } from './servers.resolver';
import { ServerResolver } from './server.resolver';
import { ServerOverviewComponent } from './server/server-profile/server-overview/server-overview.component';
import { ConnectToServerComponent } from './server/server-profile/connect-to-server/connect-to-server.component';
import { DatabaseComponent } from './server/server-profile/database/database.component';

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
        component: ServerOverviewComponent,
        data: {title: 'Overview'}
      },
      {
        path: 'file-manager', 
        component: FileManagerComponent,
        data: {title: 'File Manager'}
      },        
      {
        path: 'connect', 
        data: {title: 'SSH'},
        children: [
          {
            path: 'ssh',
            component: SshComponent,
            data: {title: 'Configure SSH Keys'}
          },          
          {
            path: 'connect-to-server',
            component: ConnectToServerComponent,
            data: {title: 'Connect to Server'}
          },
        ]
      },  
      {
        path: 'database', 
        component: DatabaseComponent,
        data: {title: 'Database'}
      }, 
      {
        path: 'vhosts', 
        component: VhostsComponent,
        data: {title: 'Vhosts'}
      },
      {
        path: 'metrics', 
        component: MetricsComponent,
        data: {title: 'Metrics'},
        children: [
          {
            path: 'dashboard',
            component: MetricsComponent,
            data: {title: 'Metrics Dashboard'}
          },          
          {
            path: 'disk-usage',
            component: ServerOverviewComponent,
            data: {title: 'Metrics - Disk Usage'}
          },
        ]
      },
      {
        path: 'ssl-tls', 
        component: SslTlsComponent,
        data: {title: 'SSL/TLS'}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
