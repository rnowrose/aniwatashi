import { anilistClient } from "@/plugins/anilist";
import { gql } from "graphql-request";

export async function getAnime (id: number): Promise<any> {
  const query = gql`
    query ($id: Int!) {
      Media(id: $id) {
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
