function(v5) {
    // Once v22 is allocated as unboxed object, this will convert it to a
    // native object, which will cause its ObjectGroup to change.
    delete v5.nonExistent;

    // The call to .toString here will be implemented as a switch
    // (ObjectGroupDispatch operation) on the ObjectGroup with two cases
    // (ObjectGroup of v22 and v17). Depending on the input, the dispatch will
    // jump to one of the two inlined implementations of toString. However,
    // after v22 is allocated as UnboxedObject (still with the same
    // ObjectGroup as before), the delete operation above will convert it back
    // to a NativeObject, now changing the ObjectGroup. Afterwards, this
    // ObjectGroupDispatch operation will see an unexpected ObjectGroup and,
    // in debug builds, crash with an assertion failure. In release builds
    // it will just fallthrough to whichever branch was emitted right after
    // the dispatch operation.
    return v5.toString();
}