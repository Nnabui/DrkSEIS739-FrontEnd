import { Component, OnInit } from '@angular/core';
import { Exercise} from './exercise';
import { ExerciseService } from './exercise.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Favorite } from './favorite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/{
  // title = 'AU-front';
  // public exercise: Exercise[] = [];
  // public favorite: Favorite[] = [];

  // constructor(private exerciseService: ExerciseService){}

  // ngOnInit(): void {
  //     this.getExercises();
  // }

  // public getExercises(): void{
  //   this.exerciseService.getExercises().subscribe(
  //     (response: Exercise[]) => {
  //       this.exercise = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  // public getFavorites(): void{
  //   this.exerciseService.getFavorites().subscribe(
  //     (response: Favorite[]) => {
  //       this.favorite = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  // public onOpenModal(exercise: Exercise, mode: String): void {
    
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addEmployeeModal')//# used to reference that it's a class
  //   }
  //   if (mode === 'edit') {
  //     button.setAttribute('data-target', '#updateEmployeeModal')
  //   }
  //   if (mode === 'delete') {
  //     button.setAttribute('data-target', '#deleteEmployeeModal')
  //   }
   
  // }
  

  // public onAddFavorite(favoriteId: number/*might switch to taking just a addFavorite: Favorites*/): void {  
  //   this.exerciseService.addFavorites(favoriteId/*not sure what to pass here yet*/).subscribe(
  //     (response: Favorite) => {
  //       console.log(response);
  //       this.getFavorites();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
  // }

  // public onDeleteFavorite(favoriteId: number): void {
  //   this.favoriteService.deleteFavorite(/*not sure what to pass here yet*/).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getFavorites();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
  }


