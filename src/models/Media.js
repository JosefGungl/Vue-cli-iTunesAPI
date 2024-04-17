import LibraryItem from "@/models/LibraryItem.js";

class Movie {
    static type = 'Movie';
    static detailsComponent = 'MovieDetails';
    title;
    runtime;

    constructor(title, runtime) {
        this.title = title;
        this.runtime = runtime;
    }
}

function APIMedia(artistName, trackName, artworkUrl100 ) {
    this.artistName = artistName;
    this.trackName = trackName;
    if (artworkUrl100){
        this.artworkUrl100 = artworkUrl100;
    }
}
APIMedia.type = 'APIMedia';
APIMedia.detailsComponent = 'APIMediaDetails'

function Book(title, pages) {
    this.title = title;
    this.pages = pages;
}
Book.type = 'Book';
Book.detailsComponent = 'BookDetails';


//named exports, imported with 'import {Book} ...'
export {Book, Movie, APIMedia};
