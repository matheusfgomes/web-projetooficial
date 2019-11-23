import {Component, OnInit} from '@angular/core';
import {Aluno} from '../aluno';

@Component({
  selector: 'app-alunos',
  templateUrl:  './aluno.component.html',
  styleUrls : ['./aluno.component.css']
})

export class AlunosComponent implements OnInit{
  
  aluno: Aluno{
    matri: 1,
    nome: 'Maria Matarazzo Florenza',
    curso: 'Gastronomia'
  };
  
  constructor(){

  }

  ngOnInit(){
    
  }

 
}