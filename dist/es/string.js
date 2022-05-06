export function strLen(n,e){var r,t;"number"==typeof e?e={enLen:1,nonEnLen:e}:((e=e||{}).enLen=null!==(r=e.enLen)&&void 0!==r?r:1,e.nonEnLen=null!==(t=e.nonEnLen)&&void 0!==t?t:2);let o=0;for(let r=n.length-1;r>=0;r--)o+=n.charCodeAt(r)>255?e.nonEnLen||0:e.enLen||0;return o}export function cutStr(n,e,r){(r=r||{}).enLen=Number(r.enLen)||1,r.nonEnLen=Number(r.nonEnLen)||2,r.ellipsis=r.ellipsis||"...";const t=strLen(n=String(n),r);if(t<=e)return n;e-=strLen(r.ellipsis,r);let o="",l=-1;for(;e>0&&++l<t;)(e-=n.charCodeAt(l)>255?r.nonEnLen:r.enLen)>=0&&(o+=n.charAt(l));return o+=r.ellipsis,o}export function escapeHTML(n){if(null==n)return n;const e={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};return String(n).replace(/["'&<>]/g,(n=>e[n]))}export function removeTags(n){return null==n?"":String(n).replace(/<.+?>/g,"")}export function nl2br(n){return null==n?n:String(n).replace(/\r?\n/g,"<br />")}export function randomStr(n,e){if(!(n|=0)||n<0)throw new Error('"length" must be a number greater than 0');let r="";do{r+=Math.random().toString(36).substr(2)}while(r.length<n);return r=r.substr(0,n),null!=e&&(r=e+r),r}export function uuidV4(){let n=Date.now();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(n+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const r=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?r:3&r|8).toString(16)}))}export function compareVersions(n,e){if(!n||!e)throw new Error("Please specify both verA and verB");const r=/(\.0+)+$/,t=String(n).replace(r,"").split("."),o=String(e).replace(r,"").split("."),l=Math.min(t.length,o.length);for(let n=0;n<l;n++){const e=parseInt(t[n])-parseInt(o[n]);if(e)return e}return t.length-o.length}