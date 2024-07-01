import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TachesService } from '../taches.service';
import { Tache } from '../model/tache';
@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {

  listeTaches: Tache[] = []

  constructor(private tacheService: TachesService) { }

  ngOnInit() {
    this.tacheService.getTache().subscribe((res: Tache[]) => {
        res.map(tache => {
          this.listeTaches.push({
            title: tache.title,
            completed: tache.completed,
          })
        })
    });
  }


  validation(formulaire : NgForm){

    this.listeTaches.push({
      title: formulaire.controls['nouvelleTache'].value,
      completed: false,
    })

    console.info("salut");
    formulaire.resetForm();
  }

  modifieEtat(index: number){
    this.listeTaches[index].completed = !this.listeTaches[index].completed; 
  }

  supprimer(index: number){
    this.listeTaches.splice(index,1);
  }

  Reinitialiser(){
    this.listeTaches = [];
  }
}