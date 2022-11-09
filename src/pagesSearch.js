import axios from "axios";
export class Search {
    #KEY = '27491785-4ed714c8d697aeb5a6480b366';
    #URL = 'https://pixabay.com/api/';
    name = null;
    page = 1;
    fetchPhoto(){
        return axios.get(`${this.#URL}?key=${this.#KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
    }
}