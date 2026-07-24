import { gql } from 'graphql-request'
import { anilistClient } from '@/plugins/anilist'

export async function getAnime (id: number): Promise<any> {
  const query = gql`
    query ($id: Int!) {
      Media(id: $id) {
        id
        title {
          romaji
          english
          native
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
  const variables = { id }
  const data = await anilistClient.request(query, variables)
  return data.Media
}

export async function getAnimeList () {
  const query = gql`
    query {
      Page {
        media {
          id
          title {
            romaji
            english
            native
          }
          season
          seasonYear
        }
      }
    }
  `;
  const data = await anilistClient.request(query)
  return data.Page.media
}
