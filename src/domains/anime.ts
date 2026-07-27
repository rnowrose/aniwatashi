export interface Anime {
  id: number
  title: string
  tags: string[]
  episodes: number
  airingWindow: string
  season: string
  studio: Studios
  source: string
  synopsis: string
  anilistScore: string
  format: string
  status: string
  duration: string
  recommendations: AnimeRecommendation
  coverImage: {
    medium: string
  }
}

type AnimeRecommendation = {
  media: Anime[]
}

type Studios = string[]
