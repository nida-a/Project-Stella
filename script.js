//sets up a scen and the camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x03020e);
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer( { canvas: constellationScene} );  //sets the html canvas constellationScene to be this renderer

renderer.setSize(innerWidth,innerHeight);  //renderer the users screen
renderer.setPixelRatio(devicePixelRatio);  //pixel ratio based off user's devices pixel ratio


//setting up a background of stars
const starryBackgroundGeometry = new THREE.BufferGeometry();
const starryBackgroundMaterial = new THREE.PointsMaterial({color: 0xffffff});

//declared array for the set of 3d points of the stars
const starryBackgroundVertices =[];
drawStars();  
function drawStars(){
  for(let i = 0; i< 10000000; i++)
  {
    //randomized position for 10000001 stars
    const x = (Math.random()-0.5)*10000;
    const y = (Math.random()-0.5)*10000;
    const z = ((Math.random()-0.5)*100000);
    starryBackgroundVertices.push(x, y, z);
  }
}

starryBackgroundGeometry.addAttribute('position', new THREE.Float32BufferAttribute(starryBackgroundVertices, 3));
const starryBackground = new THREE.Points(starryBackgroundGeometry, starryBackgroundMaterial);
//finishes adding starry background
scene.add(starryBackground);

var constantZ = 50.0;

//sets (constellation) line material to be white 
const material = new THREE.LineBasicMaterial({
	color: 0xffffff
});


//andromeda constellation
// const andromedaPoints = [];
// andromedaPoints.push(new THREE.Vector3(76.368059/constantZ,	45.840864/constantZ, 81.131974/constantZ) );// HIP 9640
// andromedaPoints.push(new THREE.Vector3(46.946371/constantZ,	14.741814/constantZ,	35.255129
// /constantZ) );// HIP 5447
// andromedaPoints.push(new THREE.Vector3(27.363473/2,	4.742224/2,	16.595166
// /constantZ) );// HIP 3092
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3031
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3693
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 4463
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3693
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3031
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3092
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 677
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3092
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 2912
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 116631
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 113726
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 116631
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 116805
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 116584
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 116805
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 2912
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 5447
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 4436
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 3881
// andromedaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );// HIP 5434

// andromedaPoints.push( new THREE.Vector3( 0, 10, 0) );
// andromedaPoints.push( new THREE.Vector3( 10, 0, 0 ) );
// const andromedaGeometry = new THREE.BufferGeometry().setFromPoints(andromedaPoints);
// const andromeda = new THREE.Line( andromedaGeometry, material);
// scene.add( andromeda );

//antila constellation
const antilaPoints = [];
antilaPoints.push(new THREE.Vector3(-139.565679,	107.824531,	-127.90814
));
antilaPoints.push(new THREE.Vector3(-88.352579,	37.890013,	-57.918293));
antilaPoints.push(new THREE.Vector3(-44.696342,	12.665166,	-35.182633


));
const antilaGeometry = new THREE.BufferGeometry().setFromPoints(antilaPoints);
const antila = new THREE.Line( antilaGeometry, material);
scene.add(antila);

//apus constellation
const apusPoints = [];
//apusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const apusGeometry = new THREE.BufferGeometry().setFromPoints(apusPoints);
const apus = new THREE.Line( apusGeometry, material);
scene.add(apus);

//aquarius constellation
const aquariusPoints = [];
//aquariusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const aquariusGeometry = new THREE.BufferGeometry().setFromPoints(aquariusPoints);
const aquarius = new THREE.Line( aquariusGeometry, material);
scene.add(aquarius);

//aquila constellation
const aquilaPoints = [];
//aquilaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const aquilaGeometry = new THREE.BufferGeometry().setFromPoints(aquilaPoints);
const aquila = new THREE.Line(aquilaGeometry, material);
scene.add(aquila);

//ara constellation
const araPoints = [];
//araPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const araGeometry = new THREE.BufferGeometry().setFromPoints(araPoints);
const ara = new THREE.Line(araGeometry, material);
scene.add(ara);

//aries constellation
const ariesPoints = [];
//ariesPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const ariesGeometry = new THREE.BufferGeometry().setFromPoints(ariesPoints);
const aries = new THREE.Line(ariesGeometry, material);
scene.add(aries);


//auriga constellation
const aurigaPoints = [];
//aurigaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const aurigaGeometry = new THREE.BufferGeometry().setFromPoints(aurigaPoints);
const auriga = new THREE.Line(aurigaGeometry, material);
scene.add(auriga);


//bootes constellation
const bootesPoints = [];
//bootesPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const bootesGeometry = new THREE.BufferGeometry().setFromPoints(bootesPoints);
const bootes = new THREE.Line(bootesGeometry, material);
scene.add(bootes);


//caelum constellation
const caelumPoints = [];
//caelumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const caelumGeometry = new THREE.BufferGeometry().setFromPoints(caelumPoints);
const caelum = new THREE.Line(caelumGeometry, material);
scene.add(caelum);


//camelopardalis constellation
const camelopardalisPoints = [];
//camelopardalisPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const camelopardalisGeometry = new THREE.BufferGeometry().setFromPoints(camelopardalisPoints);
const camelopardalis = new THREE.Line(camelopardalisGeometry, material);
scene.add(camelopardalis);


//cancer constellation
const cancerPoints = [];
//cancerPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const cancerGeometry = new THREE.BufferGeometry().setFromPoints(cancerPoints);
const cancer = new THREE.Line(cancerGeometry, material);
scene.add(cancer);

//canesVenatici constellation
const canesVenaticiPoints = [];
//canesVenaticiPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const canesVenaticiGeometry = new THREE.BufferGeometry().setFromPoints(canesVenaticiPoints);
const canesVenatici = new THREE.Line(canesVenaticiGeometry, material);
scene.add(canesVenatici);

//canisMajor constellation
const canisMajorPoints = [];
//canisMajorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const canisMajorGeometry = new THREE.BufferGeometry().setFromPoints(canisMajorPoints);
const canisMajor = new THREE.Line(canisMajorGeometry, material);
scene.add(canisMajor);

//canisMinor constellation
const canisMinorPoints = [];
//canisMinorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const canisMinorGeometry = new THREE.BufferGeometry().setFromPoints(canisMinorPoints);
const canisMinor = new THREE.Line(canisMinorGeometry, material);
scene.add(canisMinor);

//capricornus constellation
const capricornusPoints = [];
//capricornusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const capricornusGeometry = new THREE.BufferGeometry().setFromPoints(capricornusPoints);
const capricornus = new THREE.Line(capricornusGeometry, material);
scene.add(capricornus);

//carina constellation
const carinaPoints = [];
//carinaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const carinaGeometry = new THREE.BufferGeometry().setFromPoints(carinaPoints);
const carina = new THREE.Line(carinaGeometry, material);
scene.add(carina);

// cassiopeia constellation
const cassiopeiaPoints = [];
cassiopeiaPoints.push(new THREE.Vector3(49.169644,	26.806887,	113.163436));//8886
cassiopeiaPoints.push( new THREE.Vector3(14.082378,	5.53413,	26.457567) );//6686
cassiopeiaPoints.push( new THREE.Vector3(130.135208,	137.424213,	175.92296
) );//4427
cassiopeiaPoints.push( new THREE.Vector3(37.984817,	6.784483,	58.379619
) );//3179
cassiopeiaPoints.push( new THREE.Vector3(8.600014,	0.344589,	14.409503
) );//746
const cassiopeiaGeometry = new THREE.BufferGeometry().setFromPoints(cassiopeiaPoints);
const cassiopeia = new THREE.Line( cassiopeiaGeometry, material );
scene.add( cassiopeia);

//centaurus constellation
const centaurusPoints = [];
//centaurusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const centaurusGeometry = new THREE.BufferGeometry().setFromPoints(centaurusPoints);
const centaurus = new THREE.Line(centaurusGeometry, material);
scene.add(centaurus);

//cepheus constellation
const cepheusPoints = [];
//cepheusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const cepheusGeometry = new THREE.BufferGeometry().setFromPoints(cepheusPoints);
const cepheus = new THREE.Line(cepheusGeometry, material);
scene.add(cepheus);

//cetus constellation
const cetusPoints = [];
//cetusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const cetusGeometry = new THREE.BufferGeometry().setFromPoints(cetusPoints);
const cetus = new THREE.Line(cetusGeometry, material);
scene.add(cetus);

//chamaeleon constellation
const chamaeleonPoints = [];
//chamaeleonPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const chamaeleonGeometry = new THREE.BufferGeometry().setFromPoints(chamaeleonPoints);
const chamaeleon = new THREE.Line(chamaeleonGeometry, material);
scene.add(chamaeleon);

//circinus constellation
const circinusPoints = [];
//circinusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const circinusGeometry = new THREE.BufferGeometry().setFromPoints(circinusPoints);
const circinus = new THREE.Line(circinusGeometry, material);
scene.add(circinus);


//columba constellation
const columbaPoints = [];
//columbaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const columbaGeometry = new THREE.BufferGeometry().setFromPoints(columbaPoints);
const columba = new THREE.Line(columbaGeometry, material);
scene.add(columba);


//comaBerenices constellation
const comaBerenicesPoints = [];
//comaBerenicesPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const comaBerenicesGeometry = new THREE.BufferGeometry().setFromPoints(comaBerenicesPoints);
const comaBerenices = new THREE.Line(comaBerenicesGeometry, material);
scene.add(comaBerenices);


//coronaAustralis constellation
const coronaAustralisPoints = [];
//coronaAustralisPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const coronaAustralisGeometry = new THREE.BufferGeometry().setFromPoints(coronaAustralisPoints);
const coronaAustralis = new THREE.Line(coronaAustralisGeometry, material);
scene.add(coronaAustralis);


//coronaBorealis constellation
const coronaBorealisPoints = [];
//coronaBorealisPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const coronaBorealisGeometry = new THREE.BufferGeometry().setFromPoints(coronaBorealisPoints);
const coronaBorealis = new THREE.Line(coronaBorealisGeometry, material);
scene.add(coronaBorealis);


//corvus constellation
const corvusPoints = [];
//corvusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const corvusGeometry = new THREE.BufferGeometry().setFromPoints(corvusPoints);
const corvus = new THREE.Line(corvusGeometry, material);
scene.add(corvus);


//crater constellation
const craterPoints = [];
//craterPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const craterGeometry = new THREE.BufferGeometry().setFromPoints(craterPoints);
const crater = new THREE.Line(craterGeometry, material);
scene.add(crater);


//crux constellation
const cruxPoints1 = [];
cruxPoints1.push(new THREE.Vector3(-44.363755,	-5.171957,	-88.034513) );
cruxPoints1.push(new THREE.Vector3(-14.606901,	-1.998688,	-22.800748) );
const cruxGeometry1 = new THREE.BufferGeometry().setFromPoints(cruxPoints1);
const crux1 = new THREE.Line(cruxGeometry1, material);
scene.add(crux1);

const cruxPoints2 = [];
cruxPoints2.push(new THREE.Vector3(-42.168771,	-8.909619,	-73.723149) );
cruxPoints2.push(new THREE.Vector3(-54.778605,	-3.62525,	-90.466) );
const cruxGeometry2 = new THREE.BufferGeometry().setFromPoints(cruxPoints2);
const crux2 = new THREE.Line(cruxGeometry2, material);
scene.add(crux2);





//cygnus constellation
const cygnusPoints = [];
//cygnusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const cygnusGeometry = new THREE.BufferGeometry().setFromPoints(cygnusPoints);
const cygnus = new THREE.Line(cygnusGeometry, material);
scene.add(cygnus);


//delphinus constellation
const delphinusPoints = [];
//delphinusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const delphinusGeometry = new THREE.BufferGeometry().setFromPoints(delphinusPoints);
const delphinus = new THREE.Line(delphinusGeometry, material);
scene.add(delphinus);


//dorado constellation
const doradoPoints = [];
//doradoPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const doradoGeometry = new THREE.BufferGeometry().setFromPoints(doradoPoints);
const dorado = new THREE.Line(doradoGeometry, material);
scene.add(dorado);


//draco constellation
const dracoPoints = [];
dracoPoints.push(new THREE.Vector3(-0.532395,	-18.850278,	28.897629));  //HIP 87585
dracoPoints.push(new THREE.Vector3(-0.436154,	-29.451035,	37.014357
)); //HIP 87833
dracoPoints.push(new THREE.Vector3(-9.169333,	-70.678899,	92.218765
)); //HIP 85670
dracoPoints.push(new THREE.Vector3(-2.091471,	-17.142584,	24.833263
)); //HIP 85819
dracoPoints.push(new THREE.Vector3(-0.532395,	-18.850278,	28.897629
)); //HIP 87585
dracoPoints.push(new THREE.Vector3(3.534238,	-10.788301,	27.627312
)); //HIP 94376
dracoPoints.push(new THREE.Vector3(6.964788,	-13.643765,	42.707954
)); //HIP 97433
dracoPoints.push(new THREE.Vector3(0.219434,	-2.381656,	7.694536
)); //HIP 89937
dracoPoints.push(new THREE.Vector3(-9.178442,	-40.388128,	91.793254)); //HIP 83895
dracoPoints.push(new THREE.Vector3(-5.477258,	-12.300885,	24.814526
)); //HIP 80331
dracoPoints.push(new THREE.Vector3(-5.406623,	-9.545392,	17.947647
)); //HIP 78527
dracoPoints.push(new THREE.Vector3(-10.015969,	-12.471787,	26.585776
)); //HIP 75458
dracoPoints.push(new THREE.Vector3(-34.416017,	-20.758849,	83.796391
)); //HIP 68756
dracoPoints.push(new THREE.Vector3(-51.400013,	-7.563147,	141.115978
)); //HIP 61281
dracoPoints.push(new THREE.Vector3(-35.773586,	4.486959,	95.570558
)); //HIP 56211	
const dracoGeometry = new THREE.BufferGeometry().setFromPoints(dracoPoints);
const draco = new THREE.Line(dracoGeometry, material);
scene.add(draco);



//equuleus constellation
const equuleusPoints = [];
//equuleusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const equuleusGeometry = new THREE.BufferGeometry().setFromPoints(equuleusPoints);
const equuleus = new THREE.Line(equuleusGeometry, material);
scene.add(equuleus);


//eridanus constellation
const eridanusPoints = [];
//eridanusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const eridanusGeometry = new THREE.BufferGeometry().setFromPoints(eridanusPoints);
const eridanus = new THREE.Line(eridanusGeometry, material);
scene.add(eridanus);


//fornax constellation
const fornaxPoints = [];
//fornaxPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const fornaxGeometry = new THREE.BufferGeometry().setFromPoints(fornaxPoints);
const fornax = new THREE.Line(fornaxGeometry, material);
scene.add(fornax);


//gemini constellation
const geminiPoints = [];
//geminiPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const geminiGeometry = new THREE.BufferGeometry().setFromPoints(geminiPoints);
const gemini = new THREE.Line(geminiGeometry, material);
scene.add(gemini);


//grus constellation
const grusPoints = [];
//grusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const grusGeometry = new THREE.BufferGeometry().setFromPoints(grusPoints);
const grus = new THREE.Line(grusGeometry, material);
scene.add(grus);


//hercules constellation
const herculesPoints = [];
//herculesPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const herculesGeometry = new THREE.BufferGeometry().setFromPoints(herculesPoints);
const hercules = new THREE.Line(herculesGeometry, material);
scene.add(hercules);


//horologium constellation
const horologiumPoints = [];
//horologiumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const horologiumGeometry = new THREE.BufferGeometry().setFromPoints(horologiumPoints);
const horologium = new THREE.Line(horologiumGeometry, material);
scene.add(horologium);


//hydra constellation
const hydraPoints = [];
//hydraPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const hydraGeometry = new THREE.BufferGeometry().setFromPoints(hydraPoints);
const hydra = new THREE.Line(hydraGeometry, material);
scene.add(hydra);


//hydrus constellation
const hydrusPoints = [];
//hydrusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const hydrusGeometry = new THREE.BufferGeometry().setFromPoints(hydrusPoints);
const hydrus = new THREE.Line(hydrusGeometry, material);
scene.add(hydrus);


//indus constellation
const indusPoints = [];
//indusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const indusGeometry = new THREE.BufferGeometry().setFromPoints(indusPoints);
const indus = new THREE.Line(indusGeometry, material);
scene.add(indus);


//lacerta constellation
const lacertaPoints = [];
//lacertaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const lacertaGeometry = new THREE.BufferGeometry().setFromPoints(lacertaPoints);
const lacerta = new THREE.Line(lacertaGeometry, material);
scene.add(lacerta);


//leo constellation
const leoPoints = [];
//leoPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const leoGeometry = new THREE.BufferGeometry().setFromPoints(leoPoints);
const leo = new THREE.Line(leoGeometry, material);
scene.add(leo);


//leoMinor constellation
const leoMinorPoints = [];
//leoMinorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const leoMinorGeometry = new THREE.BufferGeometry().setFromPoints(leoMinorPoints);
const leoMinor = new THREE.Line(leoMinorGeometry, material);
scene.add(leoMinor);


//lepus constellation
const lepusPoints = [];
//lepusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const lepusGeometry = new THREE.BufferGeometry().setFromPoints(lepusPoints);
const lepus = new THREE.Line(lepusGeometry, material);
scene.add(lepus);


//libra constellation
const libraPoints = [];
//libraPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const libraGeometry = new THREE.BufferGeometry().setFromPoints(libraPoints);
const libra = new THREE.Line(libraGeometry, material);
scene.add(libra);


//lupus constellation
const lupusPoints = [];
//lupusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const lupusGeometry = new THREE.BufferGeometry().setFromPoints(lupusPoints);
const lupus = new THREE.Line(lupusGeometry, material);
scene.add(lupus);


//lynx constellation
const lynxPoints = [];
//lynxPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const lynxGeometry = new THREE.BufferGeometry().setFromPoints(lynxPoints);
const lynx = new THREE.Line(lynxGeometry, material);
scene.add(lynx);


//lyra constellation
const lyraPoints = [];
//lyraPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const lyraGeometry = new THREE.BufferGeometry().setFromPoints(lyraPoints);
const lyra = new THREE.Line(lyraGeometry, material);
scene.add(lyra);


//mensa constellation
const mensaPoints = [];
//mensaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const mensaGeometry = new THREE.BufferGeometry().setFromPoints(mensaPoints);
const mensa = new THREE.Line(mensaGeometry, material);
scene.add(mensa);


//microscopium constellation
const microscopiumPoints = [];
//microscopiumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const microscopiumGeometry = new THREE.BufferGeometry().setFromPoints(microscopiumPoints);
const microscopium = new THREE.Line(microscopiumGeometry, material);
scene.add(microscopium);


//monoceros constellation
const monocerosPoints = [];
//monocerosPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const monocerosGeometry = new THREE.BufferGeometry().setFromPoints(monocerosPoints);
const monoceros = new THREE.Line(monocerosGeometry, material);
scene.add(monoceros);


//musca constellation
const muscaPoints = [];
//muscaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const muscaGeometry = new THREE.BufferGeometry().setFromPoints(muscaPoints);
const musca = new THREE.Line(muscaGeometry, material);
scene.add(musca);


//norma constellation
const normaPoints = [];
//normaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const normaGeometry = new THREE.BufferGeometry().setFromPoints(normaPoints);
const norma = new THREE.Line(normaGeometry, material);
scene.add(norma);


//octans constellation
const octansPoints = [];
//octansPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const octansGeometry = new THREE.BufferGeometry().setFromPoints(octansPoints);
const octans = new THREE.Line(octansGeometry, material);
scene.add(octans);


//ophiuchus constellation
const ophiuchusPoints = [];
//ophiuchusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const ophiuchusGeometry = new THREE.BufferGeometry().setFromPoints(ophiuchusPoints);
const ophiuchus = new THREE.Line(ophiuchusGeometry, material);
scene.add(ophiuchus);


//orion constellation
const orionPoints = [];
//orionPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const orionGeometry = new THREE.BufferGeometry().setFromPoints(orionPoints);
const orion = new THREE.Line(orionGeometry, material);
scene.add(orion);


//pavo constellation
const pavoPoints = [];
//pavoPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const pavoGeometry = new THREE.BufferGeometry().setFromPoints(pavoPoints);
const pavo = new THREE.Line(pavoGeometry, material);
scene.add(pavo);


//pegasus constellation
const pegasusPoints = [];
//pegasusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const pegasusGeometry = new THREE.BufferGeometry().setFromPoints(pegasusPoints);
const pegasus = new THREE.Line(pegasusGeometry, material);
scene.add(pegasus);


//perseus constellation
const perseusPoints = [];
//perseusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const perseusGeometry = new THREE.BufferGeometry().setFromPoints(perseusPoints);
const perseus = new THREE.Line(perseusGeometry, material);
scene.add(perseus);


//phoenix constellation
const phoenixPoints = [];
//phoenixPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const phoenixGeometry = new THREE.BufferGeometry().setFromPoints(phoenixPoints);
const phoenix = new THREE.Line(phoenixGeometry, material);
scene.add(phoenix);


//pictor constellation
const pictorPoints = [];
//pictorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const pictorGeometry = new THREE.BufferGeometry().setFromPoints(pictorPoints);
const pictor = new THREE.Line(pictorGeometry, material);
scene.add(pictor);


//pisces constellation
const piscesPoints = [];
//piscesPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const piscesGeometry = new THREE.BufferGeometry().setFromPoints(piscesPoints);
const pisces = new THREE.Line(piscesGeometry, material);
scene.add(pisces);


//piscisAustrinus constellation
const piscisAustrinusPoints = [];
//piscisAustrinusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const piscisAustrinusGeometry = new THREE.BufferGeometry().setFromPoints(piscisAustrinusPoints);
const piscisAustrinus = new THREE.Line(piscisAustrinusGeometry, material);
scene.add(piscisAustrinus);


//puppis constellation
const puppisPoints = [];
//puppisPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const puppisGeometry = new THREE.BufferGeometry().setFromPoints(puppisPoints);
const puppis = new THREE.Line(puppisGeometry, material);
scene.add(puppis);


//pyxis constellation
const pyxisPoints = [];
//pyxisPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const pyxisGeometry = new THREE.BufferGeometry().setFromPoints(pyxisPoints);
const pyxis = new THREE.Line(pyxisGeometry, material);
scene.add(pyxis);


//reticulum constellation
const reticulumPoints = [];
//reticulumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const reticulumGeometry = new THREE.BufferGeometry().setFromPoints(reticulumPoints);
const reticulum = new THREE.Line(reticulumGeometry, material);
scene.add(reticulum);


//sagitta constellation
const sagittaPoints = [];
//sagittaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const sagittaGeometry = new THREE.BufferGeometry().setFromPoints(sagittaPoints);
const sagitta = new THREE.Line(sagittaGeometry, material);
scene.add(sagitta);


//sagittarus constellation
const sagittarusPoints = [];
//sagittarusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const sagittarusGeometry = new THREE.BufferGeometry().setFromPoints(sagittarusPoints);
const sagittarus = new THREE.Line(sagittarusGeometry, material);
scene.add(sagittarus);


//scorpius constellation
const scorpiusPoints = [];
//scorpiusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const scorpiusGeometry = new THREE.BufferGeometry().setFromPoints(scorpiusPoints);
const scorpius = new THREE.Line(scorpiusGeometry, material);
scene.add(scorpius);


//sculptor constellation
const sculptorPoints = [];
//sculptorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const sculptorGeometry = new THREE.BufferGeometry().setFromPoints(sculptorPoints);
const sculptor = new THREE.Line(sculptorGeometry, material);
scene.add(sculptor);


//scutum constellation
const scutumPoints = [];
//scutumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const scutumGeometry = new THREE.BufferGeometry().setFromPoints(scutumPoints);
const scutum = new THREE.Line(scutumGeometry, material);
scene.add(scutum);


//serpens constellation
const serpensPoints = [];
//serpensPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const serpensGeometry = new THREE.BufferGeometry().setFromPoints(serpensPoints);
const serpens = new THREE.Line(serpensGeometry, material);
scene.add(serpens);


//sextans constellation
const sextansPoints = [];
//sextansPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const sextansGeometry = new THREE.BufferGeometry().setFromPoints(sextansPoints);
const sextans = new THREE.Line(sextansGeometry, material);
scene.add(sextans);


//taurus constellation
const taurusPoints = [];
//taurusPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const taurusGeometry = new THREE.BufferGeometry().setFromPoints(taurusPoints);
const taurus = new THREE.Line(taurusGeometry, material);
scene.add(taurus);


//telescopium constellation
const telescopiumPoints = [];
//telescopiumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const telescopiumGeometry = new THREE.BufferGeometry().setFromPoints(telescopiumPoints);
const telescopium = new THREE.Line(telescopiumGeometry, material);
scene.add(telescopium);


//triangulum constellation
const triangulumPoints = [];
//triangulumPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const triangulumGeometry = new THREE.BufferGeometry().setFromPoints(triangulumPoints);
const triangulum = new THREE.Line(triangulumGeometry, material);
scene.add(triangulum);


//triangulumAustrale constellation
const triangulumAustralePoints = [];
//triangulumAustralePoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const triangulumAustraleGeometry = new THREE.BufferGeometry().setFromPoints(triangulumAustralePoints);
const triangulumAustrale = new THREE.Line(triangulumAustraleGeometry, material);
scene.add(triangulumAustrale);


//tucana constellation
const tucanaPoints = [];
//tucanaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const tucanaGeometry = new THREE.BufferGeometry().setFromPoints(tucanaPoints);
const tucana = new THREE.Line(tucanaGeometry, material);
scene.add(tucana);


//ursaMajor constellation
const ursaMajorPoints = [];
//ursaMajorPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const ursaMajorGeometry = new THREE.BufferGeometry().setFromPoints(ursaMajorPoints);
const ursaMajor = new THREE.Line(ursaMajorGeometry, material);
scene.add(ursaMajor);


//ursaMinor constellation
const ursaMinorPoints = [];
ursaMinorPoints.push(new THREE.Vector3(1.3431,	1.047629,	132.614909
) );//11767
ursaMinorPoints.push(new THREE.Vector3(-0.379972,	-3.119005,	52.676703
) );//85822
ursaMinorPoints.push(new THREE.Vector3(-4.098102,	-12.242736,	92.297935
) );//82080
ursaMinorPoints.push(new THREE.Vector3(-13.368655,	-19.830791,	110.565025
) );//77055
ursaMinorPoints.push(new THREE.Vector3(-8.058164,	-7.429707,	38.619407
) );//72607
ursaMinorPoints.push(new THREE.Vector3(-29.797327,	-35.741213,	141.814461
) );//75097
ursaMinorPoints.push(new THREE.Vector3(-3.16421,	-6.597182,	28.821068
) );//79822
ursaMinorPoints.push(new THREE.Vector3(-13.368655,	-19.830791,	110.565025) );//77055
const ursaMinorGeometry = new THREE.BufferGeometry().setFromPoints(ursaMinorPoints);
const ursaMinor = new THREE.Line(ursaMinorGeometry, material);
scene.add(ursaMinor);


//vela constellation
const velaPoints = [];
//velaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const velaGeometry = new THREE.BufferGeometry().setFromPoints(velaPoints);
const vela = new THREE.Line(velaGeometry, material);
scene.add(vela);


//virgo constellation
const virgoPoints = [];
//virgoPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const virgoGeometry = new THREE.BufferGeometry().setFromPoints(virgoPoints);
const virgo = new THREE.Line(virgoGeometry, material);
scene.add(virgo);


//volans constellation
const volansPoints = [];
//volansPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const volansGeometry = new THREE.BufferGeometry().setFromPoints(volansPoints);
const volans = new THREE.Line(volansGeometry, material);
scene.add(volans);


//vulpecula constellation
const vulpeculaPoints = [];
//vulpeculaPoints.push(new THREE.Vector3(76.368059,	45.840864, 81.131974/constantZ) );
const vulpeculaGeometry = new THREE.BufferGeometry().setFromPoints(vulpeculaPoints);
const vulpecula = new THREE.Line(vulpeculaGeometry, material);
scene.add(vulpecula);



function animate()
{
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // camera.rotation.x += 0.01;
  // camera.rotation.y += 0.01;
  document.onkeydown = checkKey;

  function checkKey(key) {
    key = key || window.event;
    if (key.keyCode == '38') //up-arrow
    { 
      camera.rotation.x += 0.015;    
    }
     if (key.keyCode == '40') //down-arrow
    {
      camera.rotation.x -= 0.015;
    }
     if (key.keyCode == '37') // left arrow
    {
      camera.rotation.y += 0.015;    
    }
     if (key.keyCode == '39') 
    {
      camera.rotation.y -= 0.015;    
    }

}

}

animate();
