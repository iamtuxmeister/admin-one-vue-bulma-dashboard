"use strict";(self["webpackChunkadmin_one_vue_bulma_dashboard"]=self["webpackChunkadmin_one_vue_bulma_dashboard"]||[]).push([[845],{4750:function(t,e,a){a.d(e,{Z:function(){return m}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[a("a",{staticClass:"button",class:t.type},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?a("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},r=[],i=a(5706),o=(0,i.aZ)({name:"FilePicker",props:{accept:{type:String,default:null},type:{type:String,default:"is-primary"}},emits:["input"],data(){return{file:null}},computed:{buttonLabel(){return this.file?"Pick another file":"Pick a file"}},methods:{upload(t){this.file=t,this.$emit("input",t)}}}),n=o,l=a(1001),u=(0,l.Z)(n,s,r,!1,null,null,null),m=u.exports},522:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Profile "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("user-avatar",{staticClass:"image has-max-width is-aligned-center"}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form")],1)],1)},r=[],i=a(5706),o=a(629),n=a(7762),l=a(3541),u=a(5597),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Avatar"}},[a("file-picker",{attrs:{type:"is-info"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("b-field",{attrs:{grouped:""}},[a("div",{staticClass:"control"},[a("b-button",{attrs:{"native-type":"submit",type:"is-info",loading:t.isLoading}},[t._v(" Submit ")])],1),a("div",{staticClass:"control"},[a("b-button",{attrs:{type:"is-info","native-type":"button",outlined:""}},[t._v(" Reset ")])],1)])],1)],1)])},c=[],d=a(4750),p=(0,i.aZ)({name:"ProfileUpdateForm",components:{CardComponent:n.Z,FilePicker:d.Z},data(){return{isLoading:!1}},computed:{userName:{get:function(){return this.$store.state.userName},set:function(t){this.$store.commit("user",{name:t})}},userEmail:{get:function(){return this.$store.state.userEmail},set:function(t){this.$store.commit("user",{email:t})}}},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})}),750)}}}),f=p,b=a(1001),h=(0,b.Z)(f,m,c,!1,null,null,null),w=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("b-button",{attrs:{"native-type":"submit",type:"is-info",loading:t.isLoading}},[t._v(" Submit ")])],1)])],1)])},v=[],g=(0,i.aZ)({name:"PasswordUpdateForm",components:{CardComponent:n.Z},data(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})}),750)}}}),y=g,k=(0,b.Z)(y,_,v,!1,null,null,null),C=k.exports,Z=a(2736),E=a(9034),P=(0,i.aZ)({name:"Profile",components:{UserAvatar:E.Z,Tiles:Z.Z,PasswordUpdateForm:C,ProfileUpdateForm:w,HeroBar:u.Z,TitleBar:l.Z,CardComponent:n.Z},data(){return{titleStack:["Admin","Profile"]}},computed:{...(0,o.rn)(["userName","userEmail"])}}),$=P,q=(0,b.Z)($,s,r,!1,null,null,null),N=q.exports}}]);
//# sourceMappingURL=profile.78cd34e9.js.map