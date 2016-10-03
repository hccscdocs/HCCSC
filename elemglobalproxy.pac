function FindProxyForURL(url, host) 
{
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
        
//Filewave server needs to not be proxied or all IP's will show as coming from Lightspeed IP
        if (shExpMatch(host, "fwmaster.nobl.k12.in.us")){return "DIRECT";}

//This will block software updates from Apple.
//Temporarily Allowed---- if (dnsDomainIs(host, "mesu.apple.com")){return "PROXY nscproxy1.nobl.k12.in.us:8080";}

//Apple servers needs decryption exclusion in order for app store to work properly.
        if (shExpMatch(host, "*.apple.com")){return "DIRECT";}   
        if (shExpMatch(host, "*.mzstatic.com")){return "DIRECT";}

//Canvas servers needs decryption exclusion in order for Canvas to work properly.
        if (shExpMatch(host, "instructure-uploads.s3.amazonaws.com")){return "DIRECT";}   
        if (shExpMatch(host, "us-east-1.elb.amazonaws.com")){return "DIRECT";}
        if (shExpMatch(host, "*.instructure.com")){return "DIRECT";}
        
//Puffin Academy servers needs decryption exclusion in order to work properly.
        if (shExpMatch(host, "puffinbrowser.com")){return "DIRECT";} 
        if (shExpMatch(host, "flashbrowser.com")){return "DIRECT";} 

//This will force encrypted searches through the proxy for youtube, google, bing and yahoo.
        if (shExpMatch(host, "*.google.com")){return "PROXY nscproxy1.nobl.k12.in.us:8080; DIRECT";}
        if (shExpMatch(host, "*.youtube.com")){return "PROXY nscproxy1.nobl.k12.in.us:8080; DIRECT";}
        if (shExpMatch(host, "*.yahoo.com")){return "PROXY nscproxy1.nobl.k12.in.us:8080; DIRECT";}
        if (shExpMatch(host, "*.bing.com")){return "PROXY nscproxy1.nobl.k12.in.us:8080; DIRECT";}

//This will cause anyone on a 10.x network to not use the proxy.  
        if (isInNet(myIpAddress(), "10.0.0.0", "255.0.0.0")) {return "DIRECT";}

//These sites are allowed if not on a 10.x network.  Netflix, Facebook, etc...
        if (shExpMatch(host, "*.netflix.com")){return "DIRECT";}
       
//This forces everything else through the proxy,
//but if it can't be found then it will go ahead and go direct
        else return "PROXY nscproxy1.nobl.k12.in.us:8080; DIRECT";
}