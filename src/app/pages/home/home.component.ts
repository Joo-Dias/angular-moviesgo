import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieId: any;
  movieDetails: any;
  movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void{
    // this.route.params.subscribe((params) => {
    //   this.movieId = params['id'];
    //   this.moviesService.getMovieDetails(this.movieId).subscribe((data) => {
    //     this.movieDetails = data;
    //     console.log(this.movieDetails)
    //   })
    // })

    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies);
    })


  }

  getImageUrl(posterPath: string): string {
    if(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
    }
  }




}
