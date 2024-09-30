var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Mapadelmundo_1 = new ol.format.GeoJSON();
var features_Mapadelmundo_1 = format_Mapadelmundo_1.readFeatures(json_Mapadelmundo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadelmundo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadelmundo_1.addFeatures(features_Mapadelmundo_1);
var lyr_Mapadelmundo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadelmundo_1, 
                style: style_Mapadelmundo_1,
                popuplayertitle: "Mapa del mundo",
                interactive: false,
                title: '<img src="styles/legend/Mapadelmundo_1.png" /> Mapa del mundo'
            });
var format_Turqua_2 = new ol.format.GeoJSON();
var features_Turqua_2 = format_Turqua_2.readFeatures(json_Turqua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turqua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turqua_2.addFeatures(features_Turqua_2);
var lyr_Turqua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Turqua_2, 
                style: style_Turqua_2,
                popuplayertitle: "Turquía",
                interactive: true,
                title: '<img src="styles/legend/Turqua_2.png" /> Turquía'
            });
var format_Tnez_3 = new ol.format.GeoJSON();
var features_Tnez_3 = format_Tnez_3.readFeatures(json_Tnez_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tnez_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tnez_3.addFeatures(features_Tnez_3);
var lyr_Tnez_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tnez_3, 
                style: style_Tnez_3,
                popuplayertitle: "Túnez",
                interactive: true,
                title: '<img src="styles/legend/Tnez_3.png" /> Túnez'
            });
var format_Siria_4 = new ol.format.GeoJSON();
var features_Siria_4 = format_Siria_4.readFeatures(json_Siria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siria_4.addFeatures(features_Siria_4);
var lyr_Siria_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siria_4, 
                style: style_Siria_4,
                popuplayertitle: "Siria",
                interactive: true,
                title: '<img src="styles/legend/Siria_4.png" /> Siria'
            });
var format_Portugal_5 = new ol.format.GeoJSON();
var features_Portugal_5 = format_Portugal_5.readFeatures(json_Portugal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portugal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portugal_5.addFeatures(features_Portugal_5);
var lyr_Portugal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portugal_5, 
                style: style_Portugal_5,
                popuplayertitle: "Portugal",
                interactive: true,
                title: '<img src="styles/legend/Portugal_5.png" /> Portugal'
            });
var format_Montenegro_6 = new ol.format.GeoJSON();
var features_Montenegro_6 = format_Montenegro_6.readFeatures(json_Montenegro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montenegro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montenegro_6.addFeatures(features_Montenegro_6);
var lyr_Montenegro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montenegro_6, 
                style: style_Montenegro_6,
                popuplayertitle: "Montenegro",
                interactive: true,
                title: '<img src="styles/legend/Montenegro_6.png" /> Montenegro'
            });
var format_Marruecos_7 = new ol.format.GeoJSON();
var features_Marruecos_7 = format_Marruecos_7.readFeatures(json_Marruecos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marruecos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marruecos_7.addFeatures(features_Marruecos_7);
var lyr_Marruecos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marruecos_7, 
                style: style_Marruecos_7,
                popuplayertitle: "Marruecos",
                interactive: true,
                title: '<img src="styles/legend/Marruecos_7.png" /> Marruecos'
            });
var format_Malta_8 = new ol.format.GeoJSON();
var features_Malta_8 = format_Malta_8.readFeatures(json_Malta_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malta_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malta_8.addFeatures(features_Malta_8);
var lyr_Malta_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malta_8, 
                style: style_Malta_8,
                popuplayertitle: "Malta",
                interactive: true,
                title: '<img src="styles/legend/Malta_8.png" /> Malta'
            });
var format_Libia_9 = new ol.format.GeoJSON();
var features_Libia_9 = format_Libia_9.readFeatures(json_Libia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libia_9.addFeatures(features_Libia_9);
var lyr_Libia_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libia_9, 
                style: style_Libia_9,
                popuplayertitle: "Libia",
                interactive: true,
                title: '<img src="styles/legend/Libia_9.png" /> Libia'
            });
var format_Lbano_10 = new ol.format.GeoJSON();
var features_Lbano_10 = format_Lbano_10.readFeatures(json_Lbano_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lbano_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lbano_10.addFeatures(features_Lbano_10);
var lyr_Lbano_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lbano_10, 
                style: style_Lbano_10,
                popuplayertitle: "Líbano",
                interactive: true,
                title: '<img src="styles/legend/Lbano_10.png" /> Líbano'
            });
var format_Italia_11 = new ol.format.GeoJSON();
var features_Italia_11 = format_Italia_11.readFeatures(json_Italia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Italia_11.addFeatures(features_Italia_11);
var lyr_Italia_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Italia_11, 
                style: style_Italia_11,
                popuplayertitle: "Italia",
                interactive: true,
                title: '<img src="styles/legend/Italia_11.png" /> Italia'
            });
var format_Israel_12 = new ol.format.GeoJSON();
var features_Israel_12 = format_Israel_12.readFeatures(json_Israel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Israel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Israel_12.addFeatures(features_Israel_12);
var lyr_Israel_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Israel_12, 
                style: style_Israel_12,
                popuplayertitle: "Israel",
                interactive: true,
                title: '<img src="styles/legend/Israel_12.png" /> Israel'
            });
var format_Grecia_13 = new ol.format.GeoJSON();
var features_Grecia_13 = format_Grecia_13.readFeatures(json_Grecia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grecia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grecia_13.addFeatures(features_Grecia_13);
var lyr_Grecia_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grecia_13, 
                style: style_Grecia_13,
                popuplayertitle: "Grecia",
                interactive: true,
                title: '<img src="styles/legend/Grecia_13.png" /> Grecia'
            });
var format_Francia_14 = new ol.format.GeoJSON();
var features_Francia_14 = format_Francia_14.readFeatures(json_Francia_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Francia_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Francia_14.addFeatures(features_Francia_14);
var lyr_Francia_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Francia_14, 
                style: style_Francia_14,
                popuplayertitle: "Francia",
                interactive: true,
                title: '<img src="styles/legend/Francia_14.png" /> Francia'
            });
var format_Espaa_15 = new ol.format.GeoJSON();
var features_Espaa_15 = format_Espaa_15.readFeatures(json_Espaa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaa_15.addFeatures(features_Espaa_15);
var lyr_Espaa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaa_15, 
                style: style_Espaa_15,
                popuplayertitle: "España",
                interactive: true,
                title: '<img src="styles/legend/Espaa_15.png" /> España'
            });
var format_Egipto_16 = new ol.format.GeoJSON();
var features_Egipto_16 = format_Egipto_16.readFeatures(json_Egipto_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egipto_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egipto_16.addFeatures(features_Egipto_16);
var lyr_Egipto_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egipto_16, 
                style: style_Egipto_16,
                popuplayertitle: "Egipto",
                interactive: true,
                title: '<img src="styles/legend/Egipto_16.png" /> Egipto'
            });
var format_Croacia_17 = new ol.format.GeoJSON();
var features_Croacia_17 = format_Croacia_17.readFeatures(json_Croacia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Croacia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Croacia_17.addFeatures(features_Croacia_17);
var lyr_Croacia_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Croacia_17, 
                style: style_Croacia_17,
                popuplayertitle: "Croacia",
                interactive: true,
                title: '<img src="styles/legend/Croacia_17.png" /> Croacia'
            });
var format_Chipre_18 = new ol.format.GeoJSON();
var features_Chipre_18 = format_Chipre_18.readFeatures(json_Chipre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chipre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chipre_18.addFeatures(features_Chipre_18);
var lyr_Chipre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chipre_18, 
                style: style_Chipre_18,
                popuplayertitle: "Chipre",
                interactive: true,
                title: '<img src="styles/legend/Chipre_18.png" /> Chipre'
            });
var format_Argelia_19 = new ol.format.GeoJSON();
var features_Argelia_19 = format_Argelia_19.readFeatures(json_Argelia_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Argelia_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Argelia_19.addFeatures(features_Argelia_19);
var lyr_Argelia_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Argelia_19, 
                style: style_Argelia_19,
                popuplayertitle: "Argelia",
                interactive: true,
                title: '<img src="styles/legend/Argelia_19.png" /> Argelia'
            });
var format_Albania_20 = new ol.format.GeoJSON();
var features_Albania_20 = format_Albania_20.readFeatures(json_Albania_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Albania_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Albania_20.addFeatures(features_Albania_20);
var lyr_Albania_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Albania_20, 
                style: style_Albania_20,
                popuplayertitle: "Albania",
                interactive: true,
                title: '<img src="styles/legend/Albania_20.png" /> Albania'
            });
var format_Diciembre_21 = new ol.format.GeoJSON();
var features_Diciembre_21 = format_Diciembre_21.readFeatures(json_Diciembre_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diciembre_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diciembre_21.addFeatures(features_Diciembre_21);
var lyr_Diciembre_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diciembre_21, 
                style: style_Diciembre_21,
                popuplayertitle: "Diciembre",
                interactive: true,
                title: '<img src="styles/legend/Diciembre_21.png" /> Diciembre'
            });
var format_Noviembre_22 = new ol.format.GeoJSON();
var features_Noviembre_22 = format_Noviembre_22.readFeatures(json_Noviembre_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noviembre_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noviembre_22.addFeatures(features_Noviembre_22);
var lyr_Noviembre_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noviembre_22, 
                style: style_Noviembre_22,
                popuplayertitle: "Noviembre",
                interactive: true,
                title: '<img src="styles/legend/Noviembre_22.png" /> Noviembre'
            });
var format_Octubre_23 = new ol.format.GeoJSON();
var features_Octubre_23 = format_Octubre_23.readFeatures(json_Octubre_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Octubre_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Octubre_23.addFeatures(features_Octubre_23);
var lyr_Octubre_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Octubre_23, 
                style: style_Octubre_23,
                popuplayertitle: "Octubre",
                interactive: true,
                title: '<img src="styles/legend/Octubre_23.png" /> Octubre'
            });
var format_Septiembre_24 = new ol.format.GeoJSON();
var features_Septiembre_24 = format_Septiembre_24.readFeatures(json_Septiembre_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Septiembre_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Septiembre_24.addFeatures(features_Septiembre_24);
var lyr_Septiembre_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Septiembre_24, 
                style: style_Septiembre_24,
                popuplayertitle: "Septiembre",
                interactive: true,
                title: '<img src="styles/legend/Septiembre_24.png" /> Septiembre'
            });
var format_Agosto_25 = new ol.format.GeoJSON();
var features_Agosto_25 = format_Agosto_25.readFeatures(json_Agosto_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agosto_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agosto_25.addFeatures(features_Agosto_25);
var lyr_Agosto_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agosto_25, 
                style: style_Agosto_25,
                popuplayertitle: "Agosto",
                interactive: true,
                title: '<img src="styles/legend/Agosto_25.png" /> Agosto'
            });
var format_Julio_26 = new ol.format.GeoJSON();
var features_Julio_26 = format_Julio_26.readFeatures(json_Julio_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Julio_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julio_26.addFeatures(features_Julio_26);
var lyr_Julio_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Julio_26, 
                style: style_Julio_26,
                popuplayertitle: "Julio",
                interactive: true,
                title: '<img src="styles/legend/Julio_26.png" /> Julio'
            });
var format_Junio_27 = new ol.format.GeoJSON();
var features_Junio_27 = format_Junio_27.readFeatures(json_Junio_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junio_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junio_27.addFeatures(features_Junio_27);
var lyr_Junio_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junio_27, 
                style: style_Junio_27,
                popuplayertitle: "Junio",
                interactive: true,
                title: '<img src="styles/legend/Junio_27.png" /> Junio'
            });
var format_Mayo_28 = new ol.format.GeoJSON();
var features_Mayo_28 = format_Mayo_28.readFeatures(json_Mayo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayo_28.addFeatures(features_Mayo_28);
var lyr_Mayo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mayo_28, 
                style: style_Mayo_28,
                popuplayertitle: "Mayo",
                interactive: true,
                title: '<img src="styles/legend/Mayo_28.png" /> Mayo'
            });
var format_Abril_29 = new ol.format.GeoJSON();
var features_Abril_29 = format_Abril_29.readFeatures(json_Abril_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abril_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abril_29.addFeatures(features_Abril_29);
var lyr_Abril_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abril_29, 
                style: style_Abril_29,
                popuplayertitle: "Abril",
                interactive: true,
                title: '<img src="styles/legend/Abril_29.png" /> Abril'
            });
var format_Marzo_30 = new ol.format.GeoJSON();
var features_Marzo_30 = format_Marzo_30.readFeatures(json_Marzo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marzo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marzo_30.addFeatures(features_Marzo_30);
var lyr_Marzo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marzo_30, 
                style: style_Marzo_30,
                popuplayertitle: "Marzo",
                interactive: true,
                title: '<img src="styles/legend/Marzo_30.png" /> Marzo'
            });
var format_Febrero_31 = new ol.format.GeoJSON();
var features_Febrero_31 = format_Febrero_31.readFeatures(json_Febrero_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Febrero_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Febrero_31.addFeatures(features_Febrero_31);
var lyr_Febrero_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Febrero_31, 
                style: style_Febrero_31,
                popuplayertitle: "Febrero",
                interactive: true,
                title: '<img src="styles/legend/Febrero_31.png" /> Febrero'
            });
var format_Enero_32 = new ol.format.GeoJSON();
var features_Enero_32 = format_Enero_32.readFeatures(json_Enero_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enero_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enero_32.addFeatures(features_Enero_32);
var lyr_Enero_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enero_32, 
                style: style_Enero_32,
                popuplayertitle: "Enero",
                interactive: true,
                title: '<img src="styles/legend/Enero_32.png" /> Enero'
            });
var format_Diciembre_33 = new ol.format.GeoJSON();
var features_Diciembre_33 = format_Diciembre_33.readFeatures(json_Diciembre_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diciembre_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diciembre_33.addFeatures(features_Diciembre_33);
var lyr_Diciembre_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diciembre_33, 
                style: style_Diciembre_33,
                popuplayertitle: "Diciembre",
                interactive: true,
                title: '<img src="styles/legend/Diciembre_33.png" /> Diciembre'
            });
var format_Noviembre_34 = new ol.format.GeoJSON();
var features_Noviembre_34 = format_Noviembre_34.readFeatures(json_Noviembre_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noviembre_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noviembre_34.addFeatures(features_Noviembre_34);
var lyr_Noviembre_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noviembre_34, 
                style: style_Noviembre_34,
                popuplayertitle: "Noviembre",
                interactive: true,
                title: '<img src="styles/legend/Noviembre_34.png" /> Noviembre'
            });
var format_Octubre_35 = new ol.format.GeoJSON();
var features_Octubre_35 = format_Octubre_35.readFeatures(json_Octubre_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Octubre_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Octubre_35.addFeatures(features_Octubre_35);
var lyr_Octubre_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Octubre_35, 
                style: style_Octubre_35,
                popuplayertitle: "Octubre",
                interactive: true,
                title: '<img src="styles/legend/Octubre_35.png" /> Octubre'
            });
var format_Septiembre_36 = new ol.format.GeoJSON();
var features_Septiembre_36 = format_Septiembre_36.readFeatures(json_Septiembre_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Septiembre_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Septiembre_36.addFeatures(features_Septiembre_36);
var lyr_Septiembre_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Septiembre_36, 
                style: style_Septiembre_36,
                popuplayertitle: "Septiembre",
                interactive: true,
                title: '<img src="styles/legend/Septiembre_36.png" /> Septiembre'
            });
var format_Agosto_37 = new ol.format.GeoJSON();
var features_Agosto_37 = format_Agosto_37.readFeatures(json_Agosto_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agosto_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agosto_37.addFeatures(features_Agosto_37);
var lyr_Agosto_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agosto_37, 
                style: style_Agosto_37,
                popuplayertitle: "Agosto",
                interactive: true,
                title: '<img src="styles/legend/Agosto_37.png" /> Agosto'
            });
var format_Julio_38 = new ol.format.GeoJSON();
var features_Julio_38 = format_Julio_38.readFeatures(json_Julio_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Julio_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julio_38.addFeatures(features_Julio_38);
var lyr_Julio_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Julio_38, 
                style: style_Julio_38,
                popuplayertitle: "Julio",
                interactive: true,
                title: '<img src="styles/legend/Julio_38.png" /> Julio'
            });
var format_Junio_39 = new ol.format.GeoJSON();
var features_Junio_39 = format_Junio_39.readFeatures(json_Junio_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junio_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junio_39.addFeatures(features_Junio_39);
var lyr_Junio_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junio_39, 
                style: style_Junio_39,
                popuplayertitle: "Junio",
                interactive: true,
                title: '<img src="styles/legend/Junio_39.png" /> Junio'
            });
var format_Mayo_40 = new ol.format.GeoJSON();
var features_Mayo_40 = format_Mayo_40.readFeatures(json_Mayo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayo_40.addFeatures(features_Mayo_40);
var lyr_Mayo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mayo_40, 
                style: style_Mayo_40,
                popuplayertitle: "Mayo",
                interactive: true,
                title: '<img src="styles/legend/Mayo_40.png" /> Mayo'
            });
var format_Abril_41 = new ol.format.GeoJSON();
var features_Abril_41 = format_Abril_41.readFeatures(json_Abril_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abril_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abril_41.addFeatures(features_Abril_41);
var lyr_Abril_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abril_41, 
                style: style_Abril_41,
                popuplayertitle: "Abril",
                interactive: true,
                title: '<img src="styles/legend/Abril_41.png" /> Abril'
            });
var format_Marzo_42 = new ol.format.GeoJSON();
var features_Marzo_42 = format_Marzo_42.readFeatures(json_Marzo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marzo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marzo_42.addFeatures(features_Marzo_42);
var lyr_Marzo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marzo_42, 
                style: style_Marzo_42,
                popuplayertitle: "Marzo",
                interactive: true,
                title: '<img src="styles/legend/Marzo_42.png" /> Marzo'
            });
var format_Febrero_43 = new ol.format.GeoJSON();
var features_Febrero_43 = format_Febrero_43.readFeatures(json_Febrero_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Febrero_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Febrero_43.addFeatures(features_Febrero_43);
var lyr_Febrero_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Febrero_43, 
                style: style_Febrero_43,
                popuplayertitle: "Febrero",
                interactive: true,
                title: '<img src="styles/legend/Febrero_43.png" /> Febrero'
            });
var format_Enero_44 = new ol.format.GeoJSON();
var features_Enero_44 = format_Enero_44.readFeatures(json_Enero_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enero_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enero_44.addFeatures(features_Enero_44);
var lyr_Enero_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enero_44, 
                style: style_Enero_44,
                popuplayertitle: "Enero",
                interactive: true,
                title: '<img src="styles/legend/Enero_44.png" /> Enero'
            });
var group_Mediterrneo = new ol.layer.Group({
                                layers: [lyr_Diciembre_33,lyr_Noviembre_34,lyr_Octubre_35,lyr_Septiembre_36,lyr_Agosto_37,lyr_Julio_38,lyr_Junio_39,lyr_Mayo_40,lyr_Abril_41,lyr_Marzo_42,lyr_Febrero_43,lyr_Enero_44,],
                                fold: "open",
                                title: "Mediterráneo"});
var group_fricaoccidental = new ol.layer.Group({
                                layers: [lyr_Diciembre_21,lyr_Noviembre_22,lyr_Octubre_23,lyr_Septiembre_24,lyr_Agosto_25,lyr_Julio_26,lyr_Junio_27,lyr_Mayo_28,lyr_Abril_29,lyr_Marzo_30,lyr_Febrero_31,lyr_Enero_32,],
                                fold: "open",
                                title: "África occidental"});
var group_SAR = new ol.layer.Group({
                                layers: [lyr_Turqua_2,lyr_Tnez_3,lyr_Siria_4,lyr_Portugal_5,lyr_Montenegro_6,lyr_Marruecos_7,lyr_Malta_8,lyr_Libia_9,lyr_Lbano_10,lyr_Italia_11,lyr_Israel_12,lyr_Grecia_13,lyr_Francia_14,lyr_Espaa_15,lyr_Egipto_16,lyr_Croacia_17,lyr_Chipre_18,lyr_Argelia_19,lyr_Albania_20,],
                                fold: "open",
                                title: "SAR"});

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Mapadelmundo_1.setVisible(true);lyr_Turqua_2.setVisible(true);lyr_Tnez_3.setVisible(true);lyr_Siria_4.setVisible(true);lyr_Portugal_5.setVisible(true);lyr_Montenegro_6.setVisible(true);lyr_Marruecos_7.setVisible(true);lyr_Malta_8.setVisible(true);lyr_Libia_9.setVisible(true);lyr_Lbano_10.setVisible(true);lyr_Italia_11.setVisible(true);lyr_Israel_12.setVisible(true);lyr_Grecia_13.setVisible(true);lyr_Francia_14.setVisible(true);lyr_Espaa_15.setVisible(true);lyr_Egipto_16.setVisible(true);lyr_Croacia_17.setVisible(true);lyr_Chipre_18.setVisible(true);lyr_Argelia_19.setVisible(true);lyr_Albania_20.setVisible(true);lyr_Diciembre_21.setVisible(false);lyr_Noviembre_22.setVisible(false);lyr_Octubre_23.setVisible(false);lyr_Septiembre_24.setVisible(false);lyr_Agosto_25.setVisible(false);lyr_Julio_26.setVisible(false);lyr_Junio_27.setVisible(false);lyr_Mayo_28.setVisible(false);lyr_Abril_29.setVisible(false);lyr_Marzo_30.setVisible(false);lyr_Febrero_31.setVisible(false);lyr_Enero_32.setVisible(true);lyr_Diciembre_33.setVisible(false);lyr_Noviembre_34.setVisible(false);lyr_Octubre_35.setVisible(false);lyr_Septiembre_36.setVisible(false);lyr_Agosto_37.setVisible(false);lyr_Julio_38.setVisible(false);lyr_Junio_39.setVisible(false);lyr_Mayo_40.setVisible(false);lyr_Abril_41.setVisible(false);lyr_Marzo_42.setVisible(false);lyr_Febrero_43.setVisible(false);lyr_Enero_44.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Mapadelmundo_1,group_SAR,group_fricaoccidental,group_Mediterrneo];
lyr_Mapadelmundo_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Turqua_2.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Tnez_3.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Siria_4.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Portugal_5.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Montenegro_6.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Marruecos_7.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Malta_8.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Libia_9.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Lbano_10.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Italia_11.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Israel_12.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Grecia_13.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Francia_14.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Espaa_15.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Egipto_16.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Croacia_17.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Chipre_18.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Argelia_19.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Albania_20.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Diciembre_21.set('fieldAliases', {'y': 'y', 'x': 'x', });
lyr_Noviembre_22.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Octubre_23.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Septiembre_24.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Agosto_25.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Julio_26.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Junio_27.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Mayo_28.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Abril_29.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Marzo_30.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Febrero_31.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Enero_32.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Diciembre_33.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Noviembre_34.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Octubre_35.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Septiembre_36.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Agosto_37.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Julio_38.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Junio_39.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Mayo_40.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Abril_41.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Marzo_42.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Febrero_43.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Enero_44.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Mapadelmundo_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Turqua_2.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Tnez_3.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Siria_4.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Portugal_5.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Montenegro_6.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Marruecos_7.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Malta_8.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Libia_9.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Lbano_10.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Italia_11.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Israel_12.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Grecia_13.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Francia_14.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Espaa_15.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Egipto_16.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Croacia_17.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Chipre_18.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Argelia_19.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Albania_20.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Diciembre_21.set('fieldImages', {'y': 'TextEdit', 'x': 'TextEdit', });
lyr_Noviembre_22.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Octubre_23.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Septiembre_24.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Agosto_25.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Julio_26.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Junio_27.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Mayo_28.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Abril_29.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Marzo_30.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Febrero_31.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Enero_32.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Diciembre_33.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Noviembre_34.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Octubre_35.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Septiembre_36.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Agosto_37.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Julio_38.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Junio_39.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Mayo_40.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Abril_41.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Marzo_42.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Febrero_43.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Enero_44.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Mapadelmundo_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Turqua_2.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Tnez_3.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Siria_4.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Portugal_5.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Montenegro_6.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Marruecos_7.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Malta_8.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Libia_9.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Lbano_10.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Italia_11.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Israel_12.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Grecia_13.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Francia_14.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Espaa_15.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Egipto_16.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Croacia_17.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Chipre_18.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Argelia_19.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Albania_20.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Diciembre_21.set('fieldLabels', {'y': 'no label', 'x': 'no label', });
lyr_Noviembre_22.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Octubre_23.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Septiembre_24.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Agosto_25.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Julio_26.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Junio_27.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Mayo_28.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Abril_29.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Marzo_30.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Febrero_31.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Enero_32.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Diciembre_33.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Noviembre_34.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Octubre_35.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Septiembre_36.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Agosto_37.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Julio_38.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Junio_39.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Mayo_40.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Abril_41.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Marzo_42.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Febrero_43.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Enero_44.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_Enero_44.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});