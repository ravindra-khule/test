/*
 * AllInOne Banner - Banner With Playlist v3.2
 *
 * Copyright 2012-2013, LambertGroup
 * 
*/


(function(f){function J(a,d){f(a.currentImg.attr("data-text-id")).css("display","block");var b=f(a.currentImg.attr("data-text-id")).children(),g=0;currentText_arr=[];b.each(function(){currentText_arr[g]=f(this);var b=currentText_arr[g].attr("data-initial-left"),c=currentText_arr[g].attr("data-initial-top");d.responsive&&(b=parseInt(b/(d.origWidth/d.width),10),c=parseInt(c/(d.origWidth/d.width),10));currentText_arr[g].css({left:b+"px",top:c+"px",opacity:parseInt(currentText_arr[g].attr("data-fade-start"), 10)/100});var l=currentText_arr[g];setTimeout(function(){d.responsive&&(newCss="",-1!=l.css("font-size").lastIndexOf("px")?(fontSize=l.css("font-size").substr(0,l.css("font-size").lastIndexOf("px")),newCss+="font-size:"+fontSize/(d.origWidth/d.width)+"px;"):-1!=l.css("font-size").lastIndexOf("em")&&(fontSize=l.css("font-size").substr(0,l.css("font-size").lastIndexOf("em")),newCss+="font-size:"+fontSize/(d.origWidth/d.width)+"em;"),-1!=l.css("line-height").lastIndexOf("px")?(lineHeight=l.css("line-height").substr(0, l.css("line-height").lastIndexOf("px")),newCss+="line-height:"+lineHeight/(d.origWidth/d.width)+"px;"):-1!=l.css("line-height").lastIndexOf("em")&&(lineHeight=l.css("line-height").substr(0,l.css("line-height").lastIndexOf("em")),newCss+="line-height:"+lineHeight/(d.origWidth/d.width)+"em;"),l.wrapInner('<div class="newFS" style="'+newCss+'" />'));var c=l.attr("data-final-left"),b=l.attr("data-final-top");d.responsive&&(c=parseInt(c/(d.origWidth/d.width),10),b=parseInt(b/(d.origWidth/d.width),10)); var g=1;!0==a.isVideoPlaying&&(g=0);l.animate({opacity:g,left:c+"px",top:b+"px"},1E3*l.attr("data-duration"),function(){!0==a.isVideoPlaying&&f(a.currentImg.attr("data-text-id")).children().css("opacity",0)})},1E3*currentText_arr[g].attr("data-delay"));g++})}function K(a,d){nowx=(new Date).getTime();!a.mouseOverBanner&&(!a.effectIsRunning&&d.showCircleTimer)&&(a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height),a.ctx.beginPath(),a.ctx.globalAlpha=d.behindCircleAlpha/100,a.ctx.arc(d.circleRadius+2* d.circleLineWidth,d.circleRadius+2*d.circleLineWidth,d.circleRadius,0,2*Math.PI,!1),a.ctx.lineWidth=d.circleLineWidth+2,a.ctx.strokeStyle=d.behindCircleColor,a.ctx.stroke(),a.ctx.beginPath(),a.ctx.globalAlpha=d.circleAlpha/100,a.ctx.arc(d.circleRadius+2*d.circleLineWidth,d.circleRadius+2*d.circleLineWidth,d.circleRadius,0,2*((a.timeElapsed+nowx-a.arcInitialTime)/1E3)/d.autoPlay*Math.PI,!1),a.ctx.lineWidth=d.circleLineWidth,a.ctx.strokeStyle=d.circleColor,a.ctx.stroke())}function L(a,d,b){var g=F(); f(".stripe",a).remove();f(".block",a).remove();y=B=Math.round(a.width()/d.numberOfStripes);for(var h=!0,c=0;c<d.numberOfStripes;c++)c==d.numberOfStripes-1&&(y=a.width()-B*(d.numberOfStripes-1)),!d.responsive||-1==g||-1!=g&&9<=g?-1!=u.indexOf("ipad")||-1!=u.indexOf("iphone")||-1!=u.indexOf("ipod")||-1!=u.indexOf("webos")?h=!1:a.append(f('<div class="stripe"></div>').css({opacity:"0",left:B*c+"px",width:y+"px",height:"0px",background:'url("'+b.current_imgInside.attr("src")+'") '+-1*c*B+"px 0%"})):h= !1,h||(mleft=-1*B*c,a.append(f('<div class="stripe"><img src="'+b.current_imgInside.attr("src")+'" width="'+a.width()+'" height="'+a.height()+'" style="margin-left:'+mleft+'px;"></div>').css({opacity:"0",left:B*c+"px",width:y+"px",height:"0px"})));d.responsive&&h&&(-1==g||-1!=g&&9<=g)&&f(".stripe",a).css({"-webkit-background-size":a.width()+"px "+a.height()+"px","-moz-background-size":a.width()+"px "+a.height()+"px","-o-background-size":a.width()+"px "+a.height()+"px","-ms-background-size":a.width()+ "px "+a.height()+"px","background-size":a.width()+"px "+a.height()+"px"})}function I(a,d,b,f,h){var c=a.width(),l=a.height();a.css({width:"0"});a.css({height:"0"});d==f.numberOfRows-1&&b==f.numberOfColumns-1?setTimeout(function(){a.animate({opacity:"1.0",width:c,height:l},1E3*f.effectDuration/3,"",function(){h.trigger("effectComplete")})},m):setTimeout(function(){a.animate({opacity:"1.0",width:c,height:l},1E3*f.effectDuration/3)},m);m+=E}function C(a,d,b,g,h,c,l,D,A,t){var v=!0;if(!b.loop&&d.current_img_no+ a>=g||!b.loop&&0>d.current_img_no+a)v=!1;if(v){f(".newFS",c).contents().unwrap();d.arcInitialTime=(new Date).getTime();d.timeElapsed=0;b.showCircleTimer&&(d.ctx.clearRect(0,0,d.canvas.width,d.canvas.height),d.ctx.beginPath(),d.ctx.globalAlpha=b.behindCircleAlpha/100,d.ctx.arc(b.circleRadius+2*b.circleLineWidth,b.circleRadius+2*b.circleLineWidth,b.circleRadius,0,2*Math.PI,!1),d.ctx.lineWidth=b.circleLineWidth+2,d.ctx.strokeStyle=b.behindCircleColor,d.ctx.stroke(),d.ctx.beginPath(),d.ctx.globalAlpha= b.circleAlpha/100,d.ctx.arc(b.circleRadius+2*b.circleLineWidth,b.circleRadius+2*b.circleLineWidth,b.circleRadius,0,0,!1),d.ctx.lineWidth=b.circleLineWidth,d.ctx.strokeStyle=b.circleColor,d.ctx.stroke());f(d.currentImg.attr("data-text-id")).css("display","none");f(h[d.current_img_no]).removeClass("thumbsHolder_ThumbON");b.randomizeImages&&!d.bottomNavClicked?(a=Math.floor(Math.random()*g),d.current_img_no=d.current_img_no===a?Math.floor(Math.random()*g):a):d.current_img_no=d.current_img_no+a>=g?0: 0>d.current_img_no+a?g-1:d.current_img_no+a;d.bottomNavClicked=!1;f(h[d.current_img_no]).addClass("thumbsHolder_ThumbON");G(0,l,g,D,b,d,A);d.currentImg=f(t[d.current_img_no]);d.current_imgInside=d.currentImg.find("img:first");d.currentImg.attr("data-transition")?(current_effect=d.currentImg.attr("data-transition"),"random"==current_effect&&(current_effect=H[Math.floor(Math.random()*H.length)])):current_effect="random"!=b.defaultEffect?b.defaultEffect:H[Math.floor(Math.random()*H.length)];d.effectIsRunning= !0;if("fade"==current_effect||"slideFromLeft"==current_effect||"slideFromRight"==current_effect||"slideFromTop"==current_effect||"slideFromBottom"==current_effect)L(c,b,d),g=f(".stripe:first",c),"fade"==current_effect&&(g.css({top:"0px",height:"100%",width:c.width()+"px"}),g.animate({opacity:"1.0"},2E3*b.effectDuration,"",function(){c.trigger("effectComplete")})),"slideFromLeft"==current_effect&&(g.css({top:"0px",height:"100%",width:"0"}),g.animate({opacity:"1.0",width:c.width()+"px"},1E3*b.effectDuration, "",function(){c.trigger("effectComplete")})),"slideFromRight"==current_effect&&(g.css({top:"0px",height:"100%",width:"0",left:c.width()+5+"px"}),g.animate({opacity:"1.0",left:"0",width:c.width()+"px"},1E3*b.effectDuration,"",function(){c.trigger("effectComplete")})),"slideFromTop"==current_effect&&(g.css({top:"0px",height:"0",width:c.width()+"px"}),g.animate({opacity:"1.0",height:c.height()+"px"},1E3*b.effectDuration,"",function(){c.trigger("effectComplete")})),"slideFromBottom"==current_effect&& (g.css({top:"0px",height:"0",width:c.width()+"px",top:c.height()+"px"}),g.animate({opacity:"1.0",top:0,height:c.height()+"px"},1E3*b.effectDuration,"",function(){c.trigger("effectComplete")}));0<=current_effect.indexOf("Stripes")&&(L(c,b,d),g=0<=current_effect.indexOf("Reverse")?f(".stripe",c).myReverse():f(".stripe",c),m=100,i=0,g.each(function(){var a=f(this);("topBottomDroppingStripes"==current_effect||"topBottomDroppingReverseStripes"==current_effect)&&a.css({top:"0px"});("bottomTopDroppingStripes"== current_effect||"bottomTopDroppingReverseStripes"==current_effect)&&a.css({bottom:"0px"});("leftRightFadingStripes"==current_effect||"leftRightFadingReverseStripes"==current_effect)&&a.css({top:"0px",height:"100%",width:"0"});"asynchronousDroppingStripes"==current_effect&&(i%2?a.css({top:"0px"}):a.css({bottom:"0px"}));if("leftRightFadingStripes"==current_effect||"leftRightFadingReverseStripes"==current_effect){var d=B;if("leftRightFadingStripes"==current_effect&&i==b.numberOfStripes-1||"leftRightFadingReverseStripes"== current_effect&&0==i)d=y;i==b.numberOfStripes-1?setTimeout(function(){a.animate({width:d+"px",opacity:"1.0"},800*b.effectDuration,"",function(){c.trigger("effectComplete")})},m):setTimeout(function(){a.animate({width:d+"px",opacity:"1.0"},800*b.effectDuration)},m)}else i==b.numberOfStripes-1?setTimeout(function(){a.animate({height:"100%",opacity:"1.0"},1E3*b.effectDuration,"",function(){c.trigger("effectComplete")})},m):setTimeout(function(){a.animate({height:"100%",opacity:"1.0"},1E3*b.effectDuration)}, m);m+=N;i++}));if(0<=current_effect.indexOf("Blocks")){g=F();f(".stripe",c).remove();f(".block",c).remove();h=Math.round(c.width()/b.numberOfColumns);l=Math.round(c.height()/b.numberOfRows);D=h;A=l;a=t=0;for(var v=!0,n=0;n<b.numberOfRows;n++)for(var p=0;p<b.numberOfColumns;p++)t=h*p,a=l*n,D=p==b.numberOfColumns-1?c.width()-h*(b.numberOfColumns-1):h,A=n==b.numberOfRows-1?c.height()-l*(b.numberOfRows-1):l,!b.responsive||-1==g||-1!=g&&9<=g?-1!=u.indexOf("ipad")||-1!=u.indexOf("iphone")||-1!=u.indexOf("ipod")|| -1!=u.indexOf("webos")?v=!1:c.append(f('<div class="block"></div>').css({opacity:"0",left:t+"px",top:a+"px",width:D+"px",height:A+"px",background:'url("'+d.current_imgInside.attr("src")+'") -'+t+"px -"+a+"px"})):v=!1,v||(mleft=-1*t,mtop=-1*a,c.append(f('<div class="block"><img src="'+d.current_imgInside.attr("src")+'" width="'+c.width()+'" height="'+c.height()+'" style="margin-left:'+mleft+"px; margin-top:"+mtop+'px;"></div>').css({opacity:"0",left:t+"px",top:a+"px",width:D+"px",height:A+"px"}))); b.responsive&&v&&(-1==g||-1!=g&&9<=g)&&f(".block",c).css({"-webkit-background-size":c.width()+"px "+c.height()+"px","-moz-background-size":c.width()+"px "+c.height()+"px","-o-background-size":c.width()+"px "+c.height()+"px","-ms-background-size":c.width()+"px "+c.height()+"px","background-size":c.width()+"px "+c.height()+"px"});if(0<=current_effect.indexOf("Reverse"))var q=f(".block",c).myReverse();else if("randomBlocks"==current_effect){d=f(".block",c);var w;for(g=d.length;g;q=parseInt(Math.random()* g,10),w=d[--g],d[g]=d[q],d[q]=w);q=d}else q=f(".block",c);m=100;if("randomBlocks"==current_effect){i=0;var x=b.numberOfRows*b.numberOfColumns;q.each(function(){var a=f(this),d=a.width(),e=a.height();a.css({width:"0",height:"0"});i==x-1?setTimeout(function(){a.animate({opacity:"1.0",width:d,height:e},1E3*b.effectDuration/3,"",function(){c.trigger("effectComplete")})},m):setTimeout(function(){a.animate({opacity:"1.0",width:d,height:e},1E3*b.effectDuration/3)},m);m+=E;i++})}else{var k=0,e=0,r=[];r[k]= [];q.each(function(){r[k][e]=f(this);e++;e==b.numberOfColumns&&(k++,e=0,r[k]=[])});e=k=0;m=100;q=f(r[k][e]);for(I(q,0,0,b,c);k<b.numberOfRows-1||e<b.numberOfColumns-1;){k<b.numberOfRows-1&&k++;e<b.numberOfColumns-1&&e++;i=k;e<k&&b.numberOfRows>b.numberOfColumns&&(i=k-e);j=0;for(k<e&&b.numberOfRows<b.numberOfColumns&&(j=e-k);0<=i&&j<=e;)q=f(r[i--][j++]),I(q,i,j,b,c)}m=b.numberOfRows<b.numberOfColumns?m-(b.numberOfRows-1)*E:m-(b.numberOfColumns-1)*E;limit_i=0;for(limit_j=e-k;limit_i<k&&limit_j<e;){i= k+1;for(j=limit_j;i>limit_i&&j<e;)i-=1,j+=1,q=f(r[i][j]),I(q,i,j,b,c);limit_i++;limit_j++}}}}}function G(a,d,b,f,h,c,l){b>h.numberOfThumbsPerScreen&&(b=(d.height()+c.thumbMarginTop)*(b-h.numberOfThumbsPerScreen),f.stop(!0,!0),a&&!c.isCarouselScrolling?(c.isCarouselScrolling=!0,1>=a&&(a=0),f.animate({top:parseInt(h.borderWidth/(h.origWidth/h.width)+b*(a-100)/100,10)+"px"},1100,"easeOutQuad",function(){c.isCarouselScrolling=!1})):c.isCarouselScrolling||(c.isCarouselScrolling=!0,f.css("opacity","0.5"), a=parseInt(h.borderWidth/(h.origWidth/h.width)-(d.height()+c.thumbMarginTop)*c.current_img_no,10),Math.abs(a)>b&&(a=h.borderWidth/(h.origWidth/h.width)-b),l.slider("value",100+parseInt(100*a/b,10)),f.animate({opacity:1,top:a+"px"},500,"easeOutCubic",function(){c.isCarouselScrolling=!1})))}function M(a,d,b,g,h,c,l,u,m,t,v,n){h.css({height:parseInt(d.origThumbH/(d.origWidth/d.width),10)+"px"});t.css({"padding-left":parseInt(d.origthumbLeftPadding/(d.origWidth/d.width),10)+"px","padding-right":parseInt(d.origthumbRightPadding/ (d.origWidth/d.width),10)+"px","padding-top":parseInt(d.origthumbTopPadding/(d.origWidth/d.width),10)+"px","padding-bottom":parseInt(d.origthumbBottomPadding/(d.origWidth/d.width),10)+"px"});b="px";-1!=v.css("font-size").lastIndexOf("em")&&(b="em");h="px";-1!=v.css("line-height").lastIndexOf("em")&&(h="em");v.css({"font-size":parseInt(d.origthumbTitleFont/(d.origWidth/d.width),10)+b,"line-height":parseInt(d.origthumbTitleLineHeight/(d.origWidth/d.width),10)+h});b="px";-1!=n.css("font-size").lastIndexOf("em")&& (b="em");h="px";-1!=n.css("line-height").lastIndexOf("em")&&(h="em");n.css({"font-size":parseInt(d.origthumbRegFont/(d.origWidth/d.width),10)+b,"line-height":parseInt(d.origthumbRegLineHeight/(d.origWidth/d.width),10)+h});d.showThumbs&&f(".thumbsHolder_ThumbOFF",g).find("img:first").css({width:parseInt(d.origThumbImgW/(d.origWidth/d.width),10)+"px",height:parseInt(d.origThumbImgH/(d.origWidth/d.width),10)+"px"});a.thumbMarginTop=Math.floor((m.height()-l.height()*d.numberOfThumbsPerScreen)/(d.numberOfThumbsPerScreen- 1));thumb_i=0;c.children().each(function(){thumb_i++;theThumb=f(this);1>=thumb_i?theThumb.css("margin-top",Math.floor((m.height()-2*d.borderWidth/(d.origWidth/d.width)-(a.thumbMarginTop+theThumb.height())*(d.numberOfThumbsPerScreen-1)-theThumb.height())/2)+"px"):theThumb.css("margin-top",a.thumbMarginTop+"px")})}function F(){var a=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(a=parseFloat(RegExp.$1));return parseInt(a,10)}var H= "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks randomBlocks".split(" "),B,y,m=100,N=50,E=25,u=navigator.userAgent.toLowerCase();f.fn.allinone_bannerWithPlaylist=function(a){a=f.extend({},f.fn.allinone_bannerWithPlaylist.defaults,a);return this.each(function(){var d= f(this);responsiveWidth=d.parent().width();responsiveHeight=d.parent().height();a.responsiveRelativeToBrowser&&(responsiveWidth=f(window).width(),responsiveHeight=f(window).height());a.origWidth=a.width;a.width100Proc&&(a.width=responsiveWidth);a.origHeight=a.height;a.height100Proc&&(a.height=responsiveHeight);if(a.responsive&&(a.origWidth!=responsiveWidth||a.width100Proc))a.width=a.origWidth>responsiveWidth||a.width100Proc?responsiveWidth:a.origWidth,a.height100Proc||(a.height=a.width/(a.origWidth/ a.origHeight));a.width=parseInt(a.width,10);a.height=parseInt(a.height,10);d.css("display","block");var b=f("<div></div>").addClass("allinone_bannerWithPlaylistBorder"),g=f("<div></div>").addClass("allinone_bannerWithPlaylist").addClass(a.skin),h=f('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <div class="slider-vertical"></div> </div> <canvas class="mycanvas"></canvas>'); d.wrap(g);d.after(h);a.showAllControllers||h.css("display","none");var c=d.parent(".allinone_bannerWithPlaylist"),h=f(".bannerControls",c);c.wrap(b);var l=c.parent(".allinone_bannerWithPlaylistBorder"),m=f(".leftNav",c),A=f(".rightNav",c);m.css("display","none");A.css("display","none");a.showNavArrows&&a.showOnInitNavArrows&&(m.css("display","block"),A.css("display","block"));var t=f(".thumbsHolderWrapper",c),v=f(".thumbsHolderVisibleWrapper",c),n=f(".thumbsHolder",c),p=f(".slider-vertical",c),q, w,x,b=F(),k=0,e={current_img_no:0,currentImg:0,current_imgInside:"",windowWidth:0,carouselStep:0,thumbMarginTop:0,bottomNavClicked:!1,effectIsRunning:!1,mouseOverBanner:!1,timeoutID:"",intervalID:"",arcInitialTime:(new Date).getTime(),timeElapsed:0,windowWidth:0,canvas:"",ctx:"",bannerRatio:a.origWidth/a.origHeight};e.canvas=f(".mycanvas",c)[0];e.canvas.width=2*a.circleRadius+4*a.circleLineWidth;e.canvas.height=2*a.circleRadius+4*a.circleLineWidth;-1!=b&&9>b&&(a.showCircleTimer=!1);a.showCircleTimer&& (e.ctx=e.canvas.getContext("2d"));l.width(a.width);l.height(a.height);l.css("background",a.borderColor);c.width(a.width-3*a.borderWidth/(a.origWidth/a.width)-a.playlistWidth/(a.origWidth/a.width));c.height(a.height-2*a.borderWidth/(a.origWidth/a.width));c.css({left:a.borderWidth/(a.origWidth/a.width)+"px",top:a.borderWidth/(a.origWidth/a.width)+"px"});h.width("100%");h.height("100%");v.width(a.playlistWidth/(a.origWidth/a.width));v.height(c.height());t.width(a.playlistWidth/(a.origWidth/a.width)); t.height(c.height());t.css({top:0,right:-1*(a.borderWidth/(a.origWidth/a.width)+a.playlistWidth/(a.origWidth/a.width))+"px"});n.width(a.playlistWidth/(a.origWidth/a.width));n.css("top",a.borderWidth/(a.origWidth/a.width)+"px");var r=d.find("ul:first").children(),s,B="",g=0;r.each(function(){e.currentImg=f(this);e.currentImg.is("li")||(e.currentImg=e.currentImg.find("li:first"));if(e.currentImg.is("li")){e.currentImg.css("display","none");k++;var d=f(r[k-1]).attr("data-bottom-thumb");B="";a.showThumbs&& (B='<img src="'+d+'">');s=f('<div class="thumbsHolder_ThumbOFF" rel="'+(k-1)+'"><div class="padding">'+B+'<span class="title"style="font-size:18px; padding-top:30px; padding-left:10px;">'+e.currentImg.attr("data-title")+'</span><br><span class="reg">'+e.currentImg.attr("data-desc")+"</span></div></div>");n.append(s);0==a.origThumbW&&(0==a.numberOfThumbsPerScreen&&(a.numberOfThumbsPerScreen=Math.floor(a.origHeight/s.height())),a.origThumbW=s.width(),a.origThumbH=s.height(),q=f(".thumbsHolder_ThumbOFF .padding",c),a.origthumbLeftPadding=q.css("padding-left").substr(0, q.css("padding-left").lastIndexOf("px")),a.origthumbRightPadding=q.css("padding-right").substr(0,q.css("padding-left").lastIndexOf("px")),a.origthumbTopPadding=q.css("padding-top").substr(0,q.css("padding-left").lastIndexOf("px")),a.origthumbBottomPadding=q.css("padding-bottom").substr(0,q.css("padding-left").lastIndexOf("px")),e.thumbMarginTop=Math.floor((t.height()-s.height()*a.numberOfThumbsPerScreen)/(a.numberOfThumbsPerScreen-1)),w=f(".thumbsHolder_ThumbOFF .title",c),x=f(".thumbsHolder_ThumbOFF .reg", c),-1!=w.css("font-size").lastIndexOf("px")?a.origthumbTitleFont=w.css("font-size").substr(0,w.css("font-size").lastIndexOf("px")):-1!=w.css("font-size").lastIndexOf("em")&&(a.origthumbTitleFont=w.css("font-size").substr(0,w.css("font-size").lastIndexOf("em"))),-1!=w.css("line-height").lastIndexOf("px")?a.origthumbTitleLineHeight=w.css("line-height").substr(0,w.css("line-height").lastIndexOf("px")):-1!=w.css("line-height").lastIndexOf("em")&&(a.origthumbTitleLineHeight=w.css("line-height").substr(0, w.css("line-height").lastIndexOf("em"))),-1!=x.css("font-size").lastIndexOf("px")?a.origthumbRegFont=x.css("font-size").substr(0,x.css("font-size").lastIndexOf("px")):-1!=x.css("font-size").lastIndexOf("em")&&(a.origthumbRegFont=x.css("font-size").substr(0,x.css("font-size").lastIndexOf("em"))),-1!=x.css("line-height").lastIndexOf("px")?a.origthumbRegLineHeight=x.css("line-height").substr(0,x.css("line-height").lastIndexOf("px")):-1!=x.css("line-height").lastIndexOf("em")&&(a.origthumbRegLineHeight= x.css("line-height").substr(0,x.css("line-height").lastIndexOf("em"))));n.css("height",n.height()+e.thumbMarginTop+s.height()+"px");1>=k?s.css("margin-top",Math.floor((t.height()-2*a.borderWidth/(a.origWidth/a.width)-(e.thumbMarginTop+s.height())*(a.numberOfThumbsPerScreen-1)-s.height())/2)+"px"):s.css("margin-top",e.thumbMarginTop+"px")}});q=f(".thumbsHolder_ThumbOFF .padding",c);w=f(".thumbsHolder_ThumbOFF .title",c);x=f(".thumbsHolder_ThumbOFF .reg",c);var z=f(".thumbsHolder_ThumbOFF",c);M(e,a, k,c,z,n,s,v,t,q,w,x);k>a.numberOfThumbsPerScreen&&(p.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(c,d){G(d.value,s,k,n,a,e,p)}}),0>=a.borderWidth&&(g=p.width()/2),p.height(t.height()-25),p.css({display:"block",left:Math.floor(a.width-2*a.borderWidth/(a.origWidth/a.width)+(a.borderWidth/(a.origWidth/a.width)-p.width())/2)-g+"px"}));e.current_img_no=a.firstImg;a.firstImg>k&&(e.current_img_no=k);0>a.firstImg&&(e.current_img_no=0);a.randomizeImages&&(e.current_img_no= Math.floor(Math.random()*k));e.current_img_no>=a.numberOfThumbsPerScreen&&G(0,s,k,n,a,e,p);e.currentImg=f(r[e.current_img_no]);e.current_imgInside=e.currentImg.find("img:first");-1!=u.indexOf("ipad")||-1!=u.indexOf("iphone")||-1!=u.indexOf("ipod")||-1!=u.indexOf("webos")||-1!=b&&7>=b?c.append('<img id="curBgImgIos" src="'+e.current_imgInside.attr("src")+'" width="'+c.width()+'" height="'+c.height()+'">'):(c.css("background",'url("'+e.current_imgInside.attr("src")+'") no-repeat'),a.responsive&&(-1== b||-1!=b&&9<=b?c.css({"-webkit-background-size":c.width()+"px "+c.height()+"px","-moz-background-size":c.width()+"px "+c.height()+"px","-o-background-size":c.width()+"px "+c.height()+"px","-ms-background-size":c.width()+"px "+c.height()+"px","background-size":c.width()+"px "+c.height()+"px"}):8==b&&c.css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e.current_imgInside.attr("src")+"',sizingMethod='scale')"})));a.enableTouchScreen&&(b=Math.floor(1E5*Math.random()),c.wrap('<div id="bannerWithPlaylistParent_'+ b+'" style="position:relative;" />'),f("#bannerWithPlaylistParent_"+b).width(c.width()),f("#bannerWithPlaylistParent_"+b).height(a.height-2*a.borderWidth/(a.origWidth/a.width)+1),f("#bannerWithPlaylistParent_"+b).css({left:a.borderWidth/(a.origWidth/a.width)+"px",top:a.borderWidth/(a.origWidth/a.width)+"px"}),c.css({cursor:"url("+a.absUrl+"skins/hand.cur),url("+a.absUrl+"skins/hand.cur),move",left:"0px",top:"0px",position:"absolute"}),c.draggable({axis:"y",containment:"parent",start:function(){origTop= f(this).css("top")},stop:function(){e.effectIsRunning||(finalTop=f(this).css("top"),direction=1,origTop>=finalTop&&(direction=-1),C(direction,e,a,k,z,c,s,n,p,r));f(this).css("top","0px")}}));J(e,a,d,h);c.bind("effectComplete",function(){var b=F();e.effectIsRunning=!1;-1!=u.indexOf("ipad")||-1!=u.indexOf("iphone")||-1!=u.indexOf("ipod")||-1!=u.indexOf("webos")||-1!=b&&7>=b?(f("#curBgImgIos",c).attr("src",e.current_imgInside.attr("src")),f("#curBgImgIos",c).width(c.width()),f("#curBgImgIos",c).height(c.height())): (c.css("background",'url("'+e.current_imgInside.attr("src")+'") no-repeat'),a.responsive&&(-1==b||-1!=b&&9<=b?c.css({"-webkit-background-size":c.width()+"px "+c.height()+"px","-moz-background-size":c.width()+"px "+c.height()+"px","-o-background-size":c.width()+"px "+c.height()+"px","-ms-background-size":c.width()+"px "+c.height()+"px","background-size":c.width()+"px "+c.height()+"px"}):8==b&&c.css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e.current_imgInside.attr("src")+"',sizingMethod='scale')"}))); e.arcInitialTime=(new Date).getTime();e.timeElapsed=0;a.showCircleTimer&&(clearInterval(e.intervalID),e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.ctx.beginPath(),e.ctx.globalAlpha=a.behindCircleAlpha/100,e.ctx.arc(a.circleRadius+2*a.circleLineWidth,a.circleRadius+2*a.circleLineWidth,a.circleRadius,0,2*Math.PI,!1),e.ctx.lineWidth=a.circleLineWidth+2,e.ctx.strokeStyle=a.behindCircleColor,e.ctx.stroke(),e.ctx.beginPath(),e.ctx.globalAlpha=a.circleAlpha/100,e.ctx.arc(a.circleRadius+2*a.circleLineWidth, a.circleRadius+2*a.circleLineWidth,a.circleRadius,0,0,!1),e.ctx.lineWidth=a.circleLineWidth,e.ctx.strokeStyle=a.circleColor,e.ctx.stroke(),e.intervalID=setInterval(function(){K(e,a)},125));J(e,a,d,h);0<a.autoPlay&&(1<k&&!e.mouseOverBanner)&&(clearTimeout(e.timeoutID),e.timeoutID=setTimeout(function(){C(1,e,a,k,z,c,s,n,p,r)},1E3*a.autoPlay))});c.mouseenter(function(){e.mouseOverBanner=!0;clearTimeout(e.timeoutID);nowx=(new Date).getTime();e.timeElapsed+=nowx-e.arcInitialTime;a.autoHideNavArrows&&a.showNavArrows&& (m.css("display","block"),A.css("display","block"))});c.mouseleave(function(){e.mouseOverBanner=!1;nowx=(new Date).getTime();a.autoHideNavArrows&&a.showNavArrows&&(m.css("display","none"),A.css("display","none"));if(0<a.autoPlay&&1<k){clearTimeout(e.timeoutID);e.arcInitialTime=(new Date).getTime();var d=parseInt(1E3*a.autoPlay-(e.timeElapsed+nowx-e.arcInitialTime),10);e.timeoutID=setTimeout(function(){C(1,e,a,k,z,c,s,n,p,r)},d)}});c.click(function(){if(void 0!=f(r[e.current_img_no]).attr("data-link")&& ""!=f(r[e.current_img_no]).attr("data-link")&&!e.effectIsRunning){var c=a.target;void 0!=f(r[e.current_img_no]).attr("data-target")&&""!=f(r[e.current_img_no]).attr("data-target")&&(c=f(r[e.current_img_no]).attr("data-target"));"_blank"==c?window.open(f(r[e.current_img_no]).attr("data-link")):window.location=f(r[e.current_img_no]).attr("data-link")}});m.click(function(){e.effectIsRunning||(clearTimeout(e.timeoutID),C(-1,e,a,k,z,c,s,n,p,r))});A.click(function(){e.effectIsRunning||(clearTimeout(e.timeoutID), C(1,e,a,k,z,c,s,n,p,r))});z.click(function(){if(!e.effectIsRunning){var d=f(this).attr("rel");f(z[e.current_img_no]).removeClass("thumbsHolder_ThumbON");e.bottomNavClicked=!0;e.current_img_no=d-1;C(1,e,a,k,z,c,s,n,p,r)}});z.mouseenter(function(){var a=f(this);a.attr("rel");a.addClass("thumbsHolder_ThumbON")});z.mouseleave(function(){var a=f(this),c=a.attr("rel");e.current_img_no!=c&&a.removeClass("thumbsHolder_ThumbON")});v.mousewheel(function(c,d){c.preventDefault();var b=p.slider("value");if(1< parseInt(b,10)&&-1==parseInt(d,10)||100>parseInt(b,10)&&1==parseInt(d,10))b+=d,p.slider("value",b),G(b,s,k,n,a,e,p)});var y=!1;f(window).resize(function(){var b=F();doResizeNow=!0;-1!=navigator.userAgent.indexOf("Android")&&(0==a.windowOrientationScreenSize0&&0==window.orientation&&(a.windowOrientationScreenSize0=f(window).width()),0==a.windowOrientationScreenSize90&&90==window.orientation&&(a.windowOrientationScreenSize90=f(window).height()),0==a.windowOrientationScreenSize_90&&-90==window.orientation&& (a.windowOrientationScreenSize_90=f(window).height()),a.windowOrientationScreenSize0&&(0==window.orientation&&f(window).width()>a.windowOrientationScreenSize0)&&(doResizeNow=!1),a.windowOrientationScreenSize90&&(90==window.orientation&&f(window).height()>a.windowOrientationScreenSize90)&&(doResizeNow=!1),a.windowOrientationScreenSize_90&&(-90==window.orientation&&f(window).height()>a.windowOrientationScreenSize_90)&&(doResizeNow=!1),0==e.windowWidth&&(doResizeNow=!1,e.windowWidth=f(window).width())); -1!=b&&(9==b&&0==e.windowWidth)&&(doResizeNow=!1);e.windowWidth==f(window).width()?(doResizeNow=!1,a.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,doResizeNow=!0)):e.windowWidth=f(window).width();a.responsive&&doResizeNow&&(!1!==y&&clearTimeout(y),y=setTimeout(function(){var b=a,g=k,h=s,m=q,A=w,B=x,y=F(),D=f("body").css("overflow"),E=0;f("body").css("overflow","hidden");b.enableTouchScreen?(responsiveWidth=d.parent().parent().parent().parent().width(), responsiveHeight=d.parent().parent().parent().parent().height()):(responsiveWidth=d.parent().parent().parent().width(),responsiveHeight=d.parent().parent().parent().height());b.responsiveRelativeToBrowser&&(responsiveWidth=f(window).width(),responsiveHeight=f(window).height());b.width100Proc&&(b.width=responsiveWidth);b.height100Proc&&(b.height=responsiveHeight);if(b.origWidth!=responsiveWidth||b.width100Proc)b.origWidth>responsiveWidth||b.width100Proc?b.width=responsiveWidth:b.width100Proc||(b.width= b.origWidth),b.height100Proc||(b.height=b.width/e.bannerRatio),b.width=parseInt(b.width,10),b.height=parseInt(b.height,10),l.width(b.width),l.height(b.height),c.width(parseInt(b.width-3*b.borderWidth/(b.origWidth/b.width)-b.playlistWidth/(b.origWidth/b.width),10)),c.height(parseInt(b.height-2*b.borderWidth/(b.origWidth/b.width),10)),c.css({left:b.borderWidth/(b.origWidth/b.width)+"px",top:b.borderWidth/(b.origWidth/b.width)+"px"}),v.width(b.playlistWidth/(b.origWidth/b.width)),v.height(c.height()), t.width(b.playlistWidth/(b.origWidth/b.width)),t.height(c.height()),t.css({top:0,right:-1*(b.borderWidth/(b.origWidth/b.width)+b.playlistWidth/(b.origWidth/b.width))+"px"}),n.width(b.playlistWidth/(b.origWidth/b.width)),n.css("top",b.borderWidth/(b.origWidth/b.width)+"px"),g>b.numberOfThumbsPerScreen&&(0>=b.borderWidth&&(E=p.width()/2),p.height(t.height()-25),p.css({display:"block",left:Math.floor(b.width-2*b.borderWidth/(b.origWidth/b.width)+(b.borderWidth/(b.origWidth/b.width)-p.width())/2)-E+"px"})), -1!=u.indexOf("ipad")||-1!=u.indexOf("iphone")||-1!=u.indexOf("ipod")||-1!=u.indexOf("webos")||-1!=y&&7>=y?(f("#curBgImgIos",c).attr("src",e.current_imgInside.attr("src")),f("#curBgImgIos",c).width(c.width()),f("#curBgImgIos",c).height(c.height())):-1==y||-1!=y&&9<=y?c.css({"-webkit-background-size":c.width()+"px "+c.height()+"px","-moz-background-size":c.width()+"px "+c.height()+"px","-o-background-size":c.width()+"px "+c.height()+"px","-ms-background-size":c.width()+"px "+c.height()+"px","background-size":c.width()+ "px "+c.height()+"px"}):8==y&&c.css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e.current_imgInside.attr("src")+"',sizingMethod='scale')"}),b.enableTouchScreen&&(c.parent().width(c.width()),c.parent().height(b.height-2*b.borderWidth/(b.origWidth/b.width)+1),c.parent().css({left:b.borderWidth/(b.origWidth/b.width)+"px",top:b.borderWidth/(b.origWidth/b.width)+"px"}),c.css({left:"0px",top:"0px"})),M(e,b,g,c,z,n,h,v,t,m,A,B),clearTimeout(e.timeoutID),C(1,e,b,g,z,c,h,n,p,r);f("body").css("overflow", D)},300))});f(z[e.current_img_no]).addClass("thumbsHolder_ThumbON");0<a.autoPlay&&1<k&&(a.showCircleTimer&&(e.intervalID=setInterval(function(){K(e,a)},125)),e.timeoutID=setTimeout(function(){C(1,e,a,k,z,c,s,n,p,r)},1E3*a.autoPlay))})};f.fn.myReverse=[].reverse;f.fn.allinone_bannerWithPlaylist.defaults={skin:"elegant",width100Proc:!1,height100Proc:!1,randomizeImages:!1,firstImg:0,numberOfStripes:20,numberOfRows:5,numberOfColumns:10,defaultEffect:"random",effectDuration:0.5,autoPlay:4, loop:!0,target:"_blank",showAllControllers:!0,showNavArrows:!0,showOnInitNavArrows:!0,autoHideNavArrows:!0,showThumbs:!0,borderWidth:15,borderColor:"#e9e9e9",playlistWidth:300,enableTouchScreen:!0,absUrl:"",showCircleTimer:!0,showCircleTimerIE8IE7:!1,circleRadius:10,circleLineWidth:4,circleColor:"#FF0000",circleAlpha:100,behindCircleColor:"#000000",behindCircleAlpha:50,responsive:!1,responsiveRelativeToBrowser:!0,numberOfThumbsPerScreen:0,origWidth:0,origHeight:0,origThumbW:0,origThumbH:0,origThumbImgW:214, origThumbImgH:128,origthumbLeftPadding:0,origthumbRightPadding:0,origthumbTopPadding:0,origthumbBottomPadding:0,origthumbTitleFont:0,origthumbRegFont:0,origthumbTitleLineHeight:0,origthumbRegLineHeight:0,origthumbsHolder_MarginTop:0,windowOrientationScreenSize0:0,windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0}})(jQuery);