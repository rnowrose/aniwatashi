import type { Anime } from "@/domains/anime";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getAnime, getAnimeList } from "@/api/anime.api";

export const useAnimeStore = defineStore("anime", () => {
  const animeList = ref<Anime[]>([]);
  const anime = ref<Anime | null>(null);

  function animeProfile(id: number): Anime | null {
    getAnime(id)
      .then(result => {
        anime.value = result
        return result
      })
      .catch(error => {
        return error
      });
  }

  function animeProfiles(): Promise<Anime[] | void> {
    getAnimeList()
      .then((result) => {
        animeList.value = result;
        return result;
      })
      .catch((error) => {
        return error;
      });
  }

  return { anime, animeList, animeProfile, animeProfiles };
});
