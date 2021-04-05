(this["webpackJsonptoday-todo"]=this["webpackJsonptoday-todo"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o,r=n(2),c=n(1),a=n.n(c),d=n(10),i=n.n(d),s=(n(33),n(34),n(5)),u=n(7),l=n(27),p={container:{display:"flex",justifyContent:"center",padding:"10px"},form:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minWidth:"300px"},textInput:{padding:"10px",minWidth:"240px",width:"95%",maxWidth:"400px",marginRight:"10px",fontSize:"19px",border:"2px solid #ff9ca9",borderRadius:"5px",color:"#303030"},addTodoButton:{backgroundColor:"#ff4d64",color:"#ffffff",fontSize:"30px",minWidth:"50px",minHeight:"50px",padding:"0",borderRadius:"50%",border:"1px solid #ff3650",alignSelf:"flex-start",cursor:"pointer"}},f=function(e){var t=e.addTodoAction,n=e.addTaskAction,o=Object(c.useState)(""),a=Object(u.a)(o,2),d=a[0],i=a[1],s=Object(c.useState)(""),f=Object(u.a)(s,2),b=f[0],j=f[1];return Object(r.jsx)("div",{style:p.container,children:Object(r.jsxs)("form",{style:p.form,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{style:p.textInput,type:"text",id:"newTodo",name:"newTodo",placeholder:"Add new todo",value:d||"",onChange:function(e){i(e.target.value)}}),b&&Object(r.jsx)("p",{style:{fontSize:"15px",color:"#ff3650"},children:b})]}),Object(r.jsx)("button",{style:p.addTodoButton,onClick:function(e){return function(e){e.preventDefault(),d.length>0?(t({id:Object(l.a)(),data:d,isChecked:!1}),n(),i(""),j("")):j("Please enter a task")}(e)},children:"+"})]})})},b=Object(s.b)(null,(function(e){return{addTodoAction:function(t){return e(function(e){return{type:"ADD_TODO",payload:e}}(t))},addTaskAction:function(){return e({type:"ADD_TASK"})}}}))(f),j=n(4),x=n(22),O=n(21),h=n(23),y=n(14),g={container:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 30px",borderBottom:"1px solid #ededed"},textInput:{color:"#2e2e2e",padding:"5px",width:"90%",fontSize:"16px",border:"2px solid #70e8a9",borderRadius:"5px"},checkbox:{backgroundColor:"pink",fontSize:"20px"},todoDataContainer:{width:"100%",padding:"15px"},todoTextContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:0,cursor:"pointer"},todoData:{fontSize:"18px",color:"#2e2e2e"},trashIcon:{color:"#FD8C7E",fontSize:"20px",cursor:"pointer"},checkIcon:{fontSize:"20px",cursor:"pointer",color:"#3ddf8a"},editIcon:{color:"#8c7efd",fontSize:"22px",cursor:"pointer"}},v=function(e){var t=e.todo,n=e.deleteTodo,o=e.updateTodo,a=e.completeTodo,d=e.deleteTask,i=e.index,s=Object(c.useState)(!1),l=Object(u.a)(s,2),p=l[0],f=l[1];return Object(r.jsx)(y.b,{draggableId:t.id,index:i,children:function(e,c){return Object(r.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:(i=c.isDragging,s=e.draggableProps.style,Object(j.a)({background:i?"#a8ffbd":null,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #ededed",padding:"0 20px"},s)),children:[Object(r.jsx)("input",{style:g.checkbox,type:"checkbox",name:"task1",value:t.data,checked:t.isChecked,onChange:function(){return e=t.id,void a(e);var e}}),Object(r.jsx)("div",{style:g.todoDataContainer,children:p?Object(r.jsxs)("div",{style:g.todoTextContainer,children:[Object(r.jsx)("input",{style:g.textInput,type:"text",value:t.data,onChange:function(e){return function(e,t){console.log(e.target.value),o(t,e.target.value)}(e,t.id)},onKeyDown:function(e){return function(e){"Enter"===e.key&&f(!1)}(e)}}),Object(r.jsx)(O.a,{onClick:function(){return f(!1)},style:g.checkIcon})]}):Object(r.jsxs)("div",{style:g.todoTextContainer,children:[Object(r.jsx)("p",{style:Object(j.a)(Object(j.a)({},g.todoData),{},{textDecoration:t.isChecked?"line-through":"none"}),children:t.data}),Object(r.jsx)(x.a,{onClick:function(){f(!0)},style:g.editIcon})]})}),!p&&Object(r.jsx)(h.a,{onClick:function(){return e=t.id,n(e),void d();var e},style:g.trashIcon})]}));var i,s}})},T=Object(s.b)(null,(function(e){return{deleteTask:function(){return e({type:"DELETE_TASK"})},deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",payload:{todoId:e}}}(t))},completeTodo:function(t){return e(function(e){return{type:"COMPLETE_TODO",payload:{id:e}}}(t))},updateTodo:function(t,n){return e(function(e,t){return{type:"UPDATE_TODO",payload:{id:e,newValue:t}}}(t,n))}}}))(v),k={container:{display:"flex",flexDirection:"column"}},m=function(e){var t=e.todos,n=e.reorderTodos,o=Object(c.useCallback)((function(e){if(e.destination){var o=function(e,t,n){var o=Array.from(e),r=o.splice(t,1),c=Object(u.a)(r,1)[0];return o.splice(n,0,c),o}(t,e.source.index,e.destination.index);n(o)}}),[n,t]);return Object(r.jsx)(y.a,{onDragEnd:o,children:Object(r.jsx)(y.c,{droppableId:"droppable-1",children:function(e,n){return Object(r.jsxs)("div",Object(j.a)(Object(j.a)({},e.droppableProps),{},{ref:e.innerRef,style:(o=n.isDraggingOver,c=k.container,Object(j.a)(Object(j.a)({},c),{},{background:o?"#edfff1":null,padding:"0 10px"})),children:[t.map((function(e,t){return Object(r.jsx)(T,{todo:e,index:t},e.id)})),e.placeholder]}));var o,c}})})},D=Object(s.b)((function(e){return{todos:e.todos}}),{reorderTodos:function(e){return{type:"REORDER_TODOS",payload:e}}})(m),C=new Date,w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][C.getDay()],E=C.getDate(),S=["January","February","March","April","May","June","July","August","September","October","November","December"][C.getMonth()],I=C.getFullYear();switch(E){case 1:case 21:case 31:o=Object(r.jsxs)("span",{children:[E,Object(r.jsx)("sup",{children:"st"})]});break;case 2:case 22:o=Object(r.jsxs)("span",{children:[E,Object(r.jsx)("sup",{children:"nd"})]});break;case 3:case 23:o=Object(r.jsxs)("span",{children:[E,Object(r.jsx)("sup",{children:"rd"})]});break;default:o=Object(r.jsxs)("span",{children:[E,Object(r.jsx)("sup",{children:"th"})]})}var A=n(8),R=n(9);function _(){var e=Object(A.a)(["\n  color: #6e6e6e;\n  font-weight: 500;\n  font-size: 15px;\n"]);return _=function(){return e},e}function z(){var e=Object(A.a)(["\n  color: #595959;\n"]);return z=function(){return e},e}function P(){var e=Object(A.a)(["\n  font-size: 23px;\n  font-weight: bold;\n  color: #5b45ed;\n"]);return P=function(){return e},e}function F(){var e=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return F=function(){return e},e}function L(){var e=Object(A.a)(["\n  display: flex;\n  background-color: #f9f7ff;\n  padding: 10px 30px;\n  border-radius: 15px;\n  justify-content: space-between;\n  border-bottom: 1px solid #ededed;\n"]);return L=function(){return e},e}function B(){var e=Object(A.a)(["\n  display: flex;\n  background-color: #ffffff;\n  flex-direction: column;\n  min-width: 320px;\n  width: 40%;\n  max-width: 550px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n"]);return B=function(){return e},e}var M=R.a.div(B()),J=R.a.div(L()),W=R.a.div(F()),K=R.a.p(P()),N=R.a.p(z()),H=R.a.div(_()),U=function(){var e=Object(s.c)((function(e){return e.todos.length}));return Object(r.jsxs)(M,{children:[Object(r.jsxs)(J,{children:[Object(r.jsxs)(W,{children:[Object(r.jsxs)(K,{children:[w,", ",o]}),Object(r.jsxs)(N,{children:[S," ",I]})]}),Object(r.jsx)(H,{children:e>0&&Object(r.jsxs)("p",{children:[e," Task",1===e?null:"s"]})})]}),Object(r.jsx)(b,{}),Object(r.jsx)(D,{})]})},V=n(6),Y=n(18),q=[{id:"1",data:"Sleep early",isChecked:!1},{id:"2",data:"Learn something new",isChecked:!1},{id:"3",data:"Buy grocery",isChecked:!1},{id:"4",data:"Feed the cats",isChecked:!1}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[t.payload].concat(Object(Y.a)(e));case"UPDATE_TODO":var n=e.map((function(e){var n=Object(j.a)({},e);return n.id===t.payload.id&&(n.data=t.payload.newValue),n}));return n;case"DELETE_TODO":var o=e.filter((function(e){return e.id!==t.payload.todoId}));return o;case"COMPLETE_TODO":var r=e.map((function(e){var n=Object(j.a)({},e);return n.id===t.payload.id&&(n.isChecked=!n.isChecked),n}));return r;case"REORDER_TODOS":return Object(Y.a)(t.payload);default:return e}},Q=Object(V.c)({todos:G}),X={container:{backgroundColor:"#ff4d64",background:"linear-gradient(45deg, #7267ff 50%,#ff6c7f 50%)"}},Z=function(){return Object(r.jsx)(s.a,{store:Object(V.e)(Q),children:Object(r.jsxs)("div",{"data-testid":"app",className:"App",style:X.container,children:[Object(r.jsx)("h1",{className:"headerText",children:"Today Todo"}),Object(r.jsx)(U,{})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),c(e),a(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root")),$()}},[[42,1,2]]]);
//# sourceMappingURL=main.43edd07e.chunk.js.map