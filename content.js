$(document).ready(function(){

    // Navbar guide
    if (document.domain=="brynmawr.edu" || document.domain=="vbm.brynmawr.edu"){
        $("#pthdr2logoswan").append('<strong><a style="font-size:13px;color:#426A92">&nbsp&nbsp&nbsp&nbspEnhanced by\
        <a style="font-size:13px;color:#426A92">PrettyPeopleSoft: </a>\
        <a style="font-size:13px;color:#426A92" class="ptntop" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_SSS_STUDENT_CENTER&amp;IsFolder=false&amp;IgnoreParamTempl=FolderPath%2cIsFolder">\
        <u>Student Center</u></a> | <a style="font-size:13px;color:#426A92" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ACADEMIC_RECORDS.HC_SSS_MY_CRSEHIST_GBL&amp;IsFolder=false&amp;IgnoreParamTempl=FolderPath%2cIsFolder">\
        <u>Nicer Grades</u></a> | <a style="font-size:13px;color:#426A92" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_LIST.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SSR_SSENRL_LIST&amp;IsFolder=false&amp;IgnoreParamTempl=FolderPath%2cIsFolder">\
        <u>Export Schedule</u></a></strong></a>')

        // Change navbar
        $("body").css({"background-color":"transparent"})
        $('#pthnavcontainer').css({"background-color":"transparent"})
        $('div').css({"background-image":"none"})
        $('nav').css({"background-image":"none"})
        $('li').css({"background-color":"none"})
        $('#ptbr_header_container').css({"background":"url('https://cdn3.vectorstock.com/i/1000x1000/25/02/blue-crystal-pattern-background-vector-19752502.jpg')"})
        $('#pthdr2container').css({"background-color":"transparent"})  
    
        if($("body").find('#login').length){
            $("body").css({"background-image":"url('https://cdn3.vectorstock.com/i/1000x1000/25/02/blue-crystal-pattern-background-vector-19752502.jpg')"})      
        }
    }
    


    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEREQ_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEREQ_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PT_PRCS_USER_NOTIFY_CSS_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEDEF_TANGERINE_1.css"]').remove();
    // $('link[rel=stylesheet][href~="m.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEDEF_TANGERINE_1.css"]').remove();

    // var script = document.createElement("SCRIPT");
    // script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    // script.type = 'text/javascript';
    // script.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };

    // var script2 = document.createElement("SCRIPT");
    // script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
    // script2.type = 'text/javascript';
    // script2.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };

    // var script3 = document.createElement("SCRIPT");
    // script3.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
    // script3.type = 'text/javascript';
    // script3.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };
    
    // var bootstrap = document.createElement("LINK");
    // bootstrap.rel = 'stylesheet';
    // bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    // bootstrap.intergity = 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
    // bootstrap.crossorigin = 'anonymous'
    
    // document.getElementsByTagName("body")[0].appendChild(script);
    // document.getElementsByTagName("body")[0].appendChild(script2);
    // document.getElementsByTagName("body")[0].appendChild(script3);
    // document.getElementsByTagName("head")[0].appendChild(bootstrap);

    // $("div").attr( "class", "container" )

    
    
    //Prepending navbar
    // $('body').prepend('<div id="pthdr2container" class="pthdr2container"><div id="pthdr2logoswan"\
    //  class="">&nbsp;</div><span id="ptgreetingmessage" class="greeting">Bi-Co Online Information \
    //  Center</span><div id="pthdr2syslinks" class="pthdr2syslinks"><a id="pthdr2home" class="PSHYPERLINK"\
    //   title="Home" target="_top" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/HRMS/h/?tab=DEFAULT" \
    //   onclick="bcUpdater.removeStoredData(bcUpdater.isMenuCrefNav); if ((typeof ptIframeHdr != 'undefined') \
    //   &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked(this);} else {saveWarning(&quot;&quot;, \
    //     null, &quot;_top&quot;, this.href); return false;}" proxied="false"><span>Home</span></a><div class="pthdr2sep">\
    //   <!--divider--></div><a id="pthdr2atf" class="PSHYPERLINK" title="Add to Favorites" target="_top" \
    //   href="../../../EMPLOYEE/HRMS/s/WEBLIB_PTIFRAME.ISCRIPT1.FieldFormula.IScript_PT_Popup" onclick="if \
    //   ((typeof ptIframeHdr != 'undefined') &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked(this);} \
    //   else {saveWarning(&quot;&quot;, null, &quot;_top&quot;, this.href); return false;}" name="AddToFavorites">\
    //   <span>Add to Favorites</span></a><div class="pthdr2sep"><!--divider--></div><a id="pthdr2logout" class="PSHY\
    //   PERLINK" title="Sign Out" target="_top" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/HRMS/?cmd=logout"\
    //   onclick="if ((typeof ptIframeHdr != 'undefined') &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked\
    //     (this);} else {saveWarning(&quot;&quot;, null, &quot;_top&quot;, this.href); return false;}"><span>Sign Out</span></a></div></div>')
    // $("#ptifrmtgtframe").on('load',function(){ 
    //     event.preventDefault();
    // })


    // $('head').prepend('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">');
    // $('body').append('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>')
    // $('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>');
    // $('body').append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>');

    // // $("#ptifrmtgtframe").wrap('<div class="embed-responsive"></div>')
    // // $("#ptifrmtgtframe").attr( "class", "embed-responsive-item")
    // // $("#ptifrmtgtframe").attr( "onload", "")

    // //Changing fonts and navbar
    // // $('head').prepend('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato"/>')
    // $("body").css({"background-color":"transparent"})
    // // $('span').css({"font-family":"Lato",'color':'rgb(152,30,50)','font-size':'14px'})
    // // $('a').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
    // $('#pthnavcontainer').css({"background-color":"transparent"})
    // $('div').css({"background-image":"none"})
    // $('nav').css({"background-image":"none"})
    // $('li').css({"background-color":"none"})
    // $('#ptbr_header_container').css({"background":"url('https://cdn3.vectorstock.com/i/1000x1000/25/02/blue-crystal-pattern-background-vector-19752502.jpg')"})
    // $('#pthdr2container').css({"background-color":"transparent"})

    //Making iframe run faster and nicer
    // $("#ptifrmtgtframe").attr('id','annoying_iframe')
    // $('#annoying_iframe').unwrap();
    // $('#annoying_iframe').unwrap();
    // $("#annoying_iframe").wrap('<div class="embed-responsive embed-responsive-4by3"></div>')
    $("#ptifrmtgtframe").attr('loading','lazy')
    // $("#annoying_iframe").attr( "class", "embed-responsive-item")
    
    //$("#annoying_iframe").css({"width": "100%","height": "100%"})

    // jQuery.fn.swapWith = function(to) {
    // return this.each(function() {
    //     var copy_to = $(to).clone(true);
    //     var copy_from = $(this).clone(true);
    //     $(to).replaceWith(copy_from);
    //     $(this).replaceWith(copy_to);
    //     });
    // };
    // $("#pthdr2container").swapWith("#ptdropdownmenu");

    
    // Tried to get rid of iframe entirely
    // var direction = $("#ptifrmtgtframe").attr('src')
    // $(location).attr('href', direction)

    // Force refresh to apply new layout to student center
    // if($("#ptifrmtgtframe").contents().find('#DERIVED_SSS_SCL_EMPLID').length){
    //     document.getElementById("ptifrmtgtframe").contentDocument.location.reload(true)
    // }
    
    $("#ptifrmtgtframe").on('load',function(){ 
        var x = $("#ptifrmtgtframe").contents().find('body')
        // event.preventDefault();
        // $("#annoying_iframe").contents().find('head').prepend('<style>body{webkitTransform:scale(1.2);msTransform:scale(1.2);transform:scale(1.2) translateX(10%) translateY(10%)}</style>')   
        
        //Load bootstrap classes
        $("#ptifrmtgtframe").contents().find('head').prepend('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">');
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>')
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>');
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>');

        // only apply to student center
        // if(x.find('#DERIVED_SSS_SCL_TITLE1\\$78\\$').length){
        // Changing font 
        // Change font and elements
        $("#ptifrmtgtframe").contents().find('head').prepend('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato"/>')
        $("#ptifrmtgtframe").contents().find('span').css({"font-family":"Lato",'color':'#1b0000','background-color':'none','font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('td').css({"font-family":"Lato"})
        $("#ptifrmtgtframe").contents().find('a').css({"font-family":"Lato",'font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('label').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('.PSPUSHBUTTON').attr( "class", "btn btn-info btn-sm" )
        $("#ptifrmtgtframe").contents().find('.PSDROPDOWNLIST').attr( "class", "form-control" )
        $("#ptifrmtgtframe").contents().find('.PSEDITBOX').attr("class", "form-control-sm")

        
        //Change CSS
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOX').css({'background-color':'rgba(256,256,256,0.8)'})
        // $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').attr("class","card-header")
        $("#ptifrmtgtframe").contents().find('.PABACKGROUNDINVISIBLE').css({'background-color':'transparent'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL2GRIDLABEL').css({'color':'rgb(152,30,50)','background-color':'#F1F3F4'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL3GRIDLABEL').css({'color':'rgb(152,30,50)','background-color':'#F1F3F4'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRIDWBO').css({'border-width':'0px !important'}) 
        $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRIDWBO').attr("frame","box")
        $("#ptifrmtgtframe").contents().find('.card-header').css({'padding':'0px','padding-left':'10px'})
        $("#ptifrmtgtframe").contents().find('.card-body').css({'padding':'0px','padding-left':'20px','background-color':'rgba(256,256,256,0.8)'})
        // $("#ptifrmtgtframe").contents().find('.PSGROUPBOXNBO').css({'padding':'5px','margin':'0px'})
        // $("#ptifrmtgtframe").contents().find('.PAGROUPBOXLABELINVISIBLEWBO').css({'padding':'0px','margin':'0px'})
        // $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRID').css({'padding':'0px','margin':'0px'})

        // $("#ptifrmtgtframe").contents().find('tr').css({"padding":"1","margin":"0","background-color":"rgba(255,255,255, 0)"})
        // $("#ptifrmtgtframe").contents().find('td').css({"padding":"1","margin":"0","background-color":"rgba(255,255,255, 0)",'color':'#1b0000'})
        //$("#ptifrmtgtframe").contents().find('.PSGROUPBOX').css({'background-color':'white'})
        // $("#ptifrmtgtframe").contents().find('tr').css({'border-left-width':'0px !important','border-right-width':'0px !important','border-bottom-width':'0px !important'})
        // $("#ptifrmtgtframe").contents().find('td').css({'border':'0px !important','border-right-width':'0px !important','border-bottom-width':'0px !important'})
        $("#ptifrmtgtframe").contents().find('.PATRANSACTIONTITLE').css({'color':'rgb(152,30,50)',"font-size":"18px",'font-weight':'700'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOX').css('cssText','border-width: 0px !important;background-color: white !important')
        $("#ptifrmtgtframe").contents().find('.pt_classic_plus').css('cssText','border-width: 0px !important')
        $("#ptifrmtgtframe").contents().find('.PTCPGROUPBOXWBO .PSLEVEL1GRIDNBO').css('cssText','border-width: 0px !important')

        // $("#ptifrmtgtframe").contents().find('table').css({'background-color':'white'})
        // $("#ptifrmtgtframe").contents().find('tbody').css({'border-left-width':'0px !important','border-right-width':'0px !important','border-bottom-width':'0px !important'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXWBO').css({'border-width':'0px !important','border':'0px','padding':'0px','margin':'0px','background-color':'rgba(256,256,256,0.8)'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').css({'border-width':'0px !important','border':'0px','color':'rgb(152,30,50)','background-color':'#F1F3F4','font-size':'16px'})
        $("#ptifrmtgtframe").contents().find('body').css({"background-color":"rgba(250,250,250,0.9)"})
        $("#ptifrmtgtframe").contents().find('div').css({'color':'rgb(152,30,50)','font-weight':'700'})
        //$("#ptifrmtgtframe").contents().find('input').css({"border":"none","background":"none","background-color":'rgb(152,30,50)',"font-family":"Lato","color":"white"})
        // }
        //Give credits
        // $("#ptifrmtgtframe").contents().find('body').append('<div style="font-size: 8px; font-weight: 300 ; align: center;">&nbsp&nbsp&nbsp&nbspYou are using a beautified version of Bionic by ruiming100@gmail.com | Background by Manora </div>')

        x.find("#DERIVED_SSS_SCL_SS_WEEKLY_SCHEDULE").html('<strong>View and Export Your Schedule</strong>')
        //Making 4.0s
        
        // if( x.find('#STATS_CUMS\\$13').length ){
        //     var num = x.find("#STATS_CUMS\\$13").text()
        //     num = parseInt(num) * 4
        //     var total = num.toString().concat(".000")
        //     x.find("#win0divSTATS_CUMS\\$12").html(total)
        //     x.find("#win0divSTATS_CUMS\\$14").html('4.000')
            
        //     var gradeoff = "#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_OFF\\$"
        //     var grade_input = "#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_INPUT\\$"
        //     var graded_points = "#win0divSTDNT_ENRL_SSV1_GRADE_POINTS\\$"
        //     for (i = 0; i < 5; i++) {
        //         var item = i.toString()
        //         var find1 = gradeoff.concat(item)
        //         var find2 = grade_input.concat(item)
        //         var find3 = graded_points.concat(item)
        //         x.find(find1).html('4.0');
        //         x.find(find2).html('4.0');
        //         x.find(find3).html('4.000');
        //     }
        // };
        arr=[]

        if( x.find('#win0divCRSE_GRADE\\$0').length ){
            var grade = '#win0divCRSE_GRADE\\$'
            for (i = 0; i < 200; i++) {
        	    var item = i.toString()
                var find = grade.concat(item) 
                var y = x.find(find)
                if( y.length ){
                    var temp = y.text();
                    arr.push(temp);
                    y.html('');
                }   
            }
        }


        function show_popup(arr){
            if( x.find('#win0divCRSE_GRADE\\$0').length )         // use this if you are using id to check
            {
                alert('You are about to see your grades when you click "OK". No matter what happens, it is OK. I believe in you.') 
                for (i = 0; i < arr.length; i++) {
                    var grade = '#win0divCRSE_GRADE\\$'
                    var item = i.toString()
                    var find = grade.concat(item) 
                    x.find(find).html(arr[i])
                } 
            }
            
            // if( x.find('#win0divCRSE_GRADE\\$0').length ){      
            //     $("#ptifrmtgtframe").contents().find('body').prepend('<div class="row" id="memes"><div class="column">\
            //         <img src="https://66.media.tumblr.com/edf634447a2cb6885ffa5ca1b80d92d8/tumblr_npntnijAYS1r2aobgo4_250.gif" alt="Just do it">\
            //         </div><div class="column">\
            //         <img src="https://66.media.tumblr.com/5a9af57faaa90b2303410831d708cc33/tumblr_npntnijAYS1r2aobgo3_250.gif" alt="Just do it!">\
            //         </div><div class="column">\
            //         <img src="https://66.media.tumblr.com/f464c525207f7e6e4bee642fcb8cbb1c/tumblr_inline_p7hmprTOUs1rt6qr4_540.gif" alt="You got it" height="187px">\
            //         </div><div class="column">\
            //         <button id="memesbutton" class="btn btn-info btn-sm">Hide</button></div></div>')

            //     $("#ptifrmtgtframe").contents().find('#memesbutton').click(function() {
            //         $("#ptifrmtgtframe").contents().find('#memes').hide()
            //     })
            // }
            // if( x.find('#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_OFF\\$0').length )         // use this if you are using id to check
            // {
            // confirm('The grade you see below has been beautified. Have a good day! 【This is for fun and personal use only】') 
            // }

        }

        window.setTimeout(function () {show_popup(arr);}, 3000 );


        // Generate ics file for all class meeting times
        // The hierachy is class - session - time slot
        // e.g. Algebra - Lecture - MoWeFr
        function download_csv() {
            
            // Start calendar
            // var data = []
            var ics_lines = [
             "BEGIN:VCALENDAR",
             "VERSION:2.0",
             "PRODID:-//Addroid Inc.//iCalAdUnit//EN",
             "METHOD:PUBLISH",
             "BEGIN:VTIMEZONE",
             "TZID:America/New_York",
             "X-LIC-LOCATION:America/New_York",
             "BEGIN:DAYLIGHT",
             "TZOFFSETFROM:-0500",
             "TZOFFSETTO:-0400",
             "TZNAME:EDT",
             "DTSTART:19700308T020000",
             "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
             "END:DAYLIGHT",
             "BEGIN:STANDARD",
             "TZOFFSETFROM:-0400",
             "TZOFFSETTO:-0500",
             "TZNAME:EST",
             "DTSTART:19701101T020000",
             "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
             "END:STANDARD",
             "END:VTIMEZONE"]

            // q is the session number in all the sessions (globally)
            var q = 0
            // i is the class number
            for (i = 0; i < 20; i++) {
                // j is the session number in the ith class (locally)
                for (j = 1; j < 5; j++) {
                    var find_class_sess = '#trCLASS_MTG_VW\\$'.concat(i.toString()).concat('_row').concat(j.toString())  
                    if (x.find(find_class_sess).length && x.find('#STATUS\\$'.concat(i.toString())).text()!='Dropped'){
                        // session_num and class_num are used to pass to the pseudo function below
                        console.log("class"+i.toString()+"no"+q.toString())
                        var session_num = q.toString()
                        var class_num = i.toString() 

                        


// Due to JavaScript function closure issue, this whole block 
// of code is inserted here. You can see this as a pseudo function
// with input (class_num,session_num,data) and output
// all time slots for one session of a class
            
            // first get the general/displayed starting and ending dates for the session
            var find_dates = "#MTG_DATES\\$".concat(session_num)
            var dates = x.find(find_dates).text()
            var dates_array = dates.split(" ")
            var start_date = new Date(dates_array[0])
            var end_date = new Date(dates_array[2])

            // then get the starting days(number not text) of all time slots of a session 
            var dict = {'Mo':1,'Tu':2,'We':3,'Th':4,'Fr':5}
            var find_days = "#MTG_SCHED\\$".concat(session_num)
            var days = x.find(find_days).text()
            var days_array = days.split(" ")
            var days = days_array[0]
            var start_days = days.match(/..?/g)
            for (m = 0; m < start_days.length; m++) {
                        start_days[m] = dict[start_days[m]]
                }

            // now get the exact/precise starting dates of all time slots of a session
            var start_dates = []
            for (n = 0; n < start_days.length; n++) {
                if(start_days[n] >= start_date.getDay()){
                    var temp = new Date(start_date.getTime())
                    diff = start_days[n] - start_date.getDay()
                    temp.setDate(temp.getDate() + diff)
                    start_dates.push(temp)
                } else {
                    var temp = new Date(start_date.getTime())
                    diff = 7 - (start_date.getDay() - start_days[n])
                    temp.setDate(temp.getDate() + diff)
                    start_dates.push(temp)
                }
            }
            
            // skip if no date/time is found for a session
            try{
                days_array[1].match(/[a-zA-Z]+/g)
            }
            catch(err){
                continue;
            }

            // format the starting and ending time for a timeslot
            if (days_array[1].match(/[a-zA-Z]+/g)=='PM'){
                var start_time = days_array[1].replace(/[^a-z0-9]/g,"")
                if (parseInt(start_time)<1200){
                    start_time = (parseInt(start_time)+1200).toString()
                }
            }else{
                var start_time = days_array[1].replace(/[^a-z0-9]/g,"")
                start_time = ('0' + start_time).slice(-4)
            }
            if (days_array[3].match(/[a-zA-Z]+/g)=='PM'){
                var end_time = days_array[3].replace(/[^a-z0-9]/g,"")
                if (parseInt(end_time)<1200){
                    end_time = (parseInt(end_time)+1200).toString()
                }
            }else{
                var end_time = days_array[3].replace(/[^a-z0-9]/g,"")
                end_time = ('0' + end_time).slice(-4)
            }
            
            // get the unchanging descriptions for the class and the session
            var find_subject = "#win0divDERIVED_REGFRM1_DESCR20\\$".concat(class_num)
            var subject = x.find(find_subject).find('td:first').text()
            var find_inst = '#DERIVED_CLS_DTL_SSR_INSTR_LONG\\$'.concat(session_num)
            var inst = x.find(find_inst).text()
            var find_loc = '#MTG_LOC\\$'.concat(session_num)
            var loc = x.find(find_loc).text()

            // generate recurring event for every time slot k
            for (k = 0; k < start_dates.length; k++){
                // while (start_dates[k].getTime() < end_date.getTime()){
                //     data.push([subject,start_dates[k].toLocaleDateString(),start_time,start_dates[k].toLocaleDateString(),end_time,inst,loc,'TRUE'])
                //     start_dates[k].setDate(start_dates[k].getDate() + 7)  
                // }
                var format_start = start_dates[k].getFullYear().toString().concat(('0'+(start_dates[k].getMonth()+1)).slice(-2).toString()).concat(('0'+start_dates[k].getDate()).slice(-2))+"T"+start_time+'00'
                var format_end = start_dates[k].getFullYear().toString().concat(('0'+(start_dates[k].getMonth()+1)).slice(-2).toString()).concat(('0'+start_dates[k].getDate()).slice(-2))+"T"+end_time+'00'
                var format_end_date = end_date.getFullYear().toString().concat(('0'+(end_date.getMonth()+1)).slice(-2).toString()).concat(('0'+(end_date.getDate()+1)).slice(-2))+"T000000"
                var now = new Date()
                this._zp = function(s){ return ("0"+s).slice(-2); }
                this._isofix = function(d){
		          var offset = ("0"+((new Date()).getTimezoneOffset()/60)).slice(-2);
	              if(typeof d=='string'){
		            return d.replace(/\-/g, '')+'T'+offset+'0000Z';
	              }else{
				    return d.getFullYear()+this._zp(d.getMonth()+1)+this._zp(d.getDate())+'T'+this._zp(d.getHours())+"0000Z";
		          }
		        }

                // Add the time slot to calendar
                ics_lines.push(
                 "BEGIN:VEVENT",
                 "UID:event-"+now.getTime()+q+k+"@addroid.com",
                 "DTSTAMP:"+this._isofix(now),
                 "DTSTART:"+format_start,
                 "DTEND:"+format_end,
                 "RRULE:FREQ=WEEKLY;UNTIL="+format_end_date,
                 "DESCRIPTION:"+inst,
                 "LOCATION:"+loc,
                 "SUMMARY:"+subject,
                 "LAST-MODIFIED:"+this._isofix(now),
                 "SEQUENCE:0",
                 "END:VEVENT",
                )
            }
        }
// End of pseudo function     
            // Accumulate the global session variable q by 1  
            if (x.find(find_class_sess).length){
                        q += 1
            }

                }
            }

            // var csv = 'Subject,Start Date,Start Time,End Date,End Time,Description,Location,Private\n';
            // data.forEach(function(row) {
            //     csv += row.join(',');
            //     csv += "\n";
            // });
 
            // console.log(csv);
            // var hiddenElement = document.createElement('a');
            // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            // hiddenElement.target = '_blank';
            // hiddenElement.download = 'schedule.csv';
            // hiddenElement.click();
            // console.log(data)
            // console.log(start_dates[0].getFullYear())
            // console.log(start_dates[0].getMonth())
            // console.log(start_dates[0].getDate())
            
            // End calendar
            ics_lines.push("END:VCALENDAR")
            console.log(ics_lines)           
            
            // define save file
            // var now = new Date();
            this._save = function(fileURL){
                var save = document.createElement('a');
                save.href = fileURL;
                save.target = '_blank';
                save.download = 'Class_Schedule.ics';
                var evt = new MouseEvent('click', {
                  'view': window,
                  'bubbles': true,
                  'cancelable': false
                });
                save.dispatchEvent(evt);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }

            // save file
            var dlurl = 'data:text/calendar;base64,'+btoa(ics_lines.join('\r\n'));
            try {
                this._save(dlurl);
            }catch(e){
                console.log(e);
            }
        }

        // Display Prompt for exporting calendar
        if( x.find("#win0divMTG_SCHED\\$0").length ){
            $("#ptifrmtgtframe").contents().find('body').prepend(
             '<div style="padding:10px"><button class="btn btn-info btn-sm" \
             id="csv">Export Schedule to Calendar</button> | <u><a href="https://drive.google.com/file/d/1YcxE37lXC6E1n956cQbk54z59tQL6GNa/view?usp=sharing" target="_blank"> \
             How it works?</u></a></div>') 
        }

        // Display Prompt for exporting calendar in calendar view
        if( x.find("#WEEKLY_SCHED_HTMLAREA").length ){
            $("#ptifrmtgtframe").contents().find('body').prepend(
             '<div style="padding:10px"><button class="btn btn-info btn-sm" \
             id="csv2">Export Schedule to Calendar</button> | <u><a href="https://drive.google.com/file/d/1YcxE37lXC6E1n956cQbk54z59tQL6GNa/view?usp=sharing" target="_blank"> \
             How it works?</u></a></div>') 
        }

        $("#ptifrmtgtframe").contents().find('#csv').click(function() {
            download_csv();
        })

        $("#ptifrmtgtframe").contents().find('#csv2').click(function() {
            alert('Please first select display option to "List View" under "My Class Shedule". Thank you!')
        })


    });

   
});

