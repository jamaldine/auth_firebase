import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {templateServices} from './services/templateServices';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PrincipaleComponent } from './principale/principale.component';

const appRoutes: Routes = [
  { path: '', component: PrincipaleComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PrincipaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  templateServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
