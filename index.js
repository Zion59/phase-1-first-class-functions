function receivesAFunction (spy) {
    return spy();
}

receivesAFunction(function () {return spy; })

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return (function() {})
}