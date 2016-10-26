function FindProxyForURL(url, host) 
{
  if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
    return "PROXY 4.5.6.7:8081; PROXY 4.5.6.22:8081";
  else 
    return "PROXY 4.5.6.7:8081; PROXY 4.5.6.22:8081";
}
