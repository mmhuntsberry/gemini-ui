var f=Object.defineProperty;var a=(t,n)=>f(t,"name",{value:n,configurable:!0});import{_ as s,f as g,n as m}from"./iframe.1f2b3d36.js";var u=s,C=g,x=m,h=RangeError,i=String.fromCharCode,v=String.fromCodePoint,l=C([].join),c=!!v&&v.length!=1;u({target:"String",stat:!0,arity:1,forced:c},{fromCodePoint:a(function(n){for(var e=[],d=arguments.length,o=0,r;d>o;){if(r=+arguments[o++],x(r,1114111)!==r)throw h(r+" is not a valid code point");e[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return l(e,"")},"fromCodePoint")});
//# sourceMappingURL=es.string.from-code-point.9dcae08b.js.map
