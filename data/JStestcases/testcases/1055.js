function(sock, addr, port) {
    return sock.peers[addr + ':' + port];
}