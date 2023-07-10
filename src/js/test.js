
class Test {
    data = 'data';
    foo() {
        console.log(this.data);
    }
    bar() {
        this.foo.call(this); // USELESS_CALL alarm
    }
}
function a() { return 1; } // DUPLICATE_DECL alarm. This function declaration is ignored.
function a(b) { return b; }

var foo;
var foo; // DUPLICATE_DECL alarm
