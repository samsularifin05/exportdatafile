"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var A=["EXCEL","PDF","TXT","ALL"];function x(n){let p=new Date(n),m=p.getFullYear(),o=String(p.getMonth()+1).padStart(2,"0"),a=String(p.getDate()).padStart(2,"0"),b=String(p.getHours()).padStart(2,"0"),g=String(p.getMinutes()).padStart(2,"0"),f=String(p.getSeconds()).padStart(2,"0");return`${a}-${o}-${m} ${b}:${g}:${f}`}function U(n){return n.every(p=>A.includes(p))}var _exceljs = require('exceljs'); var _exceljs2 = _interopRequireDefault(_exceljs);var _=async({columns:n,data:p,grouping:m,date:o,excelSetting:a,title:b,footerSetting:g})=>{let f=new _exceljs2.default.Workbook;n=n.filter(r=>!_optionalChain([r, 'access', _2 => _2.options, 'optionalAccess', _3 => _3.disabledColumn]));let s=f.addWorksheet(b||_optionalChain([a, 'optionalAccess', _4 => _4.titleExcel])),k=n.length,R=s.addRow([]);if(R.getCell(1).value=b||_optionalChain([a, 'optionalAccess', _5 => _5.titleExcel]),R.getCell(1).alignment={horizontal:"center"},s.mergeCells(`A${R.number}:${String.fromCharCode(64+k)}${R.number}`),R.eachCell(r=>{r.font={color:{argb:"000000"},bold:!0,size:12}}),o){let r=s.addRow([]);r.getCell(1).value=`${o.caption?o.caption:"Tanggal "} : ${_optionalChain([o, 'optionalAccess', _6 => _6.start_date])} ${_optionalChain([o, 'optionalAccess', _7 => _7.end_date])?`s/d ${_optionalChain([o, 'optionalAccess', _8 => _8.end_date])}`:""}`,r.getCell(1).alignment={horizontal:"center"},s.mergeCells(`A${r.number}:${String.fromCharCode(64+k)}${r.number}`),r.eachCell(t=>{t.font={color:{argb:"00000"},bold:!0,size:12}})}let w=s.addRow([]);w.getCell(1).value=_optionalChain([a, 'optionalAccess', _9 => _9.additionalTextHeader])||"",w.getCell(1).alignment={horizontal:"center"},s.mergeCells(`A${w.number}:${String.fromCharCode(64+k)}${w.number}`),w.eachCell(r=>{r.font={color:{argb:"000000"},bold:!0,size:12}}),s.addRow(n).eachCell(r=>{r.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _10 => _10.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _11 => _11.bgColor])||"#E8E5E5"}},r.font={color:{argb:_optionalChain([a, 'optionalAccess', _12 => _12.txtColor])},bold:!0};let t=r.value;r.value&&(r.alignment={horizontal:`${_optionalChain([t, 'optionalAccess', _13 => _13.options, 'optionalAccess', _14 => _14.halign])?_optionalChain([t, 'optionalAccess', _15 => _15.options, 'optionalAccess', _16 => _16.halign]):_optionalChain([t, 'optionalAccess', _17 => _17.options, 'optionalAccess', _18 => _18.format])==="RP"||_optionalChain([t, 'optionalAccess', _19 => _19.options, 'optionalAccess', _20 => _20.format])==="GR"||_optionalChain([t, 'optionalAccess', _21 => _21.options, 'optionalAccess', _22 => _22.format])==="NUMBER"?"right":"left"}`},r.value=t.label)});let $={};p.forEach(r=>{if(m.length>0){let t=m.map(l=>({value:r[l]!==void 0?`${j(l)} : `+r[l]:""}));s.addRow(t.map(l=>l.value));let C={};r.detail.forEach(l=>{let h=n.map(c=>{let i=_optionalChain([c, 'optionalAccess', _23 => _23.options, 'optionalAccess', _24 => _24.format])==="DATETIME"?x(l[c.key]):l[c.key],E={horizontal:_optionalChain([c, 'optionalAccess', _25 => _25.options, 'optionalAccess', _26 => _26.halign])?_optionalChain([c, 'optionalAccess', _27 => _27.options, 'optionalAccess', _28 => _28.halign]):_optionalChain([c, 'optionalAccess', _29 => _29.options, 'optionalAccess', _30 => _30.format])==="RP"||_optionalChain([c, 'optionalAccess', _31 => _31.options, 'optionalAccess', _32 => _32.format])==="GR"||_optionalChain([c, 'optionalAccess', _33 => _33.options, 'optionalAccess', _34 => _34.format])==="NUMBER"?"right":"left"},d=c.key;return $[d]=($[d]||0)+Number(i),C[d]=(C[d]||0)+Number(i),{value:i,alignment:E,numFmt:_optionalChain([c, 'optionalAccess', _35 => _35.options, 'optionalAccess', _36 => _36.format])==="RP"?"#,##0":_optionalChain([c, 'optionalAccess', _37 => _37.options, 'optionalAccess', _38 => _38.format])==="GR"?"#,##0.000":void 0}}),T=s.addRow(h.map(c=>c.value));h.forEach((c,i)=>{let E=T.getCell(i+1);E.alignment=c.alignment,c.numFmt&&(E.numFmt=c.numFmt)})});let e=s.addRow(n.map(()=>null));n.forEach((l,h)=>{if(_optionalChain([l, 'optionalAccess', _39 => _39.options, 'optionalAccess', _40 => _40.format])==="RP"||_optionalChain([l, 'optionalAccess', _41 => _41.options, 'optionalAccess', _42 => _42.format])==="GR"||_optionalChain([l, 'optionalAccess', _43 => _43.options, 'optionalAccess', _44 => _44.format])==="NUMBER"){let c=p.length+4-1,i=`SUM(${String.fromCharCode(65+h)}4:${String.fromCharCode(65+h)}${c})`,E=e.getCell(h+1),d=_optionalChain([g, 'optionalAccess', _45 => _45.subTotal, 'optionalAccess', _46 => _46.enableCount])&&m.length>0?" : "+r.detail.length:"",P=_optionalChain([g, 'optionalAccess', _47 => _47.subTotal, 'optionalAccess', _48 => _48.captionItem])?_optionalChain([g, 'optionalAccess', _49 => _49.subTotal, 'optionalAccess', _50 => _50.captionItem]):"";e.getCell(1).value=`${_optionalChain([g, 'optionalAccess', _51 => _51.subTotal, 'optionalAccess', _52 => _52.caption])||"SUB TOTAL"} ${d} ${P}`,e.getCell(1).alignment={horizontal:"center"},E.numFmt=_optionalChain([l, 'optionalAccess', _53 => _53.options, 'optionalAccess', _54 => _54.format])==="GR"?"#,##0.000":"#,##0",E.value={formula:i},e.getCell(h+1).value=_optionalChain([l, 'optionalAccess', _55 => _55.options, 'access', _56 => _56.disabledFooter])?"":C[l.key]}else e.getCell(h+1).value=""}),_optionalChain([a, 'optionalAccess', _57 => _57.grandTotalSetting, 'optionalAccess', _58 => _58.colSpan])&&s.mergeCells(`A${e.number}:${String.fromCharCode(64+Number(_optionalChain([a, 'optionalAccess', _59 => _59.grandTotalSetting, 'optionalAccess', _60 => _60.colSpan])))}${e.number}`),e.eachCell(l=>{l.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _61 => _61.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _62 => _62.bgColor])||"#E8E5E5"}},l.font={color:{argb:_optionalChain([a, 'optionalAccess', _63 => _63.txtColor])},bold:!0}})}else{let t=n.map(e=>{let l=_optionalChain([e, 'optionalAccess', _64 => _64.options, 'optionalAccess', _65 => _65.format])==="DATETIME"?x(r[e.key]):r[e.key],h={vertical:"middle",horizontal:_optionalChain([e, 'optionalAccess', _66 => _66.options, 'optionalAccess', _67 => _67.halign])?_optionalChain([e, 'optionalAccess', _68 => _68.options, 'optionalAccess', _69 => _69.halign]):_optionalChain([e, 'optionalAccess', _70 => _70.options, 'optionalAccess', _71 => _71.format])==="RP"||_optionalChain([e, 'optionalAccess', _72 => _72.options, 'optionalAccess', _73 => _73.format])==="GR"||_optionalChain([e, 'optionalAccess', _74 => _74.options, 'optionalAccess', _75 => _75.format])==="NUMBER"?"right":"left"},T=e.key;return $[T]=($[T]||0)+Number(l),{value:l,options:_optionalChain([e, 'optionalAccess', _76 => _76.options]),alignment:h,numFmt:_optionalChain([e, 'optionalAccess', _77 => _77.options, 'optionalAccess', _78 => _78.format])==="RP"?"#,##0":_optionalChain([e, 'optionalAccess', _79 => _79.options, 'optionalAccess', _80 => _80.format])==="GR"?"#,##0.000":void 0}}),C=s.addRow(t.map(e=>e.value));t.forEach((e,l)=>{let h=C.getCell(l+1),T=e.alignment.vertical?String(e.alignment.vertical||"bottom"):"bottom",c="";(T==="middle"||T==="bottom"||T==="justify"||T==="distributed"||T==="top")&&(c=T),h.alignment={horizontal:e.alignment.horizontal,vertical:c},e.numFmt&&(h.numFmt=e.numFmt)})}});let y=s.addRow(n.map(()=>null));n.forEach((r,t)=>{if(_optionalChain([r, 'optionalAccess', _81 => _81.options, 'optionalAccess', _82 => _82.format])==="RP"||_optionalChain([r, 'optionalAccess', _83 => _83.options, 'optionalAccess', _84 => _84.format])==="GR"||_optionalChain([r, 'optionalAccess', _85 => _85.options, 'optionalAccess', _86 => _86.format])==="NUMBER"){let e=p.length+4-1,l=`SUM(${String.fromCharCode(65+t)}4:${String.fromCharCode(65+t)}${e})`,h=y.getCell(t+1),T=_optionalChain([g, 'optionalAccess', _87 => _87.grandTotal, 'optionalAccess', _88 => _88.enableCount])?m.length>0?" : "+p.map(E=>E.detail.length).reduce((E,d)=>E+d,0):" : "+p.length:"",c=_optionalChain([g, 'optionalAccess', _89 => _89.grandTotal, 'optionalAccess', _90 => _90.captionItem])?_optionalChain([g, 'optionalAccess', _91 => _91.grandTotal, 'optionalAccess', _92 => _92.captionItem]):"",i=`${_optionalChain([g, 'optionalAccess', _93 => _93.grandTotal, 'optionalAccess', _94 => _94.caption])||"GRAND TOTAL"} ${T} ${c}`;y.getCell(1).value=i,y.getCell(1).alignment={horizontal:"center"},h.numFmt=_optionalChain([r, 'optionalAccess', _95 => _95.options, 'optionalAccess', _96 => _96.format])==="GR"?"#,##0.000":"#,##0",h.value={formula:l},y.getCell(t+1).value=_optionalChain([r, 'optionalAccess', _97 => _97.options, 'access', _98 => _98.disabledFooter])?"":$[r.key]}else y.getCell(t+1).value=""}),_optionalChain([a, 'optionalAccess', _99 => _99.grandTotalSetting, 'optionalAccess', _100 => _100.colSpan])&&s.mergeCells(`A${y.number}:${String.fromCharCode(64+Number(_optionalChain([a, 'optionalAccess', _101 => _101.grandTotalSetting, 'optionalAccess', _102 => _102.colSpan])))}${y.number}`),y.eachCell(r=>{r.fill={type:"pattern",pattern:"solid",fgColor:{argb:_optionalChain([a, 'optionalAccess', _103 => _103.bgColor])||"#E8E5E5"},bgColor:{argb:_optionalChain([a, 'optionalAccess', _104 => _104.bgColor])||"#E8E5E5"}},r.font={color:{argb:_optionalChain([a, 'optionalAccess', _105 => _105.txtColor])},bold:!0}}),_optionalChain([a, 'optionalAccess', _106 => _106.customize])&&a.customize(s);let D=await f.xlsx.writeBuffer(),u=new Blob([D],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),G=document.createElement("a");G.href=URL.createObjectURL(u),G.download=`${b||_optionalChain([a, 'optionalAccess', _107 => _107.titleExcel])}.xlsx`,document.body.appendChild(G),G.click(),document.body.removeChild(G)},N=_,j=n=>n.split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ");var _jspdf = require('jspdf'); var _jspdf2 = _interopRequireDefault(_jspdf);var _jspdfautotable = require('jspdf-autotable'); var _jspdfautotable2 = _interopRequireDefault(_jspdfautotable);var O=({columns:n,data:p,grouping:m,pdfSetting:o,date:a,title:b,footerSetting:g})=>{let f=new (0, _jspdf2.default)(_optionalChain([o, 'optionalAccess', _108 => _108.orientation]),_optionalChain([o, 'optionalAccess', _109 => _109.unit]),[_optionalChain([o, 'optionalAccess', _110 => _110.width])||297,_optionalChain([o, 'optionalAccess', _111 => _111.height])||210]),s=[],k=a?30:20;n=n.filter(t=>!_optionalChain([t, 'access', _112 => _112.options, 'optionalAccess', _113 => _113.disabledColumn])),f.setFontSize(10);let R=f.internal.pageSize.getWidth(),w=f.splitTextToSize(_optionalChain([o, 'optionalAccess', _114 => _114.textHeaderLeft])||"",110);f.text(w,15,18),f.text(`${b||_optionalChain([o, 'optionalAccess', _115 => _115.titlePdf])}`,R-15,18,{align:"right"}),a&&f.text(`${a.caption?a.caption:"TANGGAL "} : ${_optionalChain([a, 'optionalAccess', _116 => _116.start_date])} ${_optionalChain([a, 'optionalAccess', _117 => _117.end_date])?`s/d ${_optionalChain([a, 'optionalAccess', _118 => _118.end_date])}`:""}`,R-15,22,{align:"right"}),f.setProperties({title:b||_optionalChain([o, 'optionalAccess', _119 => _119.titlePdf])}),_optionalChain([o, 'optionalAccess', _120 => _120.finalY])&&(k=o.finalY);let I=n.map(t=>({content:t.label,key:t.key,options:_optionalChain([t, 'optionalAccess', _121 => _121.options]),styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _122 => _122.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _123 => _123.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:_optionalChain([t, 'optionalAccess', _124 => _124.options, 'optionalAccess', _125 => _125.halign])?_optionalChain([t, 'optionalAccess', _126 => _126.options, 'optionalAccess', _127 => _127.halign]):_optionalChain([t, 'optionalAccess', _128 => _128.options, 'optionalAccess', _129 => _129.format])==="RP"||_optionalChain([t, 'optionalAccess', _130 => _130.options, 'optionalAccess', _131 => _131.format])==="GR"||_optionalChain([t, 'optionalAccess', _132 => _132.options, 'optionalAccess', _133 => _133.format])==="NUMBER"?"right":"left"}}));s.push(I);let $={};p.forEach(t=>{if(m.length>0){let C=m.map(i=>({content:t[i]!==void 0?`${H(i)} : `+t[i]:""}));s.push(C);let e={};t.detail.forEach(i=>{let E=n.map(d=>{let P=i[d.key],v=d.key;return $[v]=($[v]||0)+Number(P),e[v]=(e[v]||0)+Number(P),{content:(()=>{switch(_optionalChain([d, 'optionalAccess', _134 => _134.options, 'optionalAccess', _135 => _135.format])){case"RP":return i[d.key]!==void 0?Number(i[d.key]||0).toLocaleString("kr-ko"):"";case"GR":return i[d.key]!==void 0?Number(i[d.key]||0).toFixed(3):"";case"NUMBER":return i[d.key]!==void 0?Number(i[d.key]||0):"";case"DATETIME":return i[d.key]!==void 0?x(i[d.key]||new Date):"";default:return i[d.key]!==void 0?i[d.key].toString():""}})(),styles:{halign:_optionalChain([d, 'optionalAccess', _136 => _136.options, 'optionalAccess', _137 => _137.halign])?_optionalChain([d, 'optionalAccess', _138 => _138.options, 'optionalAccess', _139 => _139.halign]):_optionalChain([d, 'optionalAccess', _140 => _140.options, 'optionalAccess', _141 => _141.format])==="RP"||_optionalChain([d, 'optionalAccess', _142 => _142.options, 'optionalAccess', _143 => _143.format])==="GR"||_optionalChain([d, 'optionalAccess', _144 => _144.options, 'optionalAccess', _145 => _145.format])==="NUMBER"||typeof i[d.key]=="number"?"right":"left"}}});s.push(E)});let l=[];n.forEach(i=>{let E=e[i.key];if(_optionalChain([i, 'optionalAccess', _146 => _146.options, 'optionalAccess', _147 => _147.format])==="RP"||_optionalChain([i, 'optionalAccess', _148 => _148.options, 'optionalAccess', _149 => _149.format])==="GR"||_optionalChain([i, 'optionalAccess', _150 => _150.options, 'optionalAccess', _151 => _151.format])==="NUMBER"){let d={content:_optionalChain([i, 'optionalAccess', _152 => _152.options, 'optionalAccess', _153 => _153.disabledFooter])?"":(()=>{switch(_optionalChain([i, 'optionalAccess', _154 => _154.options, 'optionalAccess', _155 => _155.format])){case"RP":return E.toLocaleString("kr-ko");case"GR":return E.toFixed(3);case"NUMBER":return E;default:return E.toString()}})(),styles:{halign:_optionalChain([i, 'optionalAccess', _156 => _156.options, 'optionalAccess', _157 => _157.halign])?_optionalChain([i, 'optionalAccess', _158 => _158.options, 'optionalAccess', _159 => _159.halign]):_optionalChain([i, 'optionalAccess', _160 => _160.options, 'optionalAccess', _161 => _161.format])==="RP"||_optionalChain([i, 'optionalAccess', _162 => _162.options, 'optionalAccess', _163 => _163.format])==="GR"||_optionalChain([i, 'optionalAccess', _164 => _164.options, 'optionalAccess', _165 => _165.format])==="NUMBER"?"right":"left",textColor:`#${_optionalChain([o, 'optionalAccess', _166 => _166.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _167 => _167.bgColor])||"E8E5E5"}`,fontStyle:"bold"}};l.push(d)}else l.push({content:"",styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _168 => _168.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _169 => _169.bgColor])||"E8E5E5"}`,fontStyle:"bold"}})});let h=_optionalChain([o, 'optionalAccess', _170 => _170.grandTotalSetting, 'optionalAccess', _171 => _171.colSpan])?Number(_optionalChain([o, 'optionalAccess', _172 => _172.grandTotalSetting, 'optionalAccess', _173 => _173.colSpan])||0)+1:0,T=_optionalChain([g, 'optionalAccess', _174 => _174.subTotal, 'optionalAccess', _175 => _175.enableCount])&&m.length>0?" : "+t.detail.length:"",c=_optionalChain([g, 'optionalAccess', _176 => _176.subTotal, 'optionalAccess', _177 => _177.captionItem])?_optionalChain([g, 'optionalAccess', _178 => _178.subTotal, 'optionalAccess', _179 => _179.captionItem]):"";l[0]={content:`${_optionalChain([g, 'optionalAccess', _180 => _180.subTotal, 'optionalAccess', _181 => _181.caption])||"SUB TOTAL"} ${T} ${c}`,colSpan:h,styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _182 => _182.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _183 => _183.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:"center"}},_optionalChain([o, 'optionalAccess', _184 => _184.grandTotalSetting, 'optionalAccess', _185 => _185.colSpan])&&l.splice(1,_optionalChain([o, 'optionalAccess', _186 => _186.grandTotalSetting, 'optionalAccess', _187 => _187.colSpan])),s.push(l)}else{let C=n.map(e=>{let l=t[e.key],h=e.key;return $[h]=($[h]||0)+Number(l),{options:_optionalChain([e, 'optionalAccess', _188 => _188.options]),content:(()=>{switch(_optionalChain([e, 'optionalAccess', _189 => _189.options, 'optionalAccess', _190 => _190.format])){case"RP":return t[e.key]!==void 0?Number(t[e.key]||0).toLocaleString("kr-ko"):"";case"GR":return t[e.key]!==void 0?Number(t[e.key]||0).toFixed(3):"";case"NUMBER":return t[e.key]!==void 0?Number(t[e.key]||0):"";case"DATETIME":return t[e.key]!==void 0?x(t[e.key]||new Date):"";default:return t[e.key]!==void 0?t[e.key].toString():""}})(),styles:{halign:_optionalChain([e, 'optionalAccess', _191 => _191.options, 'optionalAccess', _192 => _192.halign])?_optionalChain([e, 'optionalAccess', _193 => _193.options, 'optionalAccess', _194 => _194.halign]):_optionalChain([e, 'optionalAccess', _195 => _195.options, 'optionalAccess', _196 => _196.format])==="RP"||_optionalChain([e, 'optionalAccess', _197 => _197.options, 'optionalAccess', _198 => _198.format])==="GR"||_optionalChain([e, 'optionalAccess', _199 => _199.options, 'optionalAccess', _200 => _200.format])==="NUMBER"||typeof t[e.key]=="number"?"right":"left"}}});s.push(C)}});let y=[];n.forEach(t=>{let C=$[t.key];if(_optionalChain([t, 'optionalAccess', _201 => _201.options, 'optionalAccess', _202 => _202.format])==="RP"||_optionalChain([t, 'optionalAccess', _203 => _203.options, 'optionalAccess', _204 => _204.format])==="GR"||_optionalChain([t, 'optionalAccess', _205 => _205.options, 'optionalAccess', _206 => _206.format])==="NUMBER"){let e={options:_optionalChain([t, 'optionalAccess', _207 => _207.options]),content:_optionalChain([t, 'optionalAccess', _208 => _208.options, 'optionalAccess', _209 => _209.disabledFooter])?"":(()=>{switch(_optionalChain([t, 'optionalAccess', _210 => _210.options, 'optionalAccess', _211 => _211.format])){case"RP":return C.toLocaleString("kr-ko");case"GR":return C.toFixed(3);case"NUMBER":return C;default:return C.toString()}})(),styles:{halign:_optionalChain([t, 'optionalAccess', _212 => _212.options, 'optionalAccess', _213 => _213.halign])?_optionalChain([t, 'optionalAccess', _214 => _214.options, 'optionalAccess', _215 => _215.halign]):_optionalChain([t, 'optionalAccess', _216 => _216.options, 'optionalAccess', _217 => _217.format])==="RP"||_optionalChain([t, 'optionalAccess', _218 => _218.options, 'optionalAccess', _219 => _219.format])==="GR"||_optionalChain([t, 'optionalAccess', _220 => _220.options, 'optionalAccess', _221 => _221.format])==="NUMBER"?"right":"left",textColor:`#${_optionalChain([o, 'optionalAccess', _222 => _222.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _223 => _223.bgColor])||"E8E5E5"}`,fontStyle:"bold"}};y.push(e)}else y.push({content:"",options:_optionalChain([t, 'optionalAccess', _224 => _224.options]),styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _225 => _225.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _226 => _226.bgColor])||"E8E5E5"}`,fontStyle:"bold"}})});let D=_optionalChain([o, 'optionalAccess', _227 => _227.grandTotalSetting, 'optionalAccess', _228 => _228.colSpan])?Number(_optionalChain([o, 'optionalAccess', _229 => _229.grandTotalSetting, 'optionalAccess', _230 => _230.colSpan])||0)+1:0;if(!_optionalChain([o, 'optionalAccess', _231 => _231.grandTotalSetting, 'optionalAccess', _232 => _232.disableGrandTotal])){let t=_optionalChain([g, 'optionalAccess', _233 => _233.grandTotal, 'optionalAccess', _234 => _234.enableCount])?m.length>0?" : "+p.map(e=>e.detail.length).reduce((e,l)=>e+l,0):" : "+p.length:"",C=_optionalChain([g, 'optionalAccess', _235 => _235.grandTotal, 'optionalAccess', _236 => _236.captionItem])?_optionalChain([g, 'optionalAccess', _237 => _237.grandTotal, 'optionalAccess', _238 => _238.captionItem]):"";y[0]={content:`${_optionalChain([g, 'optionalAccess', _239 => _239.grandTotal, 'optionalAccess', _240 => _240.caption])||"GRAND TOTAL"} ${t} ${C}`,colSpan:D,styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _241 => _241.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _242 => _242.bgColor])||"E8E5E5"}`,fontStyle:"bold",halign:"center"}},_optionalChain([o, 'optionalAccess', _243 => _243.grandTotalSetting, 'optionalAccess', _244 => _244.colSpan])&&y.splice(1,_optionalChain([o, 'optionalAccess', _245 => _245.grandTotalSetting, 'optionalAccess', _246 => _246.colSpan])),s.push(y)}s.push([{content:`Print Date : ${x(`${new Date}`)}`,colSpan:n.length,styles:{textColor:`#${_optionalChain([o, 'optionalAccess', _247 => _247.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _248 => _248.bgColor])||"E8E5E5"}`,fontStyle:"italic"}}]),_jspdfautotable2.default.call(void 0, f,{head:[],body:s,startY:k,theme:_optionalChain([o, 'optionalAccess', _249 => _249.theme])||"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:_optionalChain([o, 'optionalAccess', _250 => _250.fontSIze])||8},headStyles:{fontSize:_optionalChain([o, 'optionalAccess', _251 => _251.fontSIze])||8,textColor:`#${_optionalChain([o, 'optionalAccess', _252 => _252.txtColor])||"000"}`,fillColor:`#${_optionalChain([o, 'optionalAccess', _253 => _253.bgColor])||"E8E5E5"}`},tableLineColor:[255,255,255]}),s=[],k=f.lastAutoTable.finalY;let u=f.internal.getNumberOfPages(),G=f.internal.pageSize.width,r=f.internal.pageSize.height;f.setFontSize(10);for(let t=1;t<u+1;t++){let C=G/2,e=r-10;f.setPage(t),f.text(`${t} of ${u}`,C,e,{align:"center"})}if(typeof _optionalChain([o, 'optionalAccess', _254 => _254.customize])=="function"&&o.customize(f,k,_jspdfautotable2.default),_optionalChain([o, 'optionalAccess', _255 => _255.openNewTab])){let t=f.output("bloburl");window.open(t)}else f.save(`${b||_optionalChain([o, 'optionalAccess', _256 => _256.titlePdf])}.pdf`)},H=n=>n.split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "),L=O;var X=n=>{let p=[],m=n.copy?2:1;for(let o=0;o<m;o++){let a=n.data.map(b=>{let g=n.template;for(;/\n!!LOOP\((.+)\)(\{\n(.*\n)+\})\n/gm.exec(g);)g=g.replace(/\n!!LOOP\((.+)\)(\{\n(.*\n)+\})\n/,(f,s,k)=>{let R=k.replace(/^\{/,"").replace(/\}$/,"");return(Array.isArray(b[s])?b[s]:[b[s]]).reduce(($,y)=>$+R.replace(/\{([a-z0-9_]+)\}/gm,D=>{let u=D.replace(/(\{|\})/g,"");if(u.match(/nama_barang/)){let G=u.match(/nama_barang/),r=u==="nama_barang2"?[20,40]:u==="nama_barang3"?[40,60]:[0,20];return _optionalChain([y, 'access', _257 => _257[G], 'optionalAccess', _258 => _258.slice, 'call', _259 => _259(...r), 'access', _260 => _260.trim, 'call', _261 => _261()])||""}if(u.match(/deskripsi_jual/)){let G=u.match(/deskripsi_jual/),r=u==="deskripsi_jual2"?[20,40]:u==="deskripsi_jual3"?[40,60]:[0,20];return _optionalChain([y, 'access', _262 => _262[G], 'optionalAccess', _263 => _263.slice, 'call', _264 => _264(...r), 'access', _265 => _265.trim, 'call', _266 => _266()])||""}if(u.match(/deskripsi/)){let G=u.match(/deskripsi/),r=u==="deskripsi2"?[20,40]:u==="deskripsi3"?[40,60]:[0,20];return _optionalChain([y, 'access', _267 => _267[G], 'optionalAccess', _268 => _268.slice, 'call', _269 => _269(...r), 'access', _270 => _270.trim, 'call', _271 => _271()])||""}return y[u]||""}),"").replace(/\n(\s)+\n/gm,`
`)});return g.replace(/\{([a-z0-9_]+)\}/gm,f=>{let s=f.replace(/(\{|\})/g,"");return s.match(/auto_cut/)?`
VA`:b[s]||""}).replace(/\n(\s)+\n/gm,`
`).replace(/~new_line~/gm,`
`).replace(/!!LOOP\(detail\)/g,"").replace(/[}{]/g,"")});for(let b in a)a[b]+=`

`;p.push(...a)}return p},Y=async(n,p)=>{let m=X(n),o=new Blob([_optionalChain([m, 'optionalAccess', _272 => _272.join, 'call', _273 => _273(`
`)])||""],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(o),a.download=p,document.body.appendChild(a),a.click(),document.body.removeChild(a)},z=Y;var mt=({columns:n,data:p,grouping:m,date:o,type:a,txtSetting:b,pdfSetting:g,excelSetting:f,title:s,footerSetting:k})=>{let R={data:[_optionalChain([b, 'optionalAccess', _274 => _274.dataTxt])],template:_optionalChain([b, 'optionalAccess', _275 => _275.templateTxt]),copy:_optionalChain([b, 'optionalAccess', _276 => _276.copy])};if(p.length===0)throw new Error("Data is required");if(a.length===0)throw new Error("Type is required");if(!U(a))throw new Error('Type Export must use ["EXCEL", "PDF", "TXT", "ALL"]');a.forEach(w=>{w==="PDF"?L({pdfSetting:g,date:o,data:p,type:a,columns:n,grouping:m,title:s,footerSetting:k}):w==="TXT"?z(R,_optionalChain([b, 'optionalAccess', _277 => _277.titleTxt])||""):w==="EXCEL"?N({date:o,data:p,type:a,columns:n,grouping:m,excelSetting:f,title:s,footerSetting:k}):(N({date:o,data:p,type:a,columns:n,grouping:m,excelSetting:f,title:s}),L({pdfSetting:g,date:o,data:p,type:a,columns:n,grouping:m,title:s}),z(R,_optionalChain([b, 'optionalAccess', _278 => _278.titleTxt])||""))})};exports.ExportData = mt;
//# sourceMappingURL=index.js.map