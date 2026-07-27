import type { Anime } from '@/domains/anime'
import { gql } from 'graphql-request'
import { anilistClient } from '@/plugins/anilist'

type TitleDTO = {
  english: string
}

type DateDTO = {
  month: number
  day: number
  year: number
}

type StudiosDTO = {
  nodes: {
    name: string
  }
}

type AnimeRecommendationDTO = {
  nodes: {
    media: {
      id: number
      title: TitleDTO
      coverImage: {
        medium: string
      }
    }
  }
}
interface AnimeDTO {
  id: number
  title: TitleDTO
  format: string
  season: string
  seasonYear: number
  studios: StudiosDTO[]
  genres: string[]
  startDate: DateDTO
  endDate: DateDTO
  type: string
  episodes: number
  duration: number
  source: string
  averageScore: number
  popularity: number
  bannerImage: string
  recommendations: AnimeRecommendationDTO[]
  status: string
  description: string
}

function convertData(anime: AnimeDTO): Anime {
  return {
    id: anime.id,
    title: anime.title.english,
    tags: anime.genres,
    episodes: anime.episodes,
    airingWindow: `${anime.startDate.year}-${anime.startDate.month}-${anime.startDate.day} to ${anime.endDate.year}-${anime.endDate.month}-${anime.endDate.day}`,
    season: `${anime.season} ${anime.seasonYear}`,
    studio: anime.studios.map(studio => studio.nodes.name),
    source: anime.source,
    synopsis: anime.description,
    anilistScore: `${anime.averageScore}/100`,
    format: anime.format,
    status: anime.status,
    duration: anime.duration.toString(),
    recommendations: anime.recommendations.map(rec => ({
      media: {
        id: rec.nodes.media.id,
        title: rec.nodes.media.title.english,
        coverImage: {
          medium: rec.nodes.media.coverImage.medium
        },
      },
    })),
  }
}

export async function getAnime (id: number, isAdult = false): Promise<Anime> {
  const query = gql`
    query ($id: Int!, $isAdult: Boolean!) {
      Media(id: $id, isAdult: $isAdult) {
        id
        title {
          english
        },
        format
        season
        seasonYear
        studios {
          nodes {
            name
          }
        }
        genres
        startDate {
          month
          day
          year
        }
        endDate {
          month
          day
          year
        }
        type
        episodes
        duration
        source
        averageScore
        popularity
        bannerImage
        isAdult
        description
        recommendations {
            nodes {
              id
              media {
                id
                title {
                  english
                }
                coverImage {
                  medium
                }
              }
            }
          }
      }
    }
  `
  const variables = { id, isAdult }
  const data = await anilistClient.request(query, variables)
  return convertData(data.Media)
}

export async function getAnimeList (): Promise<Anime[]> {
  const query = gql`
    query {
      Page {
        media {
          id
          title {
            english
          }
          genres
          status
          episodes
          averageScore
          coverImage {
            medium
          }
        }
        
        
      }
    }
  `;
  const data = await anilistClient.request(query)
  return data.Page.media.map((element: AnimeDTO) => convertData(element))
}
