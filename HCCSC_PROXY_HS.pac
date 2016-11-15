function FindProxyForURL(url, host) {

    pacver = "hccsc.k12.in.us PAC file version 2.96P, Nov 15th, 2016-JFH";

    
    // Convert everything to lower case.
    var lhost = host.toLowerCase();
    host = lhost;

	// Set the default proxy variable that users get if they dont match
	// any more specific rule. 
	proxy = "PROXY hccsc.mobile.websafe.ena.net:53128";

	// Loopback and localhost goes browser direct always. 

	if ((host == "localhost") ||
   		(shExpMatch(host, "localhost.*")) ||
   		(host == "127.0.0.1")) {
      	return "DIRECT";
	}
 
	// Test to see if host is an IP address
	reip = /^\d+\.\d+\.\d+\.\d+$/g;
	if (reip.test(host)) {
  
     // Check for an internal 10.x IP address
    	 if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
        	  return "DIRECT";
     	}
     // Check for an internal 172.28.x IP address
    	 if (isInNet(host, "172.28.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
     // Check for an internal 172.28.x IP address
    	 if (isInNet(host, "172.16.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
       }

	// Utility 
	if ((host =="proxyinfo.hccsc.k12.in.us")) {
		alert("Local IP address is: " + myIpAddress());
		alert("PAC File Version:  " + pacver);
	}

	//These Google Sites need to not be proxied or they will not work
        if (shExpMatch(host, "clients?.google.com")){return "DIRECT";}
        if (shExpMatch(host, "accounts.google.com")){return "DIRECT";}
        if (shExpMatch(host, "upload.video.google.com")){return "DIRECT";}
        if (shExpMatch(host, "translate.google.com")){return "DIRECT";}
        if (shExpMatch(host, "*.drive.google.com")){return "DIRECT";}
        if (shExpMatch(host, "drive.google.com")){return "DIRECT";}
        if (shExpMatch(host, "docs.google.com")){return "DIRECT";}
        if (shExpMatch(host, "sheets.google.com")){return "DIRECT";}
        if (shExpMatch(host, "slides.google.com")){return "DIRECT";}
        if (shExpMatch(host, "googledrive.com")){return "DIRECT";}
        if (shExpMatch(host, "*.docs.google.com")){return "DIRECT";}
        if (shExpMatch(host, "gg.google.com")){return "DIRECT";}
        if (shExpMatch(host, "apis.google.com")){return "DIRECT";} 
        if (shExpMatch(host, "script.google.com")){return "DIRECT";}   
        if (shExpMatch(host, "*.c.docs.google.com")){return "DIRECT";}
        if (shExpMatch(host, "large-uploads.l.google.com")){return "DIRECT";}
        if (shExpMatch(host, "*.googleapis.com")){return "DIRECT";}
        if (shExpMatch(host, "*.google-analytics.com")){return "DIRECT";}

	// We want to send all traffic to hccsc.k12.in.us browser direct
	if (dnsDomainIs(host, ".hccsc.k12.in.us")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to apple.com browser direct
	if (dnsDomainIs(host, ".apple.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to icloud.com browser direct
	if (dnsDomainIs(host, ".icloud.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to icloud.com browser direct ATT Datacenter
	if (dnsDomainIs(host, ".synaptic.att.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to icloud.com browser direct Amazon Datacenter
	if (dnsDomainIs(host, ".amazonaws.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to icloud.com browser direct MS Datacenter 
	if (dnsDomainIs(host, ".windows.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to aleks.com browser direct
	if (dnsDomainIs(host, ".aleks.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to turnitin.com browser direct
	if (dnsDomainIs(host, ".turnitin.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Follett Enlght App direct
	if (dnsDomainIs(host, ".netsolssl.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to kidblog.com browser direct
	if (dnsDomainIs(host, ".kidblog.org")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Follett app direct 2
	if (dnsDomainIs(host, ".follettshelf.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to HCCSC Canvas browser direct
	if (dnsDomainIs(host, ".instructure.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to AR BookFind site direct
	if (dnsDomainIs(host, ".arbookfind.com")) {
  	   return "DIRECT";
	}

    // We want to send all traffic to Dropbox browser direct
	if (dnsDomainIs(host, ".dropbox.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Dropbox browser direct
	if (dnsDomainIs(host, ".dropboxusercontent.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Dropbox browser direct
	if (dnsDomainIs(host, ".cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to USA Test Prep browser direct
	if (dnsDomainIs(host, ".usatestprep.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Verisign Cert Install direct to address various app issues
	if (dnsDomainIs(host, ".verisign.com")) {
  	   return "DIRECT";
	}
 
	// We want to send all traffic to Duolingo app direct
	if (dnsDomainIs(host, ".duolingo.com")) {
  	   return "DIRECT";
	}
 
	// We want to send all traffic to History Site direct
	if (dnsDomainIs(host, ".history.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Quizlet Site direct
	if (dnsDomainIs(host, ".quizlet.com")){
  	   return "DIRECT";
	}

	// We want to send all traffic to Apexvs site direct
	if (dnsDomainIs(host, ".apexvs.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to MW Dict Ad Site site direct
	if (dnsDomainIs(host, ".appextras.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Splash Math App #2 direct
	if (dnsDomainIs(host, ".studypadinc.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to StoryBots 
	if (dnsDomainIs(host, ".jibjab.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Student E-Mail direct
	if (dnsDomainIs(host, ".office365.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to vimeo.com
	if (dnsDomainIs(host, ".vimeo.com")) {
  	   return "DIRECT";
	} 

 	// We want to send all traffic to Watch Later App
	if (dnsDomainIs(host, "watchlaterapp.com")) {
  	   return "DIRECT";
	}

   	// S1a Access Code
	if (dnsDomainIs(host, ".fiksu.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

   	// S1b Access Code
	if (dnsDomainIs(host, ".vpnvip.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}
    // S2 Access Code
	if (dnsDomainIs(host, ".navyphoto.us")) {
  	   return "PROXY 127.0.0.1:48890";
	}

   	// S3 Accesss Code
	if (dnsDomainIs(host, ".vpnintouch.us")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// We want to send all traffic to Student E-Mail direct
	if (dnsDomainIs(host, ".outlook.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Student E-Mail direct
	if (dnsDomainIs(host, ".sa.hccsc.us")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Student E-Mail direct 2
	if (dnsDomainIs(host, ".outlook.com")) {
  	   return "DIRECT";
	}

	// Cavnas 3.7 Client direct 1
	if (dnsDomainIs(host, "instructure-uploads.s3.amazonaws.com")) {
  	   return "DIRECT";
	}

	// Cavnas 3.7 Client direct 2
	if (dnsDomainIs(host, "combine.urbanairship.com")) {
  	   return "DIRECT";
	}

	// Cavnas 3.7 Client direct 3
	if (dnsDomainIs(host, "code.jquery.com")) {
  	   return "DIRECT";
	}

	// Cavnas Client direct Oct 15
	if (dnsDomainIs(host, "secure.gravatar.com")) {
  	   return "DIRECT";
	}

	// Cavnas Client direct Oct 15 -2
	if (dnsDomainIs(host, "du11hjcvx0uqb.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to CommonSenseMedia
	if (dnsDomainIs(host, ".commonsensemedia.org")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Canvas Media
	if (dnsDomainIs(host, ".instructuremedia.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Stock Tracker Pro App 
	if (dnsDomainIs(host, ".streetinsider.com")) {
  	   return "DIRECT";
	}
 
	// We want to send all traffic to Stock Tracker Pro App 2
	if (dnsDomainIs(host, ".symcd.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Canvas Media 2
	if (dnsDomainIs(host, "18127d8d28ff0fb6416865dcb5f8a25ca553cf8a.sdk.testflightapp.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Stock Tracker Pro App 3
	if (dnsDomainIs(host, ".cnbc.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Stock Tracker Pro App 4
	if (dnsDomainIs(host, ".qwapi.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to MyOn 1
	if (dnsDomainIs(host, ".myon.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to MyOn 2
	if (dnsDomainIs(host, "d1juyyn599or3q.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to MyOn 3
	if (dnsDomainIs(host, "d2zmnks2vl0us7.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to MyOn 4
	if (dnsDomainIs(host, ".thefutureinreading.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to noredink 1
	if (dnsDomainIs(host, ".noredink.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to noredink 2
	if (dnsDomainIs(host, "d2dtbqe8cwmx9c.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to IndianaCareerexplorer 1
	if (dnsDomainIs(host, ".indianacareerexplorer.org")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to IndianaCareerexplorer 2
	if (dnsDomainIs(host, ".kuder.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to IndianaCareerexplorer 3
	if (dnsDomainIs(host, ".kudernavigator.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to IndianaCareerexplorer 4
	if (dnsDomainIs(host, "kuderstatic.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to IndianaCareerexplorer 5
	if (dnsDomainIs(host, ".indianacareerexplorer.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Apex 2
	if (dnsDomainIs(host, ".apexlearning.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic Apex 3
	if (dnsDomainIs(host, "bam.nr-data.net")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Apex 4
	if (dnsDomainIs(host, "beacon-2.newrelic.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to GrammerCrusher App
	if (dnsDomainIs(host, "grammarcrush.com")) {
  	   return "DIRECT";
	}  

	// We want to send all vocabulary.com
	if (dnsDomainIs(host, ".vocabulary.com")) {
  	   return "DIRECT";
	}

	// We want to send all vocabulary.com 1
	if (dnsDomainIs(host, "vocabulary.us8.list-manage1.com")) {
  	   return "DIRECT";
	}

	// We want to send all vocabulary.com 2
	if (dnsDomainIs(host, "vocabulary.us8.list-manage.com")) {
  	   return "DIRECT";
	}

	// We want to send all myemskit Site 
	if (dnsDomainIs(host, ".myemskit.com")) {
  	   return "DIRECT";
	}

	// We want to send all myemskit Site 
	if (dnsDomainIs(host, ".prenhall.com")) {
  	   return "DIRECT";
	}

	// We want to send all myemskit Site 
	if (dnsDomainIs(host, ".mypearson.com")) {
  	   return "DIRECT";
	}

	// We want to send all noteflight Site 
	if (dnsDomainIs(host, ".noteflight.com")) {
  	   return "DIRECT";
	}

	// We want to send all VOC CDX Auto Site direct
	if (dnsDomainIs(host, ".cdxsite.com")) {
  	   return "DIRECT";
	}

	// We want to send all NewTech Echo DIRECT
	if (dnsDomainIs(host, ".newtechnetwork.org")) {
  	   return "DIRECT";
	}

	// We want to send all Questar DIRECT
	if (dnsDomainIs(host, ".mobileapp.questarai.com")) {
  	   return "DIRECT";
	}

	// We want to send all Questar DIRECT 1
	if (dnsDomainIs(host, ".questarai.com")) {
  	   return "DIRECT";
	}
                
	// Cavnas Client direct Oct 15
	if (dnsDomainIs(host, "secure.gravatar.com")) {
  	   return "DIRECT";
	}                                                
      
	// Cavnas Client direct Oct 15 -2
	if (dnsDomainIs(host, "du11hjcvx0uqb.cloudfront.net")) {
  	   return "DIRECT";
	}    

	// We want to send all canvas DIRECT
	if (dnsDomainIs(host, "s3.amazonaws.com")) {
  	   return "DIRECT";
	}

	// We want to send all canvas DIRECT 2
	if (dnsDomainIs(host, "device-api.urbanairship.com")) {
  	   return "DIRECT";
	}	

	// We want to send all HCCSC Live Events Broadcast 
	if (dnsDomainIs(host, "livestream.com")) {
  	   return "DIRECT";
	}	

	// We want to send all AR DIRECT 
	if (dnsDomainIs(host, "hosted345.renlearn.com")) {
  	   return "DIRECT";
	}	

	// We want to send all AR DIRECT 1
	if (dnsDomainIs(host, ".renlearn.com")) {
  	   return "DIRECT";
	}	

	// We want to send all AR DIRECT 2
	if (dnsDomainIs(host, ".renlearnrp.com")) {
  	   return "DIRECT";
	}	

	// We want to send all Follett Destiny  DIRECT 
	if (dnsDomainIs(host, ".follettdestiny.com")) {
  	   return "DIRECT";
	}	

	// We want to send all Dropbox2 DIRECT 
	if (dnsDomainIs(host, ".dropboxstatic.com")) {
  	   return "DIRECT";
	}	

	// We want to send all mobymax DIRECT 
	if (dnsDomainIs(host, ".mobymax.com")) {
  	   return "DIRECT";
	}	

	// We want to send all Dropbox2 DIRECT 
	if (dnsDomainIs(host, "dropbox.com")) {
  	   return "DIRECT";
	}	

	// We want to send all CDXSITE - Vo Tech 
	if (dnsDomainIs(host, ".huntingtonnhis.cdxsite.com")) {
  	   return "DIRECT";
	}	

	// We want to send all traffic to NWEA 1
	if (dnsDomainIs(host, ".mapnwea.org")) {
  	   return "DIRECT";
	}  

	// We want to send all traffic to NWEA 2
	if (dnsDomainIs(host, ".nwea.org")) {
  	   return "DIRECT";
	}  

	// We want to send all traffic to CDX Car Site VoTech
	if (dnsDomainIs(host, ".integr8cms.net")) {
  	   return "DIRECT";
	}  

	// We want to send all traffic to CDX Car Site VoTech 2
	if (dnsDomainIs(host, ".cdxmedia.info")) {
  	   return "DIRECT";
	}

	// We want to send all BrightWave DIRECT 
	if (dnsDomainIs(host, ".audioengine.io")) {
  	   return "DIRECT";
	}

	// We want to send all BrightWave DIRECT 2
	if (dnsDomainIs(host, ".follettsoftware.com")) {
  	   return "DIRECT";
	}

	// We want to send all PSApp  DIRECT 
	if (dnsDomainIs(host, ".pearsonschoolsystems.com")) {
  	   return "DIRECT";
	}

	// We want to send all HCPL Books  DIRECT 
	if (dnsDomainIs(host, ".overdrive.com")) {
  	   return "DIRECT";
	}

	// We want to send all Apple  DIRECT 4
	if (dnsDomainIs(host, ".cdn-apple.com")) {
  	   return "DIRECT";
	}

	// We want to send all Apple  DIRECT 5
	if (dnsDomainIs(host, ".mzstatic.com")) {
  	   return "DIRECT";
	}

	// We want to send all Google Drive
	if (dnsDomainIs(host, ".googledrive.com")) {
  	   return "DIRECT";
	}

	// We want to send Virtual Earthquake site
	if (dnsDomainIs(host, ".sciencecourseware.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Readers DIRECT
	if (dnsDomainIs(host, ".hmhco.com")) {
  	   return "DIRECT";
	}

	// We want to send all E Hoff Request
	if (dnsDomainIs(host, ".yendor.com")) {
  	   return "DIRECT";
	}

	// We want to send all HN Survey
	if (dnsDomainIs(host, "asaisurveys.org")) {
  	   return "DIRECT";
	}

	// We want to send all Live 365 Outlook DIRECT
	if (dnsDomainIs(host, ".sa.hccsc.us")) {
  	   return "DIRECT";
	}

	// We want to send all Nick TextBook Unblock
	if (dnsDomainIs(host, ".ecollege.com")) {
  	   return "DIRECT";
	}

	// We want to send all Nick TextBook Unblock2
	if (dnsDomainIs(host, ".pearsoncmg.com")) {
  	   return "DIRECT";
	}

	// We want to send all Nick TextBook Unblock3
	if (dnsDomainIs(host, ".mathxl.com")) {
  	   return "DIRECT";
	}

	// We want to send all MS Office traffic direct
	if (dnsDomainIs(host, "officeapps.live.com")) {
  	   return "DIRECT";
	}

	// We want to send all MS Office traffic direct4
	if (dnsDomainIs(host, "templateservice.office.com")) {
  	   return "DIRECT";
	}

	// We want to send all MS Office traffic direct5
	if (dnsDomainIs(host, "store.office.com")) {
  	   return "DIRECT";
	}

	// We want to send all Live 365 Outlook DIRECT2
	if (dnsDomainIs(host, "sa.hccsc.us")) {
  	   return "DIRECT";
	}

	// We want to send all Live 365 Outlook DIRECT3
	if (dnsDomainIs(host, ".sa.hccsc.us")) {
  	   return "DIRECT";
	}

	// We want to send all Live 365 Outlook DIRECT4
	if (dnsDomainIs(host, ".sharepoint.com")) {
  	   return "DIRECT";
	}

	// We want to send all Live 365 Outlook DIRECT4
	if (dnsDomainIs(host, ".office.net")) {
  	   return "DIRECT";
	}

	// We want to send all Google Drive
	if (dnsDomainIs(host, ".googledrive.com")) {
  	   return "DIRECT";
	}

	// We want to send all Google Drive
	if (dnsDomainIs(host, "googledrive.com")) {
  	   return "DIRECT";
	}

	// We want to send all HU
	if (dnsDomainIs(host, "huntington.edu")) {
  	   return "DIRECT";
	}   

	// We want to send all HU Moodle
	if (dnsDomainIs(host, "moodle.huntington.edu")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED
	if (dnsDomainIs(host, "mheducation.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED2
	if (dnsDomainIs(host, ".mheducation.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED3
	if (dnsDomainIs(host, "app-ab13.marketo.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED4
	if (dnsDomainIs(host, ".mktoresp.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED5
	if (dnsDomainIs(host, "px.airpr.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED6
	if (dnsDomainIs(host, "ssl.gstatic.com")) {
  	   return "DIRECT";
	}

	// We want to send all Connect ED7
	if (dnsDomainIs(host, ".mcgraw-hill.com")) {
  	   return "DIRECT";
	}

	// We want to send all Accuplacer
	if (dnsDomainIs(host, ".accuplacer.org")) {
  	   return "DIRECT";
	}

	// We want to send all MS iPad Access
	if (dnsDomainIs(host, "app.adjust.com")) {
  	   return "DIRECT";
	}

	// We want to send all MS iPad Access 2
	if (dnsDomainIs(host, ".microsoft.com")) {
  	   return "DIRECT";
	}

	// We want to send all SumDog-Apple
	if (dnsDomainIs(host, "apps.itunes.com")) {
  	   return "DIRECT";
	}

	// We want to send all House.gov
	if (dnsDomainIs(host, ".house.gov")) {
  	   return "DIRECT";
	}

	// We want to send all House.gov2
	if (dnsDomainIs(host, "house.gov")) {
  	   return "DIRECT";
	}

	// We want to send all in.gov
	if (dnsDomainIs(host, ".in.gov")) {
  	   return "DIRECT";
	}

	// We want to send all la.gov
	if (dnsDomainIs(host, ".la.gov")) {
  	   return "DIRECT";
	}

     // do not proxy these sites
     switch (host) {
          case "fw.hccsc.k12.in.us":     // hccsc mdm device
          case "moodle.hccsc.k12.in.us": // hccsc moodle server
          case "www.producturlsupport.com": // hccsc Sock Puppets app
          case "www.launchpadtoys.com": // toontastic app
          case "prezi.com": // hccsc prezi service  
          case "www.raz-kids.com": // Learning A-Z app 
          case "www.ipchicken.com": //test ip   
          case "api.croak.it": //Croak it app
          case "quizlet.com": //Quizlet Site  
            return "DIRECT";
          	break;
     }
// Block Section
           
	// Block URL Test
	if (dnsDomainIs(host, ".blockpage.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Facebook
	if (dnsDomainIs(host, ".facebook.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Snapchat
	if (dnsDomainIs(host, ".appspot.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Twitter
	if (dnsDomainIs(host, ".twitter.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}
    // Block mobicip.com
	if (dnsDomainIs(host, ".mobicip.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block mobicip.net
	if (dnsDomainIs(host, ".mobicip.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block metacert.com
	if (dnsDomainIs(host, ".metacert.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block metacert app
	if (dnsDomainIs(host, "20786336ec8471c79869879a41e8cb19531ca4e9.sdk.testflightapp.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block vshare app
	if (dnsDomainIs(host, ".vshare.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block ooVoo app
	if (dnsDomainIs(host, ".oovoo.com")) {
  	   return "PROXY 127.0.0.1:48890";
	} 

  	// Block ooVoo app2
	if (dnsDomainIs(host, ".adsafeprotected.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block CrossyRoad
	if (dnsDomainIs(host, ".unityads.unity3d.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block CrossyRoad2
	if (dnsDomainIs(host, ".everyplay.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block CoC
	if (dnsDomainIs(host, "service.supercell.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block ZiZa
	if (dnsDomainIs(host, "imagizer.imageshack.us")) {
  	   return "PROXY 127.0.0.1:48890";
	}

// Block surespot
	if (dnsDomainIs(host, ".surespot.me")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block jpay
	if (dnsDomainIs(host, ".jpay.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}
   	// TEMP Block fanfiction
	if (dnsDomainIs(host, ".fanfiction.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block genmovies
	if (dnsDomainIs(host, ".genvideos.org")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block moviezr
	if (dnsDomainIs(host, ".moviezr.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block moviezr
	if (dnsDomainIs(host, "moviezr.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}  

  	// Block 2girls1cup.ca
	if (dnsDomainIs(host, "2girls1cup.ca")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Default return condition is the proxy, since it is assumed that everything
	// else is on the Internet.
 
	return proxy;
 
}
