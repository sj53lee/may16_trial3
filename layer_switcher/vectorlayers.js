import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource, TileWMS, ImageWMS} from 'ol/source';
import {Fill, Stroke, Circle, Style} from 'ol/Style';
import {GeoJSON} from 'ol/format';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';


// SET CUSTOM STYLING 
const fillStyle = new Fill({
    color:[197,227,180,0.5]
  })
  
const strokeStyle= new Stroke({
    color:[46, 45, 45,0.5],
    width: 1.2
  })
  
const circleStyle=new Circle({
    fill: new Fill({
      color: [245,49,5,0.5]
    }),
    radius:7,
    stroke: strokeStyle
  }) 
  
// VECTOR LAYERS 

//Layer 1
export const europe = new VectorLayer({
    source: new VectorSource({
      url: './layer_switcher/Layers/europe.json',
      format: new GeoJSON(),
    }),
    visible: false,
    title: 'europe',
    zIndex: 2,
    style:new Style({
      fill:fillStyle,
      stroke: strokeStyle,
      image:circleStyle,
    })
});
  
//Layer 2
export const uk = new VectorLayer({
    source: new VectorSource({
      url: './layer_switcher/Layers/map.geojson',
     format: new GeoJSON(),
    }),
    visible: false,
    title: 'uk',
    zIndex: 2,
    style: new Style({
      stroke: new Stroke({
        color:[255,0,0,1],
        width: 3
      })
    })
});
  
//Layer 3
export const northamerica = new VectorLayer({
    source: new VectorSource({
      url: './layer_switcher/Layers/NorthAmerica.json',
      format: new GeoJSON(),
    }),
    visible: false,
    title: 'europe',
    zIndex: 2,
    style:new Style({
      fill: new Fill({
        color:[255,230,153],
      }),
      stroke: strokeStyle
    })
});

// Layer 4 ARC GIS REST DATA

// const arcRest = new VectorSource({
//   format: new GeoJSON({dataProjection:'EPSG:102100'}),
//   url: 'https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/',
// })

//LAYER 4
export const dublin = new TileLayer({
    title: "dublin",
    zIndex: 2,
    source: new TileWMS({
      url: 'http://localhost:8082/geoserver/quickstat/wms',
      params: {'LAYERS': 'quickstat:Dublin_Administrative DCC_5CommitteeAreas_2019_2157', 'TILED':true},
      serverType: 'geoserver',
    //   visible: false,
    }),
    visible: false
  });

// const legendGenerator = function(resolution) {
//     const graphicUrl = dublin.getLegendUrl(resolution);
//     const img = document.getElementById('legend4');
//     img.src = graphicUrl
// }

// const resolution = map.getView().getResolution();
// legendGenerator(resolution)

//   https://openlayers.org/en/latest/examples/wms-getlegendgraphic.html

// LINK BELOW WILL GET YOU THE LEGEND IN A PNG FORMAT 
// http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=quickstat:Dublin_Administrative%20DCC_5CommitteeAreas_2019_2157