import{d as r,a as o,o as u,b as c,e as d,t as i,n as b,f as m,u as p}from"./vue.esm-bundler.e8cdff82.js";const f=["blue","green","red"],y=["button","submit","reset"],g=["aria-disabled","type","disabled"],a=r({__name:"KvccButton",props:{color:null,disabled:{type:Boolean},text:null,type:{default:"button"}},setup(e){const l=e,n=o(()=>{switch(l.color){case"blue":return["#1d4ed8","#1e40af"];case"green":return["#047857","#065f46"];case"red":return["#b91c1c","#991b1b"];default:return["#334155","#1e293b"]}}),s=o(()=>({"--bg-color":n.value[0],"--bg-color-hover":n.value[1]}));return(T,C)=>(u(),c("button",{"aria-disabled":e.disabled,type:e.type,class:b(e.color),disabled:e.disabled,style:m(p(s))},[d("span",null,i(e.text),1)],14,g))}});a.__docgenInfo={exportName:"default",displayName:"KvccButton",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"ButtonColor"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"text",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"ButtonType"},defaultValue:{func:!1,value:'"button"'}}]};const N={title:"Example/KVCC Button",component:a,argTypes:{color:{type:{name:"enum",value:f}},disabled:{type:{name:"boolean"},defaultValue:!1},onClick:{},type:{type:{name:"enum",value:y}}}},t=e=>({components:{KvccButton:a},setup(){return{args:e}},template:'<kvcc-button v-bind="args" />'}),B=t.bind({});B.args={text:"Default"};const v=t.bind({});v.args={color:"blue",text:"Blue"};const x=t.bind({});x.args={color:"green",text:"Green"};const _=t.bind({});_.args={color:"red",text:"Red"};const O=["Default","Blue","Green","Red"];export{v as Blue,B as Default,x as Green,_ as Red,O as __namedExportsOrder,N as default};
//# sourceMappingURL=KvccButton.stories.22af5688.js.map