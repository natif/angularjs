var app = angular.module("behaviorApp", [])

app.directive("enter", function(){
    return function(scope, element) {
        element.bind("mouseenter", function(){
            console.log("mouse is on it ");
        })
    }
});

app.directive("leave", function(){
    return function(scope, element) {
        element.bind("mouseleave", function(){
            console.log("mouse is not on it");
        })
    }
});