import{w as s,f,S as v,j as c}from"./iframe.66843365.js";import{m as u}from"./make-decorator.c9853d37.js";var k="links",m=s.document,L=s.HTMLElement,p=function(e){return f.getChannel().emit(c,e)},l=function(e){var n=e.target;if(n instanceof L){var d=n,a=d.dataset,i=a.sbKind,o=a.sbStory;(i||o)&&(e.preventDefault(),p({kind:i,story:o}))}},r=!1,h=function(){r||(r=!0,m.addEventListener("click",l))},E=function(){r&&(r=!1,m.removeEventListener("click",l))},w=u({name:"withLinks",parameterName:k,wrapper:function(e,n){return h(),f.getChannel().once(v,E),e(n)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var T=[w];export{T as decorators};
//# sourceMappingURL=preview.3a62f334.js.map
