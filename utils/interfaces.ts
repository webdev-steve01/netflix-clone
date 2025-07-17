export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

// ✅ Super interface for Movie or TV
export interface Results {
  // Shared
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  homepage: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  media_type?: "movie" | "tv"; // optional from trending/search
  origin_country?: string[]; // only in TV

  // Movie-only fields (optional for TV)
  title?: string;
  original_title?: string;
  release_date?: string;
  runtime?: number;
  video?: boolean;
  revenue?: number;
  budget?: number;

  // TV-only fields (optional for Movie)
  name?: string;
  original_name?: string;
  first_air_date?: string;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  in_production?: boolean;
  episode_run_time?: number[];
  created_by?: Creator[];
  networks?: Network[];
  seasons?: Season[];
  last_episode_to_air?: Episode;
  next_episode_to_air?: Episode | null;
}
