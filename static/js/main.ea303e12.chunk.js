(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var a=e(1),c=e.n(a),r=e(8),o=e.n(r),s=(e(15),e(10)),i=e(2),u=e(3),b=e(5),j=e(4),l=e(19),h=e(9),m=e.n(h),d=e(0),p=function(t){var n=t.children;return Object(d.jsx)("div",{className:m.a.container,children:n})},O=e(7),f=e.n(O),v=function(t){var n=t.contacts;return Object(d.jsx)("ul",{className:f.a.contactsList,children:n.map((function(t){return Object(d.jsx)("li",{className:f.a.contactsListItem,children:t.name},t.id)}))})},x=function(t){Object(b.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={name:""},t.onInputChange=function(n){t.setState({name:n.target.value})},t.onFormSubmit=function(n){n.preventDefault(),t.props.onSubmitData(t.state.name),t.reset()},t.reset=function(){t.setState({name:""})},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state.name;return Object(d.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:this.onInputChange})}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),e}(a.Component),g=function(t){Object(b.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={contacts:[],name:""},t.addContact=function(n){var e={id:Object(l.a)(),name:n};t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state.contacts;return console.log(t.id),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsxs)(p,{children:[Object(d.jsx)(x,{onSubmitData:this.addContact}),Object(d.jsx)(v,{contacts:t})]})]})}}]),e}(a.Component);g.defaultProps={};var C=g;o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))},7:function(t,n,e){t.exports={contactsList:"Contacts_contactsList__z-mAg",contactsListItem:"Contacts_contactsListItem__OWxDm"}},9:function(t,n,e){t.exports={container:"Container_container__3hpN0"}}},[[17,1,2]]]);
//# sourceMappingURL=main.ea303e12.chunk.js.map