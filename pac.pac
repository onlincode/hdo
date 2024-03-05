function FindProxyForURL(url, host) {
  // Proxy all URLs ending with the domain .online
  if (shExpMatch(host, "*.online")) {
    return "PROXY 192.168.0.23:40111";
  }

  // Direct connection for all other URLs
  return "DIRECT";
}
