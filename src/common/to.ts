module.exports = function (promise: any):any {
    return promise.then((data: any) => {
            return [null, data];
        })
        .catch((err: any) => [err]);
};