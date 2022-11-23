import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  // apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular',
  paramsApi: {
    key: '26a8e46a2b4376ba65c193cace3dd5f6',
    query: '',
    language: 'it-IT'
  },
  type: '',
  tv: [],
  movie: [],
  isLoaded: false
});