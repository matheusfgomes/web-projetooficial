import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlunoComponent } from './alunos/aluno.component';
import { AlunoDetailComponent} from './aluno-details/aluno-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
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
