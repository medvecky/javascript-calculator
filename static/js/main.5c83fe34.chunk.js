(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";function addNumberToExpression(e,a){"0"===e.expression||isCompletedExpression(e)?"0"!==a.payload&&(e.expression=a.payload):e.expression+=a.payload}function addNumberToCurrentValue(e,a){"0"===e.currentValue||"*/+-=".includes(e.currentValue)?e.currentValue=a.payload:e.currentValue+=a.payload}function handleOperation(e,a){"-"===a.payload?handleMinus(e,a):e.currentValue!==a.payload&&("*/+-=".includes(e.currentValue)&&(isMinusValid(e)?e.expression=e.expression.slice(0,-1):e.expression=e.expression.slice(0,-3)),e.expression+=a.payload,"="===a.payload?(evaluate(e),handleExpressionsChain(e)):e.currentValue=a.payload)}function handleMinus(e,a){"0"===e.expression?(e.expression=a.payload,e.currentValue=a.payload):isNumeric(e.currentValue)?(e.expression+=a.payload,e.currentValue=a.payload):isMinusValid(e)&&(e.expression+=" "+a.payload,e.currentValue=a.payload)}function isMinusValid(e){return!new RegExp("[-/*+] -$").test(e.expression)}function handleExpressionsChain(e){e.expression.includes("=")&&(e.expression=e.currentValue)}function isCompletedExpression(e){return new RegExp(".+=-?\\d+").test(e.expression)}function isNumeric(e){return!isNaN(e)}function evaluate(state){var expression=state.expression=state.expression.slice(0,-1);if(!expression.includes("=")){var result=eval(expression).toString();state.expression+="="+result,state.currentValue=result}}function handleNumber(e,a){isCompletedExpression(e)?(e.expression="0",e.currentValue="0",addNumberToExpression(e,a),addNumberToCurrentValue(e,a)):(addNumberToExpression(e,a),addNumberToCurrentValue(e,a))}__webpack_require__.d(__webpack_exports__,"a",(function(){return handleNumber})),__webpack_require__.d(__webpack_exports__,"b",(function(){return handleOperation}))},26:function(e,a,n){e.exports=n(45)},31:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){},42:function(e,a,n){},45:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(10),i=n.n(l),u=(n(31),n(22)),c=n.n(u),o=(n(39),n(40),n(7)),s=n(5),d=n(24),p=n(17);n(41);var m=function(e){return r.a.createElement("div",null,r.a.createElement(p.a,{border:"info",text:"info"},r.a.createElement(p.a.Body,{className:"align-right"},e.content)))};var E=function(e){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(m,{content:e.expression}))),r.a.createElement(o.a,null,r.a.createElement(s.a,{id:"display"},r.a.createElement(m,{content:e.currentValue})))))},v=(n(42),n(9)),f=n(8),x=n(11),b=n(16),_=Object(x.b)({name:"calculator",initialState:{expression:"0",currentValue:"0"},reducers:{clear:function(e){e.expression="0",e.currentValue="0"},addNumber:function(e,a){Object(b.a)(e,a)},addOperation:function(e,a){Object(b.b)(e,a)},addDecimal:function(e){e.currentValue.includes(".")||(e.currentValue+=".",e.expression+=".")}}}),V=_.actions,y=V.clear,h=V.addNumber,k=V.addOperation,w=V.addDecimal,g=function(e){return e.calculator.expression},N=function(e){return e.calculator.currentValue},C=_.reducer;var O=function(){var e=Object(f.b)(),a=[{id:"add",value:"+"},{id:"subtract",value:"-"},{id:"multiply",value:"*"},{id:"divide",value:"/"},{id:"equals",value:"="}].map((function(a){return r.a.createElement(o.a,{key:a.id},r.a.createElement(s.a,null,r.a.createElement(v.a,{id:a.id,variant:"outline-warning",size:"lg",block:!0,onClick:function(){return e(k(a.value))}},a.value)))}));return r.a.createElement("div",null,r.a.createElement(d.a,null,a))};var j=function(){var e=Object(f.b)(),a=[{id:"one",value:"1"},{id:"two",value:"2"},{id:"three",value:"3"},{id:"four",value:"4"},{id:"five",value:"5"},{id:"six",value:"6"},{id:"seven",value:"7"},{id:"eight",value:"8"},{id:"nine",value:"9"}].map((function(a){return r.a.createElement(s.a,{key:a.id},r.a.createElement(v.a,{id:a.id,variant:"outline-info",block:!0,size:"lg",onClick:function(){return e(h(a.value))}},a.value))}));return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(o.a,null,a.slice(6,9)),r.a.createElement(o.a,null,a.slice(3,6)),r.a.createElement(o.a,null,a.slice(0,3)),r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(v.a,{id:"clear",variant:"outline-danger",block:!0,size:"lg",onClick:function(){return e(y())}},"C")),r.a.createElement(s.a,null,r.a.createElement(v.a,{id:"zero",variant:"outline-info",block:!0,size:"lg",onClick:function(){return e(h("0"))}},"0")),r.a.createElement(s.a,null,r.a.createElement(v.a,{id:"decimal",variant:"outline-info",block:!0,size:"lg",onClick:function(){return e(w())}},".")))))};var z=function(){var e=Object(f.c)(g),a=Object(f.c)(N);return r.a.createElement("div",null,r.a.createElement(d.a,{className:"main"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(E,{expression:e,currentValue:a}))),r.a.createElement(o.a,null,r.a.createElement(s.a,{xs:"9"},r.a.createElement(j,null)),r.a.createElement(s.a,null,r.a.createElement(O,null)))))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null),r.a.createElement(z,null))},M=Object(x.a)({reducer:{calculator:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f.a,{store:M},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5c83fe34.chunk.js.map