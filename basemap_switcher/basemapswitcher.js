import {Group} from 'ol/layer';
import {Control} from 'ol/control';
import { openStreetMapStandard, openStreetMapHumanitarian, stamenToner,
stamenWatercolor, stamenTerrain, esriStandard} from './basemaps';

//BASE MAP IMAGES 
const OSMMap = "./basemap_switcher/basemaps/OSM_map.png";
const OSMHumanitarian = "./basemap_switcher/basemaps/OSM_humanitarian.png";
const stamenTo = "./basemap_switcher/basemaps/stamentoner.png";
const stamenWC = "./basemap_switcher/basemaps/stamenWatercolor.png";
const stamenTe = "./basemap_switcher/basemaps/stamenTerrain.png";
const esriSt = "./basemap_switcher/basemaps/esri.png"


//BASEMAP SWITCHER TOOL
class basemapSwitcher extends Control{
    /**
     * @param{Object} [opt_options] Control options.
     */
    constructor(opt_options){
        const options = opt_options || {};
        const button2 = document.createElement('button');
        Object.assign(button2,{
            className: "btn",
            type: "button",
            id: "dropdownMenuButton",
            ariaExpanded: "false",
        })
        button2.setAttribute("data-toggle", "dropdown");
    
        button2.innerHTML='B';

        const dropdownB = document.createElement('div');
        dropdownB.className = 'dropdown dropdown2 dropright ol-unselectable ol-control';
        dropdownB.appendChild(button2);

        const dropdownMenuB = document.createElement('ul');
        dropdownMenuB.className="dropdown-menu menuB";
        dropdownMenuB.style.padding="20px"
        dropdownB.appendChild(dropdownMenuB);

        // BASEMAP 1
        const dropdownListA = document.createElement('li');
        const dropdownContentA = document.createElement('a');
        
        Object.assign(dropdownContentA,{
            className: "small",
            href: "#",
            value: "basemap1"
        })

        dropdownMenuB.appendChild(dropdownListA);
        dropdownListA.appendChild(dropdownContentA);

        const dropdownInput = document.createElement('input');

        Object.assign(dropdownInput,{
            type: "image",
            src: OSMMap,
            id: "OSMStandard"
        })

        Object.assign(dropdownInput.style,{width: "110px", height: "80px", border: "double"})
        dropdownListA.innerHTML="OSM Standard <br>";

        dropdownListA.appendChild(dropdownInput);

        // BASEMAP 2
        const dropdownListB = document.createElement('li');
        const dropdownContentB = document.createElement('a');

        Object.assign(dropdownContentB,{
            className: "small",
            href: "#",
            value: "basemap2"
        })

        dropdownMenuB.appendChild(dropdownListB);
        dropdownListB.appendChild(dropdownContentB);

        const dropdownInput2 = document.createElement('input');

        Object.assign(dropdownInput2,{
            type: "image",
            src: OSMHumanitarian,
            id: "OSMHumanitarian",
        })

        Object.assign(dropdownInput2.style,{
            width: "110px",
            height: "80px",
            border: "double"
        })

        dropdownListB.innerHTML="OSM Humanitarian <br>";

        dropdownListB.appendChild(dropdownInput2);

        // BASEMAP 3
        const linebreak = document.createElement('br');
        const dropdownListC = document.createElement('li');
        const dropdownContentC = document.createElement('a');

        Object.assign(dropdownContentC, {
            className: "small",
            href: "#",
            value: "basemap3"
        })

        dropdownMenuB.appendChild(dropdownListC);
        dropdownMenuB.appendChild(linebreak)
        dropdownListC.appendChild(dropdownContentC);
        
        const dropdownInput3 = document.createElement('input');

        Object.assign( dropdownInput3,{
            type: "image",
            src: stamenTo,
            id: "StamenToner",
        })

        Object.assign(dropdownInput3.style,{
            width: "110px",
            height: "80px",
            border: "double",
        })

        dropdownListC.innerHTML="Stamen Toner <br>";

        dropdownListC.appendChild(dropdownInput3);

        // BASEMAP 4
        const dropdownListD = document.createElement('li');
        const dropdownContentD = document.createElement('a');

        Object.assign(dropdownContentD, {
            className: "small",
            href: "#",
            value: "basemap4"
        })
        dropdownMenuB.appendChild(dropdownListD);
        dropdownListD.appendChild(dropdownContentD);
        
        const dropdownInput4 = document.createElement('input');

        Object.assign( dropdownInput4,{
            type: "image",
            src: stamenWC,
            id: "StamenWatercolor",
        })

        Object.assign(dropdownInput4.style,{
            width: "110px",
            height: "80px",
            border: "double",
        })

        dropdownListD.innerHTML="Stamen Watercolor <br>";
        dropdownListD.appendChild(dropdownInput4);

        // BASEMAP 5
        const dropdownListE = document.createElement('li');
        const dropdownContentE = document.createElement('a');

        Object.assign(dropdownContentE, {
            className: "small",
            href: "#",
            value: "basemap5"
        })

        dropdownMenuB.appendChild(dropdownListE);
        dropdownListE.appendChild(dropdownContentE);
        
        const dropdownInput5 = document.createElement('input');

        Object.assign( dropdownInput5,{
            type: "image",
            src: stamenTe,
            id: "StamenTerrain",
        })

        Object.assign(dropdownInput5.style,{
            width: "110px",
            height: "80px",
            border: "double",
        })

        dropdownListE.innerHTML="Stamen Terrain <br>";
        dropdownListE.appendChild(dropdownInput5);

        // BASEMAP 6
        const dropdownListF = document.createElement('li');
        const dropdownContentF = document.createElement('a');

        Object.assign(dropdownContentF, {
            className: "small",
            href: "#",
            value: "basemap6"
        })

        dropdownMenuB.appendChild(dropdownListF);
        dropdownListF.appendChild(dropdownContentF);
        
        const dropdownInput6 = document.createElement('input');

        Object.assign( dropdownInput6,{
            type: "image",
            src: esriSt,
            id: "EsriStandard",
        })

        Object.assign(dropdownInput6.style,{
            width: "110px",
            height: "80px",
            border: "double",
        })

        dropdownListF.innerHTML="Esri Standard <br>";
        dropdownListF.appendChild(dropdownInput6);

        super({
            element: dropdownB,
            target: options.target,
        });

        //BASE MAP LAYERS

        const baseGroup = new Group({
            layers:[openStreetMapStandard, openStreetMapHumanitarian, stamenToner, stamenTerrain,
            stamenWatercolor, esriStandard],
        })
        // Add base layers to the map
        options.map.addLayer(baseGroup);
        const baseElements = [dropdownInput,dropdownInput2,dropdownInput3, 
            dropdownInput4, dropdownInput5, dropdownInput6]
        for (let baseElement of baseElements){
            baseElement.onclick = function(){
                console.log(baseElement.id);
                let baseElementId= baseElement.id;
                console.log(baseElement);
                baseGroup.getLayers().forEach(function(element){
                    let baseTitle = element.get('title');
                    element.setVisible(baseTitle===baseElementId)
                })      
            }     
        }        
    };
}
export default basemapSwitcher;