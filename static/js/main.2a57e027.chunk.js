(this["webpackJsonpqueue-manger"]=this["webpackJsonpqueue-manger"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(7),l=a.n(c),u=(a(12),a(2)),r=(a(13),a(0)),i=function(e){return Object(r.jsxs)("header",{children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{className:"title__head",children:"Queue / Todo"}),Object(r.jsx)("p",{className:"titile__desc",children:"mange your jobs in oredered / unordered list"})]}),Object(r.jsxs)("div",{className:"mode",children:[Object(r.jsx)("p",{className:"mode__option",children:"Queue"}),Object(r.jsx)("input",{type:"checkbox",className:"mode__checkbox",id:"switch",value:e.value,onChange:e.handleChange}),Object(r.jsx)("label",{htmlFor:"switch",className:"mode__slider"}),Object(r.jsx)("p",{className:"mode__option",children:"Todo"})]})]})},d=a(3),j=(a(15),function(e){return Object(r.jsxs)("section",{className:"list",children:[Object(r.jsx)("h3",{className:"list__title",children:e.title}),Object(r.jsx)("ul",{className:"list__container",children:!0===e.queue?e.queues.map((function(t,a){return Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:t.job}),Object(r.jsx)("p",{className:"list__date",children:t.date?t.date.join("/"):null})]}),Object(r.jsx)("button",{onClick:e.removeHandler,className:"list__remove",children:"Done"})]},a)})):e.queues.map((function(t,a){return Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("p",{children:t}),Object(r.jsx)("button",{onClick:e.removeHandler,className:"list__remove",children:"Done"})]},a)}))})]})}),o=function(e){return Object(r.jsxs)("label",{children:[e.label,Object(r.jsx)("input",{min:e.min,max:e.max,"data-key":e.inputKey,className:e.clsName,type:e.type,value:e.value,onChange:e.handleChange})]})},b=(a(16),function(e){var t=e.value.date;return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,className:"dashboard",children:[Object(r.jsxs)("div",{className:"dashboard__task",children:[Object(r.jsx)("p",{className:"dashboard__desc",children:"Type your task: "}),Object(r.jsx)(o,{inputKey:"job",type:"test",value:e.queue?e.value.job:e.value,handleChange:e.handleChange})]}),e.queue?Object(r.jsxs)("div",{className:"dashboard__date",children:[Object(r.jsx)("p",{className:"dashboard__desc",children:"Type date for task"}),Object(r.jsx)(o,{value:t[0],label:"Yaer",inputKey:"year",handleChange:e.handleChange,type:"number"}),Object(r.jsx)(o,{value:t[1],label:"Month",min:0,max:12,inputKey:"month",handleChange:e.handleChange,type:"number"}),Object(r.jsx)(o,{value:t[2],label:"Day",inputKey:"day",min:0,max:31,handleChange:e.handleChange,type:"number"})]}):null,Object(r.jsx)("button",{type:"submit",className:"dashboard__submit",children:"Add Job"})]})}),h=function(e,t){for(var a=1,n=e.length;a<n;a++){for(var s=e[a],c=a-1,l=e[c];c>=0&&l.date[t]>s.date[t];)e[c+1]=e[c],l=e[--c];e[c+1]=s}},m=function(e){for(var t=Object(d.a)(e),a=e[0].date.length-1;a>=0;a--)h(t,a);return t},O=[{date:[0,0,0],job:"Please type and add your tasks"}],x=function(e){var t=Object(n.useState)(O),a=Object(u.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)({date:[1400,1,1],job:""}),i=Object(u.a)(l,2),o=i[0],h=i[1];return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)(j,{queue:e.queue,removeHandler:function(e){var t=e.target.parentElement.firstChild.firstChild.textContent,a=Object(d.a)(s),n=s.findIndex((function(e){return e.job===t}));0!==(a=a.slice(0,n).concat(a.slice(n+1))).length&&(a=m(a)),c(a)},queues:0===s.length?[{job:"Please add your queues",date:[]}]:s}),Object(r.jsx)(b,{queue:e.queue,value:o,handleChange:function(e){var t=Object.assign({},o);switch(e.target.dataset.key){case"job":t.job=e.target.value;break;case"day":t.date[2]=e.target.value;break;case"month":t.date[1]=e.target.value;break;case"year":t.date[0]=e.target.value;break;default:console.log("oops! something went wrong")}h(t)},handleSubmit:function(e){if(e.preventDefault(),""===o.job)return 0;var t=[].concat(Object(d.a)(s),[o]);t=m(t),c(t),h({date:[1400,1,1],job:""})}})]})},v=["please type and add your taks"],p=function(e){var t=Object(n.useState)(v),a=Object(u.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],h=i[1];return Object(r.jsxs)("section",{className:"main",children:[Object(r.jsx)(j,{removeHandler:function(e){var t=e.target.parentNode.firstChild.textContent,a=Object(d.a)(s),n=a.findIndex((function(e){return e===t}));a=a.slice(0,n).concat(a.slice(n+1)),c(a)},queue:e.queue,queues:0===s.length?v:s}),Object(r.jsx)(b,{queue:e.queue,value:o,handleChange:function(e){var t=e.target.value;h(t)},handleSubmit:function(e){e.preventDefault();var t=s===v?[o]:[].concat(Object(d.a)(s),[o]);h(""),c(t)}})]})},f=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(r.jsxs)("section",{children:[Object(r.jsx)(i,{value:a,handleChange:function(e){s(!e.target.checked)}}),a?Object(r.jsx)(x,{queue:a}):Object(r.jsx)(p,{queue:a})]})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2a57e027.chunk.js.map