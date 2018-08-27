
// mapboxgl.accessToken = 'pk.eyJ1IjoibnlqYWNvYiIsImEiOiJjamtmdWFpMXEwY2xlM3FwOWN5OTB6aXJ5In0.R5tLAwX-BMmPWmvpUD7Yuw';
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
            "paint":
                [
                "match",
                ["get", "id"],
                1,
                [
                    "step",
                    ["get", "id"],
                    "hsl(122, 98%, 50%)",
                    5,
                    "#000000"
                ],
                [
                    "interpolate",
                    ["linear"],
                    ["get", "id"],
                    1,
                    "hsl(0, 0%, 0%)",
                    5,
                    "#000000"
                ]
            ]
        }
    );


    map.getCanvas().style.cursor = 'crosshair';
    var zones = ['A-2', 'A-3', 'A-4', 'B1', 'B-2', 'I-1', 'I-B', 'R-1', 'R-3', 'SR'];
    var colors = ['#CAE4BD', '#A8DB42', '#5C8A45', '#F1B6B6', '#F2CD9D', '#F3F35A', '#F3F3CC', '#C48F72'];

    for (i = 0; i < zones.length; i++) {
        var zone = zones[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.innerHTML = zone;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }

    map.on('mousemove', function(e) {
        var parcels = map.queryRenderedFeatures(e.point, {
            layers: ['tmarble-parcels-shp']
        });

        if (parcels.length > 0) {
            document.getElementById('pd').innerHTML = '<h3><strong>' + parcels[0].properties.ParcelNumb + '</strong></h3><p><strong><em>' + " has " + parcels[0].properties.ACRES + '</strong> acres</em></p>';
        } else {
            document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
        }
    });



});