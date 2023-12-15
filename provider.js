const paintingsData = require('./data/paintings-nested.json');
const galleriesData = require('./data/galleries.json');
const artistsData = require('./data/artists.json');

module.exports = {
    getAllPaintings: () => {
        return paintingsData;
    },
    getPaintingsById: (id) => {
        return paintingsData.find((painting) => painting.ID == id);
    },
    getPaintingsByGalleryId: (galleryId) => {
        return paintingsData.filter((painting) => painting.galleryId == galleryId);
    },
    getPaintingsByArtistId: (artistId) => {
        return paintingsData.filter((painting) => painting.artistId == artistId);
    },
    getPaintingsByYearRange: (minYear, maxYear) => {
        return paintingsData.filter (
            (painting) => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear
        );
    },
    getPaintingsByText: (text) => {
        const containsText = (title, searchText) => {
            return title.toLowerCase().includes(searchText.toLowerCase());
        };

        return paintingsData.filter((painting) => 
            containsText(painting.title, text)
        );
    },
    getPaintingsByColor: (color) => {
        const containsColor = (painting, searchColor) => {
            return painting.dominantColors.some(color => color.name.toLowerCase() 
                == searchColor.toLowerCase());
        };

        return paintingsData.filter((painting) => 
            containsColor(painting, color));
    },
    getAllArtists: () => {
        return artistsData;
    },
    getArtistsByCountry: (country) => {
        return artistsData.filter((artist) =>
            artist.country.toLowerCase() == country.toLowerCase()
        );
    },
    getAllGalleries: () => {
        return galleriesData;
    },
    getGalleriesByCountry: (country) => {
        return galleriesData.filter((gallery) => 
            gallery.country.toLowerCase() == country.toLowerCase()
        );
    }
};