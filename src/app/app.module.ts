import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [	
    AppComponent,
    PersonalFormComponent,
      ReactiveFormsComponent,
      WelcomeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
