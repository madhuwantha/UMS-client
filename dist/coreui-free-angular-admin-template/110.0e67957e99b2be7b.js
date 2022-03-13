"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[110],{7110:(J,_,d)=>{d.r(_),d.d(_,{UserModule:()=>x,routes:()=>v});var u=d(9808),o=d(2382),e=d(4893),p=d(9560),Z=d(7418),g=d(520);let c=(()=>{class i{constructor(t,r){this.constService=t,this.http=r,this.url="",this.url=`${this.constService.domain}/user`}add(t){return this.http.post(`${this.url}/create/`,t)}addProperty(t){return this.http.post(`${this.url}/add-property/`,t)}update(t,r){return this.http.put(`${this.url}/update/${r}/`,Object.assign(Object.assign({},t),{modified:new Date}))}get(t){return this.http.get(`${this.url}/get/${t}/`)}getAll(){return this.http.get(`${this.url}/all/`)}delete(t){return this.http.post(`${this.url}/remove/`,{custom_id:t})}deleteProperty(t){return this.http.post(`${this.url}/remove/property/`,{p_id:t})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Z.W),e.LFG(g.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var m=d(3575);function f(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",0)(2,"div",31)(3,"form",32)(4,"div",6)(5,"label",13),e._uU(6,"Property name "),e.qZA(),e.TgZ(7,"div",8),e._UZ(8,"input",33),e.qZA()(),e.TgZ(9,"div",6)(10,"label",13),e._uU(11,"Property address "),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",34),e.qZA()(),e.TgZ(14,"div",6)(15,"label",35),e._uU(16,"Radius"),e.qZA(),e.TgZ(17,"div",8),e._UZ(18,"input",36),e.qZA()(),e.TgZ(19,"div",6)(20,"label",37),e._uU(21,"Latitude "),e.qZA(),e.TgZ(22,"div",8),e._UZ(23,"input",38),e.qZA()(),e.TgZ(24,"div",6)(25,"label",13),e._uU(26,"Longitude "),e.qZA(),e.TgZ(27,"div",8),e._UZ(28,"input",39),e.qZA()()()(),e.TgZ(29,"div",40)(30,"button",41),e.NdJ("click",function(){const s=e.CHM(t).index;return e.oxw().delete(s)}),e._uU(31,"remove"),e.qZA()()()()}if(2&i){const t=n.$implicit,r=e.oxw();e.xp6(3),e.Q6J("formGroup",r.getFormGroup(t))}}let b=(()=>{class i{constructor(t,r,a,s){this.router=t,this.fb=r,this.userService=a,this.confirmationDialogService=s,this.userForm=this.fb.group({user_id:new o.NI(""),user_name:new o.NI(""),email:new o.NI(""),device_token:new o.NI(""),is_premium_user:new o.NI(""),did_accept_to_sand_privacy_policy:new o.NI(""),date_accepted_to_sand_privacy_policy:new o.NI(""),fire_monitoring_is_on:new o.NI(""),weather_monitoring_is_on:new o.NI(""),properties:this.fb.array([])})}get properties(){return this.userForm.controls.properties}add(){const t=this.fb.group({radius:new o.NI(""),latitude:new o.NI(""),longitude:new o.NI(""),property_name:new o.NI(""),property_address:new o.NI("")});this.properties.push(t)}delete(t){this.properties.removeAt(t)}getFormGroup(t){return t}ngOnInit(){}submit(){this.confirmationDialogService.confirm("Please confirm..","Do you really want to save ?").then(t=>{t&&this.userService.add(this.userForm.value).subscribe(r=>{this.router.navigate(["/user/list"])})}).catch(()=>{console.log("err")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.F0),e.Y36(o.qu),e.Y36(c),e.Y36(m.O))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-add"]],decls:92,vars:10,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"r","form-group","row"],["for","user_name",1,"col-md-3","col-form-label"],[1,"col-md-9"],["formControlName","user_id","type","text","id","user_id","placeholder","user id",1,"form-control"],["formControlName","user_name","type","text","id","user_name","placeholder","user name",1,"form-control"],["for","email",1,"col-md-3","col-form-label"],["formControlName","email","type","email","id","email","placeholder","email",1,"form-control"],["for","device_token",1,"col-md-3","col-form-label"],["formControlName","device_token","type","text","id","device_token","placeholder","device token",1,"form-control"],[1,"col-md-3","col-form-label"],[1,"form-check","form-check-inline","mr-1"],["formControlName","is_premium_user","type","radio",1,"form-check-input",3,"value"],[1,"form-check-label"],["formControlName","did_accept_to_sand_privacy_policy","type","radio",1,"form-check-input",3,"value"],["for","date_accepted_to_sand_privacy_policy",1,"col-md-3","col-form-label"],["formControlName","date_accepted_to_sand_privacy_policy","type","date","id","date_accepted_to_sand_privacy_policy","placeholder","Name",1,"form-control"],["formControlName","fire_monitoring_is_on","type","radio",1,"form-check-input",3,"value"],[1,"col-md-9","col-form-label"],["formControlName","weather_monitoring_is_on","type","radio",1,"form-check-input",3,"value"],["type","nnn",1,"span-bts",3,"click"],["formArrayName","properties",1,"col-md-9","col-form-label"],["class","card",4,"ngFor","ngForOf"],[1,"form-group","row"],["type","submit",1,"btn","btn-sm","btn-primary"],[1,"fa","fa-dot-circle-o"],[1,"col-10"],[1,"r","form-group","row","p",3,"formGroup"],["formControlName","property_name","type","text","id","property_name","placeholder","property name",1,"form-control"],["formControlName","property_address","type","text","id","property_address","placeholder","Property address",1,"form-control"],["for","radius",1,"col-md-3","col-form-label"],["formControlName","radius","type","number","id","radius","placeholder","radius",1,"form-control"],["for","latitude",1,"col-md-3","col-form-label"],["formControlName","latitude","type","number","id","latitude","placeholder","latitude",1,"form-control"],["formControlName","longitude","type","number","id","longitude","placeholder","longitude",1,"form-control"],[1,"col-2"],[3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"strong"),e._uU(5,"Add User"),e.qZA()(),e.TgZ(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"User Id "),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.qZA()(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15,"User Name "),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"input",10),e.qZA()(),e.TgZ(18,"div",6)(19,"label",11),e._uU(20,"Email "),e.qZA(),e.TgZ(21,"div",8),e._UZ(22,"input",12),e.qZA()(),e.TgZ(23,"div",6)(24,"label",13),e._uU(25,"Device Token "),e.qZA(),e.TgZ(26,"div",8),e._UZ(27,"input",14),e.qZA()(),e.TgZ(28,"div",6)(29,"label",15),e._uU(30,"Is Premium User "),e.qZA(),e.TgZ(31,"div",8)(32,"div",16),e._UZ(33,"input",17),e.TgZ(34,"label",18),e._uU(35,"Yes"),e.qZA()(),e.TgZ(36,"div",16),e._UZ(37,"input",17),e.TgZ(38,"label",18),e._uU(39,"No"),e.qZA()()()(),e.TgZ(40,"div",6)(41,"label",15),e._uU(42,"Did accept to sand privacy policy "),e.qZA(),e.TgZ(43,"div",8)(44,"div",16),e._UZ(45,"input",19),e.TgZ(46,"label",18),e._uU(47,"Yes"),e.qZA()(),e.TgZ(48,"div",16),e._UZ(49,"input",19),e.TgZ(50,"label",18),e._uU(51,"No"),e.qZA()()()(),e.TgZ(52,"div",6)(53,"label",20),e._uU(54,"Date accept to sand privacy policy "),e.qZA(),e.TgZ(55,"div",8),e._UZ(56,"input",21),e.qZA()(),e.TgZ(57,"div",6)(58,"label",15),e._uU(59,"Fire monitoring is on "),e.qZA(),e.TgZ(60,"div",8)(61,"div",16),e._UZ(62,"input",22),e.TgZ(63,"label",18),e._uU(64,"Yes"),e.qZA()(),e.TgZ(65,"div",16),e._UZ(66,"input",22),e.TgZ(67,"label",18),e._uU(68,"No"),e.qZA()()()(),e.TgZ(69,"div",6)(70,"label",15),e._uU(71,"Weather monitoring is on "),e.qZA(),e.TgZ(72,"div",23)(73,"div",16),e._UZ(74,"input",24),e.TgZ(75,"label",18),e._uU(76,"Yes"),e.qZA()(),e.TgZ(77,"div",16),e._UZ(78,"input",24),e.TgZ(79,"label",18),e._uU(80,"No"),e.qZA()()()(),e.TgZ(81,"div",6)(82,"label",15),e._uU(83," Properties "),e.TgZ(84,"span",25),e.NdJ("click",function(){return r.add()}),e._uU(85,"+"),e.qZA()(),e.TgZ(86,"div",26),e.YNc(87,f,32,1,"div",27),e.qZA()(),e.TgZ(88,"div",28)(89,"button",29),e._UZ(90,"i",30),e._uU(91," Submit"),e.qZA()()()()()()()),2&t&&(e.xp6(7),e.Q6J("formGroup",r.userForm),e.xp6(26),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(13),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(9),e.Q6J("ngForOf",r.properties.controls))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o._,o.CE,u.sg,o.wV],styles:[".r[_ngcontent-%COMP%]{margin-top:10px!important}.span-bts[_ngcontent-%COMP%]{background:lightgrey;border-radius:5px;padding:5px;cursor:pointer}.span-bts[_ngcontent-%COMP%]:hover{background:darkgrey}.p[_ngcontent-%COMP%]{margin-top:10px;padding:10px}"]}),i})();const h=function(i){return["../view",i]},U=function(i){return["../edit",i]};function y(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"div",8)(7,"a",9),e._uU(8,"View"),e.qZA(),e.TgZ(9,"a",9),e._uU(10,"Edit"),e.qZA(),e.TgZ(11,"button",10),e.NdJ("click",function(a){return e.CHM(t),e.oxw().delete(a)}),e._uU(12,"Delete"),e.qZA()()()()}if(2&i){const t=n.$implicit;e.xp6(2),e.Oqu(t.user_name),e.xp6(2),e.Oqu(t.email),e.xp6(3),e.Q6J("routerLink",e.VKq(5,h,t.custom_id)),e.xp6(2),e.Q6J("routerLink",e.VKq(7,U,t.custom_id)),e.xp6(2),e.Q6J("value",t.custom_id)}}let T=(()=>{class i{constructor(t,r){this.userService=t,this.confirmationDialogService=r,this.userList=[]}ngOnInit(){this.userService.getAll().subscribe(t=>{this.userList=t})}delete(t){this.confirmationDialogService.confirm("Please confirm..","Do you really want to delete ?").then(r=>{r&&this.userService.delete(t.target.value).subscribe(a=>{this.userService.getAll().subscribe(s=>{this.userList=s})})}).catch(()=>{console.log("err")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c),e.Y36(m.O))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-list"]],decls:17,vars:1,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"fa","fa-align-justify"],[1,"card-body"],[1,"table","table-bordered","table-striped","table-sm"],[4,"ngFor","ngForOf"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-secondary",3,"routerLink"],["type","button",1,"btn","btn-secondary",3,"value","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"div",5)(6,"table",6)(7,"thead")(8,"tr")(9,"th"),e._uU(10,"User Name"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Email"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Action"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,y,13,9,"tr",7),e.qZA()()()()()()),2&t&&(e.xp6(16),e.Q6J("ngForOf",r.userList))},directives:[u.sg,p.yS],styles:[""]}),i})();function A(i,n){if(1&i&&(e.TgZ(0,"div",13)(1,"form",14)(2,"div",5)(3,"label",6),e._uU(4,"Property name "),e.qZA(),e.TgZ(5,"div",15),e._UZ(6,"input",16),e.qZA()(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"Property address "),e.qZA(),e.TgZ(10,"div",15),e._UZ(11,"input",17),e.qZA()(),e.TgZ(12,"div",5)(13,"label",18),e._uU(14,"Radius"),e.qZA(),e.TgZ(15,"div",15),e._UZ(16,"input",19),e.qZA()(),e.TgZ(17,"div",5)(18,"label",20),e._uU(19,"Latitude "),e.qZA(),e.TgZ(20,"div",15),e._UZ(21,"input",21),e.qZA()(),e.TgZ(22,"div",5)(23,"label",6),e._uU(24,"Longitude "),e.qZA(),e.TgZ(25,"div",15),e._UZ(26,"input",22),e.qZA()()()()),2&i){const t=n.$implicit,r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.getFormGroup(t))}}function q(i,n){1&i&&(e.TgZ(0,"div",23)(1,"button",24),e._UZ(2,"i",25),e._uU(3," Submit"),e.qZA()())}function N(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",27)(2,"div",28)(3,"div",1)(4,"div",2)(5,"span",3),e._uU(6,"Property name"),e.qZA()(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"div",1)(9,"div",2)(10,"span",3),e._uU(11,"Radius "),e.qZA()(),e._UZ(12,"input",4),e.qZA(),e.TgZ(13,"div",1)(14,"div",2)(15,"span",3),e._uU(16,"Latitude "),e.qZA()(),e._UZ(17,"input",4),e.qZA(),e.TgZ(18,"div",1)(19,"div",2)(20,"span",3),e._uU(21,"Longitude "),e.qZA()(),e._UZ(22,"input",4),e.qZA(),e.TgZ(23,"div",1)(24,"div",2)(25,"span",3),e._uU(26,"Property address"),e.qZA()(),e._UZ(27,"input",4),e.qZA()(),e.TgZ(28,"div",29)(29,"button",30),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().removeProperty(s)}),e._uU(30,"Remove"),e.qZA()()()()}if(2&i){const t=n.$implicit;e.xp6(7),e.Q6J("value",t.property_name),e.xp6(5),e.Q6J("value",t.radius),e.xp6(5),e.Q6J("value",t.latitude),e.xp6(5),e.Q6J("value",t.longitude),e.xp6(5),e.Q6J("value",t.property_address)}}let C=(()=>{class i{constructor(t,r,a,s,l){this.confirmationDialogService=t,this.activatedRoute=r,this.router=a,this.userService=s,this.fb=l,this.userForm=this.fb.group({properties:this.fb.array([])})}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.userService.get(t.id).subscribe(r=>{this.user=r})})}get properties(){return this.userForm.controls.properties}add(){const t=this.fb.group({radius:new o.NI(""),latitude:new o.NI(""),longitude:new o.NI(""),property_name:new o.NI(""),property_address:new o.NI("")});this.properties.push(t)}delete(t){this.properties.removeAt(t)}getFormGroup(t){return t}submit(){this.userForm.value.properties.forEach(r=>{this.userService.addProperty(Object.assign(Object.assign({},r),{user_id:this.user.custom_id})).subscribe(a=>{this.activatedRoute.params.subscribe(s=>{this.userService.get(s.id).subscribe(l=>{this.user=l,this.userForm.reset()})})})})}removeProperty(t){this.confirmationDialogService.confirm("Please confirm..","Do you really want to delete ?").then(r=>{r&&this.userService.deleteProperty(t.id).subscribe(a=>{this.activatedRoute.params.subscribe(s=>{this.userService.get(s.id).subscribe(l=>{this.user=l})}),console.log(a)})}).catch(()=>{console.log("err")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.O),e.Y36(p.gz),e.Y36(p.F0),e.Y36(c),e.Y36(o.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-view"]],decls:51,vars:12,consts:[[1,"col-8"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["disabled","disabled","aria-label","Default","aria-describedby","inputGroup-sizing-default",1,"form-control",3,"value"],[1,"r","form-group","row"],[1,"col-md-3","col-form-label"],["type","nnn",1,"span-bts",3,"click"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal",3,"formGroup","ngSubmit"],["formArrayName","properties",1,"col-md-9","col-form-label"],["class","card","style","padding: 15px",4,"ngFor","ngForOf"],["class","form-group row",4,"ngIf"],["class","card","style","padding: 10px;margin-top: 20px",4,"ngFor","ngForOf"],[1,"card",2,"padding","15px"],[1,"r","form-group","row","p",3,"formGroup"],[1,"col-md-9"],["formControlName","property_name","type","text","id","property_name","placeholder","property name",1,"form-control"],["formControlName","property_address","type","text","id","property_address","placeholder","Property address",1,"form-control"],["for","radius",1,"col-md-3","col-form-label"],["formControlName","radius","type","number","id","radius","placeholder","radius",1,"form-control"],["for","latitude",1,"col-md-3","col-form-label"],["formControlName","latitude","type","number","id","latitude","placeholder","latitude",1,"form-control"],["formControlName","longitude","type","number","id","longitude","placeholder","longitude",1,"form-control"],[1,"form-group","row"],["type","submit",1,"btn","btn-sm","btn-primary"],[1,"fa","fa-dot-circle-o"],[1,"card",2,"padding","10px","margin-top","20px"],[1,"row"],[1,"col-10"],[1,"col-2"],[3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"User name"),e.qZA()(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",1)(7,"div",2)(8,"span",3),e._uU(9,"Email"),e.qZA()(),e._UZ(10,"input",4),e.qZA(),e.TgZ(11,"div",1)(12,"div",2)(13,"span",3),e._uU(14,"Device token"),e.qZA()(),e._UZ(15,"input",4),e.qZA(),e.TgZ(16,"div",1)(17,"div",2)(18,"span",3),e._uU(19,"Did accept to sand privacy policy "),e.qZA()(),e._UZ(20,"input",4),e.qZA(),e.TgZ(21,"div",1)(22,"div",2)(23,"span",3),e._uU(24,"Date accept to sand privacy policy "),e.qZA()(),e._UZ(25,"input",4),e.qZA(),e.TgZ(26,"div",1)(27,"div",2)(28,"span",3),e._uU(29,"Fire monitoring is on "),e.qZA()(),e._UZ(30,"input",4),e.qZA(),e.TgZ(31,"div",1)(32,"div",2)(33,"span",3),e._uU(34,"Weather monitoring is on "),e.qZA()(),e._UZ(35,"input",4),e.qZA(),e.TgZ(36,"div",1)(37,"div",2)(38,"span",3),e._uU(39,"Is Premium User "),e.qZA()(),e._UZ(40,"input",4),e.qZA(),e.TgZ(41,"div",5)(42,"label",6),e._uU(43," Properties "),e.TgZ(44,"span",7),e.NdJ("click",function(){return r.add()}),e._uU(45,"+"),e.qZA()(),e.TgZ(46,"form",8),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(47,"div",9),e.YNc(48,A,27,1,"div",10),e.qZA(),e.YNc(49,q,4,0,"div",11),e.qZA(),e.YNc(50,N,31,5,"div",12),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("value",r.user.user_name),e.xp6(5),e.Q6J("value",r.user.email),e.xp6(5),e.Q6J("value",r.user.device_token),e.xp6(5),e.Q6J("value",r.user.did_accept_to_sand_privacy_policy?"Yes":"No"),e.xp6(5),e.Q6J("value",r.user.date_accepted_to_sand_privacy_policy),e.xp6(5),e.Q6J("value",r.user.fire_monitoring_is_on?"Yes":"No"),e.xp6(5),e.Q6J("value",r.user.weather_monitoring_is_on?"Yes":"No"),e.xp6(5),e.Q6J("value",r.user.is_premium_user?"Yes":"No"),e.xp6(6),e.Q6J("formGroup",r.userForm),e.xp6(2),e.Q6J("ngForOf",r.properties.controls),e.xp6(1),e.Q6J("ngIf",r.properties.controls.length>0),e.xp6(1),e.Q6J("ngForOf",r.user.properties))},directives:[o._Y,o.JL,o.sg,o.CE,u.sg,o.Fj,o.JJ,o.u,o.wV,u.O5],styles:[".span-bts[_ngcontent-%COMP%]{background:lightgrey;border-radius:5px;padding:5px;cursor:pointer}.span-bts[_ngcontent-%COMP%]:hover{background:darkgrey}"]}),i})();var w=d(1466);const v=[{path:"list",component:T},{path:"add",component:b},{path:"view/:id",component:C},{path:"edit/:id",component:(()=>{class i{constructor(t,r,a,s,l){this.activatedRoute=t,this.router=r,this.userService=a,this.fb=s,this.confirmationDialogService=l,this.userForm=this.fb.group({custom_id:new o.NI(""),user_name:new o.NI(""),email:new o.NI(""),device_token:new o.NI(""),is_premium_user:new o.NI,did_accept_to_sand_privacy_policy:new o.NI(""),date_accepted_to_sand_privacy_policy:new o.NI(""),fire_monitoring_is_on:new o.NI(""),weather_monitoring_is_on:new o.NI("")})}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.userService.get(t.id).subscribe(r=>{this.user=r,this.userForm.patchValue(this.user),this.userForm.get("date_accepted_to_sand_privacy_policy").patchValue(this.formatDate(this.user.date_accepted_to_sand_privacy_policy))})})}formatDate(t){const r=new Date(t);let a=""+(r.getMonth()+1),s=""+r.getDate();const l=r.getFullYear();return a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),[l,a,s].join("-")}submit(){this.confirmationDialogService.confirm("Please confirm..","Do you really want to save ?").then(t=>{t&&this.userService.update(this.userForm.value,this.user.id).subscribe(r=>{console.log(r)})}).catch(()=>{console.log("err")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(c),e.Y36(o.qu),e.Y36(m.O))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-edit"]],decls:85,vars:9,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"r","form-group","row"],["for","user_name",1,"col-md-3","col-form-label"],[1,"col-md-9"],["formControlName","custom_id","type","text","id","user_id","placeholder","user id",1,"form-control"],["formControlName","user_name","type","text","id","user_name","placeholder","user name",1,"form-control"],["for","email",1,"col-md-3","col-form-label"],["formControlName","email","type","email","id","email","placeholder","email",1,"form-control"],["for","device_token",1,"col-md-3","col-form-label"],["formControlName","device_token","type","text","id","device_token","placeholder","device token",1,"form-control"],[1,"col-md-3","col-form-label"],[1,"form-check","form-check-inline","mr-1"],["formControlName","is_premium_user","type","radio",1,"form-check-input",3,"value"],[1,"form-check-label"],["formControlName","did_accept_to_sand_privacy_policy","type","radio",1,"form-check-input",3,"value"],["for","date_accepted_to_sand_privacy_policy",1,"col-md-3","col-form-label"],["formControlName","date_accepted_to_sand_privacy_policy","type","date","id","date_accepted_to_sand_privacy_policy","placeholder","Name",1,"form-control"],["formControlName","fire_monitoring_is_on","type","radio",1,"form-check-input",3,"value"],[1,"col-md-9","col-form-label"],["formControlName","weather_monitoring_is_on","type","radio",1,"form-check-input",3,"value"],[1,"form-group","row"],["type","submit",1,"btn","btn-sm","btn-primary"],[1,"fa","fa-dot-circle-o"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"strong"),e._uU(5,"Add User"),e.qZA()(),e.TgZ(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"User Id "),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.qZA()(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15,"User Name "),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"input",10),e.qZA()(),e.TgZ(18,"div",6)(19,"label",11),e._uU(20,"Email "),e.qZA(),e.TgZ(21,"div",8),e._UZ(22,"input",12),e.qZA()(),e.TgZ(23,"div",6)(24,"label",13),e._uU(25,"Device Token "),e.qZA(),e.TgZ(26,"div",8),e._UZ(27,"input",14),e.qZA()(),e.TgZ(28,"div",6)(29,"label",15),e._uU(30,"Is Premium User "),e.qZA(),e.TgZ(31,"div",8)(32,"div",16),e._UZ(33,"input",17),e.TgZ(34,"label",18),e._uU(35,"Yes"),e.qZA()(),e.TgZ(36,"div",16),e._UZ(37,"input",17),e.TgZ(38,"label",18),e._uU(39,"No"),e.qZA()()()(),e.TgZ(40,"div",6)(41,"label",15),e._uU(42,"Did accept to sand privacy policy "),e.qZA(),e.TgZ(43,"div",8)(44,"div",16),e._UZ(45,"input",19),e.TgZ(46,"label",18),e._uU(47,"Yes"),e.qZA()(),e.TgZ(48,"div",16),e._UZ(49,"input",19),e.TgZ(50,"label",18),e._uU(51,"No"),e.qZA()()()(),e.TgZ(52,"div",6)(53,"label",20),e._uU(54,"Date accept to sand privacy policy "),e.qZA(),e.TgZ(55,"div",8),e._UZ(56,"input",21),e.qZA()(),e.TgZ(57,"div",6)(58,"label",15),e._uU(59,"Fire monitoring is on "),e.qZA(),e.TgZ(60,"div",8)(61,"div",16),e._UZ(62,"input",22),e.TgZ(63,"label",18),e._uU(64,"Yes"),e.qZA()(),e.TgZ(65,"div",16),e._UZ(66,"input",22),e.TgZ(67,"label",18),e._uU(68,"No"),e.qZA()()()(),e.TgZ(69,"div",6)(70,"label",15),e._uU(71,"Weather monitoring is on "),e.qZA(),e.TgZ(72,"div",23)(73,"div",16),e._UZ(74,"input",24),e.TgZ(75,"label",18),e._uU(76,"Yes"),e.qZA()(),e.TgZ(77,"div",16),e._UZ(78,"input",24),e.TgZ(79,"label",18),e._uU(80,"No"),e.qZA()()()(),e.TgZ(81,"div",25)(82,"button",26),e._UZ(83,"i",27),e._uU(84," Submit"),e.qZA()()()()()()()),2&t&&(e.xp6(7),e.Q6J("formGroup",r.userForm),e.xp6(26),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(13),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(4),e.Q6J("value",!1))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o._],styles:[""]}),i})()}];let x=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.Bz.forChild(v),u.ez,o.UX,w.kWm]]}),i})()}}]);