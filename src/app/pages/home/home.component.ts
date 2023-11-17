import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { MoviesService } from 'src/app/services/movies.service';
import { MovieData } from 'src/app/models/movieData';

import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;


  movieId: any;
  movieDetails: any;
  genres: any[] = [];
  movies: any[] = [];
  topRatedMovies: any[] = [];

  randomMovies: any[] = [];

  // Carrosel
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<span class="setaEsquerda">Próximo</span>' , '<span class="setaDireita">Próximo</span>'],
    responsive: {
      0: {
        items: 1,
      }
    },
    nav: true
  }

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

    // Pegando os dados dos filmes
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });

    // Pegando os dados dos filmes
    this.moviesService.getTopRatedMovies().subscribe((data: any) => {
      this.topRatedMovies = data.results;
      this.getRandomMovies();
    });
  }

  // Pegando a imagem do filme
  getImageUrl(imgMovie: string): string {
    if(imgMovie) {
      return `https://image.tmdb.org/t/p/w500${imgMovie}`;
    } else {
      return "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
    }
  }

  getImageCarousel(imgMovieCarousel: string): string {
    if(imgMovieCarousel) {
      return `https://image.tmdb.org/t/p/original${imgMovieCarousel}`;
    } else {
      return "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
    }
  }

  getRandomMovies() {
    this.randomMovies = this.topRatedMovies.map((movie) => ({ ...movie, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .slice(0, 10);
  }

}

