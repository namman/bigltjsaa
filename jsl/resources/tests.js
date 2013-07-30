/**
 * Created with IntelliJ IDEA.
 * User: nam
 * Date: 19/06/13
 * Time: 9:44 AM
 * To change this template use File | Settings | File Templates.
 */

test("hello test", function() {
    ok(1 == "1","Passed!")
});

test("Number converted to string", function()
{
    var result = "77" + 7;
    ok(result == "777")
});

test("Strings with signs in front of them are Numbers after all!", function()
{
   var result = +"7" + +"7";
    ok(result == 14)

});

test("ParseInt() rounds down", function()
    {
        var result = parseInt("77.7");
        console.log(result);
        ok(result == 77)
    });

test("ParseFloat() works", function()
{
    var r = parseFloat("77.7");
    ok(r == 77.7);
});

test("Undefined is false in a boolean context",function()
{
   var r = undefined;
    ok(!r)

});


test("Array elements that don't exist are undefined", function(){
    var myArray = [];
    ok(myArray[99] == undefined)
});


test("An undefined variable converts to NaN when used in a numeric context",function() {
    var u = undefined;
    var num = 7;
    var numericContext = num + u;
    ok(isNaN(numericContext));
});

test("Null values evaluate to zero in a numeric context",function() {
    var a = null;
    var b = 32;
    ok(b * a == 0)
});

test("There is no statement block scope", function () {
    if (true)
    {
        var insideBlock = 10;
    }
    ok(insideBlock != undefined);
});


test("The '==' operator does type conversion where as the '===' operator does not",function() {
     var a = "3";
    var b = 3;
    ok(a == b);
    ok(a !== b);
    ok(!(a === b));
});

test("Ordinarily referring to variables not yet declared gives an exception.", function () {

    throws(function() {
        console.log(a)
    }, ReferenceError)
});

test("But if the variable is declared later, you get undefined instead of an exception", function()
{

   ok(a == undefined);
   var a = 10;
});

test("Functions can ordinarily access variables outside their scope, even if declared after the function.", function() {

    var f = function() {
        return outsideScope;
    };
    var outsideScope = 20;
    ok(f() == 20)

});

test("Define variables at the top of functions, otherwise hoisting will give you an undefined value instead of a ReferenceError.", function() {

    var result;
    var f = function() {
        result = a;
        var a = 20;
    }                       ;
    ok(f() == undefined)

});


test("Consts cannot be reassigned", function() {
     const a = 10;
    throws(function() { a = 20}(),Error);
});

test("Functions close over variables in scope at the time they were created, not when they are executed.", function() {
    var outer = function() {
        var closeOverMe = 10;
        var inner = function() {
            return closeOverMe + 10;
        }
        return inner;
    };

    var innerFromOuter = outer();

    ok(innerFromOuter() == 20);

});


test("Array literals", function () {
   var myArray = ["Dog","Cat","Fish"];

    ok(myArray[1] == "Cat");
    ok(myArray.length == 3);
});


test("Empty elements in array literals are undefined", function() {
     var myArray = ["Dog", , "Cat"];
     ok(myArray[1] == undefined)
})  ;

test("Trailing commas in array literals are ignored", function() {
     var myArray = ['Dog','Cat',];
    ok(myArray.length == 2);
})  ;

test("Use the Boolean object to convert null, NaN and undefined to false", function () {
   var myNaN = NaN;
    var myUndefined = undefined;
    var myNull = null;
    var boolWrapper = new Boolean(myNaN && myUndefined && myNull);
    ok(boolWrapper == false && myNaN != false);

});