import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: string = '587d74cd16d8202b96fbd8ee84d49a1f';
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  // getMovieDetails(movieId: number){
  //   const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR&page=1`
  //   return this.http.get(url);
  // }

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1`;
    return this.http.get(url);
  }





}
