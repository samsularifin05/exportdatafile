"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }function w(s){let d=new Date(s),m=d.getFullYear(),e=String(d.getMonth()+1).padStart(2,"0"),a=String(d.getDate()).padStart(2,"0"),p=String(d.getHours()).padStart(2,"0"),f=String(d.getMinutes()).padStart(2,"0"),b=String(d.getSeconds()).padStart(2,"0");return`${a}-${e}-${m} ${p}:${f}:${b}`}var _exceljs = require('exceljs'); var _exceljs2 = _interopRequireDefault(_exceljs);var I=async({columns:s,data:d,grouping:m,date:e,excelSetting:a})=>{let p=new _exceljs2.default.Workbook;s=s.filter(t=>!_optionalChain([t, 'access', _2 => _2.options, 'optionalAccess', _3 => _3.disabledColumn]));let f=p.addWorksheet(_optionalChain([a, 'optionalAccess', _4 => _4.titleExcel])),b=s.length,h=f.addRow([]);if(h.getCell(1).value=_optionalChain([a, 'optionalAccess', _5 => _5.titleExcel]),h.getCell(1).alignment={horizontal:"center"},f.mergeCells(`A${h.number}:${String.fromCharCode(64+b)}${h.number}`),h.eachCell(t=>{t.font={color:{argb:"000000"},bold:!0,size:12}}),e){let t=f.addRow([]);t.getCell(1).value=`Tanggal : ${_optionalChain([e, 'optionalAccess', _6 => _6.start_date])} ${_optionalChain([e, 'optionalAccess', _7 => _7.end_date])?`s/d ${_optionalChain([e, 'optionalAccess', _8 => _8.end_date])}`:""}`,t.getCell(1).alignment={horizontal:"center"},f.mergeCells(`A${t.number}:${String.fromCharCode(64+b)}${t.number}`),t.eachCell(l=>{l.font={color:{argb:"00000"},bold:!0,size:12}})}f.addRow(s).eachCell(t=>{t.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _9 => _9.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _10 => _10.bgColor])||"#E8E5E5"}},t.font={color:{argb:_optionalChain([a, 'optionalAccess', _11 => _11.txtColor])},bold:!0};let l=t.value;t.value&&(t.alignment={horizontal:`${_optionalChain([l, 'optionalAccess', _12 => _12.options, 'optionalAccess', _13 => _13.halign])?_optionalChain([l, 'optionalAccess', _14 => _14.options, 'optionalAccess', _15 => _15.halign]):_optionalChain([l, 'optionalAccess', _16 => _16.options, 'optionalAccess', _17 => _17.format])==="RP"||_optionalChain([l, 'optionalAccess', _18 => _18.options, 'optionalAccess', _19 => _19.format])==="GR"?"right":"left"}`},t.value=l.label)});let y={};d.forEach(t=>{if(m.length>0){let l=m.map(g=>({value:t[g]!==void 0?`${j(g)} : `+t[g]:""}));f.addRow(l.map(g=>g.value));let r={};t.detail.forEach(g=>{let o=s.map(n=>{let u=_optionalChain([n, 'optionalAccess', _20 => _20.options, 'optionalAccess', _21 => _21.format])==="DATETIME"?w(g[n.key]):g[n.key],c={horizontal:_optionalChain([n, 'optionalAccess', _22 => _22.options, 'optionalAccess', _23 => _23.halign])?_optionalChain([n, 'optionalAccess', _24 => _24.options, 'optionalAccess', _25 => _25.halign]):_optionalChain([n, 'optionalAccess', _26 => _26.options, 'optionalAccess', _27 => _27.format])==="RP"||_optionalChain([n, 'optionalAccess', _28 => _28.options, 'optionalAccess', _29 => _29.format])==="GR"?"right":"left"},$=n.key;return y[$]=(y[$]||0)+Number(u),r[$]=(r[$]||0)+Number(u),{value:u,alignment:c,numFmt:_optionalChain([n, 'optionalAccess', _30 => _30.options, 'optionalAccess', _31 => _31.format])==="RP"?"#,##0":_optionalChain([n, 'optionalAccess', _32 => _32.options, 'optionalAccess', _33 => _33.format])==="GR"?"#,##0.000":void 0}}),C=f.addRow(o.map(n=>n.value));o.forEach((n,u)=>{let c=C.getCell(u+1);c.alignment=n.alignment,n.numFmt&&(c.numFmt=n.numFmt)})});let i=f.addRow(s.map(()=>null));s.forEach((g,o)=>{if(_optionalChain([g, 'optionalAccess', _34 => _34.options, 'optionalAccess', _35 => _35.format])==="RP"||_optionalChain([g, 'optionalAccess', _36 => _36.options, 'optionalAccess', _37 => _37.format])==="GR"){let n=d.length+4-1,u=`SUM(${String.fromCharCode(65+o)}4:${String.fromCharCode(65+o)}${n})`,c=i.getCell(o+1);i.getCell(1).value="SUB TOTAL",i.getCell(1).alignment={horizontal:"center"},c.numFmt=_optionalChain([g, 'optionalAccess', _38 => _38.options, 'optionalAccess', _39 => _39.format])==="GR"?"#,##0.000":"#,##0",c.value={formula:u},i.getCell(o+1).value=_optionalChain([g, 'optionalAccess', _40 => _40.options, 'access', _41 => _41.disabledFooter])?"":r[g.key]}else i.getCell(o+1).value=""}),i.eachCell(g=>{g.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _42 => _42.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _43 => _43.bgColor])||"#E8E5E5"}},g.font={color:{argb:_optionalChain([a, 'optionalAccess', _44 => _44.txtColor])},bold:!0}})}else{let l=s.map(i=>{let g=_optionalChain([i, 'optionalAccess', _45 => _45.options, 'optionalAccess', _46 => _46.format])==="DATETIME"?w(t[i.key]):t[i.key],o={horizontal:_optionalChain([i, 'optionalAccess', _47 => _47.options, 'optionalAccess', _48 => _48.halign])?_optionalChain([i, 'optionalAccess', _49 => _49.options, 'optionalAccess', _50 => _50.halign]):_optionalChain([i, 'optionalAccess', _51 => _51.options, 'optionalAccess', _52 => _52.format])==="RP"||_optionalChain([i, 'optionalAccess', _53 => _53.options, 'optionalAccess', _54 => _54.format])==="GR"?"right":"left"},C=i.key;return y[C]=(y[C]||0)+Number(g),{value:g,alignment:o,numFmt:_optionalChain([i, 'optionalAccess', _55 => _55.options, 'optionalAccess', _56 => _56.format])==="RP"?"#,##0":_optionalChain([i, 'optionalAccess', _57 => _57.options, 'optionalAccess', _58 => _58.format])==="GR"?"#,##0.000":void 0}}),r=f.addRow(l.map(i=>i.value));l.forEach((i,g)=>{let o=r.getCell(g+1);o.alignment=i.alignment,i.numFmt&&(o.numFmt=i.numFmt)})}});let k=f.addRow(s.map(()=>null));s.forEach((t,l)=>{if(_optionalChain([t, 'optionalAccess', _59 => _59.options, 'optionalAccess', _60 => _60.format])==="RP"||_optionalChain([t, 'optionalAccess', _61 => _61.options, 'optionalAccess', _62 => _62.format])==="GR"){let i=d.length+4-1,g=`SUM(${String.fromCharCode(65+l)}4:${String.fromCharCode(65+l)}${i})`,o=k.getCell(l+1);k.getCell(1).value="GRAND TOTAL",k.getCell(1).alignment={horizontal:"center"},o.numFmt=_optionalChain([t, 'optionalAccess', _63 => _63.options, 'optionalAccess', _64 => _64.format])==="GR"?"#,##0.000":"#,##0",o.value={formula:g},k.getCell(l+1).value=_optionalChain([t, 'optionalAccess', _65 => _65.options, 'access', _66 => _66.disabledFooter])?"":y[t.key]}else k.getCell(l+1).value=""}),_optionalChain([a, 'optionalAccess', _67 => _67.grandTotalSetting, 'optionalAccess', _68 => _68.colSpan])&&f.mergeCells(`A${k.number}:${String.fromCharCode(64+Number(_optionalChain([a, 'optionalAccess', _69 => _69.grandTotalSetting, 'optionalAccess', _70 => _70.colSpan])))}${k.number}`),k.eachCell(t=>{t.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _71 => _71.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _72 => _72.bgColor])||"#E8E5E5"}},t.font={color:{argb:_optionalChain([a, 'optionalAccess', _73 => _73.txtColor])},bold:!0}});let G=await p.xlsx.writeBuffer(),T=new Blob([G],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),E=document.createElement("a");E.href=URL.createObjectURL(T),E.download=`${_optionalChain([a, 'optionalAccess', _74 => _74.titleExcel])}.xlsx`,document.body.appendChild(E),E.click(),document.body.removeChild(E)},x=I,j=s=>s.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");var _jspdf = require('jspdf'); var _jspdf2 = _interopRequireDefault(_jspdf);require('jspdf-autotable');var z=({columns:s,data:d,grouping:m,pdfSetting:e,date:a})=>{let p=new (0, _jspdf2.default)(_optionalChain([e, 'optionalAccess', _75 => _75.orientation]),_optionalChain([e, 'optionalAccess', _76 => _76.unit]),[_optionalChain([e, 'optionalAccess', _77 => _77.width])||297,_optionalChain([e, 'optionalAccess', _78 => _78.height])||210]),f=[],b=a?30:20;s=s.filter(t=>!_optionalChain([t, 'access', _79 => _79.options, 'optionalAccess', _80 => _80.disabledColumn])),p.setFontSize(15),p.text(_optionalChain([e, 'optionalAccess', _81 => _81.titlePdf]),15,18),p.setFontSize(10),a&&p.text(`Tanggal : ${_optionalChain([a, 'optionalAccess', _82 => _82.start_date])} ${_optionalChain([a, 'optionalAccess', _83 => _83.end_date])?`s/d ${_optionalChain([a, 'optionalAccess', _84 => _84.end_date])}`:""}`,15,25),p.setProperties({title:_optionalChain([e, 'optionalAccess', _85 => _85.titlePdf])});let h=s.map(t=>({content:t.label,styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _86 => _86.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _87 => _87.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:_optionalChain([t, 'optionalAccess', _88 => _88.options, 'optionalAccess', _89 => _89.halign])?_optionalChain([t, 'optionalAccess', _90 => _90.options, 'optionalAccess', _91 => _91.halign]):_optionalChain([t, 'optionalAccess', _92 => _92.options, 'optionalAccess', _93 => _93.format])==="RP"||_optionalChain([t, 'optionalAccess', _94 => _94.options, 'optionalAccess', _95 => _95.format])==="GR"?"right":"left"}}));f.push(h);let R={};d.forEach(t=>{if(m.length>0){let l=m.map(o=>({content:t[o]!==void 0?`${L(o)} : `+t[o]:""}));f.push(l);let r={};t.detail.forEach(o=>{let C=s.map(n=>{let u=o[n.key],c=n.key;return R[c]=(R[c]||0)+Number(u),r[c]=(r[c]||0)+Number(u),{content:(()=>{switch(_optionalChain([n, 'optionalAccess', _96 => _96.options, 'optionalAccess', _97 => _97.format])){case"RP":return o[n.key]!==void 0?Number(o[n.key]||0).toLocaleString("kr-ko"):"";case"GR":return o[n.key]!==void 0?Number(o[n.key]||0).toFixed(3):"";case"DATETIME":return o[n.key]!==void 0?w(o[n.key]||new Date):"";default:return o[n.key]!==void 0?o[n.key].toString():""}})(),styles:{halign:_optionalChain([n, 'optionalAccess', _98 => _98.options, 'optionalAccess', _99 => _99.halign])?_optionalChain([n, 'optionalAccess', _100 => _100.options, 'optionalAccess', _101 => _101.halign]):_optionalChain([n, 'optionalAccess', _102 => _102.options, 'optionalAccess', _103 => _103.format])==="RP"||_optionalChain([n, 'optionalAccess', _104 => _104.options, 'optionalAccess', _105 => _105.format])==="GR"||typeof o[n.key]=="number"?"right":"left"}}});f.push(C)});let i=[];s.forEach(o=>{let C=r[o.key];if(_optionalChain([o, 'optionalAccess', _106 => _106.options, 'optionalAccess', _107 => _107.format])==="RP"||_optionalChain([o, 'optionalAccess', _108 => _108.options, 'optionalAccess', _109 => _109.format])==="GR"){let n={content:_optionalChain([o, 'optionalAccess', _110 => _110.options, 'optionalAccess', _111 => _111.disabledFooter])?"":(()=>{switch(_optionalChain([o, 'optionalAccess', _112 => _112.options, 'optionalAccess', _113 => _113.format])){case"RP":return C.toLocaleString("kr-ko");case"GR":return C.toFixed(3);default:return C.toString()}})(),styles:{halign:_optionalChain([o, 'optionalAccess', _114 => _114.options, 'optionalAccess', _115 => _115.halign])?_optionalChain([o, 'optionalAccess', _116 => _116.options, 'optionalAccess', _117 => _117.halign]):_optionalChain([o, 'optionalAccess', _118 => _118.options, 'optionalAccess', _119 => _119.format])==="RP"||_optionalChain([o, 'optionalAccess', _120 => _120.options, 'optionalAccess', _121 => _121.format])==="GR"?"right":"left",textColor:`#${_optionalChain([e, 'optionalAccess', _122 => _122.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _123 => _123.bgColor])||"E8E5E5"}`,fontStyle:"bold"}};i.push(n)}else i.push({content:"",styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _124 => _124.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _125 => _125.bgColor])||"E8E5E5"}`,fontStyle:"bold"}})});let g=_optionalChain([e, 'optionalAccess', _126 => _126.grandTotalSetting, 'optionalAccess', _127 => _127.colSpan])?Number(_optionalChain([e, 'optionalAccess', _128 => _128.grandTotalSetting, 'optionalAccess', _129 => _129.colSpan])||0)+1:0;i[0]={content:"SUB TOTAL",colSpan:g,styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _130 => _130.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _131 => _131.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:"center"}},_optionalChain([e, 'optionalAccess', _132 => _132.grandTotalSetting, 'optionalAccess', _133 => _133.colSpan])&&i.splice(1,_optionalChain([e, 'optionalAccess', _134 => _134.grandTotalSetting, 'optionalAccess', _135 => _135.colSpan])),f.push(i)}else{let l=s.map(r=>{let i=t[r.key],g=r.key;return R[g]=(R[g]||0)+Number(i),{content:(()=>{switch(_optionalChain([r, 'optionalAccess', _136 => _136.options, 'optionalAccess', _137 => _137.format])){case"RP":return t[r.key]!==void 0?Number(t[r.key]||0).toLocaleString("kr-ko"):"";case"GR":return t[r.key]!==void 0?Number(t[r.key]||0).toFixed(3):"";case"DATETIME":return t[r.key]!==void 0?w(t[r.key]||new Date):"";default:return t[r.key]!==void 0?t[r.key].toString():""}})(),styles:{halign:_optionalChain([r, 'optionalAccess', _138 => _138.options, 'optionalAccess', _139 => _139.halign])?_optionalChain([r, 'optionalAccess', _140 => _140.options, 'optionalAccess', _141 => _141.halign]):_optionalChain([r, 'optionalAccess', _142 => _142.options, 'optionalAccess', _143 => _143.format])==="RP"||_optionalChain([r, 'optionalAccess', _144 => _144.options, 'optionalAccess', _145 => _145.format])==="GR"||typeof t[r.key]=="number"?"right":"left"}}});f.push(l)}});let y=[];s.forEach(t=>{let l=R[t.key];if(_optionalChain([t, 'optionalAccess', _146 => _146.options, 'optionalAccess', _147 => _147.format])==="RP"||_optionalChain([t, 'optionalAccess', _148 => _148.options, 'optionalAccess', _149 => _149.format])==="GR"){let r={content:_optionalChain([t, 'optionalAccess', _150 => _150.options, 'optionalAccess', _151 => _151.disabledFooter])?"":(()=>{switch(_optionalChain([t, 'optionalAccess', _152 => _152.options, 'optionalAccess', _153 => _153.format])){case"RP":return l.toLocaleString("kr-ko");case"GR":return l.toFixed(3);default:return l.toString()}})(),styles:{halign:_optionalChain([t, 'optionalAccess', _154 => _154.options, 'optionalAccess', _155 => _155.halign])?_optionalChain([t, 'optionalAccess', _156 => _156.options, 'optionalAccess', _157 => _157.halign]):_optionalChain([t, 'optionalAccess', _158 => _158.options, 'optionalAccess', _159 => _159.format])==="RP"||_optionalChain([t, 'optionalAccess', _160 => _160.options, 'optionalAccess', _161 => _161.format])==="GR"?"right":"left",textColor:`#${_optionalChain([e, 'optionalAccess', _162 => _162.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _163 => _163.bgColor])||"E8E5E5"}`,fontStyle:"bold"}};y.push(r)}else y.push({content:"",styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _164 => _164.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _165 => _165.bgColor])||"E8E5E5"}`,fontStyle:"bold"}})});let k=_optionalChain([e, 'optionalAccess', _166 => _166.grandTotalSetting, 'optionalAccess', _167 => _167.colSpan])?Number(_optionalChain([e, 'optionalAccess', _168 => _168.grandTotalSetting, 'optionalAccess', _169 => _169.colSpan])||0)+1:0;_optionalChain([e, 'optionalAccess', _170 => _170.grandTotalSetting, 'optionalAccess', _171 => _171.disableGrandTotal])||(y[0]={content:"GRAND TOTAL",colSpan:k,styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _172 => _172.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _173 => _173.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:"center"}},_optionalChain([e, 'optionalAccess', _174 => _174.grandTotalSetting, 'optionalAccess', _175 => _175.colSpan])&&y.splice(1,_optionalChain([e, 'optionalAccess', _176 => _176.grandTotalSetting, 'optionalAccess', _177 => _177.colSpan])),f.push(y)),f.push([{content:`Print Date : ${w(`${new Date}`)}`,colSpan:s.length,styles:{textColor:`#${_optionalChain([e, 'optionalAccess', _178 => _178.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _179 => _179.bgColor])||"E8E5E5"}`,fontStyle:"italic"}}]),p.autoTable({head:[],body:f,startY:b,theme:_optionalChain([e, 'optionalAccess', _180 => _180.theme])||"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:_optionalChain([e, 'optionalAccess', _181 => _181.fontSIze])||8},headStyles:{fontSize:_optionalChain([e, 'optionalAccess', _182 => _182.fontSIze])||8,textColor:`#${_optionalChain([e, 'optionalAccess', _183 => _183.txtColor])||"000"}`,fillColor:`#${_optionalChain([e, 'optionalAccess', _184 => _184.bgColor])||"E8E5E5"}`}}),b=p.autoTableEndPosY()+3;let G=p.internal.getNumberOfPages(),T=p.internal.pageSize.width,E=p.internal.pageSize.height;p.setFontSize(10);for(let t=1;t<G+1;t++){let l=T/2,r=E-10;p.setPage(t),p.text(`${t} of ${G}`,l,r,{align:"center"})}if(_optionalChain([e, 'optionalAccess', _185 => _185.openNewTab])){let t=p.output("bloburl");window.open(t)}else p.save(`${_optionalChain([e, 'optionalAccess', _186 => _186.titlePdf])}.pdf`)},L=s=>s.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),P=z;var S=s=>{let d=[];for(let m=0;m<1;m++){let e=s.data.map(a=>{let p=s.template;for(;/\n!!LOOP\((.+)\)(\{\n(.*\n)+\})\n/gm.exec(p);)p=p.replace(/\n!!LOOP\((.+)\)(\{\n(.*\n)+\})\n/,(f,b,h)=>{let R=h.replace(/^\{/,"").replace(/\}$/,"");return(Array.isArray(a[b])?a[b]:[a[b]]).reduce((G,T)=>G+R.replace(/\{([a-z0-9_]+)\}/gm,E=>{let t=E.replace(/(\{|\})/g,"");if(t.match(/nama_barang/)){let l=t.match(/nama_barang/),r=t==="nama_barang2"?[20,40]:t==="nama_barang3"?[40,60]:[0,20];return _optionalChain([T, 'access', _187 => _187[l], 'optionalAccess', _188 => _188.slice, 'call', _189 => _189(...r), 'access', _190 => _190.trim, 'call', _191 => _191()])||""}if(t.match(/deskripsi_jual/)){let l=t.match(/deskripsi_jual/),r=t==="deskripsi_jual2"?[20,40]:t==="deskripsi_jual3"?[40,60]:[0,20];return _optionalChain([T, 'access', _192 => _192[l], 'optionalAccess', _193 => _193.slice, 'call', _194 => _194(...r), 'access', _195 => _195.trim, 'call', _196 => _196()])||""}if(t.match(/deskripsi/)){let l=t.match(/deskripsi/),r=t==="deskripsi2"?[20,40]:t==="deskripsi3"?[40,60]:[0,20];return _optionalChain([T, 'access', _197 => _197[l], 'optionalAccess', _198 => _198.slice, 'call', _199 => _199(...r), 'access', _200 => _200.trim, 'call', _201 => _201()])||""}return T[t]||""}),"").replace(/\n(\s)+\n/gm,`
`)});return p.replace(/\{([a-z0-9_]+)\}/gm,f=>{let b=f.replace(/(\{|\})/g,"");return b==="intenal_external"?m===0?"Pelanggan":"Internal":b==="syarat_ketentuan"?m===1?"":`Kondisi / Syarat Perjanjian Jual Beli
-------------------------------------
1.Penjual menyatakan barang tersebut 
adalah miliknya yang sah dan tidak da
lam sengketa dengan pihak manapun.

2. Pembeli memberikan tolenransi sel
ama-lamanya 3 bulan sejak perjanjian 
ini untuk penjual membeli kembali 
barang tersebut

3. Penjual menyatakan apabila setelah 
lewat dari 3 bulan tidak membeli kemb-
ali  barang tersebut, berarti telah 
menjual  secara sah dan memberikan hak 
penuh kepada pembeli atas barang terse-
but, serta membebaskan pembeli dari se-
gala resiko gugatan atas barang tersebut.

4.Penjual dan pembeli mengikatkan diri 
pada perjanjian ini tanpa adanya paksa-
an dari pihak manapun.`:b.match(/auto_cut/)?`
VA`:a[b]||""}).replace(/\n(\s)+\n/gm,`
`).replace(/~new_line~/gm,`
`).replace(/!!LOOP\(detail_barang\)/g,"").replace(/[}{]/g,"")});for(let a in e)e[a]+=`

`;d.push(...e)}return d},A=async(s,d)=>{let m=S(s),e=new Blob([_optionalChain([m, 'optionalAccess', _202 => _202.join, 'call', _203 => _203(`
`)])||""],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download=d,document.body.appendChild(a),a.click(),document.body.removeChild(a)},v=A;var et=({columns:s,data:d,grouping:m,date:e,type:a,txtSetting:p,pdfSetting:f,excelSetting:b})=>{let h={data:_optionalChain([p, 'optionalAccess', _204 => _204.dataTxt, 'optionalAccess', _205 => _205.length])?_optionalChain([p, 'optionalAccess', _206 => _206.dataTxt]):[_optionalChain([p, 'optionalAccess', _207 => _207.dataTxt])],template:_optionalChain([p, 'optionalAccess', _208 => _208.templateTxt])};a==="PDF"?P({pdfSetting:f,date:e,data:d,type:a,columns:s,grouping:m}):a==="TXT"?v(h,_optionalChain([p, 'optionalAccess', _209 => _209.titleTxt])||""):a==="EXCEL"?x({date:e,data:d,type:a,columns:s,grouping:m,excelSetting:b}):(x({date:e,data:d,type:a,columns:s,grouping:m,excelSetting:b}),P({pdfSetting:f,date:e,data:d,type:a,columns:s,grouping:m}),v(h,_optionalChain([p, 'optionalAccess', _210 => _210.titleTxt])||""))};exports.ExportData = et;
//# sourceMappingURL=index.js.map