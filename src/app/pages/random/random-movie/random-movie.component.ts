import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-random-movie',
  templateUrl: './random-movie.component.html',
  styleUrls: ['./random-movie.component.scss']
})
export class RandomMovieComponent {
  randomMovie: any;
  movieGenres: any[] = [];

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    this.loadRandomMovie();
  }

  loadRandomMovie() {
    this.movieService.getRandomMovie().subscribe((data) => {
      this.randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    });
  }

}
