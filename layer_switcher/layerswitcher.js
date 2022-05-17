import {Control} from 'ol/control';
import {europe, uk, northamerica, dublin} from './vectorlayers';

// SET UP LAYERS
const layer1 = europe
const layer2 = uk
const layer3 = northamerica
const layer4 = dublin

//LEGEND STYLING 
// POLYGON
const polygonWidth = "17px";
const polygonHeight = "17px";

// LINES 
const lineWidth = "17px";
const lineHeight ="4px";

// POINTS
const pointSize = "10px";

// GEOSERVER LEGEND 
const geoWidth = '115px';
const geoHeight = '100px';

class layerSwitcher extends Control{
    /**
     * @param{Object} [opt_options] Control options
     */
    constructor(opt_options){
      const options = opt_options ||{};
      const button = document.createElement('button');

      Object.assign(button,{
          className: "btn",
          type: "button",
          id: "dropdownMenuButton",
          ariaExpanded: "false",
      })
      button.setAttribute("data-toggle", "dropdown");
      button.innerHTML="L";
  
      const dropdown = document.createElement('div');
      dropdown.className="dropdown ol-unselectable ol-control dropright";
      dropdown.appendChild(button);

      const dropdownMenu = document.createElement('ul');
      dropdownMenu.className ="dropdown-menu";
      dropdownMenu.style.padding ="20px";
      dropdown.appendChild(dropdownMenu);

      // VECTOR LAYERS 
      //Layer 1
      const dropdownList = document.createElement('li');
      const dropdownContent = document.createElement('a');
      const dropdownCheck = document.createElement('input');

      Object.assign(dropdownCheck,{
          type: "checkbox",
          id: "checkbox1",
      });

      Object.assign(dropdownContent,{
          className: "medium",
          href: "#",
          value: "layer1",
          id: "layer1",
      });

      dropdownContent.innerHTML="&nbsp Europe Boundaries";

    //   Legend within layer 1
      const dropdownLegend = document.createElement('div');

      Object.assign(dropdownLegend,{
          className: "legend",
          id: "legend1"
      });

      const dropdownLegendItem = document.createElement('a');
      const dropdownLegendSymbol = document.createElement('img');
      dropdownLegendSymbol.setAttribute("src","./layer_switcher/Logos/Green_Polygon.png");
      Object.assign(dropdownLegendSymbol.style,{width: polygonWidth, height:polygonHeight});
      Object.assign(dropdownLegendItem,{
          className: "dropdown-item",
          href: "#",
      })
      dropdownLegendItem.innerHTML="Europe &nbsp";

    //   Append created items 
      
      dropdownLegendItem.appendChild(dropdownLegendSymbol);
      dropdownLegend.appendChild(dropdownLegendItem);
      dropdownList.appendChild(dropdownCheck);
      dropdownList.appendChild(dropdownContent);
      dropdownList.appendChild(dropdownLegend);
      dropdownMenu.appendChild(dropdownList);
      

    //   LAYER 2
     //Layer 2
     const dropdownList2 = document.createElement('li');
     const dropdownContent2 = document.createElement('a');
     const dropdownCheck2 = document.createElement('input');

     Object.assign(dropdownCheck2,{
         type:"checkbox",
         id:"checkbox2"
     })

     Object.assign(dropdownContent2,{
         className:"medium",
         href: "#",
         value: "layer2",
         id: "layer2",
     })
     dropdownContent2.innerHTML="&nbsp UK Boundaries";

   //   Legend within layer 2
     const dropdownLegend2 = document.createElement('div');
     Object.assign(dropdownLegend2,{
         className:"legend",
         id:"legend2"
     })

     const dropdownLegendItem2 = document.createElement('a');

     const dropdownLegendSymbol2 = document.createElement('img');
     dropdownLegendSymbol2.setAttribute("src","./layer_switcher/Logos/Red_Line.png");
     Object.assign(dropdownLegendSymbol2.style,{width: lineWidth, height:lineHeight});

     Object.assign(dropdownLegendItem2,{
         className:"dropdown-item",
         href: "#"
     })
     dropdownLegendItem2.innerHTML="UK &nbsp";

   //   Append created items 
     
     dropdownLegendItem2.appendChild(dropdownLegendSymbol2);
     dropdownLegend2.appendChild(dropdownLegendItem2);
     dropdownList2.appendChild(dropdownCheck2);
     dropdownList2.appendChild(dropdownContent2);
     dropdownList2.appendChild(dropdownLegend2);
     dropdownMenu.appendChild(dropdownList2);

    //LAYER 3
      const dropdownList3 = document.createElement('li');
      const dropdownContent3 = document.createElement('a');
      const dropdownCheck3 = document.createElement('input');
      
      Object.assign(dropdownCheck3,{
          type:"checkbox",
          id: "checkbox3"
      })

      Object.assign(dropdownContent3,{
          className:"medium",
          href: "#",
          value: "layer3",
          id: "layer3",
      })
      dropdownContent3.innerHTML="&nbsp NA Boundaries";

    //   Legend within layer 3
      const dropdownLegend3 = document.createElement('div');
      Object.assign(dropdownLegend3,{
          className:"legend",
          id: "legend3"
      })

      const dropdownLegendItem3 = document.createElement('a');

      const dropdownLegendSymbol3 = document.createElement('img');
      dropdownLegendSymbol3.setAttribute("src","./layer_switcher/Logos/Yellow_Polygon.png");
      Object.assign(dropdownLegendSymbol3.style,{width: polygonWidth, height:polygonHeight});

      Object.assign(dropdownLegendItem3,{
          className: "dropdown-item",
          href:"#",
      })
      dropdownLegendItem3.innerHTML="North America &nbsp";

    //   Append created items 
      
      dropdownLegendItem3.appendChild(dropdownLegendSymbol3);
      dropdownLegend3.appendChild(dropdownLegendItem3);
      dropdownList3.appendChild(dropdownCheck3);
      dropdownList3.appendChild(dropdownContent3);
      dropdownList3.appendChild(dropdownLegend3);
      dropdownMenu.appendChild(dropdownList3);

    //   LAYER 4
    const dropdownList4 = document.createElement('li');
    const dropdownContent4 = document.createElement('a');
    const dropdownCheck4 = document.createElement('input');
    
    Object.assign(dropdownCheck4,{
        type:"checkbox",
        id: "checkbox4"
    })

    Object.assign(dropdownContent4,{
        className:"medium",
        href: "#",
        value: "layer4",
        id: "layer4",
    })
    dropdownContent4.innerHTML="&nbsp Dublin administrative";

  //   Legend within layer 4
    const dropdownLegend4 = document.createElement('div');
    Object.assign(dropdownLegend4,{
        className:"legend",
        id: "legend4"
    })

    const dropdownLegendItem4 = document.createElement('a');

    const dropdownLegendSymbol4 = document.createElement('img');
    dropdownLegendSymbol4.setAttribute("src","http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=quickstat:Dublin_Administrative%20DCC_5CommitteeAreas_2019_2157");
    Object.assign(dropdownLegendSymbol4.style,{width: geoWidth, height:geoHeight});

    Object.assign(dropdownLegendItem4,{
        className: "dropdown-item",
        href:"#",
    })
    // dropdownLegendItem4.innerHTML="dublin &nbsp";

  //   Append created items 
    
    dropdownLegendItem4.appendChild(dropdownLegendSymbol4);
    dropdownLegend4.appendChild(dropdownLegendItem4);
    dropdownList4.appendChild(dropdownCheck4);
    dropdownList4.appendChild(dropdownContent4);
    dropdownList4.appendChild(dropdownLegend4);
    dropdownMenu.appendChild(dropdownList4);

    // Create opacity toggler for each layer
    const opacity = document.createElement('label');
    Object.assign(opacity,{
      className: "opacitylabel"
    })
    opacity.innerHTML="Opacity";

    const opacityInput = document.createElement('input');
    Object.assign(opacityInput, {
      id: "opacity-input",
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: "1",
      className: "opacitybar"
    });

    dropdownLegend.appendChild(opacity);
    opacity.appendChild(opacityInput);

    // opacity other layers
    const opacity2 = document.createElement('label');
    Object.assign(opacity2,{
      className: "opacitylabel"
    })
    opacity2.innerHTML="Opacity";

    const opacityInput2 = document.createElement('input');
    Object.assign(opacityInput2, {
      id: "opacity-input2",
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: "1",
      className: "opacitybar"
    });
    dropdownLegend2.appendChild(opacity2);
    opacity2.appendChild(opacityInput2)

    // Layer 3
    const opacity3 = document.createElement('label');
    Object.assign(opacity3,{
      className: "opacitylabel"
    })
    opacity3.innerHTML="Opacity";

    const opacityInput3 = document.createElement('input');
    Object.assign(opacityInput3, {
      id: "opacity-input3",
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: "1",
      className: "opacitybar"
    });
    dropdownLegend3.appendChild(opacity3);
    opacity3.appendChild(opacityInput3)

    // Layer 4
    const opacity4 = document.createElement('label');
    Object.assign(opacity4,{
      className: "opacitylabel"
    })
    opacity4.innerHTML="Opacity";

    const opacityInput4 = document.createElement('input');
    Object.assign(opacityInput4, {
      id: "opacity-input4",
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: "1",
      className: "opacitybar"
    });
    dropdownLegend4.appendChild(opacity4);
    opacity4.appendChild(opacityInput4)

    // EMBED TO MAP
      super({
        element: dropdown,
        target: options.target,
      });

    //   ADD MY MAPS
      options.map.addLayer(layer1);
      options.map.addLayer(layer2);
      options.map.addLayer(layer3);
      options.map.addLayer(layer4);

      const checkboxToggler = function(checkboxid, layer, legend){
          checkboxid.onclick=function(){
              layer.setVisible(!layer.getVisible());
              if(layer.getVisible(true)){
                 legend.style.display="block";
              }
              else{
                  legend.style.display="none"
              }
            }
        }
      
      // Connect opacity to layers
      const opacityToggler = function(opacityIn, layer){
        // When you change the value of the opacity, set the opacity level to that value
        opacityIn.onchange= function(){
          const opac = parseFloat(opacityIn.value);
          layer.setOpacity(opac)
        }
      }
      opacityToggler(opacityInput, layer1);
      opacityToggler(opacityInput2, layer2);
      opacityToggler(opacityInput3, layer3);
      opacityToggler(opacityInput4, layer4);

    // Initiate checkbox toggler
    checkboxToggler(dropdownCheck, layer1, dropdownLegend);
    checkboxToggler(dropdownCheck2, layer2, dropdownLegend2);
    checkboxToggler(dropdownCheck3, layer3, dropdownLegend3);
    checkboxToggler(dropdownCheck4, layer4, dropdownLegend4);
    }
}

export default layerSwitcher;