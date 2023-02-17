function(stream) {
    var sock = stream.node.sock;
    return sock.sock_ops.poll(sock);
}