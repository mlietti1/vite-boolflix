import { reactive } from "vue";

export const store = reactive({
  apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
  apiUrlPopular: 'https://api.themoviedb.org/3/search/movie/popular',
  paramsApi: {
    key: '26a8e46a2b4376ba65c193cace3dd5f6',
    query: 'titanic'
  },
  category: 'movie',
  moviesData: [],
  seriesData: [],
  isLoaded: false
});