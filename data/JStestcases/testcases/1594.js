function(index) {
    let controller;
    let promise = new Promise((resolve, reject) => {
        controller = {
            resolve,
            reject
        };
    });
    let a = promise.then(() => {}); //a is not handled
    let b = promise.then(() => {}); //b is not handled
    controller.reject("Rejection from test " + index); //no notification as handled
    let c = a.then(() => {}); //handle a
}