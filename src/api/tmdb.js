// function api(url){
//     let base  = 'https://api.themoviedb.org/3/' + url

//     return Storage.field('proxy_tmdb') && Storage.field('tmdb_proxy_api') ? proxy('tmdb_proxy_api') + '/' + base : base
// }

export class TmdbApi {
  constructor() {
    this._base = "https://tmdb-proxy-glebkaf.vercel.app";
    this._key = "cce50fa27f64b987053afff187f7d76f";
    // https://tmdb-proxy-glebkaf.vercel.app/3/search/person?api_key=cce50fa27f64b987053afff187f7d76f&language=ru&query=%D0%B0%D0%B2%D0%B0
  }

  search(query) {
    const queryParams = new URLSearchParams({
      api_key: this._key,
      language: "ru",
      query: query,
    });
    const path = `/3/search/movie?${queryParams}`;
    return fetch(`${this._base}${path}`).then((res) => res.json());
  }
}
