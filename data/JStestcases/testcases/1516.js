function(description, javaField, javaMethod, javaType,
    jsValue, jsType) {
    eval(description);
    this.description = description;
    this.javaFieldName = javaField;
    this.javaFieldValue = eval(javaField);
    this.javaMethodName = javaMethod;
    this.javaMethodValue = eval(javaMethod);
    this.javaTypeName = javaType,
        this.javaTypeValue = eval(javaType);
    this.jsValue = jsValue;
    this.jsType = jsType;
}