import{d as y,l as q,m as d,g as _,i as g,j as I,p as b,v as h,e as u,n as A,u as l,r as x,q as z,x as S,y as Z}from"./vue.esm-bundler.c9bda787.js";/* empty css             */import{_ as C}from"./KvccFormControl.ea9c79cd.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";var r=(e=>(e.TEXT="text",e.EMAIL="email",e.PASSWORD="password",e.SEARCH="search",e))(r||{});const K=e=>(S("data-v-9187825b"),e=e(),Z(),e),L=["id","list","name","placeholder","required","type"],N=K(()=>u("span",null,null,-1)),o=y({__name:"KvccLabeledInput",props:{label:null,type:null,id:null,placeholder:null,required:{type:Boolean},listId:null,value:null},emits:["input"],setup(e,{emit:p}){const n=e,c=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,a=q(n.value),s=d(()=>n.type?n.type:r.TEXT),m=d(()=>({valid:a.value?c.test(a.value):!1})),v=t=>{if(!t.target){console.error("No target found in event");return}p("input",t.target.value)};return(t,i)=>(_(),g(C,{"input-id":e.id,label:e.label,required:e.required},{default:I(()=>[b(u("input",{onInput:v,class:A(l(m)),id:e.id,list:e.listId,name:e.id,placeholder:e.placeholder,required:e.required,type:l(s),"onUpdate:modelValue":i[0]||(i[0]=f=>a.value=f)},null,42,L),[[h,a.value]]),N,l(s)===l(r).SEARCH?x(t.$slots,"default",{key:0},void 0,!0):z("",!0)]),_:3},8,["input-id","label","required"]))}});const k=E(o,[["__scopeId","data-v-9187825b"]]);o.__docgenInfo={exportName:"default",displayName:"KvccLabeledInput",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"InputType"}},{name:"id",required:!0,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"listId",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}}],events:[{name:"input",type:{names:["string"]}}],slots:[{name:"default"}]};export{r as I,k as K};
//# sourceMappingURL=KvccLabeledInput.182a182b.js.map
