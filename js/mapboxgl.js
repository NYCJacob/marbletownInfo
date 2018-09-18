mapboxgl.accessToken = himitsu.mapboxAPI;

const map = new mapboxgl.Map({
    container: 'mapGL',
    style: 'mapbox://styles/nyjacob/cjkls0vmj0mz52rqey0snp39t',
    center: [-74.109661, 41.881201],
    zoom: 11.0
});

map.on('load', function () {
    // add source file for maper
    // map.addSource('tmarble-parcels-shp',{
    map.addSource('tmarble_shp-09wfzs',{
        "type": "vector",
        "url": "mapbox://nyjacob.c2q8h92i"
    });

    // .addlayer Parameters
    // layer(Object)The style layer to add, conforming to the Mapbox Style Specification's layer definition .
    // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers
    map.addLayer({
            "id": "tmarble-parcels-shp",      // id: required string Unique layer name
            "type": "fill",
            "source": "tmarble_shp-09wfzs",     // source: Name of a source description to be used for this layer.
            "source-layer": "tmarble_shp-09wfzs",
            "paint": {
                //     "fill-color" :  [
                //         "step",
                //         ["get", "ACRES"],
                //         "#f7d98e",
                //         10,
                //         "#deac6a",
                //         25,
                //         "#a87540",
                //         100,
                //         "#a15123"
                //     ]
                // }
                "fill-opacity": .1
            }
        }
    );


    map.getCanvas().style.cursor = 'crosshair';
    var zones = ['A-2', 'A-3', 'A-4', 'B1', 'B-2', 'I-1', 'I-B', 'R-1', 'R-3', 'SR'];
    var colors = ['#CAE4BD', '#A8DB42', '#5C8A45', '#F1B6B6', '#F2CD9D', '#F3F35A', '#F3F3CC', '#C48F72'];

    map.on('mousemove', function(e) {
        var parcels = map.queryRenderedFeatures(e.point, {
            layers: ['tmarble-parcels-shp']
        });

        if (parcels.length > 0) {
            document.getElementById('pd').innerHTML = '<p><strong>' + parcels[0].properties.ADDRESS_NU + ' ' +  parcels[0].properties.ADDRESS_NA + '</strong></p><p><strong><em>'
                + parcels[0].properties.ACRES + '</strong> acres</em></p>Zoned ' + parcels[0].properties.ZONING;
        } else {
            document.getElementById('pd').innerHTML = '<p>Hover over a parcel!</p>';
        }
    });



});