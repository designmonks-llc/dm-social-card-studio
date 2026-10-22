"use strict";
/* Layer geometry from the Figma templates, in template pixels. The image for each key
   is assets/images/<key>.webp (inlined at runtime from js/embedded-assets.js). */
const META = {
  "welcome_bleed": {"w":3072,"h":3840},
  "welcome_propR": {"x":1770.4,"y":1568.0,"w":229.6,"h":374.4},
  "welcome_propL": {"x":0.0,"y":259.2,"w":173.6,"h":367.2},
  "welcome_rings": {"x":100.8,"y":204.0,"w":1797.6,"h":1797.6},
  "welcome_person": {"x":353.0,"y":335.0,"w":1108.0,"h":1597.0},
  "welcome_shade": {"x":0.0,"y":1744.8,"w":2000.0,"h":526.4},
  "welcome_ringfront": {"x":424.0,"y":526.4,"w":1151.2,"h":1152.0},
  "welcome_glow": {"x":0.0,"y":700.0,"w":2000.0,"h":1800.0},
  "birthday_bleed": {"w":3072,"h":3840},
  "birthday_arches": {"x":220.8,"y":344.0,"w":1548.8,"h":1561.6},
  "birthday_propL": {"x":0.0,"y":1707.2,"w":208.8,"h":369.6},
  "birthday_propR": {"x":1762.4,"y":280.0,"w":237.6,"h":300.8},
  "birthday_confetti": {"x":113.6,"y":344.0,"w":1748.8,"h":1384.0},
  "birthday_person": {"x":357.0,"y":283.0,"w":1108.0,"h":1597.0},
  "birthday_glow": {"x":0.0,"y":700.0,"w":2000.0,"h":1800.0},
  "birthday_rays": {"x":84.0,"y":160.0,"w":1902.4,"h":1616.8},
  "rising_bleed": {"w":3072,"h":3840},
  "rising_propL": {"x":0.0,"y":1725.6,"w":198.4,"h":356.8},
  "rising_propR": {"x":1759.2,"y":278.4,"w":240.8,"h":383.2},
  "rising_rings": {"x":0.0,"y":0.0,"w":2000.0,"h":2095.2},
  "rising_person": {"x":399.0,"y":336.0,"w":1186.0,"h":1890.0},
  "rising_rays": {"x":8.0,"y":148.0,"w":1920.8,"h":1431.2},
  "promotion_bleed": {"w":3072,"h":3840},
  "promotion_propR": {"x":1755.2,"y":1699.2,"w":244.8,"h":345.6},
  "promotion_propL": {"x":0.0,"y":306.4,"w":205.6,"h":328.8},
  "promotion_rings": {"x":68.0,"y":112.0,"w":1862.4,"h":2036.0},
  "promotion_person": {"x":353.0,"y":341.0,"w":1108.0,"h":1597.0},
  "promotion_rays": {"x":8.0,"y":148.0,"w":1920.8,"h":1431.2},
  "hire_feed_bg": {"w":2000,"h":2500},
  "hire_story_bg": {"w":2160,"h":3840},
  "hire_wide_bg": {"w":3200,"h":800},
  "hire_short_bg": {"w":1252,"h":438},
  "rising_glow": {"x":0.0,"y":1270.4,"w":2000.0,"h":1229.6},
  "promotion_glow": {"x":0.0,"y":1140.0,"w":2000.0,"h":1360.0},
};
const LOGO = {d:"M943.613 133.335C948.512 133.335 952.375 135.129 954.79 138.372V136.164C954.79 135.019 955.714 134.094 956.859 134.094H963.345V164.456C963.345 175.565 956.376 181.5 945.683 181.5C939.964 181.5 934.9 179.802 930.498 176.448C929.595 175.765 929.436 174.468 930.119 173.564L933.816 168.665C937.611 171.494 940.785 173.081 944.924 173.081C950.443 173.081 954.031 170.321 954.031 165.008V163.145C951.548 165.836 947.96 167.216 943.613 167.216C934.162 167.216 927.263 160.247 927.263 150.241C927.263 140.236 934.3 133.335 943.613 133.335ZM866.221 133.339C875.672 133.339 882.296 140.308 882.296 149.21C882.296 150.866 882.089 152.591 881.675 154.316H857.737C858.843 158.659 862.361 161.071 867.325 161.071C870.706 161.071 873.879 159.898 876.846 157.621L879.743 162.383C880.302 163.307 880.067 164.515 879.191 165.143C875.514 167.751 871.471 169.083 867.049 169.083C856.493 169.29 848.146 161.078 848.353 151.211C848.146 141.343 856.355 133.132 866.221 133.339ZM898.088 133.335C902.42 133.335 906.008 134.577 908.892 137.02C909.754 137.751 909.879 139.048 909.161 139.925L905.684 144.176C903.407 142.037 900.855 140.933 898.026 140.933C895.75 140.933 894.369 141.761 894.369 143.348C894.369 144.659 895.267 145.28 897.957 146.384L901.269 147.764C907.892 150.455 910.858 153.146 910.858 158.184C910.858 161.565 909.616 164.255 907.063 166.188C904.58 168.12 901.406 169.086 897.543 169.086C892.279 169.086 887.753 167.174 884.628 163.903C883.89 163.137 883.828 161.944 884.511 161.123L888.092 156.803C891.056 159.903 894.296 161.42 897.674 161.42C900.157 161.42 902.02 160.454 902.021 158.591C902.021 157.142 901.055 156.589 898.502 155.485L894.846 153.967C888.568 151.414 885.532 148.585 885.532 143.548C885.532 137.131 890.637 133.335 898.088 133.335ZM842.531 116.5C843.676 116.5 844.602 117.425 844.602 118.57V168.253H838.116C836.971 168.253 836.047 167.328 836.047 166.183V164.044C833.77 167.287 829.768 169.081 825.077 169.081C815.557 169.081 808.52 161.491 808.52 151.209C808.52 140.927 815.557 133.337 825.077 133.337C829.424 133.337 832.804 134.717 835.288 137.408V116.5H842.531ZM1178.71 133.266C1183.04 133.266 1186.63 134.507 1189.51 136.95C1190.38 137.682 1190.5 138.979 1189.78 139.855L1186.31 144.106C1184.03 141.967 1181.48 140.862 1178.65 140.862C1176.37 140.862 1174.99 141.691 1174.99 143.278C1174.99 144.589 1175.89 145.211 1178.58 146.314L1181.89 147.694C1188.51 150.385 1191.48 153.076 1191.48 158.113C1191.48 161.494 1190.24 164.186 1187.69 166.118C1185.2 168.05 1182.03 169.017 1178.17 169.017C1172.9 169.017 1168.38 167.105 1165.25 163.834C1164.51 163.068 1164.45 161.875 1165.13 161.054L1168.71 156.733C1171.68 159.834 1174.92 161.35 1178.3 161.35C1180.78 161.35 1182.64 160.384 1182.64 158.521C1182.64 157.072 1181.68 156.52 1179.12 155.416L1175.47 153.897C1169.19 151.344 1166.15 148.515 1166.15 143.478C1166.15 137.06 1171.26 133.266 1178.71 133.266ZM923.732 166.19C923.732 167.336 922.808 168.261 921.663 168.261H914.419V134.704H919.696C921.152 134.704 922.518 134.387 923.732 133.814V166.19ZM985.656 133.335C993.59 133.335 998.489 138.786 998.489 147.066V168.251H991.313C990.168 168.251 989.244 167.326 989.244 166.181V148.309C989.244 144.376 986.692 141.685 982.897 141.685C979.103 141.685 976.412 144.375 976.412 148.309V168.251H969.168C968.023 168.251 967.099 167.326 967.099 166.181V134.094H973.583C974.728 134.094 975.653 135.019 975.653 136.164V137.199C978.068 134.784 981.586 133.335 985.656 133.335ZM1139.59 116.5C1140.74 116.5 1141.66 117.425 1141.66 118.57V148.587L1152.68 135.518C1153.48 134.572 1154.66 134.027 1155.9 134.027H1164.99L1152.15 149.139L1166.02 168.184H1157.5C1156.18 168.184 1154.93 167.549 1154.15 166.479L1141.66 149.276V168.184H1134.42C1133.28 168.184 1132.35 167.259 1132.35 166.113V116.5H1139.59ZM1041.95 133.255C1049.95 133.255 1054.85 138.707 1054.85 146.987V168.178H1047.61C1046.46 168.178 1045.54 167.254 1045.54 166.108V148.305C1045.54 144.234 1043.12 141.681 1039.47 141.681C1035.81 141.681 1033.19 144.303 1033.19 148.098V168.178H1025.94C1024.8 168.178 1023.87 167.254 1023.87 166.108V148.305C1023.87 144.234 1021.46 141.681 1017.8 141.681C1014.15 141.681 1011.52 144.234 1011.52 148.305V168.178H1004.28C1003.14 168.178 1002.21 167.254 1002.21 166.108V134.015H1008.7C1009.84 134.015 1010.77 134.939 1010.77 136.085V137.051C1013.04 134.636 1016.49 133.255 1020.42 133.255C1024.91 133.255 1028.29 134.911 1030.57 138.154C1033.26 135.118 1037.26 133.255 1041.95 133.255ZM1115.78 133.255C1123.71 133.255 1128.61 138.707 1128.61 146.987V168.178H1121.43C1120.29 168.178 1119.36 167.254 1119.36 166.108V148.236C1119.36 144.303 1116.81 141.611 1113.02 141.611C1109.22 141.611 1106.53 144.303 1106.53 148.236V168.178H1099.29C1098.14 168.178 1097.22 167.254 1097.22 166.108V134.015H1103.7C1104.85 134.015 1105.77 134.94 1105.77 136.085V137.119C1108.19 134.704 1111.71 133.255 1115.78 133.255ZM1076.76 133.255C1078.96 133.255 1081.13 133.69 1083.17 134.532C1085.2 135.374 1087.05 136.602 1088.6 138.161C1090.16 139.721 1091.39 141.563 1092.23 143.599C1093.08 145.627 1093.51 147.809 1093.51 150.01V152.052C1093.51 154.17 1093.09 156.268 1092.28 158.221C1091.47 160.18 1090.29 161.954 1088.79 163.451C1087.29 164.949 1085.51 166.136 1083.56 166.943C1081.6 167.757 1079.51 168.171 1077.39 168.171H1060.3C1059.84 168.171 1059.41 167.992 1059.09 167.675C1058.77 167.35 1058.59 166.922 1058.59 166.467V149.368C1058.59 145.097 1060.29 140.998 1063.31 137.976C1066.33 134.953 1070.43 133.255 1074.7 133.255H1076.76ZM826.802 141.756C821.835 141.756 817.972 145.551 817.972 151.14C817.972 156.729 821.766 160.594 826.802 160.594C831.493 160.594 835.426 157.35 835.426 151.209C835.426 145.068 831.493 141.756 826.802 141.756ZM945.545 141.271C940.509 141.271 936.715 144.652 936.715 150.172C936.715 155.692 940.578 159.35 945.545 159.35C950.236 159.35 954.169 155.968 954.169 150.103C954.169 144.237 950.305 141.271 945.545 141.271ZM1084.24 152.335C1083.93 152.314 1083.62 152.411 1083.38 152.618C1075.61 159.387 1069.12 152.963 1068.84 152.68C1068.62 152.466 1068.32 152.342 1068.01 152.342C1067.7 152.342 1067.4 152.466 1067.18 152.68C1066.96 152.894 1066.83 153.184 1066.82 153.494C1066.82 153.805 1066.93 154.101 1067.14 154.329C1067.23 154.421 1069.24 156.462 1072.43 157.489C1073.61 157.876 1074.83 158.076 1076.07 158.076C1078.64 158.076 1081.71 157.207 1084.93 154.398C1085.17 154.191 1085.31 153.901 1085.33 153.591C1085.35 153.28 1085.25 152.97 1085.04 152.735C1084.84 152.501 1084.55 152.356 1084.24 152.335ZM888.092 156.803C888.09 156.8 888.087 156.798 888.085 156.796H888.099L888.092 156.803ZM1168.71 156.733C1168.71 156.731 1168.71 156.729 1168.71 156.727H1168.72L1168.71 156.733ZM865.876 140.854C861.806 140.854 858.77 143.545 857.735 147.754H873.258C873.189 143.545 869.946 140.854 865.876 140.854ZM919.704 120.673C922.657 120.673 925.051 122.881 925.051 125.834C925.051 128.787 922.657 130.933 919.704 130.934H914.419V125.834C914.419 122.888 916.751 120.673 919.704 120.673Z", x:808.5, y:116.5, w:383, h:65};

/* ---------- formats ---------- */
const PEOPLE_FMTS = {
  feed:  {label:"Feed",  ratio:"4:5",  W:2000, H:2500, s:1,    ox:0,    oy:0,   bleed:[0,0,2000,2500],    logoW:383, logoY:116.5, ps:1},
  square:{label:"Square",ratio:"1:1",  W:2000, H:2000, s:0.8,  ox:200,  oy:0,   bleed:[0,-500,2000,2500], logoW:340, logoY:95,    ps:0.8},
  story: {label:"Story", ratio:"9:16", W:2160, H:3840, s:1.25, ox:-170, oy:560, bleed:[-456,0,3072,3840], logoW:502, logoY:132,   ps:1.15}
};
const HIRE_FMTS = {
  feed: {label:"Feed",  ratio:"4:5",  W:2000, H:2500, bg:"hire_feed_bg"},
  story:{label:"Story", ratio:"9:16", W:2160, H:3840, bg:"hire_story_bg"},
  wide: {label:"Banner",ratio:"4:1",  W:3200, H:800,  bg:"hire_wide_bg"},
  short:{label:"Banner",ratio:"1252\u00d7438", W:1252, H:438, bg:"hire_short_bg"}
};

/* ---------- type styles (measured from the Figma outlines) ---------- */
const HEAD = {fam:"RHD", w:800, style:"normal"};
const SERIF = {fam:"PF", w:700, style:"italic"};
const SERIF_UP = {fam:"PF", w:700, style:"normal"};
const BODY = {fam:"OUT", w:400, style:"normal"};
const NAME = {fam:"RHD", w:800, style:"normal"};
const FADE = [[0,1],[0.905,1],[1,0]];

// line: ref = text the Figma box was set with; bbox = ink box in template units; fit: "w" (size from width, fixed tracking) or "h" (size from cap height, tracking derived)
function L(o){return Object.assign({align:"center", fit:"w", trackEm:0, maxW:1800}, o);}

const TEMPLATES = {
  welcome:{label:"Welcome", sub:"New team member", kind:"person",
    sample:{name:"Atiqur Rahaman", desig:"UX Designer"},
    fade:[916.755,335.695,959.5,1932],
    layers:[["welcome_propL","prop","luminosity"],["welcome_propR","prop","luminosity"],["welcome_rings","content"],["PERSON"],["welcome_shade","shade"],["welcome_ringfront","content","source-over",[319,1494,1195,323]],["welcome_glow","glow","lighter"],["TEXT"]],
    lines:[
      L({ref:[["Welcome",SERIF]], bbox:[655.4,1777.9,704.6,145.6]}),
      L({ref:[["to the team",HEAD]], bbox:[508.2,1942.6,977.7,133.2]}),
      L({ref:[["Atiqur Rahaman",NAME]], bbox:[646.7,2178.5,701.8,84.9], trackEm:0.026, field:"name", maxW:1700}),
      L({ref:[["UX DESIGNER",BODY]], bbox:[817.2,2288.1,367.8,35.4], fit:"h", field:"desig", upper:true, maxW:1700})
    ]},
  birthday:{label:"Birthday", sub:"Birthday wish", kind:"person",
    sample:{name:"Atiqur Rahaman", desig:"Chief Executive Officer"},
    fade:[920.735,283.695,963.481,1880],
    layers:[["birthday_arches","content"],["birthday_propL","prop","luminosity"],["birthday_propR","prop","screen"],["birthday_confetti","content"],["PERSON"],["birthday_glow","glow","lighter"],["TEXT"],["birthday_rays","content"]],
    lines:[
      L({ref:[["Happy",HEAD]], bbox:[731.6,1785,548,164.7], grad:[1151.5,1943,1278.14,1773.61,"#FFFFFF","#6D6D6D"]}),
      L({ref:[["Birthday",SERIF]], bbox:[612.9,1965.7,763.6,185.8]}),
      L({ref:[["Atiqur Rahaman",NAME]], bbox:[646.7,2220,701.8,84.9], trackEm:0.026, field:"name", maxW:1700}),
      L({ref:[["CHIEF EXECUTIVE OFFICER",BODY]], bbox:[625.9,2329.6,749.2,35.4], fit:"h", field:"desig", upper:true, maxW:1700})
    ]},
  rising:{label:"Award", sub:"Rising Monk or Monk of the Month", kind:"person",
    sample:{name:"Md Rakib Uddin", desig:"Product Designer"},
    fade:[976.5,236,1018.02,2010.61],
    layers:[["rising_propL","prop","luminosity"],["rising_glow","glow","lighter"],["rising_propR","prop","luminosity"],["rising_rings","content"],["PERSON"],["TEXT"],["rising_rays","content","luminosity"]],
    lines:[
      L({ref:[["Rising Monk",HEAD]], bbox:[494.9,1925.5,1024.7,171.5], grad:[1294,2083.5,1334,1923,"#FFFFFF","#3F3D3D"]}),
      L({ref:[["Md Rakib Uddin",NAME]], bbox:[660.7,2166,679.7,67.4], trackEm:0.026, field:"name", maxW:1700}),
      L({ref:[["PRODUCT DESIGNER",BODY]], bbox:[719.9,2275.6,562.9,35.4], fit:"h", field:"desig", upper:true, maxW:1700})
    ],
    altLines:{monk:[
      L({ref:[["Monk",HEAD]], bbox:[772,1805,467,131], grad:[880,1936,1240,1800,"#FFFFFF","#6D6D6D"]}),
      L({ref:[["of the ",HEAD],["Month",SERIF]], bbox:[466,1968,1064,143]}),
      L({ref:[["Arif Hossain",NAME]], bbox:[732,2207,531,68], trackEm:0.026, field:"name", maxW:1700}),
      L({ref:[["PRODUCT DESIGNER",BODY]], bbox:[718.5,2317,562.9,35.4], fit:"h", field:"desig", upper:true, maxW:1700})
    ]}},
  promotion:{label:"Promotion", sub:"Promoted to a new role", kind:"person",
    sample:{name:"Atiqur Rahaman", role:"SEO Manager"},
    fade:[916.755,341.695,959.5,1938],
    layers:[["promotion_propR","prop","luminosity"],["promotion_glow","glow","lighter"],["promotion_propL","prop","luminosity"],["promotion_rings","content"],["PERSON"],["TEXT"],["promotion_rays","content","luminosity"]],
    lines:[
      L({ref:[["Promoted",SERIF],[" to",SERIF_UP]], bbox:[518.4,1770.3,949.6,137.5]}),
      L({ref:[["SEO Manager",HEAD]], bbox:[460.6,1948.4,1080.8,159.1], field:"role", maxW:1840}),
      L({ref:[["Atiqur Rahaman",NAME]], bbox:[646.7,2167,701.8,84.9], trackEm:0.026, field:"name", maxW:1700}),
      L({ref:[["UX DESIGNER",BODY]], bbox:[817.2,2276.6,367.8,35.4], fit:"h", field:"promoDesig", upper:true, maxW:1700})
    ]},
  hiring:{label:"Hiring", sub:"Open position", kind:"hire",
    sample:{role:"Mobile App UI Designer", salary:"Upto 50K BDT"},
    lines:{
      feed:[
        L({ref:[["We Are",HEAD]], bbox:[699.4,1715.5,600.4,127.8]}),
        L({ref:[["Hiring...",SERIF]], bbox:[647.6,1886.4,676.6,173.5]}),
        L({ref:[["Mobile App UI Designer",NAME]], bbox:[545.2,2144.9,913,76.2], trackEm:0.022, field:"role", maxW:1800}),
        L({ref:[["UPTO 50K BDT",BODY]], bbox:[793.3,2259.8,415.6,35.7], fit:"h", field:"salary", upper:true, maxW:1700})],
      story:[
        L({ref:[["We Are",HEAD]], bbox:[706.8,2708.5,750.5,159.8]}),
        L({ref:[["Hiring...",SERIF]], bbox:[642.1,2921.4,845.7,216.9]}),
        L({ref:[["Mobile App UI Designer",NAME]], bbox:[457.1,3267.2,1255.3,104.8], trackEm:0.022, field:"role", maxW:1960}),
        L({ref:[["UPTO 50K BDT",BODY]], bbox:[818,3418.1,531.9,45.7], fit:"h", field:"salary", upper:true, maxW:1900})],
      wide:[
        L({ref:[["We Are",HEAD]], bbox:[552,156,500.3,106.5], align:"left"}),
        L({ref:[["Hiring Now..",SERIF]], bbox:[541.9,299.6,851.8,144.6], align:"left"}),
        L({ref:[["Mobile App UI Designer",NAME]], bbox:[552.5,517.6,798.8,66.7], trackEm:0.027, field:"role", align:"left", maxW:1100}),
        L({ref:[["UPTO 50K BDT",BODY]], bbox:[551.6,618.4,365.7,31.4], fit:"h", field:"salary", upper:true, align:"left", maxW:1100})],
      short:[
        L({ref:[["We Are",HEAD]], bbox:[198.3,155.5,250.2,53.3], align:"left"}),
        L({ref:[["Hiring Now..",SERIF]], bbox:[193.2,225.2,425.9,72.3], align:"left"})],
      shortFull:[
        L({ref:[["We Are",HEAD]], bbox:[198.3,95.5,250.2,53.3], align:"left"}),
        L({ref:[["Hiring Now..",SERIF]], bbox:[193.2,167.3,425.9,72.3], align:"left"}),
        L({ref:[["Mobile App UI Designer",NAME]], bbox:[198.5,276.3,399.4,33.4], trackEm:0.027, field:"role", align:"left", maxW:500}),
        L({ref:[["UPTO 50K BDT",BODY]], bbox:[198.1,326.7,182.9,15.7], fit:"h", field:"salary", upper:true, align:"left", maxW:500})]
    }}
};

/* ---------- state ---------- */
const state = {
  tpl:"welcome", fmt:"feed",
  v:{name:"", desig:"", role:"", promoDesig:"", salary:"", hireRole:"", shortFull:false, award:"rising"},
  photo:null,
  adj:{}
};
function adjKey(){return state.tpl+"/"+state.fmt;}
function adj(){return state.adj[adjKey()] || (state.adj[adjKey()] = {z:1,dx:0,dy:0});}
function tpl(){return TEMPLATES[state.tpl];}
function fmts(){return tpl().kind==="hire" ? HIRE_FMTS : PEOPLE_FMTS;}
function usingSample(){
  const t=tpl(), v=state.v;
  if(t.kind==="hire") return !v.hireRole.trim() || !v.salary.trim();
  if(!state.photo || !v.name.trim()) return true;
  if(state.tpl==="promotion") return !v.role.trim();
  return !v.desig.trim();
}
function val(field,id){
  const t=TEMPLATES[id||state.tpl], v=state.v, s=t.sample;
  switch(field){
    case "name": return v.name.trim() || s.name;
    case "desig": return v.desig.trim() || s.desig;
    case "role": return t.kind==="hire" ? (v.hireRole.trim() || s.role) : (v.role.trim() || s.role);
    case "promoDesig": return v.promoDesig.trim() || v.role.trim() || s.role;
    case "salary": return v.salary.trim() || s.salary;
  }
  return "";
}

/* ---------- assets ---------- */
const imgCache = {};
function loadImg(key){
  if(imgCache[key]) return imgCache[key];
  const m = META[key]; if(!m) return Promise.reject(new Error("Missing asset "+key));
  imgCache[key] = new Promise((res,rej)=>{const im=new Image(); im.onload=()=>res(im); const src=EMBED[key]||"assets/images/"+key+".webp"; im.onerror=()=>rej(new Error("Could not load "+src)); im.src=src;});
  return imgCache[key];
}
function keysFor(id){
  const t=TEMPLATES[id];
  if(t.kind==="hire") return Object.values(HIRE_FMTS).map(f=>f.bg);
  return [id+"_bleed", id+"_person", ...t.layers.filter(l=>l[0]!=="PERSON"&&l[0]!=="TEXT").map(l=>l[0])];
}
async function ensure(id){ const ks=keysFor(id); const ims=await Promise.all(ks.map(loadImg)); const o={}; ks.forEach((k,i)=>o[k]=ims[i]); return o; }
let fontsReady = null;
function loadFonts(){
  if(!fontsReady) fontsReady = Promise.all(["normal 400 50px OUT","normal 800 50px RHD","italic 700 50px PF","normal 700 50px PF"].map(f=>document.fonts.load(f))).then(()=>document.fonts.ready);
  return fontsReady;
}

/* ---------- text engine ---------- */
const mctx = document.createElement("canvas").getContext("2d");
function fontStr(st,size){return `${st.style} ${st.w} ${size}px ${st.fam}`;}
function metrics(ctx, segs, size, track){
  let adv=0, left=0, asc=0, desc=0, right=0;
  segs.forEach(([text,st],i)=>{
    ctx.font=fontStr(st,size); ctx.letterSpacing=track+"px";
    const m=ctx.measureText(text);
    if(i===0) left=m.actualBoundingBoxLeft;
    asc=Math.max(asc,m.actualBoundingBoxAscent); desc=Math.max(desc,m.actualBoundingBoxDescent);
    if(i===segs.length-1) right=adv+m.actualBoundingBoxRight;
    adv+=m.width;
  });
  return {inkW:left+right, left, asc, desc};
}
function calib(line){
  if(line._c) return line._c;
  const [x,y,w,h]=line.bbox; let size, track;
  if(line.fit==="h"){
    const m=metrics(mctx,line.ref,100,0); size=100*h/(m.asc+m.desc);
    const n=line.ref.reduce((a,[t])=>a+t.length,0);
    track=(w-metrics(mctx,line.ref,size,0).inkW)/(n-1);
  } else {
    const m=metrics(mctx,line.ref,100,line.trackEm*100); size=100*w/m.inkW; track=line.trackEm*size;
  }
  const asc=metrics(mctx,line.ref,size,track).asc;
  line._c={size, trackEm:track/size, baseline:y+asc, cx:x+w/2, left:x};
  return line._c;
}
// map: template coords -> device pixels  {k, tx, ty}
function drawLine(ctx, line, map){
  const c=calib(line);
  let segs=line.ref;
  if(line.field){ let t=val(line.field,map.id); if(line.upper) t=t.toUpperCase(); segs=[[t,line.ref[0][1]]]; }
  let size=c.size;
  let m=metrics(ctx,segs,size,c.trackEm*size);
  line._shrunk = !!line.field && m.inkW>line.maxW;
  if(m.inkW>line.maxW){ size=size*line.maxW/m.inkW; m=metrics(ctx,segs,size,c.trackEm*size); }
  const inkLeft = line.align==="left" ? c.left : c.cx-m.inkW/2;
  const k=map.k, X=v=>map.tx+v*k, Y=v=>map.ty+v*k;
  let x=X(inkLeft+m.left); const by=Y(c.baseline);
  if(line.grad){ const g=line.grad; const gr=ctx.createLinearGradient(X(g[0]),Y(g[1]),X(g[2]),Y(g[3])); gr.addColorStop(0,g[4]); gr.addColorStop(1,g[5]); ctx.fillStyle=gr; }
  else ctx.fillStyle="#FFFFFF";
  ctx.textBaseline="alphabetic"; ctx.textAlign="left";
  for(const [text,st] of segs){
    ctx.font=fontStr(st,size*k); ctx.letterSpacing=(c.trackEm*size*k)+"px";
    ctx.fillText(text,x,by); x+=ctx.measureText(text).width;
  }
  ctx.letterSpacing="0px";
}

/* ---------- photo ---------- */
function personSource(id){
  if(state.photo) return state.photo;
  return null;
}
function personRect(id, f, A, sampleImg){
  const m=META[id+"_person"]; // box = where the studio photo sits in the Figma file
  const B={x:m.x,y:m.y,w:m.w,h:m.h};
  let src, sx, sy, sw, sh;
  if(state.photo){ src=state.photo.bmp; ({sx,sy,sw,sh}=state.photo); }
  else { src=sampleImg; sx=0; sy=0; sw=sampleImg.naturalWidth; sh=sampleImg.naturalHeight; }
  const sc=(B.w/sw)*A.z; const w=sw*sc, h=sh*sc;
  const fitsDown = h>=B.h || A.z>1;
  const x=B.x+B.w/2-w/2+A.dx;
  const y=(fitsDown? B.y : B.y+B.h-h)+A.dy;
  return {src,sx,sy,sw,sh,x,y,w,h};
}

/* ---------- renderer ---------- */
function offscreen(w,h){const c=document.createElement("canvas"); c.width=w; c.height=h; return c;}
function drawLayer(ctx, im, m, dx, dy, dw, dh, op){ ctx.save(); ctx.globalCompositeOperation=op||"source-over"; ctx.drawImage(im, dx, dy, dw, dh); ctx.restore(); }

async function render(canvas, id, fk, r, opts={}){
  const t=TEMPLATES[id];
  const assets=await ensure(id); await loadFonts();
  const ctx=canvas.getContext("2d");
  if(t.kind==="hire"){
    const f=HIRE_FMTS[fk]; canvas.width=Math.round(f.W*r); canvas.height=Math.round(f.H*r);
    ctx.drawImage(assets[f.bg],0,0,canvas.width,canvas.height);
    const lines = fk==="short" ? (state.v.shortFull? t.lines.shortFull : t.lines.short) : t.lines[fk];
    const map={k:r,tx:0,ty:0,id};
    lines.forEach(l=>drawLine(ctx,l,map));
    return;
  }
  const f=PEOPLE_FMTS[fk]; const W=Math.round(f.W*r), H=Math.round(f.H*r);
  canvas.width=W; canvas.height=H;
  const A=opts.adj || state.adj[id+"/"+fk] || {z:1,dx:0,dy:0};
  const cm={k:f.s*r, tx:f.ox*r, ty:f.oy*r, id};           // content map
  const C=(x,y,w,h)=>[cm.tx+x*cm.k, cm.ty+y*cm.k, w*cm.k, h*cm.k];
  // 1 background
  const b=f.bleed; ctx.drawImage(assets[id+"_bleed"], b[0]*r, b[1]*r, b[2]*r, b[3]*r);
  // 2 logo
  ctx.save(); const lk=f.logoW/LOGO.w*r; ctx.translate((f.W-f.logoW)/2*r, f.logoY*r); ctx.scale(lk,lk); ctx.translate(-LOGO.x,-LOGO.y); ctx.fillStyle="#FFFFFF"; ctx.fill(LOGO.path); ctx.restore();
  // person layer (raw alpha + faded)
  const pr=personRect(id,f,A,assets[id+"_person"]);
  const personRaw=offscreen(W,H); const pctx=personRaw.getContext("2d");
  pctx.imageSmoothingQuality="high";
  pctx.drawImage(pr.src, pr.sx, pr.sy, pr.sw, pr.sh, ...C(pr.x,pr.y,pr.w,pr.h));
  const person=offscreen(W,H); const qctx=person.getContext("2d"); qctx.drawImage(personRaw,0,0);
  const fd=t.fade; const g=qctx.createLinearGradient(...C(fd[0],fd[1],0,0).slice(0,2), ...C(fd[2],fd[3],0,0).slice(0,2));
  FADE.forEach(([o,a])=>g.addColorStop(o,`rgba(0,0,0,${a})`));
  qctx.globalCompositeOperation="destination-in"; qctx.fillStyle=g; qctx.fillRect(0,0,W,H);

  for(const [key,role,op,maskPerson] of t.layers){
    if(key==="PERSON"){ ctx.drawImage(person,0,0); continue; }
    if(key==="TEXT"){ const ls=(t.altLines&&t.altLines[state.v.award])||t.lines; ls.forEach(l=>drawLine(ctx,l,cm)); continue; }
    const m=META[key], im=assets[key];
    let d;
    if(role==="content") d=C(m.x,m.y,m.w,m.h);
    else if(role==="shade"){ const c=C(m.x,m.y,m.w,m.h); d=[0,c[1],W,c[3]]; }
    else if(role==="glow"){ const k=f.W/2000; d=[m.x*k*r, (f.H-(2500-m.y)*k)*r, m.w*k*r, m.h*k*r]; }
    else if(role==="prop"){ const sp=f.ps, ky=f.H/2500; const w=m.w*sp, h=m.h*sp; const cx=m.x+m.w/2;
      const x = cx<1000 ? m.x*sp : f.W-(2000-m.x)*sp; const y=(m.y+m.h/2)*ky-h/2; d=[x*r,y*r,w*r,h*r]; }
    if(maskPerson){
      const o=offscreen(W,H), octx=o.getContext("2d"); octx.save(); octx.beginPath(); octx.rect(...C(...maskPerson)); octx.clip(); octx.drawImage(im,...d); octx.restore();
      octx.globalCompositeOperation="destination-in"; octx.drawImage(personRaw,0,0);
      drawLayer(ctx,o,null,0,0,W,H,op);
    } else drawLayer(ctx,im,m,...d,op);
  }
}

/* ---------- UI ---------- */
const $=id=>document.getElementById(id);
const cv=$("cv");
function el(tag,attrs={},html=""){const e=document.createElement(tag); for(const [k,v] of Object.entries(attrs)) e.setAttribute(k,v); e.innerHTML=html; return e;}

function buildTypes(){
  const box=$("types"); box.innerHTML="";
  for(const [id,t] of Object.entries(TEMPLATES)){
    const b=el("button",{type:"button",class:"type","aria-pressed":String(id===state.tpl)},`<b>${t.label}</b><span>${t.sub}</span>`);
    b.onclick=()=>{ state.tpl=id; if(!fmts()[state.fmt]) state.fmt="feed"; buildAll(); };
    box.appendChild(b);
  }
}
function field(id,label,ph,help){
  const w=el("div",{class:"field"});
  w.appendChild(el("label",{for:id},label));
  const i=el("input",{type:"text",id,placeholder:ph?("e.g. "+ph):"",autocomplete:"off"}); w.appendChild(i);
  if(help) w.appendChild(el("small",{},help));
  return w;
}
function buildFields(){
  const box=$("fields"); box.innerHTML=""; const t=tpl(), s=t.sample;
  box.appendChild(el("div",{class:"label"},"Details"));
  const defs = t.kind==="hire" ? [
      ["hireRole","Job title",s.role,"Shown under the headline. Long titles shrink to fit."],
      ["salary","Salary line",s.salary,"Shown in small capitals, for example: Upto 50K BDT or Negotiable."]]
    : state.tpl==="promotion" ? [
      ["role","New role",s.role,"Completes the headline: Promoted to \u2026"],
      ["name","Full name",s.name,""],
      ["promoDesig","Line under the name","","Leave empty to repeat the new role."]]
    : [["name","Full name",s.name,""],["desig","Designation",s.desig,"Set in capitals automatically."]];
  if(state.tpl==="rising"){
    const w=el("div",{class:"field"}); w.appendChild(el("label",{},"Award"));
    const row=el("div",{class:"award-row",role:"group","aria-label":"Award"});
    [["rising","Rising Monk"],["monk","Monk of the Month"]].forEach(([k,lab])=>{
      const b=el("button",{type:"button",class:"type","aria-pressed":String(state.v.award===k)},`<b>${lab}</b>`);
      b.onclick=()=>{state.v.award=k; buildFields(); schedule();}; row.appendChild(b);});
    w.appendChild(row); box.appendChild(w);
  }
  for(const [k,label,ph,help] of defs){
    const f=field("f_"+k,label,ph,help); box.appendChild(f);
    const inp=f.querySelector("input"); inp.value=state.v[k]; inp.oninput=()=>{state.v[k]=inp.value; schedule();};
  }
  if(t.kind==="hire"){
    const c=el("label",{class:"check",for:"f_shortFull"},`<input type="checkbox" id="f_shortFull"><span>Show job title and salary on the 1252 \u00d7 438 banner</span>`);
    box.appendChild(c); const cb=c.querySelector("input"); cb.checked=state.v.shortFull; cb.onchange=()=>{state.v.shortFull=cb.checked; schedule();};
  }
  $("photoSec").hidden = t.kind==="hire";
}
function buildFmts(){
  const box=$("fmts"); box.innerHTML="";
  for(const [k,f] of Object.entries(fmts())){
    const ar=f.W/f.H, gh=18, gw=Math.max(10,Math.min(40,Math.round(gh*ar)));
    const b=el("button",{type:"button",class:"fmt","aria-pressed":String(k===state.fmt)},`<i style="width:${gw}px;height:${Math.round(gw/ar)}px"></i><div><b>${f.label} ${f.ratio.includes("\u00d7")?"":f.ratio}</b><br><span>${f.W} \u00d7 ${f.H}</span></div>`);
    b.onclick=()=>{state.fmt=k; buildFmts(); syncAdj(); schedule();};
    box.appendChild(b);
  }
  const f=fmts()[state.fmt]; const nm=`${f.label} ${f.ratio.includes("\u00d7")?"":f.ratio}`.trim();
  $("dlOne").innerHTML=`Download PNG<span class="sz">${nm}</span>`;
  $("adjFor").textContent="for "+nm+" "+f.W+" \u00d7 "+f.H;
}
function syncAdj(){
  const a=adj();
  $("zoom").value=Math.round(a.z*100); $("zoomOut").textContent=Math.round(a.z*100)+"%";
  $("posx").value=Math.round(a.dx); $("posxOut").textContent=px(a.dx);
  $("posy").value=Math.round(a.dy); $("posyOut").textContent=px(a.dy);
}
function px(v){v=Math.round(v); return (v>0?"+":"")+v+" px";}
function buildAll(){ buildTypes(); buildFields(); buildFmts(); syncAdj(); schedule(true); }

let pending=false, busy=false, again=false, showLoad=false;
function schedule(load){ if(load) showLoad=true; if(busy){again=true;return;} if(pending) return; pending=true; requestAnimationFrame(draw); }
async function draw(){
  pending=false; busy=true;
  if(showLoad) $("loading").hidden=false;
  try{
    const f=fmts()[state.fmt];
    const maxCss=Math.min($("stage").clientWidth-24, 900);
    const r=Math.min(1, (maxCss*Math.min(2,window.devicePixelRatio||1))/f.W);
    const tmp=offscreen(1,1); await render(tmp,state.tpl,state.fmt,r);
    cv.width=tmp.width; cv.height=tmp.height; cv.getContext("2d").drawImage(tmp,0,0);
    cv.classList.toggle("draggable", tpl().kind==="person");
    $("moveRow").classList.toggle("on", tpl().kind==="person");
    if(tpl().kind!=="person" && moveMode) $("moveToggle").click();
    $("sampleBadge").hidden=!usingSample();
    const t=tpl(); const ls = t.kind==="hire" ? (state.fmt==="short"?(state.v.shortFull?t.lines.shortFull:t.lines.short):t.lines[state.fmt]) : ((t.altLines&&t.altLines[state.v.award])||t.lines);
    const NAMES={name:"name",desig:"designation",role:t.kind==="hire"?"job title":"new role",promoDesig:"line under the name",salary:"salary line"};
    const shr=[...new Set(ls.filter(l=>l._shrunk).map(l=>NAMES[l.field]))];
    $("fitNote").hidden=!shr.length; if(shr.length) $("fitNote").textContent=`The ${shr.join(" and ")} ${shr.length>1?"were":"was"} made smaller to fit this layout. A shorter version will read better.`;
    $("status").textContent="";
  }catch(e){ $("status").textContent=e.message; }
  $("loading").hidden=true; showLoad=false; busy=false;
  if(again){again=false; schedule();}
}

/* photo input */
async function takeFile(file){
  const note=$("photoNote"); note.hidden=true;
  if(!file) return;
  if(!/image\/(png|webp)/.test(file.type)){ note.textContent="Please use a PNG (or WebP) with the background removed. JPG files have no transparency."; note.hidden=false; return; }
  const bmp=await createImageBitmap(file);
  const s=Math.min(1,600/Math.max(bmp.width,bmp.height));
  const c=offscreen(Math.max(1,Math.round(bmp.width*s)),Math.max(1,Math.round(bmp.height*s))); const x=c.getContext("2d"); x.drawImage(bmp,0,0,c.width,c.height);
  const d=x.getImageData(0,0,c.width,c.height).data; let minX=c.width,minY=c.height,maxX=-1,maxY=-1,opaque=0;
  for(let yy=0;yy<c.height;yy++)for(let xx=0;xx<c.width;xx++){const a=d[(yy*c.width+xx)*4+3]; if(a>10){ if(xx<minX)minX=xx; if(xx>maxX)maxX=xx; if(yy<minY)minY=yy; if(yy>maxY)maxY=yy; } if(a>250)opaque++;}
  if(maxX<0){ note.textContent="This image is fully transparent."; note.hidden=false; return; }
  const sx=Math.floor(minX/s), sy=Math.floor(minY/s), sw=Math.ceil((maxX-minX+1)/s), sh=Math.ceil((maxY-minY+1)/s);
  state.photo={bmp,sx,sy,sw,sh};
  const msgs=[];
  if(opaque/(c.width*c.height)>0.97) msgs.push("This PNG has no transparent background, so its backdrop will show as a box. Remove the background first.");
  if(sw<900) msgs.push(`The person is only ${sw}px wide in this file. It will look soft in the story size; a larger cutout (1500px+) is better.`);
  if(msgs.length){ note.textContent=msgs.join(" "); note.hidden=false; }
  $("thumb").src=URL.createObjectURL(file);
  $("photoName").textContent=file.name;
  $("photoMeta").textContent=`${bmp.width} \u00d7 ${bmp.height} px \u00b7 ${(file.size/1048576).toFixed(1)} MB`;
  $("drop").hidden=true; $("photoCard").hidden=false;
  Object.keys(state.adj).forEach(k=>delete state.adj[k]); syncAdj();
  schedule();
}
$("file").onchange=e=>takeFile(e.target.files[0]);
const drop=$("drop");
["dragenter","dragover"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault(); drop.classList.add("over");}));
["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault(); drop.classList.remove("over");}));
drop.addEventListener("drop",e=>takeFile(e.dataTransfer.files[0]));
$("clearPhoto").onclick=()=>{ state.photo=null; $("file").value=""; $("thumb").removeAttribute("src"); $("photoCard").hidden=true; $("drop").hidden=false; $("photoNote").hidden=true; Object.keys(state.adj).forEach(k=>delete state.adj[k]); syncAdj(); schedule(); };
$("replacePhoto").onclick=()=>{ $("file").value=""; $("file").click(); };
$("photoCard").addEventListener("dragover",e=>{e.preventDefault();});
$("photoCard").addEventListener("drop",e=>{e.preventDefault(); takeFile(e.dataTransfer.files[0]);});
$("zoom").oninput=e=>{adj().z=e.target.value/100; $("zoomOut").textContent=e.target.value+"%"; schedule();};
$("posx").oninput=e=>{adj().dx=+e.target.value; $("posxOut").textContent=px(adj().dx); schedule();};
$("posy").oninput=e=>{adj().dy=+e.target.value; $("posyOut").textContent=px(adj().dy); schedule();};
$("resetPos").onclick=()=>{ state.adj[adjKey()]={z:1,dx:0,dy:0}; syncAdj(); schedule(); $("status").textContent="Photo position reset for this size."; };

/* drag on preview */
let drag=null;
let moveMode=false;
$("moveToggle").onclick=()=>{ moveMode=!moveMode; $("moveToggle").setAttribute("aria-pressed",String(moveMode)); $("moveToggle").textContent=moveMode?"Done moving":"Move photo"; cv.classList.toggle("moving",moveMode); $("moveHint").textContent=moveMode?"Dragging is on. Page scrolling is paused on the preview.":"Drag the person with your finger."; };
cv.addEventListener("pointerdown",e=>{ if(tpl().kind!=="person") return; if(e.pointerType==="touch" && !moveMode) return; const a=adj(); drag={x:e.clientX,y:e.clientY,dx:a.dx,dy:a.dy}; cv.setPointerCapture(e.pointerId); cv.classList.add("dragging"); });
cv.addEventListener("pointermove",e=>{ if(!drag) return; const f=PEOPLE_FMTS[state.fmt]; const unit=cv.getBoundingClientRect().width/f.W*f.s; const a=adj();
  a.dx=Math.max(-500,Math.min(500,drag.dx+(e.clientX-drag.x)/unit)); a.dy=Math.max(-600,Math.min(600,drag.dy+(e.clientY-drag.y)/unit)); syncAdj(); schedule(); });
["pointerup","pointercancel"].forEach(ev=>cv.addEventListener(ev,()=>{drag=null; cv.classList.remove("dragging");}));

/* export */
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40);}
function fileName(fk){
  const t=tpl(), f=fmts()[fk];
  const who = t.kind==="hire" ? slug(val("role")) : slug(val("name"));
  const tag = state.tpl==="rising" ? (state.v.award==="monk"?"monk-of-the-month":"rising-monk") : state.tpl;
  return `designmonks-${tag}-${who}-${fk}-${f.W}x${f.H}.png`;
}
async function pngBlob(fk){ const c=offscreen(1,1); await render(c,state.tpl,fk,1); return await new Promise(res=>c.toBlob(res,"image/png")); }
let downloads=null;
(async()=>{ try{ downloads = window.claude && window.claude.use ? await window.claude.use("downloads") : null; }catch(e){ downloads=null; } })();
async function offer(name, blob){
  if(downloads){
    try{ await downloads.save({filename:name, data:blob}); $("status").textContent="Saved "+name; return; }
    catch(e){ if(e && e.code==="declined"){ $("status").textContent="Download cancelled."; return; } if(e && e.code==="rate_limited"){ $("status").textContent="A save prompt is already open. Finish it first."; return; } }
  }
  try{
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=name; a.rel="noopener";
    document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},8000);
    $("status").textContent="Downloaded "+name; return;
  }catch(e){}
  showFallback(name, blob);
}
function showFallback(name, blob, mode){
  const url=URL.createObjectURL(blob);
  const m=el("div",{class:"modal",role:"dialog","aria-label":"Full-size image"});
  const isImg=/\.png$/.test(name);
  m.innerHTML=`<div class="box">${isImg?`<img src="${url}" alt="${name}">`:""}<p>${mode==="copy"?"This browser blocked copying from here. Right-click or long-press the image and choose Copy Image.":("Saving isn't available in this view. "+(isImg?"Right-click or long-press the image and choose Save Image.":"Try another browser to download the zip."))}</p><button class="btn primary" type="button">Close</button></div>`;
  m.querySelector("button").onclick=()=>{m.remove(); URL.revokeObjectURL(url);};
  document.body.appendChild(m);
}
$("dlOne").onclick=async()=>{
  setBusy(true); $("status").textContent="Rendering full size\u2026";
  try{ await offer(fileName(state.fmt), await pngBlob(state.fmt)); }catch(e){ $("status").textContent="Export failed: "+e.message; }
  setBusy(false);
};
function setBusy(on){ ["dlOne","copyImg","dlAll"].forEach(id=>$(id).disabled=on); }
$("copyImg").onclick=()=>{
  const f=fmts()[state.fmt]; const name=fileName(state.fmt); const nm=f.ratio.includes("\u00d7")?(f.label+" "+f.ratio):(f.label+" "+f.ratio);
  const p=pngBlob(state.fmt);
  if(!(navigator.clipboard && navigator.clipboard.write && window.ClipboardItem)){ p.then(b=>showFallback(name,b,"copy")); return; }
  setBusy(true); $("status").textContent="Copying full-size image\u2026";
  let item; try{ item=new ClipboardItem({"image/png":p}); }catch(e){ setBusy(false); p.then(b=>showFallback(name,b,"copy")); return; }
  navigator.clipboard.write([item]).then(()=>{ $("status").textContent=`Copied the ${nm} image. Paste it into Slack, WhatsApp, Figma or a post.`; })
    .catch(async()=>{ $("status").textContent=""; showFallback(name, await p, "copy"); })
    .finally(()=>setBusy(false));
};
$("dlAll").onclick=async()=>{
  setBusy(true);
  try{
    const zip=new JSZip(); const keys=Object.keys(fmts());
    for(let i=0;i<keys.length;i++){ $("status").textContent=`Rendering ${i+1} of ${keys.length}\u2026`; zip.file(fileName(keys[i]), await pngBlob(keys[i])); }
    $("status").textContent="Packing zip\u2026";
    const who = tpl().kind==="hire" ? slug(val("role")) : slug(val("name"));
    await offer(`designmonks-${state.tpl==="rising"?(state.v.award==="monk"?"monk-of-the-month":"rising-monk"):state.tpl}-${who}-all-sizes.zip`, await zip.generateAsync({type:"blob"}));
  }catch(e){ $("status").textContent="Export failed: "+e.message; }
  setBusy(false);
};
window.addEventListener("resize",()=>schedule());

LOGO.path=new Path2D(LOGO.d);
window.__render=render; window.__state=state; window.__T=TEMPLATES;
buildAll();
