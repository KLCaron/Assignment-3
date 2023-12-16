/*
* Handles data retrieval for paintings, artists, and galleries. Utilizes external
* JSONs
*/

const paintingsData = require('./data/paintings-nested.json');
const galleriesData = require('./data/galleries.json');
const artistsData = require('./data/artists.json');

module.exports = {

    //gets all paintings
    getAllPaintings: () => {
        return paintingsData;
    },
    //gets a painting by ID
    getPaintingsById: (id) => {
        const foundPainting = paintingsData.find((painting) => 
            painting.paintingID == id);
        if (!foundPainting) {
            return {message: "No paintings found"};
        } else {
            return foundPainting;
        }
    },
    //gets paintings by gallery ID
    getPaintingsByGalleryId: (galleryId) => {
        const foundPaintings = paintingsData.filter((painting) => 
            painting.gallery.galleryID == galleryId);
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    //gets paintings by artist ID
    getPaintingsByArtistId: (artistId) => {
        const foundPaintings = paintingsData.filter((painting) => 
            painting.artist.artistID == artistId);
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    //gets paintings inbetween the given years
    getPaintingsByYearRange: (minYear, maxYear) => {
        const foundPaintings = paintingsData.filter (
            (painting) => painting.yearOfWork >= minYear && 
                painting.yearOfWork <= maxYear
        );
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    //gets paintings by title
    getPaintingsByText: (text) => {
        const containsText = (title, searchText) => {
            return title.toLowerCase().includes(searchText.toLowerCase());
        };
        const foundPaintings = paintingsData.filter((painting) => 
            containsText(painting.title, text)
        );
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    //gets paintings by dominant colors
    getPaintingsByColor: (color) => {
        const containsColor = (painting, searchColor) => {
            return painting.details.annotation.dominantColors.some(color => 
                    color.name.toLowerCase() == searchColor.toLowerCase());
        };
        const foundPaintings = paintingsData.filter((painting) => 
            containsColor(painting, color));
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    //gets all artists
    getAllArtists: () => {
        return artistsData;
    },
    //gets artists by country
    getArtistsByCountry: (country) => {
        const foundArtists = artistsData.filter((artist) =>
            artist.Nationality.toLowerCase() == country.toLowerCase()
        );
        if (foundArtists.length == 0) {
            return {message: "No artists found"};
        } else {
            return foundArtists;
        }
    },
    //gets all galleries
    getAllGalleries: () => {
        return galleriesData;
    },
    //gets galleries by country
    getGalleriesByCountry: (country) => {
        const foundGalleries = galleriesData.filter((gallery) => 
            gallery.GalleryCountry.toLowerCase() == country.toLowerCase()
        );
        if (foundGalleries.length == 0) {
            return {message: "No galleries found"};
        } else {
            return foundGalleries;
        }
    }
};