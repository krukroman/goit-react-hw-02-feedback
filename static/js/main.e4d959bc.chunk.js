(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__bjHvb",item:"Statistics_item__xe-lu",text:"Statistics_text__oRxRc",value:"Statistics_value__2lajY"}},,,function(e,t,a){e.exports={item:"FeedbackOption_item__2punl",button:"FeedbackOption_button__Bme7t"}},function(e,t,a){e.exports={container:"App_container__3b0D6",infoText:"App_infoText__3lqU0"}},,,,,function(e,t,a){e.exports={title:"Section_title__1kvLC"}},function(e,t,a){e.exports={list:"FeedbackOptions_list__1R4EQ"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(6),i=a.n(s),l=(a(18),a(7)),r=a(8),o=a(9),u=a(13),j=a(12),d=a(10),b=a.n(d),h=a(0);function x(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[t&&Object(h.jsx)("h2",{className:b.a.title,children:t}),a]})}var v=a(4),p=a.n(v);function O(e){var t=e.name,a=e.onLeaveFeedback;return Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)("button",{type:"button",className:p.a.button,onClick:a,value:t,children:t.charAt(0).toUpperCase()+t.slice(1)})})}var m=a(11),_=a.n(m);function f(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:_.a.list,children:Object.keys(t).map((function(e){return Object(h.jsx)(O,{name:e,onLeaveFeedback:a},e)}))})}var N=a(1),k=a.n(N);function g(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:k.a.list,children:[Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{className:k.a.text,children:["Good:",Object(h.jsx)("span",{className:k.a.value,children:t})]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{className:k.a.text,children:["Neutral:",Object(h.jsx)("span",{className:k.a.value,children:a})]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{className:k.a.text,children:["Bad:",Object(h.jsx)("span",{className:k.a.value,children:c})]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{className:k.a.text,children:["Total:",Object(h.jsx)("span",{className:k.a.value,children:n})]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{className:k.a.text,children:["Positive feedback:",Object(h.jsx)("span",{className:k.a.value,children:s})]})})]})}var F=a(5),y=a.n(F),P=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handleAddFeedback=function(t){var a=t.target.value.toLowerCase();e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e}return Object(o.a)(a,[{key:"countTotal",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositivePercentage",value:function(){var e=this.state.good;return Math.round(e/this.countTotal()*100)+"%"}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)("div",{className:y.a.container,children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:this.state,onLeaveFeedback:this.handleAddFeedback})}),Object(h.jsx)(x,{title:"Statistics",children:0!==this.countTotal()?Object(h.jsx)(g,{good:t,neutral:a,bad:c,total:this.countTotal(),positivePercentage:this.countPositivePercentage()}):Object(h.jsx)("p",{className:y.a.infoText,children:"No feedback given"})})]})}}]),a}(c.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e4d959bc.chunk.js.map