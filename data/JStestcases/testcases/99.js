function(event) {
    return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
}