(()=>{var e,t,r={},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".index.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@funda/icons:",n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var c,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var p=(t,o)=>{c.onerror=c.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((r,n)=>{o=e[t]=[r,n]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,[a,c,s]=r,l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);for(s&&s(n),t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0},r=self.webpackChunk_funda_icons=self.webpackChunk_funda_icons||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),new Vue({el:"#app",data:{icons:[],searchKeyword:""},mounted(){this.getIcons()},computed:{filteredIcons(){return""===this.searchKeyword?this.icons:this.icons.filter((e=>e.title.toLowerCase().includes(this.searchKeyword.toLowerCase())))}},methods:{getIcons(){n.e(578).then(n.bind(n,221)).then((e=>{Object.keys(e).forEach(((t,r)=>{this.icons.push(e[t])}))})).catch((e=>`An error occurred while loading the component: ${e}`))},async copy(e){try{await navigator.clipboard.writeText(e.svg),alert(`"${e.title}" svg is copied to your clipboard`)}catch(t){alert(`Can't copy ${e.title} raw svg`)}}}})})();