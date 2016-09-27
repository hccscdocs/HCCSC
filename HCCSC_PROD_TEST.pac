function FindProxyForURL(url, host) {

    pacver = "hccsc.k12.in.us ES PAC file version 1.0 PRODTEST, Aug 5th, 2016";

    
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
       }

	// Utility 
	if ((host =="proxyinfo.hccsc.k12.in.us")) {
		alert("Local IP address is: " + myIpAddress());
		alert("PAC File Version:  " + pacver);
	}

	// We want to send all traffic to hccsc.k12.in.us browser direct
	if (dnsDomainIs(host, ".hccsc.k12.in.us")) {
  	   return "DIRECT";
	}
     
	// We want to send all traffic to apple.com browser direct
	if (dnsDomainIs(host, ".apple.com")) {
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
          
	// We want to send all traffic to kidblog.org browser direct
	if (dnsDomainIs(host, ".kidblog.org")) {
  	   return "DIRECT";
	}
           
	// We want to send all traffic to Follett Enlight App direct
	if (dnsDomainIs(host, ".netsolssl.com")) {
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
               
	// We want to send all traffic to Student E-Mail direct
	if (dnsDomainIs(host, ".ctb.com")) {
  	   return "DIRECT";
	}              
                
	// We want to send all traffic to Student E-Mail direct
	if (dnsDomainIs(host, ".readspeaker.com")) {
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
	
	// We want to send all HMH Readers DIRECT
	if (dnsDomainIs(host, ".hmhco.com")) {
  	   return "DIRECT";
	}	
	
	// We want to send all testnav DIRECT
	if (dnsDomainIs(host, ".testnav.com")) {
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
             
	// Block Keenow VPN
	if (dnsDomainIs(host, ".keenow.com")) {
  	   return "PROXY 127.0.0.1:48890";
	}
            
              
	// Block Mediatab.tv
	if (dnsDomainIs(host, ".mediatab.tv")) {
  	   return "PROXY 127.0.0.1:48890";
	}
          

	// Default return condition is the proxy, since it is assumed that everything
	// else is on the Internet.
 
	return proxy;
 
} // End of function


