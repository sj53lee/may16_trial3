import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM}from 'ol/source';
import layerSwitcher from './layer_switcher/layerswitcher'
import basemapSwitcher from './basemap_switcher/basemapswitcher';

const myView = new View({
  center: [0, 0],
  zoom: 2
})

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: myView
});

const layerSwitch = new layerSwitcher({map:map, view:myView})
map.addControl(layerSwitch)

const basemapSwitch = new basemapSwitcher({map:map, view:myView})
map.addControl(basemapSwitch) 