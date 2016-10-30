function FindProxyForURL(url, host) 
{
  if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
    return "PROXY proxyMor.cloudapp.net:1080;PROXY proxyMor.cloudapp.net:1080;PROXY proxyMor.cloudapp.net:1080;";
  else 
    return "PROXY proxyMor.cloudapp.net:1080;PROXY proxyMor.cloudapp.net:1080;PROXY proxyMor.cloudapp.net:1080;";
}
