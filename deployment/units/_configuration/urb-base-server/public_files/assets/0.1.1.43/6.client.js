webpackJsonp([6],{1305:function(e,n,t){function l(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(n,t,l){return t&&e(n.prototype,t),l&&e(n,l),n}}(),u=t(338),d=l(u),s=t(71),c=t(1),T=l(c),p=t(57),g=t(340),f=l(g),m=t(532),y=l(m),D=t(2762),_=l(D),k=function(e){return{card:{minWidth:275}}},h=function(e){function n(e,t){a(this,n);var l=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return l._handle_onKeyDown_AddToDo=function(e){if(13===e.keyCode){var n=l.props,t=n.relay,a=n.Viewer;_.default.commit(t.environment,a,l.state.ToDo_Text_New),l.setState({ToDo_Text_New:""})}},l._handle_OnChange=function(e){l.setState({ToDo_Text_New:e.target.value})},l.state={ToDo_Text_New:""},l}return i(n,e),r(n,[{key:"render",value:function(){var e=this.props.classes;return T.default.createElement(y.default,null,T.default.createElement(d.default,{className:e.card},T.default.createElement(u.CardHeader,{title:"TO DOs",subheader:"List of TO DOs for user"}),this.props.children,T.default.createElement("div",{style:{marginLeft:4,marginRight:4}}),T.default.createElement(f.default,{label:"What needs to be done?",value:this.state.ToDo_Text_New,fullWidth:!0,onKeyDown:this._handle_onKeyDown_AddToDo,onChange:this._handle_OnChange})))}}]),n}(T.default.Component);n.default=(0,p.createFragmentContainer)((0,s.withStyles)(k)(h),{Viewer:function(){return t(2764)}})},2762:function(e,n,t){function l(e,n,t){var l=e.get(n.id);["any","active"].forEach(function(e){var n=i.ConnectionHandler.getConnection(l,"ToDoList_ToDos",{status:e});n&&i.ConnectionHandler.insertEdgeAfter(n,t)})}function a(e,n,t){var a=u++;return(0,o.commitMutation)(e,{mutation:r,variables:{input:{ToDo_Text:t,clientMutationId:a}},updater:function(e){var t=e.getRootField("ToDoAdd");l(e,n,t.getLinkedRecord("ToDosEdge"))},optimisticUpdater:function(e){var o="client:ToDoAdd:ToDo:"+a,i=e.create(o,"ToDo");i.setValue(t,"ToDo_Text"),i.setValue(o,"id");var r=e.create("client:ToDoAdd:ToDosEdge:"+a,"ToDosEdge");r.setLinkedRecord(i,"node"),l(e,n,r);var u=e.get(n.id),d=u.getValue("ToDo_TotalCount");null!=d&&u.setValue(d+1,"ToDo_TotalCount")}})}Object.defineProperty(n,"__esModule",{value:!0});var o=t(57),i=t(165),r=function(){return t(2763)},u=0;n.default={commit:a}},2763:function(e,n,t){"use strict";var l={fragment:{argumentDefinitions:[{kind:"LocalArgument",name:"input",type:"ToDoAddInput!",defaultValue:null}],kind:"Fragment",metadata:null,name:"ToDoAddMutation",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoAddInput!"}],concreteType:"ToDoAddPayload",name:"ToDoAdd",plural:!1,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Viewer",name:"Viewer",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_TotalCount",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"ToDosEdge",name:"ToDosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"cursor",storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"ToDo",name:"node",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_Complete",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_Text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation"},id:null,kind:"Batch",metadata:{},name:"ToDoAddMutation",query:{argumentDefinitions:[{kind:"LocalArgument",name:"input",type:"ToDoAddInput!",defaultValue:null}],kind:"Root",name:"ToDoAddMutation",operation:"mutation",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoAddInput!"}],concreteType:"ToDoAddPayload",name:"ToDoAdd",plural:!1,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Viewer",name:"Viewer",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_TotalCount",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"ToDosEdge",name:"ToDosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"cursor",storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"ToDo",name:"node",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_Complete",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"ToDo_Text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},text:"mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n"};e.exports=l},2764:function(e,n,t){"use strict";var l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ToDoScreen_Viewer",selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null}],type:"Viewer"};e.exports=l}});