import{j as q}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:s="No Label",size:z="normal",color:M="primary",allCaps:_=!1,fontColor:S="",...x})=>q.jsx("span",{className:["label",`${z}`,`text-${M}`].join(" "),style:{color:S},...x,children:_?s.toUpperCase():s});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Is this the principal call to action on the page?",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How large should the label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"What color to use",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"Label should be Capitalized or not",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:{value:""},description:"What color should be used for the label",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const I={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["normal","h1","h2","h3"]},color:{control:"select",options:["primary","secondary","tertiary"]},fontColor:{control:"color"}}},e={args:{label:"My Label",size:"normal",allCaps:!1}},a={args:{label:"My Label",size:"h1",allCaps:!0}},r={args:{label:"My Label",size:"normal",color:"secondary"}},o={args:{label:"My Label",size:"normal",color:"tertiary"}},l={args:{label:"My Label",size:"h1",fontColor:"#5517ac"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'normal',
    allCaps: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'h1',
    allCaps: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'secondary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,L,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'h1',
    fontColor: '#5517ac'
  }
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const T=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,l as CustomFontColor,r as Secondary,o as Tertiary,T as __namedExportsOrder,I as default};
//# sourceMappingURL=MyLabel.stories-88dc2bf4.js.map
