window.addEvent("domready",function(){function a(g){var d=document.id("kbbcode-poll-options");var f=document.id("nb_options_allowed");var e=new Element("div",{"class":"polloption",text:KUNENA_POLL_OPTION_NAME+" "+g+" "});document.id("helpbox").set("value",KUNENA_EDITOR_HELPLINE_OPTION);var c=new Element("input",{name:"polloptionsID[new"+g+"]",id:"field_option"+g,type:"text",maxlength:"100",onmouseover:'document.id("helpbox").set("value", "'+KUNENA_EDITOR_HELPLINE_OPTION+'")'});e.inject(d);e.inject(f,"before");c.inject(e);}function b(c){var d=document.id("kbbcode-poll-options");var g=document.id("nb_options_allowed");var e=new Element("div");var f=new Element("span");var h=new Element("img",{src:KUNENA_ICON_ERROR});e.inject(d);e.inject(g,"before");e.set("id","option_error");h.inject(e);f.inject(e);f.set("text",c);}if(document.id("kbutton-poll-add")!=undefined){document.id("kbutton-poll-add").onclick=function(){var d=document.id("nb_options_allowed").get("value");var c=document.id("kbbcode-poll-options").getChildren("div.polloption");if(!d||(c.length<d&&c.length>1)){a(c.length+1);}else{if(!d||c.length<1){a(c.length+1);a(c.length+2);}else{if(document.id("option_error")==undefined){b(KUNENA_POLL_NUMBER_OPTIONS_MAX_NOW);}}}};}if(document.id("kbutton-poll-rem")!=undefined){document.id("kbutton-poll-rem").onclick=function(){var d=document.id("kbbcode-poll-options").getLast("div.polloption");if(d){var c=document.id("option_error");if(c){document.id("option_error").dispose();}d.dispose();}};}});