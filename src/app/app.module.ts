import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/aluno.component';
import { AlunoDetailComponent} from './aluno-details/aluno-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoDetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
