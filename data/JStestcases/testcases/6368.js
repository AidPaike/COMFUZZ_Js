function(leftMin, leftMax, rightMin, rightMax) {
    if (leftMin >= leftMax)
        throw new Error("Bad left range");
    if (rightMin >= rightMax)
        throw new Error("Bad right range");
    if (leftMin <= rightMin && leftMax > rightMin)
        return true;
    if (rightMin <= leftMin && rightMax > leftMin)
        return true;
    return false;
}