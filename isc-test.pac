function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY lsrocket.ics-charter.org:8080; DIRECT"
var proxy_no = "DIRECT";
var pac_host = dnsResolve("lsrocket.ics-charter.org");
 
if (dnsDomainIs (host, "www.ics-charter.org")) { return proxy_no; }
if (dnsDomainIs (host, "*.powerschool.com")) { return proxy_no; }
if (dnsDomainIs (host, "books.google.com")) { return proxy_no; }
if (dnsDomainIs (host, "google.com")) { return proxy_yes; }
if (dnsDomainIs (host, "youtube.com")) { return proxy_yes; }
if (dnsDomainIs (host, "*.bing.com")) { return proxy_yes; }
if (dnsDomainIs (host, "*.bing.net")) { return proxy_yes; }
if (dnsDomainIs (host, "horse.com")) { return proxy_yes; }
 
return proxy_yes;
}