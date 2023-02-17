function(dateToTest, isoDate) {
    if (isoDate === null) {
        if (isNaN(Date.parse(dateToTest))) {
            console.log("PASS");
        } else {
            console.log("Wrong date parsing result: Date.parse(\"" + dateToTest + "\") should return NaN");
        }
    } else {
        if (Date.parse(dateToTest) === Date.parse(isoDate)) {
            console.log("PASS");
        } else {
            console.log("Wrong date parsing result: Date.parse(\"" + dateToTest + "\") should equal Date.parse(\"" + isoDate + "\")");
        }
    }
}