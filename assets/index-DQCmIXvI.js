import{o as u,c as m,t as n,r as g,a as e,F as $,b as k,n as w,d as S,e as c,w as _,f as v,g as L,h as I,i as M,j as F,k as A,l as j,m as N,p as T,q as V,s as H}from"./vendor-Cimec_lI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}})();const h=(a,s)=>{const l=a.__vccOpts||a;for(const[r,o]of s)l[r]=o;return l},O={emits:["danger"],props:["btnName"]};function B(a,s,l,r,o,t){return u(),m("button",{class:"button-danger",role:"button",onClick:s[0]||(s[0]=i=>a.$emit("danger"))},n(l.btnName),1)}const D=h(O,[["render",B],["__scopeId","data-v-f852ab92"]]),q={direction:"",confirm:"Confirm",cancel:"Cancel",search:"Search...",social:"Social Media",contact:"Contact Us",home:"Home",about:"About Us",benefits:"Benefits of honey",title:"Dr/ Doctor Name",description:"here i will show how the text will appear for the site users here i will show how the text will appear for the site users here i will show how the text will appear for the site users here i will show how the text will appear for the site users ",certificate:"Certificate Name here",sectionTitle:"Section Title",sectionSubTitle:"Here Will Be Section SubTitle that will be show the history of the Doctor",city:"City",time:"From 5am to 10pm",phone:"Phone Number",address:"Address Of Clinic"},P={direction:"right-to-left",confirm:"تأكيد",cancel:"إلغاء",search:"بحث...",social:"وسائل التواصل",contact:"اتصل بنا",home:"الرئيسية",about:"من نحن",benefits:"فوائد العسل",title:"د/ اسم الطبيب",description:"هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع",certificate:"اسم الشهادة هنا",sectionTitle:"اسم القسم",sectionSubTitle:"هنا سوف يكون وصف القسم و الذي يصف هنا تاريخ الطبيب العملي",city:"المدينة",time:"من 5 صباحا الى 10 مساءا",phone:"رقم الهاتف",address:"عنوان العيادة"},f={en:q,ar:P},E={emits:["confirm"],inject:["emitter"],components:{DangerButton:D},data(){return{isVisible:!1,language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),callLinks:[{name:"phone",icon:"fa-solid fa-mobile",link:"tel:+79965406181",number:"+7 (996) 540-61-81"},{name:"massenger",icon:"fa-brands fa-facebook-messenger",link:"https://www.messenger.com/t/7995323490533435/"},{name:"instagram",icon:"fa-brands fa-square-instagram",link:"https://www.instagram.com/direct/t/17843074268340093/"},{name:"vkontakte",icon:"fa-brands fa-vk",link:"https://vk.com/im?sel=601321750"},{name:"email",icon:"fa-solid fa-m",link:"mailto:7kk7elmk13@gmail.com"},{name:"whatsapp",icon:"fa-brands fa-square-whatsapp",link:"http://api.whatsapp.com/send?phone=79965906181"},{name:"viber",icon:"fa-brands fa-viber",link:"viber://chat?number=+79965906181"},{name:"telegram",icon:"fa-brands fa-telegram",link:"https://telegram.im/@hakk7elmk13"}],socialLinks:[{name:"github",icon:"fa-brands fa-github",link:"https://github.com/hakk7elmk13"},{name:"facebook",icon:"fa-brands fa-square-facebook",link:"https://t.me/hakk7elmk13"},{name:"instgram",icon:"fa-brands fa-square-instagram",link:"https://t.me/hakk7elmk13"},{name:"vkontakte",icon:"fa-brands fa-vk",link:"https://vk.com/im?sel=601321750"},{name:"x-twitter",icon:"fa-brands fa-x-twitter",link:"https://t.me/hakk7elmk13"},{name:"thread",icon:"fa-brands fa-threads",link:"https://t.me/hakk7elmk13"},{name:"TikTok",icon:"fa-brands fa-tiktok",link:"https://t.me/hakk7elmk13"},{name:"youtube",icon:"fa-brands fa-youtube",link:"https://t.me/hakk7elmk13"}]}},computed:{translate(){return f[this.language]}},methods:{open(){this.isVisible=!0},onCancel(){this.isVisible=!1}},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},W={key:0,class:"alert wow fadeIn"},U={class:"alert-header"},G={class:"social-container"},R={class:"title"},z={class:"social"},Q=["href"],Y={class:"every-social"},J={class:"call-container"},K={class:"title"},Z={class:"call"},X=["href"],ee={class:"every-call"},te={key:0},se={class:"alert-footer"};function ae(a,s,l,r,o,t){const i=g("danger-button");return o.isVisible?(u(),m("div",W,[e("div",U,[e("div",G,[e("div",R,n(t.translate.social),1),e("div",z,[(u(!0),m($,null,k(o.socialLinks,d=>(u(),m("span",{key:d.name},[e("a",{href:d.link},[e("div",Y,[e("i",{class:w(d.icon)},null,2),e("span",null,n(d.name),1)])],8,Q)]))),128))])]),e("div",J,[e("div",K,n(t.translate.contact),1),e("div",Z,[(u(!0),m($,null,k(o.callLinks,d=>(u(),m("span",{key:d.name},[e("a",{href:d.link},[e("div",ee,[e("i",{class:w(d.icon)},null,2),e("span",null,n(d.name),1),d.number?(u(),m("span",te,n(d.number),1)):S("",!0)])],8,X)]))),128))])])]),e("div",se,[c(i,{btnName:t.translate.cancel,onDanger:t.onCancel},null,8,["btnName","onDanger"])])])):S("",!0)}const ne=h(E,[["render",ae],["__scopeId","data-v-3df8e81a"]]),oe={data(){return{languages:{en:"English",ar:"العربية"},language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),currentLanguage:localStorage.getItem("currentLanguageName")==null?"English":localStorage.getItem("currentLanguageName"),languageIconStat:!1,languageMenuStat:"close",theme:localStorage.getItem("theme")==null?"light":localStorage.getItem("theme"),dropMenu:""}},inject:["emitter"],components:{SocialComponent:ne},computed:{translate(){return f[this.language]}},methods:{setLanguage(a,s){localStorage.setItem("language",s),this.language=localStorage.getItem("language"),localStorage.setItem("currentLanguageName",a),this.currentLanguage=localStorage.getItem("currentLanguageName"),this.emitter.emit("setLanguage",s)},setTheme(){localStorage.setItem("theme",this.theme==="dark"?"light":"dark"),this.theme=localStorage.getItem("theme"),this.theme==="dark"?(this.$refs.theme_dark.style.opacity=0,this.$refs.theme_light.style.opacity=1):(this.$refs.theme_light.style.opacity=0,this.$refs.theme_dark.style.opacity=1),this.emitter.emit("setTheme",this.theme)},toggleMenu(){this.dropMenu=this.dropMenu===""?"dropMenu":"",this.dropMenu==="dropMenu"?(this.$refs.menu_open.style.display="none",this.$refs.menu_close.style.display="block"):(this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")},closeMenuAfterClickLink(){this.dropMenu="",window.innerWidth<=992&&(this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")},OpenCloseLang(){this.languageIconStat=!this.languageIconStat,this.languageMenuStat=this.languageIconStat===!0?"open":"close"},openCancelSocialCall(){this.$refs.callSocialSection.isVisible?this.$refs.callSocialSection.onCancel():this.$refs.callSocialSection.open()}},mounted(){this.theme==="dark"?(this.$refs.theme_dark.style.opacity=0,this.$refs.theme_light.style.opacity=1):(this.$refs.theme_light.style.opacity=0,this.$refs.theme_dark.style.opacity=1),(window.onresize=()=>{window.innerWidth>=992?(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="none"):this.dropMenu==="dropMenu"?this.$refs.menu_open.style.display="none":this.$refs.menu_open.style.display="block"})(),window.innerWidth>=992?(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="none"):(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")}},le={class:"setting-menu-container"},ie={class:"search"},ce={class:"search-container"},re=["placeholder"],de={class:"language-container"},ue={class:"current-language"},me={class:"language-name"},ge={class:"language-drop-icon"},pe=["onClick"],he={class:"theme-toggle"},_e={class:"mdi mdi-weather-night",ref:"theme_dark"},fe={class:"fa-regular fa-sun",ref:"theme_light"},ve={class:"SocialCallContainer"},be={class:"menu"},ye={class:"toggle_menu"};function we(a,s,l,r,o,t){const i=g("router-link"),d=g("SocialComponent");return u(),m("header",null,[s[7]||(s[7]=e("div",{class:"logo"},[e("img",{src:"./assets/logo.jpg",alt:"website-logo"})],-1)),e("nav",{class:w(`${o.dropMenu}`)},[e("ul",null,[e("li",null,[c(i,{to:"/micheal-portfolio-eldoctor/",onClick:t.closeMenuAfterClickLink},{default:_(()=>[v(n(t.translate.home),1)]),_:1},8,["onClick"])]),e("li",null,[c(i,{to:"/micheal-portfolio-eldoctor/about",onClick:t.closeMenuAfterClickLink},{default:_(()=>[v(n(t.translate.about),1)]),_:1},8,["onClick"])])])],2),e("div",le,[e("div",{class:w(`setting ${o.dropMenu}`)},[e("div",ie,[e("div",ce,[e("input",{type:"text",class:"search-input",placeholder:t.translate.search},null,8,re),s[5]||(s[5]=e("button",{class:"search-button"},[e("i",{class:"fa-solid fa-magnifying-glass"})],-1))])]),e("div",{class:"language",onClick:s[0]||(s[0]=(...p)=>t.OpenCloseLang&&t.OpenCloseLang(...p))},[e("div",de,[e("div",ue,[e("span",me,n(o.currentLanguage),1),e("span",ge,n(o.languageIconStat?"▲":"▼"),1)]),e("div",{class:w(`all-languages ${o.languageMenuStat}`)},[(u(!0),m($,null,k(o.languages,(p,y)=>(u(),m("div",{class:"every-language",key:y,onClick:C=>t.setLanguage(p,y)},n(p),9,pe))),128))],2)])]),e("div",he,[e("span",{class:"theme-icon",onClick:s[1]||(s[1]=p=>t.setTheme())},[e("i",_e,null,512),e("i",fe,null,512)])]),e("div",ve,[e("span",{onClick:s[2]||(s[2]=(...p)=>t.openCancelSocialCall&&t.openCancelSocialCall(...p))},s[6]||(s[6]=[e("i",{class:"fa-solid fa-phone"},null,-1)]))])],2),e("div",be,[e("div",ye,[e("span",null,[e("i",{class:"fa-solid fa-bars",ref:"menu_open",onClick:s[3]||(s[3]=(...p)=>t.toggleMenu&&t.toggleMenu(...p))},null,512),e("i",{class:"fa-solid fa-xmark",ref:"menu_close",onClick:s[4]||(s[4]=(...p)=>t.toggleMenu&&t.toggleMenu(...p))},null,512)])])])]),c(d,{ref:"callSocialSection"},null,512)])}const $e=h(oe,[["render",we],["__scopeId","data-v-cb3c06d3"]]),ke={};function Ce(a,s,l,r,o,t){return u(),m("main",null,[e("section",null,[L(a.$slots,"default",{},void 0)])])}const Se=h(ke,[["render",Ce],["__scopeId","data-v-ca8b81e8"]]),Ie={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),thisYear:new Date().getFullYear()}},inject:["emitter"],computed:{translate(){return f[this.language]}},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},xe={class:"bottom"};function Le(a,s,l,r,o,t){return u(),m("footer",null,[s[2]||(s[2]=e("div",{class:"top"},[e("div",{class:"content"},"con"),e("div",{class:"links"},"link")],-1)),e("div",xe,[e("span",null,[s[0]||(s[0]=v(" All rights reserved ")),s[1]||(s[1]=e("i",{class:"bx bx-copyright"},null,-1)),v(" "+n(o.thisYear)+" Micheal-Portfolio ",1)])])])}const Me=h(Ie,[["render",Le],["__scopeId","data-v-97b0defd"]]),Fe={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),theme:localStorage.getItem("theme")==null?"light":localStorage.getItem("theme")}},computed:{direction(){return f[this.language].direction}},inject:["emitter"],components:{HeaderComponent:$e,BodyComponent:Se,FooterComponent:Me},mounted(){this.emitter.on("setTheme",a=>{this.theme=a}),this.emitter.on("setLanguage",a=>{this.language=a})}};function Ae(a,s,l,r,o,t){const i=g("HeaderComponent"),d=g("RouterView"),p=g("body-component"),y=g("FooterComponent");return u(),m("div",{class:w(`${o.theme} ${t.direction}`)},[c(i),c(p,null,{default:_(()=>[c(d)]),_:1}),c(y)],2)}const je=h(Fe,[["render",Ae]]),Ne={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},Te={class:"section-container"},Ve={class:"content wow fadeInUp"},He={class:"title"},Oe={class:"description"};function Be(a,s,l,r,o,t){return u(),m("article",null,[e("div",Te,[s[1]||(s[1]=e("div",{class:"image wow fadeInDown"},[e("img",{src:"./assets/doctor.png",alt:""})],-1)),e("div",Ve,[e("div",He,n(t.translate.title),1),e("div",Oe,n(t.translate.description),1),s[0]||(s[0]=I('<div class="social" data-v-d996bbc4><span data-v-d996bbc4><i class="fa-brands fa-square-facebook" data-v-d996bbc4></i></span><span data-v-d996bbc4><i class="fa-brands fa-square-whatsapp" data-v-d996bbc4></i></span><span data-v-d996bbc4><i class="fa-brands fa-youtube" data-v-d996bbc4></i></span><span data-v-d996bbc4><i class="fa-brands fa-tiktok" data-v-d996bbc4></i></span></div>',1))])])])}const De=h(Ne,[["render",Be],["__scopeId","data-v-d996bbc4"]]),qe={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},Pe={class:"section-container"},Ee={class:"certificate wow fadeIn"},We={class:"title"},Ue={class:"description"},Ge={class:"certificate wow fadeIn"},Re={class:"title"},ze={class:"description"},Qe={class:"certificate wow fadeIn"},Ye={class:"title"},Je={class:"description"},Ke={class:"certificate wow fadeIn"},Ze={class:"title"},Xe={class:"description"};function et(a,s,l,r,o,t){return u(),m("article",null,[e("div",Pe,[e("div",Ee,[s[0]||(s[0]=e("div",{class:"image"},[e("img",{src:"https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg"})],-1)),e("div",We,n(t.translate.certificate),1),e("div",Ue,n(t.translate.description),1)]),e("div",Ge,[s[1]||(s[1]=e("div",{class:"image"},[e("img",{src:"https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Award-Certificate-Template-1180x858.jpg"})],-1)),e("div",Re,n(t.translate.certificate),1),e("div",ze,n(t.translate.description),1)]),e("div",Qe,[s[2]||(s[2]=e("div",{class:"image"},[e("img",{src:"https://as2.ftcdn.net/v2/jpg/02/44/16/03/1000_F_244160359_shZHJVWBEGazI6ZlQQDB092OTui4GMFy.jpg"})],-1)),e("div",Ye,n(t.translate.certificate),1),e("div",Je,n(t.translate.description),1)]),e("div",Ke,[s[3]||(s[3]=e("div",{class:"image"},[e("img",{src:"https://as2.ftcdn.net/jpg/03/08/24/85/1000_F_308248555_eJvlUkHB24cQRKNkPAbFQjs8ACcO30nX.jpg"})],-1)),e("div",Ze,n(t.translate.certificate),1),e("div",Xe,n(t.translate.description),1)])])])}const tt=h(qe,[["render",et],["__scopeId","data-v-961ecdbd"]]),st={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},at={class:"section-container wow fadeInLeft"};function nt(a,s,l,r,o,t){const i=g("v-carousel-item"),d=g("v-carousel");return u(),m("article",null,[e("div",at,[c(d,{style:{"border-radius":"10px"},cycle:!0,interval:"6000"},{default:_(()=>[c(i,{src:"https://urology.co.za/wp-content/uploads/2019/06/Urology-Hospital-Adult-Ward-45-1024x684.jpg",cover:""}),c(i,{src:"https://images.unsplash.com/photo-1551601651-2a8555f1a136",cover:""}),c(i,{src:"https://images.unsplash.com/photo-1504439468489-c8920d796a29",cover:""})]),_:1})])])}const ot=h(st,[["render",nt],["__scopeId","data-v-5779578f"]]),lt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},it={class:"section-container"},ct={class:"section-title"},rt={class:"wow fadeInLeft"},dt={class:"wow fadeInRight"},ut={class:"section-content wow fadeInLeft"},mt={class:"card",style:{width:"18rem"}},gt={class:"card-body"},pt={class:"card-text"},ht={class:"card",style:{width:"18rem"}},_t={class:"card-body"},ft={class:"card-text"},vt={class:"card",style:{width:"18rem"}},bt={class:"card-body"},yt={class:"card-text"},wt={class:"card",style:{width:"18rem"}},$t={class:"card-body"},kt={class:"card-text"},Ct={class:"card",style:{width:"18rem"}},St={class:"card-body"},It={class:"card-text"},xt={class:"card",style:{width:"18rem"}},Lt={class:"card-body"},Mt={class:"card-text"},Ft={class:"card",style:{width:"18rem"}},At={class:"card-body"},jt={class:"card-text"},Nt={class:"card",style:{width:"18rem"}},Tt={class:"card-body"},Vt={class:"card-text"};function Ht(a,s,l,r,o,t){return u(),m("article",null,[e("div",it,[e("div",ct,[e("h2",rt,n(t.translate.sectionTitle),1),e("p",dt,n(t.translate.sectionSubTitle),1)]),e("div",ut,[e("div",mt,[s[0]||(s[0]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/best-hospitals-in-houston.png",class:"card-img-top",alt:"..."},null,-1)),e("div",gt,[e("p",pt,n(t.translate.description),1)])]),e("div",ht,[s[1]||(s[1]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/memorial-hospital-300x200.png",class:"card-img-top",alt:"..."},null,-1)),e("div",_t,[e("p",ft,n(t.translate.description),1)])]),e("div",vt,[s[2]||(s[2]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/best-hospitals-in-houston.png",class:"card-img-top",alt:"..."},null,-1)),e("div",bt,[e("p",yt,n(t.translate.description),1)])]),e("div",wt,[s[3]||(s[3]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/memorial-hospital-300x200.png",class:"card-img-top",alt:"..."},null,-1)),e("div",$t,[e("p",kt,n(t.translate.description),1)])]),e("div",Ct,[s[4]||(s[4]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/best-hospitals-in-houston.png",class:"card-img-top",alt:"..."},null,-1)),e("div",St,[e("p",It,n(t.translate.description),1)])]),e("div",xt,[s[5]||(s[5]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/memorial-hospital-300x200.png",class:"card-img-top",alt:"..."},null,-1)),e("div",Lt,[e("p",Mt,n(t.translate.description),1)])]),e("div",Ft,[s[6]||(s[6]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/best-hospitals-in-houston.png",class:"card-img-top",alt:"..."},null,-1)),e("div",At,[e("p",jt,n(t.translate.description),1)])]),e("div",Nt,[s[7]||(s[7]=e("img",{src:"https://www.attorneystevelee.com/wp-content/uploads/2024/10/memorial-hospital-300x200.png",class:"card-img-top",alt:"..."},null,-1)),e("div",Tt,[e("p",Vt,n(t.translate.description),1)])])])])])}const Ot=h(lt,[["render",Ht],["__scopeId","data-v-8bcbe167"]]),Bt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},Dt={class:"section-container"},qt={class:"text-h6"},Pt={class:"text-h6"},Et={class:"text-h6"},Wt={class:"text-h6"};function Ut(a,s,l,r,o,t){const i=g("v-timeline-item"),d=g("v-timeline");return u(),m("article",null,[e("div",Dt,[c(d,{align:"center",side:"end","dot-color":"var(--c-primary-section)","line-color":"var(--c-primary-section)"},{default:_(()=>[c(i,null,{opposite:_(()=>[v(n(t.translate.city),1)]),default:_(()=>[e("div",null,[e("div",qt,n(t.translate.time),1),e("p",null,n(t.translate.phone)+" : 0123456789",1),e("p",null,n(t.translate.address),1)])]),_:1}),c(i,null,{opposite:_(()=>[v(n(t.translate.city),1)]),default:_(()=>[e("div",null,[e("div",Pt,n(t.translate.time),1),e("p",null,n(t.translate.phone)+" : 0123456789",1),e("p",null,n(t.translate.address),1)])]),_:1}),c(i,null,{opposite:_(()=>[v(n(t.translate.city),1)]),default:_(()=>[e("div",null,[e("div",Et,n(t.translate.time),1),e("p",null,n(t.translate.phone)+" : 0123456789",1),e("p",null,n(t.translate.address),1)])]),_:1}),c(i,null,{opposite:_(()=>[v(n(t.translate.city),1)]),default:_(()=>[e("div",null,[e("div",Wt,n(t.translate.time),1),e("p",null,n(t.translate.phone)+" : 0123456789",1),e("p",null,n(t.translate.address),1)])]),_:1})]),_:1})])])}const Gt=h(Bt,[["render",Ut],["__scopeId","data-v-b62efdb1"]]),Rt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{LandingComponent:De,CertificateComponent:tt,GalleryComponent:ot,HistoryComponent:Ot,AddressComponent:Gt},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},zt={class:"view-container"};function Qt(a,s,l,r,o,t){const i=g("LandingComponent"),d=g("CertificateComponent"),p=g("GalleryComponent"),y=g("HistoryComponent"),C=g("AddressComponent");return u(),m("div",zt,[c(i),c(d),c(p),c(y),c(C)])}const Yt=h(Rt,[["render",Qt],["__scopeId","data-v-e7ae2e6a"]]),Jt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},Kt={class:"section-container"},Zt={class:"content wow fadeInLeft"},Xt={class:"title"},es={class:"description"};function ts(a,s,l,r,o,t){return u(),m("article",null,[e("div",Kt,[e("div",Zt,[e("div",Xt,n(t.translate.title),1),e("div",es,n(t.translate.description),1),s[0]||(s[0]=I('<div class="social" data-v-ece7af20><span data-v-ece7af20><i class="fa-brands fa-square-facebook" data-v-ece7af20></i></span><span data-v-ece7af20><i class="fa-brands fa-square-whatsapp" data-v-ece7af20></i></span><span data-v-ece7af20><i class="fa-brands fa-youtube" data-v-ece7af20></i></span><span data-v-ece7af20><i class="fa-brands fa-tiktok" data-v-ece7af20></i></span></div>',1))])])])}const ss=h(Jt,[["render",ts],["__scopeId","data-v-ece7af20"]]),as={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return f[this.language]}},methods:{},components:{AboutComponent:ss},mounted(){this.emitter.on("setLanguage",a=>{this.language=a})}},ns={class:"view-container"};function os(a,s,l,r,o,t){const i=g("AboutComponent");return u(),m("div",ns,[c(i)])}const ls=h(as,[["render",os],["__scopeId","data-v-c766f086"]]),is=[{path:"/micheal-portfolio-eldoctor/",name:"home",component:Yt,meta:{title:"Home"}},{path:"/micheal-portfolio-eldoctor/about",name:"about",component:ls,meta:{title:"About Us"}}],x=M({history:F("/"),routes:is});x.beforeEach((a,s,l)=>{document.title=a.meta.title,l()});const cs=A({components:j,directives:N,theme:{defaultTheme:"light",themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),rs=H(),b=T(je);b.use(V());b.provide("emitter",rs);b.use(cs);b.use(x);b.directive("truncate",{beforeMount(a,s){const l=s.value||100,r=a.textContent;r.length>l&&(a.textContent=r.slice(0,l)+"...")}});b.config.globalProperties.$truncate=function(a,s){return a?a.length<=s?a:a.slice(0,s)+"...":""};b.mount("#app");
