function FindProxyForURL(url, host) {

    pacver = "hccsc.k12.in.us ES PAC file version 1.45P, Oct 25th, 2016-JFH";

    
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
// Check for an internal 172.17.x IP address
    	 if (isInNet(host, "172.17.0.0", "255.255.0.0")) {
        return "DIRECT";
     	}
// Check for an internal 172.27.x IP address
    	 if (isInNet(host, "172.27.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.16.x IP address
    	 if (isInNet(host, "172.16.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.18.x IP address
    	 if (isInNet(host, "172.18.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.19.x IP address
    	 if (isInNet(host, "172.19.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.20.x IP address
    	 if (isInNet(host, "172.20.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.21.x IP address
    	 if (isInNet(host, "172.21.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
// Check for an internal 172.22.x IP address
    	 if (isInNet(host, "172.22.0.0", "255.255.0.0")) {
        	  return "DIRECT";
     	}
     	
// Block Tango Access
    	 if (isInNet(host, "199.83.168.180", "255.255.255.255")) {
        	  return "PROXY 127.0.0.1:48890";
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

	// We want to send all traffic to apple.com browser direct
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

	// We want to send all traffic to HCCSC Canvas browser direct
	if (dnsDomainIs(host, ".instructure.com")) {
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

	// We want to send all traffic to Follett app direct 
	if (dnsDomainIs(host, ".follettshelf.com")) {
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

	// We want to send all traffic to USA Test Prep browser direct
	if (dnsDomainIs(host, ".usatestprep.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Verisign Cert Install-various app issues
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

	// We want to send all traffic to Sumdog Site direct
	if (dnsDomainIs(host, ".sumdog.com")){
  	   return "DIRECT";
	}

	// We want to send all traffic to Sumdog Data Site direct
	if (dnsDomainIs(host, ".newrelic.com")){
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

	// We want to send all traffic to Splash Math App site direct
	if (dnsDomainIs(host, ".flurry.com")) {
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

	// We want to send all traffic to CTB-ISTEP direct
	if (dnsDomainIs(host, ".ctb.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to CTB-ISTEP direct
	if (dnsDomainIs(host, ".readspeaker.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to CommodityDirect direct
	if (dnsDomainIs(host, ".commodityonline.com")) {
  	   return "DIRECT";
	}

 	// We want to send all traffic to Pearson eText 1 direct
	if (dnsDomainIs(host, ".pearsonrealize.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Esssayscorer direct
	if (dnsDomainIs(host, "essayscorer.com")) {
  	   return "DIRECT";
	}

 	// We want to send all traffic to Pearson eText 3 direct
	if (dnsDomainIs(host, ".pearsoncmg.com")) {
  	   return "DIRECT";
	}

 	// We want to send all traffic to Pearson eText 4 direct
	if (dnsDomainIs(host, "view.etext.home2.pearsoncmg.com")) {
  	   return "DIRECT";
	}

 	// We want to send all traffic to Acuity direct
	if (dnsDomainIs(host, ".mhecdi.com")) {
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

	// We want to send all traffic to CommonSenseMedia
	if (dnsDomainIs(host, ".commonsensemedia.org")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Canvas Media
	if (dnsDomainIs(host, ".instructuremedia.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Canvas Media 2
	if (dnsDomainIs(host, "18127d8d28ff0fb6416865dcb5f8a25ca553cf8a.sdk.testflightapp.com")) {
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

	// We want to send all traffic to NWEA 1
	if (dnsDomainIs(host, ".mapnwea.org")) {
  	   return "DIRECT";
	}  

	// We want to send all traffic to NWEA 2
	if (dnsDomainIs(host, ".nwea.org")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to iCloud Drive direct
	if (dnsDomainIs(host, "us-std-00001.s3-external-1.amazonaws.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Triva Crack Game
	if (dnsDomainIs(host, ".preguntados.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Kahoot Site
	if (dnsDomainIs(host, ".getkahoot.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Kahoot Site 1
	if (dnsDomainIs(host, ".kahoot.it")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to HowTheMarketWorks
	if (dnsDomainIs(host, ".howthemarketworks.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to HowTheMarketWorks
	if (dnsDomainIs(host, ".investingchannel.com")) {
  	   return "DIRECT";
	}

	// We want to send all traffic to Kids Surval Site 
	if (dnsDomainIs(host, ".equipped.com")) {
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

	// We want to send all canvas DIRECT
	if (dnsDomainIs(host, "s3.amazonaws.com")) {
  	   return "DIRECT";
	}

	// We want to send all canvas DIRECT 2
	if (dnsDomainIs(host, "device-api.urbanairship.com")) {
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
	if (dnsDomainIs(host, ".dropboxusercontent.com")) {
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

	// We want to send all Aleks1  DIRECT 
	if (dnsDomainIs(host, ".pingdom.net")) {
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

	// We want to send all PowerSchool iOS App
	if (dnsDomainIs(host, ".askingpoint.com")) {
  	   return "DIRECT";
	}

	// We want to send all BiologyCorner.com DIRECT
	if (dnsDomainIs(host, ".biologycorner.com")) {
  	   return "DIRECT";
	}

	// We want to send all BiologyCorner.com2 DIRECT
	if (dnsDomainIs(host, "lj.d.chango.com")) {
  	   return "DIRECT";
	}

	// We want to send all BiologyCorner.com3 DIRECT
	if (dnsDomainIs(host, "gslbeacon.lijit.com")) {
  	   return "DIRECT";
	}

	// We want to send all Indiana.edu DIRECT
	if (dnsDomainIs(host, ".indiana.edu")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Readers DIRECT
	if (dnsDomainIs(host, ".hmhco.com")) {
  	   return "DIRECT";
	}

	// We want to send all testnav DIRECT
	if (dnsDomainIs(host, ".testnav.com")) {
  	   return "DIRECT";
	}

	// We want to send all SS PAR DIRECT
	if (dnsDomainIs(host, ".startpar.com")) {
  	   return "DIRECT";
	}

	// We want to send all SS PAR DIRECT
	if (dnsDomainIs(host, "startpar.com")) {
  	   return "DIRECT";
	}
 
	// We want to send all Newsela.com DIRECT
	if (dnsDomainIs(host, "newsela.com")) {
  	   return "DIRECT";
	}
 
	// We want to send all Newsela.com DIRECT
	if (dnsDomainIs(host, "d284gedng9vuu0.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all Wilderness-survive DIRECT
	if (dnsDomainIs(host, ".wilderness-survival.net")) {
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

	// We want to send all Lumosity Traffic
	if (dnsDomainIs(host, ".lumosity.com")) {
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

	// We want to send all Google Chrome Browser Issue
	if (dnsDomainIs(host, ".googleusercontent.com")) {
  	   return "DIRECT";
	}

	// We want to send all Google Chrome Browser Issue
	if (dnsDomainIs(host, "accounts.google.com")) {
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

	// We want to send all Google Docs
	if (dnsDomainIs(host, "docs.google.com")) {
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

	// We want to send all Thinkcentral
	if (dnsDomainIs(host, ".thinkcentral.com")) {
  	   return "DIRECT";
	} 

	// We want to send all Reflex Math
	if (dnsDomainIs(host, ".reflexmath.com")) {
  	   return "DIRECT";
	} 

	// We want to send all Raz-Kids
	if (dnsDomainIs(host, ".kidsa-z.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 1
	if (dnsDomainIs(host, ".omtrdc.net")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 2
	if (dnsDomainIs(host, ".hmhco.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 3
	if (dnsDomainIs(host, ".hmco.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 4
	if (dnsDomainIs(host, ".hrw.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 5
	if (dnsDomainIs(host, ".hmhpub.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Books 6
	if (dnsDomainIs(host, ".learnosity.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Books 7
	if (dnsDomainIs(host, ".holtmcdougal.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Books 8
	if (dnsDomainIs(host, ".wimba.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Books 9
	if (dnsDomainIs(host, ".hmhnewsandnetworking.com")) {
  	   return "DIRECT";
	}

	// We want to send all HMH Books 10
	if (dnsDomainIs(host, ".classzone.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 11
	if (dnsDomainIs(host, ".hmcurrentevents.com")) {
  	   return "DIRECT";
	} 

	// We want to send all HMH Books 12
	if (dnsDomainIs(host, "link.brightcove.com")) {
  	   return "DIRECT";
	} 

	// We want to send all Scholastic
	if (dnsDomainIs(host, ".scholastic.com")) {
  	   return "DIRECT";
	}

	// We want to send all SpellingCity
	if (dnsDomainIs(host, ".spellingcity.com")) {
  	   return "DIRECT";
	}

	// We want to send all Sumdog 2
	if (dnsDomainIs(host, ".gstatic.com")) {
  	   return "DIRECT";
	}

	// We want to send all SumDog-Apple
	if (dnsDomainIs(host, "apps.itunes.com")) {
  	   return "DIRECT";
	}

	// We want to send all Sumdog 3
	if (dnsDomainIs(host, "pbs.twimg.com")) {
  	   return "DIRECT";
	}

	// We want to send all Sumdog 4
	if (dnsDomainIs(host, ".nr-data.net")) {
  	   return "DIRECT";
	}

	// We want to send all NG Connect
	if (dnsDomainIs(host, ".myngconnect.com")) {
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

	// We want to send all prodigygame.com 1
	if (dnsDomainIs(host, "sr.symcd.com")) {
  	   return "DIRECT";
	}

	// We want to send all prodigygame.com 2
	if (dnsDomainIs(host, ".prodigygame.com")) {
  	   return "DIRECT";
	}

	// We want to send all prodigygame.com 3
	if (dnsDomainIs(host, "prodigygame.com")) {
  	   return "DIRECT";
	}

	// We want to send all .artsonia.com
	if (dnsDomainIs(host, ".artsonia.com")) {
  	   return "DIRECT";
	}

	// We want to send all prodigygame.com 4
	if (dnsDomainIs(host, "dalk4zrp4jp3q.cloudfront.net")) {
  	   return "DIRECT";
	}

	// We want to send all waterford 1
	if (dnsDomainIs(host, "dp.qcarsdk.com")) {
  	   return "DIRECT";
	}

	// We want to send all waterford 2
	if (dnsDomainIs(host, ".cloud.unity3d.com")) {
  	   return "DIRECT";
	}

	// We want to send all waterford 3
	if (dnsDomainIs(host, "s2.symcb.com")) {
  	   return "DIRECT";
	}

	// We want to send all waterford 4
	if (dnsDomainIs(host, ".vuforia.com")) {
  	   return "DIRECT";
	}

	// We want to send all IXL 1
	if (dnsDomainIs(host, ".ixl.com")) {
  	   return "DIRECT";
	}

	// We want to send all IXL 2
	if (dnsDomainIs(host, ".casalemedia.com")) {
  	   return "DIRECT";
	}

	// We want to send all SurveyGold Site
	if (dnsDomainIs(host, ".surveygoldcloud.com")) {
  	   return "DIRECT";
	}

	// We want to send all MyON
	if (dnsDomainIs(host, ".myon.com")) {
  	   return "DIRECT";
	}

	// We want to send all MyON 2
	if (dnsDomainIs(host, "myon.com")) {
  	   return "DIRECT";
	}

	// We want to send all EPIC! 1
	if (dnsDomainIs(host, ".getepic.com")) {
  	   return "DIRECT";
	}

	// We want to send all EPIC! 2
	if (dnsDomainIs(host, ".oneskyapp.com")) {
  	   return "DIRECT";
	}

	// We want to send all Thinkcentral 102016
	if (dnsDomainIs(host, "ds-aksb-a.akamaihd.net")) {
  	   return "DIRECT";
	}

	// We want to send all Thinkcentral 102016-1
	if (dnsDomainIs(host, ".symcd.com")) {
  	   return "DIRECT";
	}

	// We want to send all SplashMath
	if (dnsDomainIs(host, ".splashmath.com")) {
  	   return "DIRECT";
	}

	// We want to send all Starfall
	if (dnsDomainIs(host, ".starfall.com")) {
  	   return "DIRECT";
	}

	// We want to send all ABC Phonics
	if (dnsDomainIs(host, ".kidsappsclub.com")) {
  	   return "DIRECT";
	}

	// We want to send all Soundcloud for KM
	if (dnsDomainIs(host, ".soundcloud.com")) {
  	   return "DIRECT";
	}

	// We want to send all Waterford Main
	if (dnsDomainIs(host, ".waterford.org")) {
  	   return "DIRECT";
	}

	// We want to send all Waterford Main2
	if (dnsDomainIs(host, ".waterfordearlylearning.org")) {
  	   return "DIRECT";
	}

	// We want to send all Waterford Main data
	if (dnsDomainIs(host, "dhbku9qzbk9wm.cloudfront.net")) {
  	   return "DIRECT";
	}

	 // do not proxy these sites
     switch (host) {
          case "fw.hccsc.k12.in.us":     // hccsc mdm device
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

	// Block Vimeo
	if (dnsDomainIs(host, ".vimeo.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Skype
	if (dnsDomainIs(host, ".skype.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block mylol.com
	if (dnsDomainIs(host, ".mylol.com")) {
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

	// Block metacert 2
	if (dnsDomainIs(host, "metacert.net")) {
  	   return "PROXY 127.0.0.1:48890";
	}

 	// Block metacert 3
	if (dnsDomainIs(host, "metacert.org")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Tango 1
	if (dnsDomainIs(host, ".bugsense.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Tango 2
	if (dnsDomainIs(host, ".tango.me")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Tango 3
	if (dnsDomainIs(host, ".tango.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block vshare app
	if (dnsDomainIs(host, ".vshare.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block surespot.me
	if (dnsDomainIs(host, ".surespot.me")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block ALL Yahoo access
	if (dnsDomainIs(host, ".yahoo.com")) {
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

  	// Block Safe Browser app
	if (dnsDomainIs(host, "webprotectme.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block Safe Browser app 2
	if (dnsDomainIs(host, "lga1.protection.us.webprotectme.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block MathWay
	if (dnsDomainIs(host, ".mathway.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

  	// Block Wattpad
	if (dnsDomainIs(host, ".wattpad.com")) {
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

	// Block Keenow VPN
	if (dnsDomainIs(host, "keenow.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block Mediatab.tv
	if (dnsDomainIs(host, "mediatab.tv")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Block KillMyAddictions
	if (dnsDomainIs(host, "killyouraddictions.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}

	// Default return condition is the proxy, since it is assumed that everything
	// else is on the Internet.
 
	return proxy;

}