function() {
    var m_var = null;
    this.init = function(p_var) {
        m_var = p_var;
    }
    this.getVar = function() {
        return m_var;
    }
    this.setVar = function(v) {
        m_var = v;
    }
}