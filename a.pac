function FindProxyForURL(url, host) 
{  
if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
return "PROXY 192.168.1.1:8080";
else
return "PROXY 192.168.1.1:8080";
}
