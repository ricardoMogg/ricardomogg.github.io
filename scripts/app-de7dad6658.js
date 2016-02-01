/* global window: false */
!function(){"use strict";window.commonDependencies=["ngAnimate","angular.filter"],angular.module("resume",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router"])}(),function(){"use strict";function e(){return{save:function(e,i,t,s){var a=new Parse.Object(e);a.save(i,{success:t,error:s})},find:function(e,i,t){var s=Parse.Object.extend(e),a=new Parse.Query(s);a.ascending("createdAt"),a.find({success:i,error:t})},get:function(e,i,t,s){var a=Parse.Object.extend(e),o=new Parse.Query(a);o.get(i,{success:t,error:s})},query:function(e,i,t,s){var a=Parse.Object.extend(e),o=new Parse.Query(a);for(var n in i)o[i[n].operator](i[n].field,i[n].value);o.find({success:t,error:s})},cloudCode:function(e,i,t,s){Parse.Cloud.run(e,i,{success:t,error:s})}}}angular.module("resume").service("$parseService",e)}(),function(){"use strict";function e(e,i,t,s,a,o,n){function l(e){return console.log(e),e.offset().top+e.outerHeight(!0)}function c(e){return e.offset().top}e["goto"]=function(e){switch($(window).scrollTop(0),e){case"home":$(".computer section.segment").css({top:"1000vh",position:"relative"}),$("#profile-lg").css({position:"relative",top:"100vh"}),n(function(){$("#education-lg").css("top",l($("#profile-lg"))),$(".item").removeClass("active"),$(".home_item").addClass("active")},100);break;case"profile":$(".computer section.segment").css({top:"1000vh",position:"relative"}),$("#profile-lg").css({position:"relative",top:"100vh"}),n(function(){$("html, body").animate({scrollTop:c($("#profile-lg"))+20},500),$("#education-lg").css("top",l($("#profile-lg")))},100);break;case"education":$(".computer section.segment").css({top:"1000vh",position:"relative"}),$("#profile-lg").css({position:"relative",top:"100vh"}),n(function(){$("#education-lg").css({position:"relative",top:l($("#profile-lg"))}),$("html, body").animate({scrollTop:l($("#profile-lg"))+20},1e3),$("#experience-lg").css("top",l($("#education-lg")))},100);break;case"experience":$(".computer section.segment").css({top:"1000vh",position:"relative"}),$("#profile-lg").css({position:"relative",top:"100vh"}),n(function(){$("#education-lg").css({position:"relative",top:l($("#profile-lg"))}),$("#experience-lg").css({position:"relative",top:l($("#education-lg"))}),$("html, body").animate({scrollTop:c($("#education-lg"))+20},1300),$("#attitudes-lg").css("top",l($("#experience-lg")))},100);break;case"attitudes":$(".computer section.segment").css({top:"1000vh",position:"relative"}),$("#profile-lg").css({position:"relative",top:"100vh"}),n(function(){$("#education-lg").css({position:"relative",top:l($("#profile-lg"))}),$("#experience-lg").css({position:"relative",top:l($("#education-lg"))}),$("#attitudes-lg").css("top",l($("#experience-lg"))),$("html, body").animate({scrollTop:c($("#experience-lg"))},1700)},100)}o()}}e.$inject=["$scope","$state","$log","$rootScope","$location","$anchorScroll","$timeout"],angular.module("resume").controller("MenuController",e)}(),function(){"use strict";function e(e,i,t,s,a,o){function n(){o($(".home")),$("#education-lg").css("top",c($("#profile-lg"))),$("#profile-lg").visibility({once:!1,onBottomVisible:function(){$(".gravatar-small").transition("fly left"),l("#profile-lg","#experience-lg","#education-lg",function(){l("#education-lg","#attitudes-lg","#experience-lg",function(){l("#experience-lg","#footer-lg","#attitudes-lg",function(){$("#footer-lg").css("top",r($("#attitudes-lg"))-30),$(".item").removeClass("active"),$(".attitudes_item").addClass("active")})})})},onTopVisibleReverse:function(){$(".item").removeClass("active"),$(".home_item").addClass("active"),console.log("top visible here")},onBottomVisibleReverse:function(){console.log("or bottom visible reverse here"),$("#profile-lg").css({position:"relative",top:"100vh"}),$("#education-lg").css("top",c($("#profile-lg"))),$(".item").removeClass("active"),$(".profile_item").addClass("active"),$(".gravatar-small").transition("fly left")}})}function l(e,i,t,s){$(e).css({position:"fixed",top:"-14px"}),$(i).css("top",c($(t))),$(".item").removeClass("active"),$("."+e.substr(1,e.length-4)+"_item").addClass("active"),$(t).visibility({once:!1,onBottomVisible:s,onBottomVisibleReverse:function(){$(t).css({position:"relative",top:r($(e))}),$(i).css("top",c($(t))),$(".item").removeClass("active"),$("."+t.substr(1,t.length-4)+"_item").addClass("active")}})}function c(e){return e.offset().top+e.outerHeight(!0)}function r(e){return e.offset().top}$(document).ready(function(){n(),$(".phone-me,.twit-me,.email-me,.link-me,.skype-me").popup({position:"bottom left"})})}e.$inject=["$scope","$state","$log","$rootScope","$location","$anchorScroll"],angular.module("resume").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("App ready!")}e.$inject=["$log"],angular.module("resume").run(e)}(),function(){"use strict";function e(e,i){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),i.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("resume").config(e)}(),function(){"use strict";angular.module("resume").constant("name","Ricardo Hernández Moguel")}(),function(){"use strict";function e(){}angular.module("resume").config(e)}(),angular.module("client").run(["$templateCache",function(e){e.put("app/main/confirmation.tmpl.html",'<md-dialog aria-label="Mango (Fruit)" ng-cloak=""><form><md-toolbar><div class="md-toolbar-tools"><h2>Confirmación</h2><span flex=""></span><md-button class="md-icon-button" ng-click="cancel()"><ng-md-icon icon="close" style="fill:white" size:"20px"=""></ng-md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content">Proporcionanos tu correo electrónico para enviarte tu cotización<div layout="row"><md-input-container flex=""><label>Correo electrónico</label> <input ng-model="user.email" type="email" required=""></md-input-container></div></div></md-dialog-content><md-dialog-actions layout="row"><span flex=""></span><md-button ng-click="cancel()" class="md-warn">Cancelar</md-button><md-button ng-disabled="!user.email" ng-click="answer(user.email)" style="margin-right:20px;">Aceptar</md-button></md-dialog-actions></form></md-dialog>'),e.put("app/main/main.html",'<div class="ui four column grid"><div class="computer only sixteen wide column"><section id="profile-lg" class="profile segment raised ui"><ng-include src="\'./app/main/templates/profile.tmpl.html\'"></ng-include></section><section id="education-lg" class="education segment raised ui"><ng-include src="\'./app/main/templates/education.tmpl.html\'"></ng-include></section><section id="experience-lg" class="experience segment raised ui"><ng-include src="\'./app/main/templates/experience.tmpl.html\'"></ng-include></section><section id="attitudes-lg" class="attitudes segment raised ui"><ng-include src="\'./app/main/templates/attitudes.tmpl.html\'"></ng-include></section><div id="footer-lg" class="ui inverted vertical footer segment"><div class="ui container"><div class="ui stackable inverted divided equal height stackable grid"><div class="three wide column"><h4 class="ui inverted header">Ricardo Hernández</h4><p>Software Engineer</p></div><div class="three wide column">Tools used to build this:<br><ul><li>Angular.js</li><li>Semantic.ui</li><li>LESS</li><li>Gulp</li><li>Bower</li><li>NPM</li><li>Github</li><li>Gravatar</li><li>Yo angular-gulp-generator</li></ul></div><div class="seven wide column"><table><tr><td><b>Phone number:</b></td><td>+52155959389</td></tr><tr><td><b>Email:</b></td><td>ricardo.mogg@gmail.com</td></tr><tr><td><b>Skype:</b></td><td>ricardo.mogg</td></tr><tr><td><b>Linked in:</b></td><td>https://mx.linkedin.com/in/rmoguel</td></tr><tr><td><b>Twitter</b></td><td>@ricardoMogg</td></tr></table></div></div></div></div></div><div class="tablet only mobile only sixteen wide column"><section id="profile" class="profile segment raised ui"><ng-include src="\'./app/main/templates/profile.tmpl.html\'"></ng-include></section><section id="education" class="education segment raised ui"><ng-include src="\'./app/main/templates/education.tmpl.html\'"></ng-include></section><section id="experience" class="experience segment raised ui"><ng-include src="\'./app/main/templates/experience.tmpl.html\'"></ng-include></section><section id="attitudes" class="attitudes segment raised ui"><ng-include src="\'./app/main/templates/attitudes.tmpl.html\'"></ng-include></section><div class="ui inverted vertical footer segment"><div class="ui container"><div class="ui stackable inverted divided equal height stackable grid"><div class="sixteen wide column"><h4 class="ui inverted header">Ricardo Hernández</h4><p>Software Engineer</p></div></div></div></div></div></div>'),e.put("app/menu/menu.tmpl.html",'<a class="active item home_item" ng-click="goto(\'home\')">Home</a> <a class="item profile_item" ng-click="goto(\'profile\')">Profile</a> <a class="item education_item" ng-click="goto(\'education\')">Education</a> <a class="item experience_item" ng-click="goto(\'experience\')">Work Experience</a> <a class="item attitudes_item" ng-click="goto(\'attitudes\')">Attitudes</a>'),e.put("app/menu/side-menu.tmpl.html",'<a class="toc item"><i class="sidebar icon"></i></a> <a class="active item">Home</a> <a class="item">Profile</a> <a class="item">Education</a> <a class="item">Areas of Expertise</a> <a class="item">Work Experience</a> <a class="item">Skills</a> <a class="item">Attitudes</a>'),e.put("app/main/templates/attitudes.tmpl.html",'<br><br><h1>Attitudes</h1><div class="ui grid"><div class="four wide computer two wide tablet one wide mobile column"></div><div class="eight wide computer twelve wide tablet fourteen wide mobile column"><div class="ui segment raised"><ul><li>Genuine passion for technology, and learning about it.</li><li>Always eager to solve problems that impose a challenge.</li><li>Capable of seeing the big picture.</li><li>Capable of working at a fast-paced project.</li><li>Effective team working and communication skills.</li><li>Leadership skills.</li></ul></div></div></div>'),e.put("app/main/templates/education.tmpl.html",'<br><br><h1>Education</h1><div class="ui school"><p>Bachelor Degree in Computer Science Engineering at Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Ciudad de México (ITESM–CCM)</p><center><div class="GPA">GPA<br>87</div></center></div><div class="ui seven cards doubling" style="margin-top:20px;"><div class="ui card blue"><div class="image"><img src="./assets/images/paypal_certified_developer.gif"></div><div class="content"><a class="header">Paypal certified developer</a><div class="meta"><span class="date">2013</span></div></div></div><div class="ui card orange"><div class="image"><img src="./assets/images/csm.jpg"></div><div class="content"><a class="header">Certified Scrum Master</a><div class="meta"><span class="date">2013</span></div></div></div><div class="ui card olive"><div class="image"><img src="./assets/images/harvard_manage_mentor.jpg"></div><div class="content"><a class="header">Harvard Manage Mentor</a><div class="meta"><span class="date">2013</span></div></div></div><div class="ui card blue"><div class="image"><img src="./assets/images/pmi-capm.jpg"></div><div class="content"><a class="header">Certified Associate Project Manager</a><div class="meta"><span class="date">2011</span></div></div></div><div class="ui card red"><div class="image"><img src="./assets/images/ocjp.png"></div><div class="content"><a class="header">Oracle Java SE 6 Programmer</a><div class="meta"><span class="date">2010</span></div></div></div><div class="ui card blue"><div class="image"><img src="./assets/images/ccnaw.png"></div><div class="content"><a class="header">Cisco Certified Network Associate Wireless</a><div class="meta"><span class="date">2010</span></div></div></div><div class="ui card blue"><div class="image"><img src="./assets/images/ccna.jpg"></div><div class="content"><a class="header">Cisco Certified Network Associate</a><div class="meta"><span class="date">2010</span></div></div></div></div>'),e.put("app/main/templates/experience.tmpl.html",'<br><br><h1>Work Experience</h1><div class="segment ui"><div class="ui grid"><div class="sixteen wide tablet only mobile only column"><div class="ui four item menu top-work-menu"><a class="item technogi selected" data="technogi">Technogi</a> <a class="item copeems" data="copeems">Copeems</a> <a class="item sesyc" data="sesyc">SESYC</a> <a class="item ams" data="ams">AMS</a></div></div></div><div class="ui grid"><div class="two wide computer only column"><div class="ui compact vertical labeled menu side-work-menu"><a class="item technogi selected" data="technogi"><img class="image" style="width:50px" src="http://www.technogi.com.mx/favicon.ico"> Technogi</a> <a class="item copeems" data="copeems"><img class="image" style="width:50px" src="./assets/images/copeems.png"> Copeems</a> <a class="item sesyc" data="sesyc"><img class="image" style="width:50px" src="./assets/images/sesyc.png"> SESYC</a> <a class="item ams" data="ams"><img class="image" style="width:50px" src="./assets/images/ams.png"> AMS</a></div></div><div class="fourteen wide computer only sixteen wide tablet mobile stretched column"><div class="work ui segment technogi selected" style="text-align:left;"><ng-include src="\'./app/main/templates/experiences/technogi.tmpl.html\'"></ng-include></div><div class="work ui segment copeems" style="text-align:left;"><ng-include src="\'./app/main/templates/experiences/copeems.tmpl.html\'"></ng-include></div><div class="work ui segment sesyc" style="text-align:left;"><ng-include src="\'./app/main/templates/experiences/sesyc.tmpl.html\'"></ng-include></div><div class="work ui segment ams" style="text-align:left;"><ng-include src="\'./app/main/templates/experiences/ams.tmpl.html\'"></ng-include></div></div></div></div>'),e.put("app/main/templates/expertise.tmpl.html","<br><br><h1>expertise</h1>"),e.put("app/main/templates/home.tmpl.html",'<div class="middle aligned content"><img class="gravatar" src="http://www.gravatar.com/avatar/90ce547e9a902493dd90665e67e32212?s=150"><h1 class="ui inverted header">Ricardo Hernández Moguel</h1><h2>Developing software and writing code are not the same thing.</h2><span class="social-links"><a target="_blank" href="https://mx.linkedin.com/in/rmoguel" class="ui icon button link-me blue" data-content="https://mx.linkedin.com/in/rmoguel"><i class="linkedin square icon"></i></a> <a target="_blank" href="skype:ricardo.mogg?call" class="ui icon button skype-me teal" data-content="ricardo.mogg"><i class="skype icon"></i></a> <a target="_blank" href="https://twitter.com/ricardoMogg" class="ui icon button twit-me blue" data-content="@ricardoMogg"><i class="twitter square icon"></i></a> <a target="_blank" href="mailto:ricardo.mogg@gmail.com" class="ui icon button email-me red" data-content="ricardo.mogg@gmail.com"><i class="mail square icon"></i></a> <a href="tel:+525591859389" class="ui icon button phone-me green" data-content="+525591859389"><i class="phone icon"></i></a></span></div>'),e.put("app/main/templates/profile.tmpl.html",'<br><br><br><h1>Profile</h1><h2>Professional Objective</h2><p style="text-align:center">Build new tools and technologies accessible to many people, learn how the top technology companies work, and be able to challenge myself everyday by creating the best solution based on my knowledge.</p><br><br><div class="ui grid"><div class="eight wide computer sixteen wide tablet column"><div class="summary"><h2>Summary</h2><p>Soy un desarrollador de software con experiencia en todos los ciclos de desarrollo de un proyecto. He tenido la oportunidad de trabajar en empresas que me han dado la oportunidad de aplicar mis conocimientos y habilidades desde identificar la necesidad de un cliente, desarrollar una propuesta basada para resolver la necesidad, analizar los requerimientos, planear, desarrollar, manejar, y mantener el software.</p><p>He tenido la oportunidad de utilizar productivamente muchas herramientas dependendiendo de las distintas necesidades. Esto ha incrementado mi habilidad para aprender rápidamente y entender las nuevas tecnologías correctamente.</p></div></div><div class="eight wide computer sixteen wide tablet column"><div class="ui raised segment"><h2>Some skills</h2><ul><li><i class="cloud icon blue"></i>Cloud based technologies <em>AWS, Heroku, Parse, Rackspace</em></li><li><i class="code icon blue"></i>Languages <em>Java, Javascript, Ruby, Php, Scala, Swift</em></li><li><i class="home icon blue"></i>Frontend Developer <em>Angular.js, Material, Bootstrap, jQuery</em></li><li><i class="setting icon blue"></i>Backend Developer <em>Springboot, Node.js, Play!, Yii, Rails</em></li><li><i class="calendar icon blue"></i>Project Management <em>ScrumMaster, CAPM, KANBAN</em></li><li><i class="bar chart icon blue"></i> DevOps <em>Continous Integration/Delivery, Monitoring</em></li></ul></div></div></div>'),e.put("app/main/templates/skills.tmpl.html","<br><br><h1>skills</h1>"),e.put("app/main/templates/experiences/ams.tmpl.html","<h3>Aerosol Medical Systems</h3><h4>Job Responsabilities</h4><p>IT Maintenance involving computers, servers, networking and ERP software. Provide an effect troubleshooting service to every area in order to keep productivity as high as possible.</p><h4>Job Accomplishments</h4><p>Achieved to provide Hardware, Software, and Networking based solutions in order to give a better support for everyone at AMS. Some of the solutions proposed were: the implementation of a SAP BO electronic invoice module, the implementation of a new LLPC and buying and installing a new server based on their needs. Customer support was essential for this job, and that skill was greatly developed throughout the time I worked there.</p>"),e.put("app/main/templates/experiences/copeems.tmpl.html","<h3>Copeems</h3><h4>Job Responsabilities</h4><p>Define software architecture, design patterns, and development tools needed to develop a system used for managing COPEEMS business. Collect requirements, translate requirements to use cases, and programming the web platform.</p><h4>Job Accomplishments</h4><p>I decided the tools to use for the development of a 3 year long project and was named Project Development Leader. My team and I have also accomplished to build a friendly user interface by relying on AJAX, Jquery, and bootstrap components to make it easier for the client to use our system. I lead my team by using SCRUM and Test Driven Development upgrading QA to the highest value. I also developed python based utils to help the rest of the team get important information about the state of the development of the project.</p>"),e.put("app/main/templates/experiences/sesyc.tmpl.html","<h3>Sesyc</h3><h4>Job Responsabilities</h4><p>Manage and develop every system based in the customer needs. Gather customer requirements and make a system based in this.</p><h4>Job Accomplishments</h4><p>I achieved to develop every project asked in time and budget by having the capability of adequately manage my resources. I correctly chose the tools for every project I was assigned to in order to achieve a great productivity while covering every need of each project.</p>"),e.put("app/main/templates/experiences/technogi.tmpl.html","<h3>Technogi</h3><h4>Job Responsabilities</h4><p>Defining solutions fitting the customer’s exact needs by selecting the correct tools and software architecture to solve their problems. Help with project management using different tools and techniques combining useful knowledge learned from SCRUM, KANBAN, and PMI.</p><h4>Job Accomplishments</h4><p>I constantly had the responsability to develop different projects with diverse languages and tools with different teams. Often I had to develop using tools I had never used before, this helped me learn fast about new tehcnologies. During this projects I helped deliver successfully projects that helped costumers upgrade their businesses.</p>")}]);