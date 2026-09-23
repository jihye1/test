class A {
    constructor() {}
}
class B extends A {
    constructor() {
        this.a = 1;
        super(); // ACCESS_THIS_BEFORE_SUPER_CALL alarm
    }
}

new B();

var arr = [1, 2, 3];
if (x < 0) {
    arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
if (x <= 0) {
    if (x) arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}

function h() {
    'use strict';
    var a = 'str1';
    a.prop = 42; // ASSIGN_TO_PROPERTY_OF_PRIMITIVE alarm because 'a' is a primitive string value.
}

const MY_OBJECT = {'key': 'value'};
MY_OBJECT = {'oKey': 'otherValue'}; // BAD_ASSIGN_TO_CONST alarm
const MY_ARRAY = [];
MY_ARRAY = ["A"]; // BAD_ASSIGN_TO_CONST alarm

// Example 1
var obj = null;
if (obj & obj.prop) { // BAD_BITWISE_OPERATOR alarm
    console.log(obj.prop);
}

// Example 2
options = options | {}; // BAD_BITWISE_OPERATOR alarm

x = str.indexOf(y);
if (x = -1) return "no"; // BAD_ASSIGN_IN_CONDITION alarm. The true branch is always taken and "no" is returned.
else return "yes";

import ReactDOM from 'react-dom';

ReactDOM.render(
    <div dangerouslySetInnerHTML={{ __html: "myHTML" }}>
        <Children /> {/* BAD_DANGER_WITH_CHILDREN alarm */}
    </div>, document.getElementById("root")
);

import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div onClick="console.log('clicked')"> {/* BAD_EVENT_HANDLER alarm */}
                Hello
            </div>
        );
    }
}
