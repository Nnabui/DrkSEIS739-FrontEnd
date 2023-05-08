import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Exercise } from './exercise';
import { environment } from 'src/environments/environment';
import { Favorite } from './favorite';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiServerUrl = environment.apiBaseUrl;
  
//once constructor is established http requests to back end are made possible

  constructor(private http: HttpClient) { }

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiServerUrl}/exercise/all`);
  }

  public getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiServerUrl}/exercise/favorites/all`);
  }

  public addExercises(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(`${this.apiServerUrl}/exercise/add`, exercise);
  }

  public updateExercises(exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`${this.apiServerUrl}/exercise/update`, exercise);
  }

  public deleteExercises(exerciseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/exercise/delete/${exerciseId}`);
  }

  public addFavorites(favoriteId: number): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiServerUrl}/exercise/favorites/add/${favoriteId}`, favoriteId);
  }

  public deleteFavorites(favoriteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/exercise/favorites/delete/${favoriteId}`);
  }
}

