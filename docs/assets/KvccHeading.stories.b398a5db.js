import{d as n,o as a,g as s,w as o,i as c,t as p,r}from"./vue.esm-bundler.e8cdff82.js";const i=["h1","h2","h3","h4","h5","h6"],t=n({__name:"KvccHeading",props:{type:null,text:null},setup(e){return(m,u)=>(a(),s(r(e.type),{class:"font-bold"},{default:o(()=>[c(p(e.text),1)]),_:1}))}});t.__docgenInfo={exportName:"default",displayName:"KvccHeading",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"HeadingType"}},{name:"text",required:!0,type:{name:"string"}}]};const _={title:"Example/KVCC Heading",component:t,argTypes:{text:{type:{name:"string"}},type:{type:{name:"enum",value:i}}}},d=e=>({components:{KvccHeading:t},setup(){return{args:e}},template:'<kvcc-heading v-bind="args" />'}),l=d.bind({});l.args={text:"Default",type:"h1"};const y=["Default"];export{l as Default,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=KvccHeading.stories.b398a5db.js.map
