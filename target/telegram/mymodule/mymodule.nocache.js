function mymodule(){var O='bootstrap',P='begin',Q='gwt.codesvr.mymodule=',R='gwt.codesvr=',S='mymodule',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='mymodule::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='mymodule.nocache.js',Ib='base',Jb='//',Kb='device.features',Lb='ontouchstart',Mb='googletv',Nb='ipad;',Ob='largeDisplay',Pb='Touch',Qb='Arrows',Rb='opera mini',Sb='opera mobi',Tb='mobile',Ub='windows phone',Vb='iphone',Wb='ipod;',Xb='smallDisplay',Yb='android',Zb='Mouse',$b=2,_b=3,ac=4,bc='user.agent',cc='webkit',dc='safari',ec='msie',fc=10,gc=11,hc='ie10',ic=9,jc='ie9',kc=8,lc='ie8',mc='gecko',nc='gecko1_8',oc='selectingPermutation',pc='mymodule.devmode.js',qc='smallDisplayTouch',rc='07E96639D7856231D57CB5C0D87A9787',sc='smallDisplayArrows',tc='0C867D738A3E48142D9E3E59A7077172',uc='0E81D43BB89DCAD09E1AA1BE3B8F1F9C',vc='largeDisplayTouch',wc='1A6E1E355818D33B35D5916D3025E67A',xc='26E8B7AEC1DB850AE5806D606A2A5392',yc='2B1626E8C4A9D5D1144FEF81C702F013',zc='largeDisplayMouse',Ac='2FCF417A1A23509CC686EC892226CAA5',Bc='30478281B95156CFBF2F48226D691528',Cc='largeDisplayArrows',Dc='30F71B8FF51390C6D26AF5E07D9365C6',Ec='45DCD8004E01658773F1AA325D17CA10',Fc='4E3A9237CB60156C8DAEF97C7E32B16A',Gc='506049793761C048D31B531233803423',Hc='5B3F3E90476B0ACD935E7E0DA1E6D7B6',Ic='66CC30992FF3CDD92AF0673A6A388DC2',Jc='8CD59FA8C3AD02DD55E6618E0340DF16',Kc='AF77670DC4E9A19BD9A22A35D44A6686',Lc='BA27095668040ABAD736EC59B3D7DC48',Mc='C3BB2D2CE7100E8F3EB8DEB08C7B0229',Nc='C425BCAB527FA4DC597D058A81FCBE5E',Oc='D35CF1D9286815471AF996A069CBCC6A',Pc='D8ACC2A0F7B8730073CC797E362349A5',Qc='E8E4C279F95D25984D11D9CC25462D69',Rc='F36C27DD39C80145B7E714612EFCE3D1',Sc='F61FB3E55A0D78AC625329B3E861FAEB',Tc='FEDA16257B051334B037AB4805C69AE2',Uc=':',Vc='.cache.js',Wc='loadExternalRefs',Xc='end',Yc='http:',Zc='file:',$c='_gwt_dummy_',_c='__gwtDevModeHook:mymodule',ad='Ignoring non-whitelisted Dev Mode URL: ',bd=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
mymodule.__sendStats=r;mymodule.__moduleName=S;mymodule.__errFn=null;mymodule.__moduleBase=U;mymodule.__softPermutationId=V;mymodule.__computePropValue=null;mymodule.__getPropMap=null;mymodule.__installRunAsyncCode=function(){};mymodule.__gwtStartLoadingFragment=function(){return null};mymodule.__gwt_isKnownPropertyValue=function(){return false};mymodule.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};mymodule.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[mymodule.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
mymodule.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(mymodule.__errFn){n.onerror=function(){mymodule.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
mymodule.__startLoadingFragment=function(a){return D(a)};mymodule.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;mymodule.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return mymodule.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){var a=navigator.userAgent.toLowerCase();var b=Lb in window;if(a.indexOf(Mb)!=-1||a.indexOf(Nb)!=-1){return Ob+(b?Pb:Qb)}else if(a.indexOf(Rb)!=-1||(a.indexOf(Sb)!=-1||(a.indexOf(Tb)!=-1||(a.indexOf(Ub)!=-1||(a.indexOf(Vb)!=-1||a.indexOf(Wb)!=-1))))){return Xb+(b?Pb:Qb)}else if(a.indexOf(Yb)!=-1){return Ob+(b?Pb:Qb)}else{return Ob+(b?Pb:Zb)}};i[Kb]={largeDisplayArrows:V,largeDisplayMouse:W,largeDisplayTouch:$b,smallDisplayArrows:_b,smallDisplayTouch:ac};j[bc]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(cc)!=-1}())return dc;if(function(){return a.indexOf(ec)!=-1&&(b>=fc&&b<gc)}())return hc;if(function(){return a.indexOf(ec)!=-1&&(b>=ic&&b<gc)}())return jc;if(function(){return a.indexOf(ec)!=-1&&(b>=kc&&b<gc)}())return lc;if(function(){return a.indexOf(mc)!=-1||b>=gc}())return nc;return bb};i[bc]={gecko1_8:V,ie10:W,ie8:$b,ie9:_b,safari:ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};mymodule.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};mymodule.__computePropValue=k;o.__gwt_activeModules[S].bindings=mymodule.__getPropMap;r(O,oc);if(q()){return D(pc)}var l;try{h([qc,hc],rc);h([sc,lc],tc);h([sc,jc],uc);h([vc,nc],wc);h([sc,nc],xc);h([qc,nc],yc);h([zc,nc],Ac);h([qc,lc],Bc);h([Cc,hc],Dc);h([zc,dc],Ec);h([sc,hc],Fc);h([vc,dc],Gc);h([zc,jc],Hc);h([Cc,jc],Ic);h([zc,hc],Jc);h([zc,lc],Kc);h([qc,dc],Lc);h([sc,dc],Mc);h([qc,jc],Nc);h([vc,jc],Oc);h([Cc,nc],Pc);h([vc,lc],Qc);h([Cc,dc],Rc);h([Cc,lc],Sc);h([vc,hc],Tc);l=f[k(Kb)][k(bc)];var m=l.indexOf(Uc);if(m!=-1){g=parseInt(l.substring(m+W),fc);l=l.substring(V,m)}}catch(a){}mymodule.__softPermutationId=g;return D(l+Vc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Wc,P);r(Wc,Xc)}
B();mymodule.__moduleBase=C();t[S].moduleBase=mymodule.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Yc||o.location.protocol==Zc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=$c;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=_c;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(ad+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+bd]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Xc);A(H);return true}
mymodule.succeeded=mymodule();