import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }];

@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    MatBadgeModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  declarations: [AppComponent,ConfirmEqualValidatorDirective],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
