(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{373:function(t,e,n){"use strict";n.r(e);var o=n(32),r=(n(9),n(75),n(119)),m={name:"SingleBlog",head:{title:"Single Blog"},data:function(){return{webUrl:r.b,formTitle:"",method:"",addReplyComment:!1,comment:"",replyComment:"",orgComment:{},comment_id:"",comments:[],blog:null,id:null,index:null}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api,o=t.params,e.next=3,n.$get("blogs/single-blog/".concat(o.id));case 3:return r=e.sent,e.abrupt("return",{blog:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{EditComment:function(t){this.addReplyComment=!this.addReplyComment,this.index=t,this.replyComment=this.blog.comments[t].message,this.method="edit",this.formTitle="Edit Comment"},AddComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={message:t.comment,writer:t.$auth.user.username,replies:[]},t.blog.comments.push(n),e.next=4,t.$api.put("blogs/comment",t.blog).then((function(e){t.blog=e.data})).catch((function(t){return console.log(t)}));case 4:t.comment="",t.$refs.add.reset();case 6:case"end":return e.stop()}}),e)})))()},ShowReplyComment:function(t){this.index=t,this.addReplyComment=!this.addReplyComment,this.method="reply",this.formTitle="Reply Comment",this.replyComment=""},ChangeComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("reply"!==t.method){e.next=7;break}return n={message:t.replyComment,writer:t.$auth.user.username},t.blog.comments[t.index].replies.push(n),e.next=5,t.$api.put("blogs/comment",t.blog).then((function(e){t.blog=e.data})).catch((function(t){return console.log(t)}));case 5:e.next=10;break;case 7:return t.blog.comments[t.index].message=t.replyComment,e.next=10,t.$api.put("blogs/comment",t.blog).then((function(e){t.blog=e.data})).catch((function(t){return console.log(t)}));case 10:t.replyComment="",t.addReplyComment=!t.addReplyComment,t.$refs.reply.reset();case 13:case"end":return e.stop()}}),e)})))()},DeleteComment:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.replyComment=e.blog.comments[t].message,o=e.blog.comments.filter((function(t){return t.message!==e.replyComment})),e.blog.comments=o,n.next=5,e.$api.put("blogs/comment",e.blog).then((function(t){e.blog=t.data})).catch((function(t){return console.log(t)}));case 5:case"end":return n.stop()}}),n)})))()}}},l=n(31),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blog?n("div",{staticClass:"single-blog"},[n("div",{staticClass:"single-blogs"},[n("div",{staticClass:"blog-img"},[n("img",{attrs:{src:t.webUrl+"/assets/images/"+t.blog.img,alt:""}})]),t._v(" "),n("div",{staticClass:"blog-content"},[n("h1",[t._v(t._s(t.blog.title))]),t._v(" "),n("h4",[n("span",{staticClass:"mx-3"},[t._v(t._s(t.blog.create_at.month)+" "+t._s(t.blog.create_at.day)+", "+t._s(t.blog.create_at.year))]),t._v(" "),n("span",{staticClass:"category mx-3"},[t._v(t._s(t.blog.category)+",")]),t._v(" "),n("span",{staticClass:"mx-3"},[t._v("2 COMMENTS")])]),t._v(" "),n("p",[t._v(t._s(t.blog.content))])]),t._v(" "),n("div",{staticClass:"my-comments row pt-5"},[n("div",{staticClass:"container"},[n("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[n("b-card-title",[t._v("\n            Comments ("+t._s(t.blog.comments.length)+")\n          ")]),t._v(" "),n("div",{staticClass:"add-comment py-3"},[n("ValidationObserver",{ref:"add",staticClass:"form-validate row",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[n("b-form",{staticClass:"form-row col-12",attrs:{enctype:"application/json"},on:{submit:function(e){return e.preventDefault(),o(t.AddComment)}}},[n("div",{staticClass:"col-8 py-3"},[n("b-form-group",{attrs:{id:"input-group-1"}},[n("ValidationProvider",{attrs:{name:"Comment"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-input",{attrs:{type:"text",placeholder:"Add Comment"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),n("span",[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),n("div",{staticClass:"col-4 py-3"},[n("b-button",{attrs:{type:"submit"}},[t._v("send comment")])],1)])]}}],null,!1,3302616076)})],1),t._v(" "),n("b-modal",{attrs:{size:"xl",title:t.formTitle,"hide-footer":!0},model:{value:t.addReplyComment,callback:function(e){t.addReplyComment=e},expression:"addReplyComment"}},[n("div",{staticClass:"add-comment py-3"},[n("ValidationObserver",{ref:"reply",staticClass:"form-validate row",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[n("b-form",{staticClass:"form-row col-12",attrs:{enctype:"application/json"},on:{submit:function(e){return e.preventDefault(),o(t.ChangeComment)}}},[n("div",{staticClass:"col-8 py-3"},[n("b-form-group",{attrs:{id:"input-group-1"}},[n("ValidationProvider",{attrs:{name:"Last-Name",rules:"required|min:20"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-input",{attrs:{type:"text",placeholder:"Add Reply Comment"},model:{value:t.replyComment,callback:function(e){t.replyComment=e},expression:"replyComment"}}),t._v(" "),n("span",[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),n("div",{staticClass:"col-4 py-3"},[n("b-button",{attrs:{type:"submit"}},[t._v("send comment")])],1)])]}}],null,!1,2825059380)})],1)]),t._v(" "),t.blog.comments.length?n("div",{staticClass:"comments"},t._l(t.blog.comments,(function(e,o){return n("div",{staticClass:"comment py-3"},[n("b-card",{attrs:{"bg-variant":"white","text-variant":"dark"}},[n("h3",[t._v(t._s(e.message))]),t._v(" "),n("div",{staticClass:"comment-options"},[n("span",{on:{click:function(e){return t.ShowReplyComment(o)}}},[t._v("Reply")]),t._v(" "),n("span",{on:{click:function(e){return t.EditComment(o)}}},[t._v("Edit")]),t._v(" "),n("span",{on:{click:function(e){return t.DeleteComment(o)}}},[t._v("Delete")])]),t._v(" "),e.replies.length?n("div",{staticClass:"replies mt-3"},[n("b-card",t._l(e.replies,(function(e){return n("div",[n("h2",[t._v(t._s(e.writer))]),t._v(" "),n("h3",[t._v(t._s(e.message))])])})),0)],1):t._e()])],1)})),0):t._e()],1)],1)])])]):t._e()}),[],!1,null,"78751498",null);e.default=component.exports}}]);