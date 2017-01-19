//
// Copyright (c) 2016-2017 DrSmugleaf
//

"use strict"
const stripIndents = require("common-tags").stripIndents

exports.defaultoptions = {
  name: "Banter Bot"
}

exports.colors = {
  airforceblue: "#5D8AA8",
  aliceblue: "#F0F8FF",
  alizarincrimson: "#E32636",
  almond: "#EFDECD",
  amaranth: "#E52B50",
  amber: "#FFBF00",
  americanrose: "#FF033E",
  amethyst: "#9966CC",
  androidgreen: "#A4C639",
  antiflashwhite: "#F2F3F4",
  antiquebrass: "#CD9575",
  antiquefuchsia: "#915C83",
  antiquewhite: "#FAEBD7",
  ao: "#008000",
  applegreen: "#8DB600",
  apricot: "#FBCEB1",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  armygreen: "#4B5320",
  arylideyellow: "#E9D66B",
  ashgrey: "#B2BEB5",
  asparagus: "#87A96B",
  atomictangerine: "#FF9966",
  auburn: "#A52A2A",
  aureolin: "#FDEE00",
  aurometalsaurus: "#6E7F80",
  awesome: "#FF2052",
  azure: "#007FFF",
  azuremistweb: "#F0FFFF",
  babyblue: "#89CFF0",
  babyblueeyes: "#A1CAF1",
  babypink: "#F4C2C2",
  ballblue: "#21ABCD",
  bananamania: "#FAE7B5",
  bananayellow: "#FFE135",
  battleshipgrey: "#848482",
  bazaar: "#98777B",
  beaublue: "#BCD4E6",
  beaver: "#9F8170",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  bistre: "#3D2B1F",
  bittersweet: "#FE6F5E",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  bleudefrance: "#318CE7",
  blizzardblue: "#ACE5EE",
  blond: "#FAF0BE",
  blue: "#0000FF",
  bluebell: "#A2A2D0",
  bluegray: "#6699CC",
  bluegreen: "#0D98BA",
  bluepurple: "#8A2BE2",
  blueviolet: "#8A2BE2",
  blush: "#DE5D83",
  bole: "#79443B",
  bondiblue: "#0095B6",
  bone: "#E3DAC9",
  bostonuniversityred: "#CC0000",
  bottlegreen: "#006A4E",
  boysenberry: "#873260",
  brandeisblue: "#0070FF",
  brass: "#B5A642",
  brickred: "#CB4154",
  brightcerulean: "#1DACD6",
  brightgreen: "#66FF00",
  brightlavender: "#BF94E4",
  brightmaroon: "#C32148",
  brightpink: "#FF007F",
  brightturquoise: "#08E8DE",
  brightube: "#D19FE8",
  brilliantlavender: "#F4BBFF",
  brilliantrose: "#FF55A3",
  brinkpink: "#FB607F",
  britishracinggreen: "#004225",
  bronze: "#CD7F32",
  brown: "#A52A2A",
  bubblegum: "#FFC1CC",
  bubbles: "#E7FEFF",
  buff: "#F0DC82",
  bulgarianrose: "#480607",
  burgundy: "#800020",
  burlywood: "#DEB887",
  burntorange: "#CC5500",
  burntsienna: "#E97451",
  burntumber: "#8A3324",
  byzantine: "#BD33A4",
  byzantium: "#702963",
  cgblue: "#007AA5",
  cgred: "#E03C31",
  cadet: "#536872",
  cadetblue: "#5F9EA0",
  cadetgrey: "#91A3B0",
  cadmiumgreen: "#006B3C",
  cadmiumorange: "#ED872D",
  cadmiumred: "#E30022",
  cadmiumyellow: "#FFF600",
  caféaulait: "#A67B5B",
  cafénoir: "#4B3621",
  calpolypomonagreen: "#1E4D2B",
  cambridgeblue: "#A3C1AD",
  camel: "#C19A6B",
  camouflagegreen: "#78866B",
  canary: "#FFFF99",
  canaryyellow: "#FFEF00",
  candyapplered: "#FF0800",
  candypink: "#E4717A",
  capri: "#00BFFF",
  caputmortuum: "#592720",
  cardinal: "#C41E3A",
  caribbeangreen: "#00CC99",
  carmine: "#FF0040",
  carminepink: "#EB4C42",
  carminered: "#FF0038",
  carnationpink: "#FFA6C9",
  carnelian: "#B31B1B",
  carolinablue: "#99BADD",
  carrotorange: "#ED9121",
  celadon: "#ACE1AF",
  celeste: "#B2FFFF",
  celestialblue: "#4997D0",
  cerise: "#DE3163",
  cerisepink: "#EC3B83",
  cerulean: "#007BA7",
  ceruleanblue: "#2A52BE",
  chamoisee: "#A0785A",
  champagne: "#FAD6A5",
  charcoal: "#36454F",
  chartreuse: "#7FFF00",
  cherry: "#DE3163",
  cherryblossompink: "#FFB7C5",
  chestnut: "#CD5C5C",
  chocolate: "#D2691E",
  chromeyellow: "#FFA700",
  cinereous: "#98817B",
  cinnabar: "#E34234",
  cinnamon: "#D2691E",
  citrine: "#E4D00A",
  classicrose: "#FBCCE7",
  cobalt: "#0047AB",
  cocoabrown: "#D2691E",
  coffee: "#6F4E37",
  columbiablue: "#9BDDFF",
  coolblack: "#002E63",
  coolgrey: "#8C92AC",
  copper: "#B87333",
  copperrose: "#996666",
  coquelicot: "#FF3800",
  coral: "#FF7F50",
  coralpink: "#F88379",
  coralred: "#FF4040",
  cordovan: "#893F45",
  corn: "#FBEC5D",
  cornellred: "#B31B1B",
  cornflower: "#9ACEEB",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  cosmiclatte: "#FFF8E7",
  cottoncandy: "#FFBCD9",
  cream: "#FFFDD0",
  crimson: "#DC143C",
  crimsonred: "#990000",
  crimsonglory: "#BE0032",
  cyan: "#00FFFF",
  daffodil: "#FFFF31",
  dandelion: "#F0E130",
  darkblue: "#00008B",
  darkbrown: "#654321",
  darkbyzantium: "#5D3954",
  darkcandyapplered: "#A40000",
  darkcerulean: "#08457E",
  darkchestnut: "#986960",
  darkcoral: "#CD5B45",
  darkcyan: "#008B8B",
  darkelectricblue: "#536878",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgreen: "#013220",
  darkjunglegreen: "#1A2421",
  darkkhaki: "#BDB76B",
  darklava: "#483C32",
  darklavender: "#734F96",
  darkmagenta: "#8B008B",
  darkmidnightblue: "#003366",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkpastelblue: "#779ECB",
  darkpastelgreen: "#03C03C",
  darkpastelpurple: "#966FD6",
  darkpastelred: "#C23B22",
  darkpink: "#E75480",
  darkpowderblue: "#003399",
  darkraspberry: "#872657",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkscarlet: "#560319",
  darkseagreen: "#8FBC8F",
  darksienna: "#3C1414",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkspringgreen: "#177245",
  darktan: "#918151",
  darktangerine: "#FFA812",
  darktaupe: "#483C32",
  darkterracotta: "#CC4E5C",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  dartmouthgreen: "#00693E",
  davygrey: "#555555",
  debianred: "#D70A53",
  deepcarmine: "#A9203E",
  deepcarminepink: "#EF3038",
  deepcarrotorange: "#E9692C",
  deepcerise: "#DA3287",
  deepchampagne: "#FAD6A5",
  deepchestnut: "#B94E48",
  deepcoffee: "#704241",
  deepfuchsia: "#C154C1",
  deepjunglegreen: "#004B49",
  deeplilac: "#9955BB",
  deepmagenta: "#CC00CC",
  deeppeach: "#FFCBA4",
  deeppink: "#FF1493",
  deepsaffron: "#FF9933",
  deepskyblue: "#00BFFF",
  denim: "#1560BD",
  desert: "#C19A6B",
  desertsand: "#EDC9AF",
  dimgray: "#696969",
  dodgerblue: "#1E90FF",
  dogwoodrose: "#D71868",
  dollarbill: "#85BB65",
  drab: "#967117",
  dukeblue: "#00009C",
  earthyellow: "#E1A95F",
  ecru: "#C2B280",
  eggplant: "#614051",
  eggshell: "#F0EAD6",
  egyptianblue: "#1034A6",
  electricblue: "#7DF9FF",
  electriccrimson: "#FF003F",
  electriccyan: "#00FFFF",
  electricgreen: "#00FF00",
  electricindigo: "#6F00FF",
  electriclavender: "#F4BBFF",
  electriclime: "#CCFF00",
  electricpurple: "#BF00FF",
  electricultramarine: "#3F00FF",
  electricviolet: "#8F00FF",
  electricyellow: "#FFFF00",
  emerald: "#50C878",
  etonblue: "#96C8A2",
  fallow: "#C19A6B",
  falured: "#801818",
  famous: "#FF00FF",
  fandango: "#B53389",
  fashionfuchsia: "#F400A1",
  fawn: "#E5AA70",
  feldgrau: "#4D5D53",
  fern: "#71BC78",
  ferngreen: "#4F7942",
  ferrarired: "#FF2800",
  fielddrab: "#6C541E",
  fireenginered: "#CE2029",
  firebrick: "#B22222",
  flame: "#E25822",
  flamingopink: "#FC8EAC",
  flavescent: "#F7E98E",
  flax: "#EEDC82",
  floralwhite: "#FFFAF0",
  fluorescentorange: "#FFBF00",
  fluorescentpink: "#FF1493",
  fluorescentyellow: "#CCFF00",
  folly: "#FF004F",
  forestgreen: "#228B22",
  frenchbeige: "#A67B5B",
  frenchblue: "#0072BB",
  frenchlilac: "#86608E",
  frenchrose: "#F64A8A",
  fuchsia: "#FF00FF",
  fuchsiapink: "#FF77FF",
  fulvous: "#E48400",
  fuzzywuzzy: "#CC6666",
  gainsboro: "#DCDCDC",
  gamboge: "#E49B0F",
  ghostwhite: "#F8F8FF",
  ginger: "#B06500",
  glaucous: "#6082B6",
  glitter: "#E6E8FA",
  gold: "#FFD700",
  goldenbrown: "#996515",
  goldenpoppy: "#FCC200",
  goldenyellow: "#FFDF00",
  goldenrod: "#DAA520",
  grannysmithapple: "#A8E4A0",
  gray: "#808080",
  grayasparagus: "#465945",
  green: "#00FF00",
  greenblue: "#1164B4",
  greenyellow: "#ADFF2F",
  grullo: "#A99A86",
  guppiegreen: "#00FF7F",
  halayàúbe: "#663854",
  hanblue: "#446CCF",
  hanpurple: "#5218FA",
  hansayellow: "#E9D66B",
  harlequin: "#3FFF00",
  harvardcrimson: "#C90016",
  harvestgold: "#DA9100",
  heartgold: "#808000",
  heliotrope: "#DF73FF",
  hollywoodcerise: "#F400A1",
  honeydew: "#F0FFF0",
  hookergreen: "#49796B",
  hotmagenta: "#FF1DCE",
  hotpink: "#FF69B4",
  huntergreen: "#355E3B",
  icterine: "#FCF75E",
  inchworm: "#B2EC5D",
  indiagreen: "#138808",
  indianred: "#CD5C5C",
  indianyellow: "#E3A857",
  indigo: "#4B0082",
  internationalkleinblue: "#002FA7",
  internationalorange: "#FF4F00",
  iris: "#5A4FCF",
  isabelline: "#F4F0EC",
  islamicgreen: "#009000",
  ivory: "#FFFFF0",
  jade: "#00A86B",
  jasmine: "#F8DE7E",
  jasper: "#D73B3E",
  jazzberryjam: "#A50B5E",
  jonquil: "#FADA5E",
  junebud: "#BDDA57",
  junglegreen: "#29AB87",
  kucrimson: "#E8000D",
  kellygreen: "#4CBB17",
  khaki: "#C3B091",
  lasallegreen: "#087830",
  languidlavender: "#D6CADD",
  lapislazuli: "#26619C",
  laserlemon: "#FEFE22",
  laurelgreen: "#A9BA9D",
  lava: "#CF1020",
  lavender: "#E6E6FA",
  lavenderblue: "#CCCCFF",
  lavenderblush: "#FFF0F5",
  lavendergray: "#C4C3D0",
  lavenderindigo: "#9457EB",
  lavendermagenta: "#EE82EE",
  lavendermist: "#E6E6FA",
  lavenderpink: "#FBAED2",
  lavenderpurple: "#967BB6",
  lavenderrose: "#FBA0E3",
  lawngreen: "#7CFC00",
  lemon: "#FFF700",
  lemonyellow: "#FFF44F",
  lemonchiffon: "#FFFACD",
  lemonlime: "#BFFF00",
  lightcrimson: "#F56991",
  lightthulianpink: "#E68FAC",
  lightapricot: "#FDD5B1",
  lightblue: "#ADD8E6",
  lightbrown: "#B5651D",
  lightcarminepink: "#E66771",
  lightcoral: "#F08080",
  lightcornflowerblue: "#93CCEA",
  lightcyan: "#E0FFFF",
  lightfuchsiapink: "#F984EF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgreen: "#90EE90",
  lightkhaki: "#F0E68C",
  lightpastelpurple: "#B19CD9",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightsalmonpink: "#FF9999",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lighttaupe: "#B38B6D",
  lightyellow: "#FFFFED",
  lilac: "#C8A2C8",
  lime: "#BFFF00",
  limegreen: "#32CD32",
  lincolngreen: "#195905",
  linen: "#FAF0E6",
  lion: "#C19A6B",
  liver: "#534B4F",
  lust: "#E62020",
  msugreen: "#18453B",
  macaroniandcheese: "#FFBD88",
  magenta: "#FF00FF",
  magicmint: "#AAF0D1",
  magnolia: "#F8F4FF",
  mahogany: "#C04000",
  maize: "#FBEC5D",
  majorelleblue: "#6050DC",
  malachite: "#0BDA51",
  manatee: "#979AAA",
  mangotango: "#FF8243",
  mantis: "#74C365",
  maroon: "#800000",
  mauve: "#E0B0FF",
  mauvetaupe: "#915F6D",
  mauvelous: "#EF98AA",
  mayablue: "#73C2FB",
  meatbrown: "#E5B73B",
  mediumpersianblue: "#0067A5",
  mediumaquamarine: "#66DDAA",
  mediumblue: "#0000CD",
  mediumcandyapplered: "#E2062C",
  mediumcarmine: "#AF4035",
  mediumchampagne: "#F3E5AB",
  mediumelectricblue: "#035096",
  mediumjunglegreen: "#1C352D",
  mediumlavendermagenta: "#DDA0DD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumredviolet: "#BB3385",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringbud: "#C9DC87",
  mediumspringgreen: "#00FA9A",
  mediumtaupe: "#674C47",
  mediumtealblue: "#0054B4",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  melon: "#FDBCB4",
  midnightblue: "#191970",
  midnightgreen: "#004953",
  mikadoyellow: "#FFC40C",
  mint: "#3EB489",
  mintcream: "#F5FFFA",
  mintgreen: "#98FF98",
  mistyrose: "#FFE4E1",
  moccasin: "#FAEBD7",
  modebeige: "#967117",
  moonstoneblue: "#73A9C2",
  mordantred19: "#AE0C00",
  mossgreen: "#ADDFAD",
  mountainmeadow: "#30BA8F",
  mountbattenpink: "#997A8D",
  mulberry: "#C54B8C",
  munsell: "#F2F3F4",
  mustard: "#FFDB58",
  myrtle: "#21421E",
  nadeshikopink: "#F6ADC6",
  napiergreen: "#2A8000",
  naplesyellow: "#FADA5E",
  navajowhite: "#FFDEAD",
  navyblue: "#000080",
  neoncarrot: "#FFA343",
  neonfuchsia: "#FE59C2",
  neongreen: "#39FF14",
  nonphotoblue: "#A4DDED",
  northtexasgreen: "#059033",
  oceanboatblue: "#0077BE",
  ochre: "#CC7722",
  officegreen: "#008000",
  oldgold: "#CFB53B",
  oldlace: "#FDF5E6",
  oldlavender: "#796878",
  oldmauve: "#673147",
  oldrose: "#C08081",
  olive: "#808000",
  olivedrab: "#6B8E23",
  olivegreen: "#BAB86C",
  olivine: "#9AB973",
  onyx: "#0F0F0F",
  operamauve: "#B784A7",
  orange: "#FFA500",
  orangeyellow: "#F8D568",
  orangepeel: "#FF9F00",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  otterbrown: "#654321",
  outerspace: "#414A4C",
  outrageousorange: "#FF6E4A",
  oxfordblue: "#002147",
  pacificblue: "#1CA9C9",
  pakistangreen: "#006600",
  palatinateblue: "#273BE2",
  palatinatepurple: "#682860",
  paleaqua: "#BCD4E6",
  paleblue: "#AFEEEE",
  palebrown: "#987654",
  palecarmine: "#AF4035",
  palecerulean: "#9BC4E2",
  palechestnut: "#DDADAF",
  palecopper: "#DA8A67",
  palecornflowerblue: "#ABCDEF",
  palegold: "#E6BE8A",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  palelavender: "#DCD0FF",
  palemagenta: "#F984E5",
  palepink: "#FADADD",
  paleplum: "#DDA0DD",
  paleredviolet: "#DB7093",
  palerobineggblue: "#96DED1",
  palesilver: "#C9C0BB",
  palespringbud: "#ECEBBD",
  paletaupe: "#BC987E",
  palevioletred: "#DB7093",
  pansypurple: "#78184A",
  papayawhip: "#FFEFD5",
  parisgreen: "#50C878",
  pastelblue: "#AEC6CF",
  pastelbrown: "#836953",
  pastelgray: "#CFCFC4",
  pastelgreen: "#77DD77",
  pastelmagenta: "#F49AC2",
  pastelorange: "#FFB347",
  pastelpink: "#FFD1DC",
  pastelpurple: "#B39EB5",
  pastelred: "#FF6961",
  pastelviolet: "#CB99C9",
  pastelyellow: "#FDFD96",
  patriarch: "#800080",
  paynegrey: "#536878",
  peach: "#FFE5B4",
  peachpuff: "#FFDAB9",
  peachyellow: "#FADFAD",
  pear: "#D1E231",
  pearl: "#EAE0C8",
  pearlaqua: "#88D8C0",
  peridot: "#E6E200",
  periwinkle: "#CCCCFF",
  persianblue: "#1C39BB",
  persianindigo: "#32127A",
  persianorange: "#D99058",
  persianpink: "#F77FBE",
  persianplum: "#701C1C",
  persianred: "#CC3333",
  persianrose: "#FE28A2",
  phlox: "#DF00FF",
  phthaloblue: "#000F89",
  phthalogreen: "#123524",
  piggypink: "#FDDDE6",
  pinegreen: "#01796F",
  pink: "#FFC0CB",
  pinkflamingo: "#FC74FD",
  pinksherbet: "#F78FA7",
  pinkpearl: "#E7ACCF",
  pistachio: "#93C572",
  platinum: "#E5E4E2",
  plum: "#DDA0DD",
  portlandorange: "#FF5A36",
  powderblue: "#B0E0E6",
  princetonorange: "#FF8F00",
  prussianblue: "#003153",
  psychedelicpurple: "#DF00FF",
  puce: "#CC8899",
  pumpkin: "#FF7518",
  purple: "#800080",
  purpleheart: "#69359C",
  purplemountainsmajesty: "#9D81BA",
  purplemountainmajesty: "#9678B6",
  purplepizzazz: "#FE4EDA",
  purpletaupe: "#50404D",
  rackley: "#5D8AA8",
  radicalred: "#FF355E",
  raspberry: "#E30B5D",
  raspberryglace: "#915F6D",
  raspberrypink: "#E25098",
  raspberryrose: "#B3446C",
  rawsienna: "#D68A59",
  razzledazzlerose: "#FF33CC",
  razzmatazz: "#E3256B",
  red: "#FF0000",
  redorange: "#FF5349",
  redbrown: "#A52A2A",
  redviolet: "#C71585",
  richblack: "#004040",
  richcarmine: "#D70040",
  richelectricblue: "#0892D0",
  richlilac: "#B666D2",
  richmaroon: "#B03060",
  riflegreen: "#414833",
  robinseggblue: "#1FCECB",
  rose: "#FF007F",
  rosebonbon: "#F9429E",
  roseebony: "#674846",
  rosegold: "#B76E79",
  rosemadder: "#E32636",
  rosepink: "#FF66CC",
  rosequartz: "#AA98A9",
  rosetaupe: "#905D5D",
  rosevale: "#AB4E52",
  rosewood: "#65000B",
  rossocorsa: "#D40000",
  rosybrown: "#BC8F8F",
  royalazure: "#0038A8",
  royalblue: "#4169E1",
  royalfuchsia: "#CA2C92",
  royalpurple: "#7851A9",
  ruby: "#E0115F",
  ruddy: "#FF0028",
  ruddybrown: "#BB6528",
  ruddypink: "#E18E96",
  rufous: "#A81C07",
  russet: "#80461B",
  rust: "#B7410E",
  sacramentostategreen: "#00563F",
  saddlebrown: "#8B4513",
  safetyorange: "#FF6700",
  saffron: "#F4C430",
  saintpatrickblue: "#23297A",
  salmon: "#FF8C69",
  salmonpink: "#FF91A4",
  sand: "#C2B280",
  sanddune: "#967117",
  sandstorm: "#ECD540",
  sandybrown: "#F4A460",
  sandytaupe: "#967117",
  sapgreen: "#507D2A",
  sapphire: "#0F52BA",
  satinsheengold: "#CBA135",
  scarlet: "#FF2400",
  schoolbusyellow: "#FFD800",
  screamingreen: "#76FF7A",
  seablue: "#006994",
  seagreen: "#2E8B57",
  sealbrown: "#321414",
  seashell: "#FFF5EE",
  selectiveyellow: "#FFBA00",
  sepia: "#704214",
  shadow: "#8A795D",
  shamrock: "#45CEA2",
  shamrockgreen: "#009E60",
  shockingpink: "#FC0FC0",
  sienna: "#882D17",
  silver: "#C0C0C0",
  sinopia: "#CB410B",
  skobeloff: "#007474",
  skyblue: "#87CEEB",
  skymagenta: "#CF71AF",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  smalt: "#003399",
  smokeytopaz: "#933D41",
  smokyblack: "#100C08",
  snow: "#FFFAFA",
  spirodiscoball: "#0FC0FC",
  springbud: "#A7FC00",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  stildegrainyellow: "#FADA5E",
  stizza: "#990000",
  stormcloud: "#008080",
  straw: "#E4D96F",
  sunglow: "#FFCC33",
  sunset: "#FAD6A5",
  sunsetorange: "#FD5E53",
  tan: "#D2B48C",
  tangelo: "#F94D00",
  tangerine: "#F28500",
  tangerineyellow: "#FFCC00",
  taupe: "#483C32",
  taupegray: "#8B8589",
  tawny: "#CD5700",
  teagreen: "#D0F0C0",
  tearose: "#F4C2C2",
  teal: "#008080",
  tealblue: "#367588",
  tealgreen: "#006D5B",
  terracotta: "#E2725B",
  thistle: "#D8BFD8",
  thulianpink: "#DE6FA1",
  ticklemepink: "#FC89AC",
  tiffanyblue: "#0ABAB5",
  tigereye: "#E08D3C",
  timberwolf: "#DBD7D2",
  titaniumyellow: "#EEE600",
  tomato: "#FF6347",
  toolbox: "#746CC0",
  topaz: "#FFC87C",
  tractorred: "#FD0E35",
  trolleygrey: "#808080",
  tropicalrainforest: "#00755E",
  trueblue: "#0073CF",
  tuftsblue: "#417DC1",
  tumbleweed: "#DEAA88",
  turkishrose: "#B57281",
  turquoise: "#30D5C8",
  turquoiseblue: "#00FFEF",
  turquoisegreen: "#A0D6B4",
  tuscanred: "#66424D",
  twilightlavender: "#8A496B",
  tyrianpurple: "#66023C",
  uablue: "#0033AA",
  uared: "#D9004C",
  uclablue: "#536895",
  uclagold: "#FFB300",
  ufogreen: "#3CD070",
  upforestgreen: "#014421",
  upmaroon: "#7B1113",
  usccardinal: "#990000",
  uscgold: "#FFCC00",
  ube: "#8878C3",
  ultrapink: "#FF6FFF",
  ultramarine: "#120A8F",
  ultramarineblue: "#4166F5",
  umber: "#635147",
  unitednationsblue: "#5B92E5",
  universityofcaliforniagold: "#B78727",
  unmellowyellow: "#FFFF66",
  upsdellred: "#AE2029",
  urobilin: "#E1AD21",
  utahcrimson: "#D3003F",
  vanilla: "#F3E5AB",
  vegasgold: "#C5B358",
  venetianred: "#C80815",
  verdigris: "#43B3AE",
  vermilion: "#E34234",
  veronica: "#A020F0",
  violet: "#EE82EE",
  violetblue: "#324AB2",
  violetred: "#F75394",
  viridian: "#40826D",
  vividauburn: "#922724",
  vividburgundy: "#9F1D35",
  vividcerise: "#DA1D81",
  vividtangerine: "#FFA089",
  vividviolet: "#9F00FF",
  warmblack: "#004242",
  waterspout: "#00FFFF",
  wenge: "#645452",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  wildstrawberry: "#FF43A4",
  wildwatermelon: "#FC6C85",
  wildblueyonder: "#A2ADD0",
  wine: "#722F37",
  wisteria: "#C9A0DC",
  xanadu: "#738678",
  yaleblue: "#0F4D92",
  yellow: "#FFFF00",
  yelloworange: "#FFAE42",
  yellowgreen: "#9ACD32",
  zaffre: "#0014A8",
  zinnwalditebrown: "#2C1608"
}

exports.mslanguages = {
  af: "afrikaans",
  ar: "arabic",
  bslatn: "bosnian (latin)",
  bg: "bulgarian",
  ca: "catalan",
  zhchs: "chinese simplified",
  zhcht: "chinese traditional",
  hr: "croatian",
  cs: "czech",
  da: "danish",
  nl: "dutch",
  en: "english",
  et: "estonian",
  fi: "finnish",
  fr: "french",
  de: "german",
  el: "greek",
  ht: "haitian creole",
  he: "hebrew",
  hi: "hindi",
  mww: "hmong daw",
  hu: "hungarian",
  id: "indonesian",
  it: "italian",
  ja: "japanese",
  sw: "kiswahili",
  tlh: "klingon",
  tlhqaak: "klingon (piqad)",
  ko: "korean",
  lv: "latvian",
  lt: "lithuanian",
  ms: "malay",
  mt: "maltese",
  no: "norwegian",
  fa: "persian",
  pl: "polish",
  pt: "portuguese",
  otq: "querétaro otomi",
  ro: "romanian",
  ru: "russian",
  srcyrl: "serbian (cyrillic)",
  srlatn: "serbian (latin)",
  sk: "slovak",
  sl: "slovenian",
  es: "spanish",
  sv: "swedish",
  th: "thai",
  tr: "turkish",
  uk: "ukrainian",
  ur: "urdu",
  vi: "vietnamese",
  cy: "welsh",
  yua: "yucatec maya"
}

exports.responses = {
  AVATAR: {
    SET: {
      english: (url) => `Changed the bot's image to ${url}`,
      spanish: (url) => `Cambiado la imagen del bot a ${url}`
    }
  },

  COLOR: {
    ADDED: {
      english: (hex) => `Added name color\`${hex}\`.`,
      spanish: (hex) => `Añadido color de nombre\`${hex}\`.`
    },
    INVALID: {
      english: "Color doesn't exist or invalid code. Format: !color Name(English) / #RRGGBB / (R,G,B).",
      spanish: "Color no existe o código inválido. Formato: !color Nombre(Inglés) / #RRGGBB / (R,G,B)."
    },
    MISSING: {
      english: "You don't have a name color.",
      spanish: "No tienes un color de nombre."
    },
    REMOVED: {
      english: "Removed name color.",
      spanish: "Quitado color de nombre."
    }
  },

  INFO: {
    english: stripIndents`
      GitHub page: https://github.com/DrSmugleaf/Banter-Bot
      Support server: https://discord.gg/yyDWNBr
    `,
    spanish: stripIndents`
      Página de GitHub: https://github.com/DrSmugleaf/Banter-Bot
      Servidor de soporte: https://discord.gg/yyDWNBr
    `
  },

  LANGUAGE: {
    SET: {
      english: (language) => `Set your language to ${language}.`,
      spanish: (language) => `Asignado tu lenguaje a ${language}.`
    }
  },

  MAGIC8BALL: {
    english: ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"],
    spanish: ["En mi opinión, sí", "Es cierto", "Es decididamente así", "Probablemente", "Buen pronóstico", "Todo apunta a que sí", "Sin duda", "Sí", "Sí - definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento", "Será mejor que no te lo diga ahora", "No puedo predecirlo ahora", "Concéntrate y vuelve a preguntar", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso"]
  },

  MARKOV: {
    ANSWER: {
      english: (subject, answer) => `**${subject} (Markov):** ${answer}`,
      spanish: (subject, answer) => `**${subject} (Markov):** ${answer}`
    },
    MISSING: {
      english: (user) => `There are no messages in this channel from ${user}`,
      spanish: (user) => `No hay mensajes en este canal de ${user}`
    }
  },

  NAME: {
    SET: {
      english: (name) => `Changed the bot's username to ${name}`,
      spanish: (name) => `Cambiado el nombre del bot a ${name}`
    }
  },

  MISSING_COMMAND: {
    english: (command) => `the command ${command} doesn't exist.`,
    spanish: (command) => `el comando ${command} no existe.`
  },

  NOT_A_SERVER: {
    english: "Use the command in a server chat.",
    spanish: "Usa el comando en el chat de un servidor."
  },

  NOT_A_VOICE_CHANNEL: {
    english: "You arent in a voice channel.",
    spanish: "No estás en un canal de voz."
  },

  PLAYING: {
    SET: {
      english: (name) => `Changed the bot's game to ${name}`,
      spanish: (name) => `Cambiado el nombre del bot a ${name}`
    }
  },

  QUOTE: {
    ADDED: {
      english: (number) => `Quote #${number} added.`,
      spanish: (number) => `Quote #${number} añadido.`
    },
    EMPTY: {
      english: "Quote empty, add text after the command.",
      spanish: "Quote vacío, a\u00f1ade texto después del comando."
    },
    GET: {
      english: (number, text) => `Quote #${number}: ${text}.`,
      spanish: (number, text) => `Quote #${number}: ${text}.`
    },
    INVALID: {
      english: "Invalid quote number.",
      spanish: "Número de quote inválido."
    },
    MISSING: {
      english: "That quote doesn't exist.",
      spanish: "Ese quote no existe."
    },
    REMOVED: {
      english: (number) => `Quote #${number} removed.`,
      spanish: (number) => `Quote #${number} eliminado.`
    }
  },

  SERVER_LANGUAGE: {
    SET: {
      english: (language) => `Set the server language to ${language}.`,
      spanish: (language) => `Asignado el lenguaje del servidor a ${language}.`
    }
  },

  WHOIS: {
    english: (user, member, joined, created) => stripIndents`
      Info on **${user.username}#${user.discriminator}** (ID: ${user.id})
      **❯ Member Details**
      ${member.nickname !== null ? ` • Nickname: ${member.nickname}` : " • No Nickname"}
       • Roles: ${member.roles.map(roles => `\`${roles.name}\``).join(", ")}
       • Joined at: ${joined}

      **❯ User Details**
       • Created at: ${created}${user.bot ? "\n • Is a bot account" : ""}
       • Status: ${user.presence.status}
       • Game: ${user.presence.game ? user.presence.game.name : "None"}
    `,
    spanish: (user, member, joined, created) => stripIndents`
      Información sobre **${user.username}#${user.discriminator}** (ID: ${user.id})
      **❯ Detalles de Miembro**
      ${member.nickname !== null ? ` • Apodo: ${member.nickname}` : " • Ningún Apodo"}
       • Roles: ${member.roles.map(roles => `\`${roles.name}\``).join(", ")}
       • Se unió en: ${joined}

      **❯ Detalles de Usuario**
       • Se creó en: ${created}${user.bot ? "\n • Es una cuenta bot" : ""}
       • Estado: ${user.presence.status}
       • Juego: ${user.presence.game ? user.presence.game.name : "Ninguno"}
    `
  },

  YOUTUBE: {
    INVALID: {
      english: "Invalid URL. Format: !youtube play URL.",
      spanish: "URL inválido. Formato: !youtube play URL."
    },
    PAUSE: {
      english: "Paused the current video.",
      spanish: "Vídeo pausado."
    }
  }
},

exports.youtube = {
  STREAMOPTIONS: { seek: 0, volume: 0.25 }
}
