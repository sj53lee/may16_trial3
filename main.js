import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM}from 'ol/source';
import layerSwitcher from './layer_switcher/layerswitcher'
import basemapSwitcher from './basemap_switcher/basemapswitcher';
// import MeasuringTool from './other_tools/measuringTool';
import LocateUser from './other_tools/locateUser';
import { ScaleLine } from 'ol/control';

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

// scale line
const scaleBar = new ScaleLine({
  bar: true,
  steps: 4,
});
map.addControl(scaleBar)

// CUSTOM TOOLS
// Layer switcher tool
const layerSwitch = new layerSwitcher({map:map, view:myView})
map.addControl(layerSwitch)

// Basemap switcher tool
const basemapSwitch = new basemapSwitcher({map:map, view:myView})
map.addControl(basemapSwitch) 

// Measuring tool
// const measuringTool = new MeasuringTool({ map: map });
// map.addControl(measuringTool);

// Locate user tool
const locate = new LocateUser({ map: map, view: myView });
map.addControl(locate);
