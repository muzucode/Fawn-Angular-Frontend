import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ServersDashboardComponent } from './servers-dashboard/servers-dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { FileManagerComponent } from './server/server-profile/file-manager/file-manager.component';
import { SshComponent } from './server/server-profile/ssh/ssh.component';
import { VhostsComponent } from './vhosts/vhosts.component';
import { MetricsComponent } from './server/server-profile/metrics/metrics.component';
import { SslTlsComponent } from './ssl-tls/ssl-tls.component';
import { ServerProfileComponent } from './server/server-profile/server-profile.component';
import { ServerOverviewComponent } from './server/server-profile/server-overview/server-overview.component';
import { ConnectToServerComponent } from './server/server-profile/connect-to-server/connect-to-server.component';
import { DatabaseComponent } from './server/server-profile/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    ServersDashboardComponent,
    ServerComponent,
    FileManagerComponent,
    SshComponent,
    VhostsComponent,
    MetricsComponent,
    SslTlsComponent,
    ServerProfileComponent,
    ServerOverviewComponent,
    ConnectToServerComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    