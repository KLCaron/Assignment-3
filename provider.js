const paintingsData = require('./data/paintings-nested.json');
const galleriesData = require('./data/galleries.json');
const artistsData = require('./data/artists.json');

module.exports = {
    getAllPaintings: () => {
        return paintingsData;
    },
    getPaintingsById: (id) => {
        const foundPainting = paintingsData.find((painting) => painting.paintingID == id);
        if (!foundPainting) {
            return {message: "No paintings found"};
        } else {
            return foundPainting;
        }
    },
    getPaintingsByGalleryId: (galleryId) => {
        const foundPaintings = paintingsData.filter((painting) => painting.gallery.galleryID == galleryId);
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    getPaintingsByArtistId: (artistId) => {
        const foundPaintings = paintingsData.filter((painting) => painting.artist.artistID == artistId);
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    getPaintingsByYearRange: (minYear, maxYear) => {
        const foundPaintings = paintingsData.filter (
            (painting) => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear
        );
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
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
    getPaintingsByColor: (color) => {
        const containsColor = (painting, searchColor) => {
            return painting.details.annotation.dominantColors.some(color => color.name.toLowerCase() 
                == searchColor.toLowerCase());
        };
        const foundPaintings = paintingsData.filter((painting) => 
            containsColor(painting, color));
        if (foundPaintings.length == 0) {
            return {message: "No paintings found"};
        } else {
            return foundPaintings;
        }
    },
    getAllArtists: () => {
        return artistsData;
    },
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
    getAllGalleries: () => {
        return galleriesData;
    },
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