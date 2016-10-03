


function FindProxyForURL(url, host)
{
	var serverip = "10.0.100.50";
	if ((host == serverip)
		|| localHostOrDomainIs(host, "ls.zebras.net"))
	{
		return "DIRECT";
	}

	if (isPlainHostName(host))
		return "DIRECT";



	if (dnsDomainIs(host, "swcdn.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "swcdn.apple.com.akadns.net"))
		return "DIRECT";

	if (dnsDomainIs(host, "swdownload.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "swquery.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "swscan.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "captive.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "captive.apple.com.edgekey.net"))
		return "DIRECT";

	if (dnsDomainIs(host, "ls.zebras.net"))
		return "DIRECT";

	if (dnsDomainIs(host, "ls.zebras.local"))
		return "DIRECT";

	if (dnsDomainIs(host, "localhost"))
		return "DIRECT";

	if (dnsDomainIs(host, "spellingcity.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "api.spellingcity.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "filewave.zebras.net"))
		return "DIRECT";

	if (dnsDomainIs(host, "captive.apple.com"))
		return "DIRECT";

	if (dnsDomainIs(host, "push.apple.com"))
		return "DIRECT";



	var ip = dnsResolve(host);



	if (ip == "10.0.100.50")
		return "DIRECT";

	if (ip == "23.40.29.223")
		return "DIRECT";

	if (ip == "127.0.0.1")
		return "DIRECT";

	if (ip == "104.20.53.176")
		return "DIRECT";

	if (ip == "104.20.52.176")
		return "DIRECT";



	var quads = ip.split(".");
	var ipnum = (parseInt(quads[0], 10) * 16777216)
		+ (parseInt(quads[1], 10) * 65536)
		+ (parseInt(quads[2], 10) * 256) + parseInt(quads[3], 10);

	
	if ((ipnum >= 167772160) && (ipnum <= 184549375))
		return "DIRECT";
	
	if ((ipnum >= 3232235520) && (ipnum <= 3232301055))
		return "DIRECT";
	
	if ((ipnum >= 2886729728) && (ipnum <= 2887778303))
		return "DIRECT";
	
	if ((ipnum >= 285212672) && (ipnum <= 301989887))
		return "DIRECT";
	



	if (shExpMatch(host, "*.zebras.local"))
		return "DIRECT";

	if (shExpMatch(host, "*.zebras.net"))
		return "DIRECT";






	if (serverip == "10.0.100.50") {
	
		return "PROXY ls.zebras.net:800";
	
	}


	return "DIRECT";
}

