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

test("Octal literals begin with '0'", function () {
   var myOctal = 077;
   ok(myOctal != undefined)
});


test("Hex literals begin with '0x'", function () {
   var myHex = -0x7BA;
    ok(myHex != undefined);
});

test("Floating point literals begin with can have decimal points and 'E' for exponents", function () {
   var myFloat = -3.12E-12;
   ok(myFloat != undefined);
});

test("Object literals are lists of property and object pairs", function () {

  var myFunc = function(number) {return number * 10};
  var myFlatObjectLiteral = {firstName: "Dog",secondName: 10, thirdName: myFunc(2) };
  var myNestedObjectLiteral = {firstName : {dog1: "Jess", dog2: "Louis"}, TopDog : "Stan"};
   for (var key in myFlatObjectLiteral)
   {
       var theObject = myFlatObjectLiteral[key];
       console.log("The object: " + theObject);
       console.log("The property name: " + key);
   }

   ok(myNestedObjectLiteral.firstName.dog2 == "Louis");
});

test("Javascript can display unicode literals", function () {
    var x = "\u00B2";
    console.log(x);
    ok(true);
});

test("The strict equal operator returns true if the operands are equal and have the same type", function () {
    var string10 = "10";
    var int10 = 10;
    var anotherInt10 = 10
    ok(string10 == int10);
    ok(string10 !== int10);
    ok(anotherInt10 === int10);

});

test("Divide by zero produces infinity", function () {
  var shouldBeInfinity = 10/0;
  ok(shouldBeInfinity == Infinity);
    ok(shouldBeInfinity === Infinity);
});


test("Javascript has ternary operator", function () {
    var age = 17;
    var desc = age < 18 ? "minor" : "adult";
    ok(desc == "minor")

});

test("Delete operator deletes an object, property or removes an element from an array, but does not work with explicitly defined variables", function () {
    // does not work to delete object that is defined with var
   var myObj = new Number();
   var successFullyDeleted = delete myObj;
    ok(successFullyDeleted == false);


});

test("Delete an element in an array", function () {
   var trees = new Array("Oak","Elm","Birch");
    delete trees[1];
    ok(trees[1] == undefined);
    console.log("Length after delete: " + trees.length);
    ok(trees.length == 3);


});

test("Delete a user defined property", function () {
   mobj = new Number();
    mobj.h = 10;
   var result = delete mobj.h;
    ok(result);
});

test("The 'in' operator returns true if the specified property is in the specified object", function () {
    var trees = new Array("birch","oak","fig","lemon","pine");
    ok(1 in trees);
    ok(!(10 in trees)); // out of range
    ok("length" in trees); // length is an array property
    var myCar = {"make" : "Ford", "model": "Kruger", "year": 2009};
    ok("make" in myCar);
});


test("The 'instanceOf' operator returns true of the specified object is of the specified type", function () {
   var myDate = new Date(2010,12,17);
    ok(myDate instanceof Date);
    var myString = new String("my string");
    ok(myString instanceof String);
    var myStringLiteral = "my implicit string";
    ok((myStringLiteral instanceof String) == false);
});


test("The 'typeof' operator returns a string indicating the type of the operand", function () {
   var myFunction = new Function("5 + 2");
   ok(typeof(myFunction) == 'function');
   ok(typeof(true) == 'boolean');
    ok(typeof(null) == 'object');
});


test("Javascript has regular expression literals and returns the regex group matches in an array", function () {

    var myRegexLiteral = /Javascript\s(Rulez)?\s(OK)?\s(pal\?)/;
    var myString = "Javascript Rulez OK pal?";
    var match = myRegexLiteral.exec(myString);
    ok(match[0] == "Javascript Rulez OK pal?"); // whole string matched
    ok(match[1] == "Rulez"); // first substring
    ok(match[2] == "OK");
    ok(match[3] == "pal?");

});


//STATEMENTS

test("Javascript does not have block scope: variables inside a block leak out", function () {


    var outsideBlock = 10;
    if (outsideBlock == 10) {
        var insideBlock = 99;
    }

    ok(insideBlock == 99);
});

test("Javascript has switch statements", function () {

    var animal = "CAT";

    function getSound() {
    switch (animal)
        {
        case "CAT":
            return "meow";
            break;
        case "DOG":
            return "woof";
            break;
        case "PIDGIN":
            return "gobble";
            break;
        default:
            return "something else";
            break;
        }


    }
    ok(getSound() == "meow");
});

test("You can label statements so you can break to them from an inner scope", function () {

    // inner loop cancels outer look


    var x = 0;
    var z = 0
    labelForOuterLoop: while (true) {
        console.log("Outer loops: " + x);
        x += 1;
        z = 1;
        while (true) {
            console.log("Inner loops: " + z);
            z += 1;
            if (z === 10 && x === 10) {
                break labelForOuterLoop;
            } else if (z === 10) {
                break;
            }
        }
    }

    ok(x == 10 && z == 10);
});

test("'for in' iteraters through the names of properties of an object, not their values", function () {
   var testObject = {model: "Ford", color: "Blue", cost: "$20,000"};
    for (var prop in testObject)
    {
        console.log(prop);
    }

    expect(0);

});

test("Use 'for' to iterate through the values of an object", function () {
    var sum = 0;
    var obj = {prop1: 5, prop2: 13, prop3: 8};

    for (var key in obj)
    {
       var item = obj[key];
        if (obj.hasOwnProperty(key))
        {
            sum += item;
        }
    }
    ok(sum == 26);

});

test("Exceptions can be any expression", function () {

    // function to create an exception
    function UserException(message){
        this.message = message;
        this.name = "UserException"
    }

    UserException.prototype.toString = function() {return this.name + ': "' + this.message + '"'}

    throws(
        function() {throw new UserException()},UserException,"throws user exception"
    )

    try {
        throw new UserException("test exception")
    }
    catch (e) {
       ok(e.message == "test exception")
    }
    finally {
        console.log("code in finally clause executes regardless of whether an exception is thrown")
    }


});

test("Can define multiple variables on one line, initialising some only", function () {

    var myCar = {make: "Honda", model: "Accord"}, x,y;
    ok(x == undefined)


});







