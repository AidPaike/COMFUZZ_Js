function(stream, buffer, offset, length, position) {
    var sock = stream.node.sock;
    return sock.sock_ops.sendmsg(sock, buffer, offset, length)
}