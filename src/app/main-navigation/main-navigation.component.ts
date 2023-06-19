import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { EnvironmentsService } from '../environments.service';


@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  constructor(
    private environmentsService: EnvironmentsService
  ){

  }
  environments: any
  currentEnvironment: any

  updateCurrentEnvironment(environment: any) {
    this.environmentsService.currentEnvironment = environment
  }

  ngOnInit  () {
    this.environmentsService.fetchEnvironments().subscribe(res => {
      this.environments = res
    })
    this.environmentsService.currentEnvironment.subscribe(env => {
      this.currentEnvironment = env
    })
  }

}