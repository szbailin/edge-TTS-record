(function(e){function t(t){for(var i,o,a=t[0],c=t[1],l=t[2],p=0,h=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Home")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("v-textarea",{attrs:{outlined:"",title:"文本框",label:"请输入文本",rows:"8",autofocus:"",loading:!!e.speaking&&"warning"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-row",[n("v-col",{staticClass:"pb-1"},[n("v-select",{attrs:{dense:"",label:"请选择语音",outlined:"",items:e.voiceList},model:{value:e.selectedVoiceItem,callback:function(t){e.selectedVoiceItem=t},expression:"selectedVoiceItem"}})],1)],1),n("v-row",e._l([e.rate,e.pitch],(function(t){return n("v-col",{key:t.label,staticClass:"pt-0"},[n("v-slider",{staticClass:"pr-5",attrs:{label:t.label,"persistent-hint":"",hint:t.hint,"thumb-label":"","thumb-size":"24","tick-size":"4",ticks:"","track-fill-color":"success",max:"2",min:"0",step:"0.1"},scopedSlots:e._u([{key:"append",fn:function(){return[n("span",{staticStyle:{width:"5px"}},[e._v(e._s(t.val))])]},proxy:!0}],null,!0),model:{value:t.val,callback:function(n){e.$set(t,"val",n)},expression:"ex.val"}})],1)})),1)],1),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{staticClass:"py-5 mb-5",attrs:{color:e.speaking?"red":"primary",outlined:"",block:""},on:{click:function(t){e.speaking?e.stopSpeak():e.speak()}}},[e._v(e._s(e.speaking?"停止":"试听"))]),n("v-btn",{staticClass:"py-5",attrs:{color:"primary",block:""},on:{click:e.record}},[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.recording,expression:"recording"}],staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-image-filter-tilt-shift mdi-spin")]),e._v("录制 ")],1)],1)],1)],1)],1)],1)},a=[],c=(n("b0c0"),n("a47d")),l=n.n(c),u={data:function(){return{text:"",selectedVoiceItem:"0",synth:window.speechSynthesis,voiceList:[],voices:[],utterThis:null,rate:{label:"速度",val:1,hint:""},pitch:{label:"音调",val:1,hint:"此项可能是无效的"},speaking:!1,recording:!1}},created:function(){var e=this;setTimeout((function(){e.populateVoiceList()}),200)},methods:{populateVoiceList:function(){for(var e in this.voices=this.synth.getVoices().sort((function(e,t){var n=e.name.toUpperCase(),i=t.name.toUpperCase();return n<i?-1:n==i?0:1})),this.voices)this.voiceList.push({value:e,text:this.voices[e].name+" ("+this.voices[e].lang+")"}),this.voiceList[e].text.indexOf("Xiaoxiao")>=0&&(this.selectedVoiceItem=e+"")},speak:function(){var e=this;this.speaking=!0,this.synth.speaking?console.error("speechSynthesis.speaking"):(""==this.text&&(this.text="请先输入要朗读的文本"),this.utterThis=new SpeechSynthesisUtterance(this.text),this.utterThis.onend=function(){console.log("SpeechSynthesisUtterance.onend"),e.speaking=!1,e.recording&&(e.recording=!1,l.a.stopRecord())},this.utterThis.onerror=function(){console.error("SpeechSynthesisUtterance.onerror")},this.utterThis.voice=this.voices[this.selectedVoiceItem],this.utterThis.rate=this.rate.val,this.utterThis.pitch=this.pitch.val,this.synth.speak(this.utterThis))},stopSpeak:function(){this.synth.pause(),this.synth.cancel()},record:function(){l.a.startRecord(),this.recording=!0,this.speak()}}},p=u,h=n("2877"),v=n("6544"),d=n.n(v),f=n("8336"),b=n("62ad"),m=n("a523"),y=n("132d"),g=n("0fd9"),k=n("b974"),x=n("ba0d"),w=n("a844"),S=Object(h["a"])(p,o,a,!1,null,null,null),V=S.exports;d()(S,{VBtn:f["a"],VCol:b["a"],VContainer:m["a"],VIcon:y["a"],VRow:g["a"],VSelect:k["a"],VSlider:x["a"],VTextarea:w["a"]});var _={name:"App",components:{Home:V},data:function(){return{}}},O=_,T=n("7496"),j=n("f6c4"),C=Object(h["a"])(O,s,r,!1,null,null,null),I=C.exports;d()(C,{VApp:T["a"],VMain:j["a"]});var P=n("f309");i["a"].use(P["a"]);var L=new P["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:L,render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.5d183bbe.js.map