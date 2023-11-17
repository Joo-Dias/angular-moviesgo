export type MovieData = {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  genres: Genre[]
}

export interface Genre {
  id: number,
  name: string
}
