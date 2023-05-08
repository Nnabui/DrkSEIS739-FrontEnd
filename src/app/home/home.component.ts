import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise';
import { HttpErrorResponse } from '@angular/common/http';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AU-front';
  public exercise: Exercise[] = [];
  public favorite: Favorite[] = [];

  constructor(private exerciseService: ExerciseService){}

  ngOnInit(): void {
      this.getExercises();
  }

  public getExercises(): void{
    this.exerciseService.getExercises().subscribe(
      (response: Exercise[]) => {
        this.exercise = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getFavorites(): void{
    this.exerciseService.getFavorites().subscribe(
      (response: Favorite[]) => {
        this.favorite = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  

  public onAddFavorite(favoriteId: number): void {  
    if (favoriteId !== undefined) {
      this.exerciseService.addFavorites(favoriteId).subscribe(
        (response: Favorite) => {
          console.log(response);
          this.getFavorites();
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
    } else {
      console.log("value is undefined");
    }
    
  }

  
}
