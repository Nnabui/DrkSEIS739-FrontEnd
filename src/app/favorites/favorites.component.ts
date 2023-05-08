import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  title = 'AU-front';
  public favorite: Favorite[] = [];


  constructor(private exerciseService: ExerciseService){}

  ngOnInit(): void {
      this.getFavorites();
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

  public onDeleteFavorite(favoriteId: number): void {
      this.exerciseService.deleteFavorites(favoriteId).subscribe(
        (response: void) => {
          console.log(response);
          this.getFavorites();
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
  }

}
