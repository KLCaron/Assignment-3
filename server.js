/*
* Sets up an express server to provide an API for accessing painting/gallery/artist
* data.
*/

const express = require('express');
const provider = require('./provider');
const app = express();

//gets all paintings
app.get('/api/paintings/', (req, res) => {
    const paintings = provider.getAllPaintings();
    res.json(paintings);
});

//gets a painting by ID
app.get('/api/painting/:id', (req, res) => {
    const id = req.params.id;
    const paintings = provider.getPaintingsById(parseInt(id));
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings);
    }
});

//gets paintings by gallery ID
app.get('/api/painting/gallery/:id', (req, res) => {
    const galleryId = req.params.id;
    const paintings = provider.getPaintingsByGalleryId(galleryId);
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings)
    }
});

//gets paintings by artist ID
app.get('/api/painting/artist/:id', (req, res) => {
    const artistId = req.params.id;
    const paintings = provider.getPaintingsByArtistId(artistId);
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings);
    }
})

//gets paintings inbetween the given years
app.get('/api/painting/year/:min/:max', (req, res) => {
    const min = req.params.min;
    const max = req.params.max;
    const paintings = provider.getPaintingsByYearRange(parseInt(min), 
        parseInt(max));
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings);
    }
});

//gets paintings by title
app.get('/api/painting/title/:text', (req, res) => {
    const title = req.params.text;
    const paintings = provider.getPaintingsByText(title);
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings);
    }
});

//gets paintings by dominant colors
app.get('/api/painting/color/:name', (req, res) => {
    const color = req.params.name;
    const paintings = provider.getPaintingsByColor(color);
    if (paintings.message) {
        res.status(404).json(paintings);
    } else {
        res.json(paintings);
    }
});

//gets all artists
app.get('/api/artists/', (req, res) => {
    const artists = provider.getAllArtists();
    res.json(artists);
});

//gets artists by country
app.get('/api/artists/:country', (req, res) => {
    const country = req.params.country;
    const artists = provider.getArtistsByCountry(country);
    if (artists.message) {
        res.status(404).json(artists);
    } else {
        res.json(artists);
    }
});

//gets all galleries
app.get('/api/galleries/', (req, res) => {
    const galleries = provider.getAllGalleries();
    res.json(galleries);
});

//gets galleries by country
app.get('/api/galleries/:country', (req, res) => {
    const country = req.params.country;
    const galleries = provider.getGalleriesByCountry(country);
    if (galleries.message) {
        res.status(404).json(galleries);
    } else {
        res.json(galleries);
    }
});

//sets the port for server to listen on
const PORT = process.env.PORT || 3000;

//starts the server and listens on specified port
app.listen(PORT, () => {
    console.log(`Server port is ${PORT}`);
});