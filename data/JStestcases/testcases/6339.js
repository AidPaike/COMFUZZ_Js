function(txtValue) {
    if (txtValue.match(/^\s*$/)) return txtValue;
    var txtValue1 = txtValue.replace((/&quot;/g), '"');
    var txtValue2 = txtValue1.replace((/&gt;/g), ">");
    var txtValue3 = txtValue2.replace((/&lt;/g), "<");
    return txtValue3;
}