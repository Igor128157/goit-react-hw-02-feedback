(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={statisticsTitle:"Statistics_statisticsTitle__1QePx"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,a){e.exports={sectionTitle:"Section_sectionTitle__1VeMI"}},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),l=(a(16),a(3)),i=a(4),u=a(5),s=a(10),d=a(9),b=a(6),m=a.n(b),p=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,r=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:m.a.statisticsTitle},"Statistics"),c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",o),c.a.createElement("p",null,"Positive feedback: ",r,"%"))},f=a(7),v=a.n(f),k=function(e){var t=e.onLeaveFeedback,a=v.a.button;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:a,onClick:t,name:"good"},"Good"),c.a.createElement("button",{type:"button",className:a,onClick:t,name:"neutral"},"Neutral"),c.a.createElement("button",{type:"button",className:a,onClick:t,name:"bad"},"Bad"))},g=a(8),E=a.n(g),h=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("p",{className:E.a.sectionTitle},t),a)},F=function(e){var t=e.message;return c.a.createElement("p",null,t)},T=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement(h,{title:"Please leave feedback"},c.a.createElement(k,{onLeaveFeedback:this.onLeaveFeedback}),this.countTotalFeedback()?c.a.createElement(p,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(F,{message:"No feedback given"}))}}]),a}(n.Component);r.a.render(c.a.createElement(T,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3f8bba4e.chunk.js.map