function(stream) {
    var sock = stream.node.sock;
    sock.sock_ops.close(sock);
}