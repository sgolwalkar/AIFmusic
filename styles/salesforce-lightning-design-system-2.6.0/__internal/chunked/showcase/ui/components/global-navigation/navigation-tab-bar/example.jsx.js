var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/global-navigation/navigation-tab-bar/example.jsx.js"]=function(e){function t(t){for(var l,s,i=t[0],m=t[1],c=t[2],r=0,b=[];r<i.length;r++)s=i[r],n[s]&&b.push(n[s][0]),n[s]=0;for(l in m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);for(o&&o(t);b.length;)b.shift()();return d.push.apply(d,c||[]),a()}function a(){for(var e,t=0;t<d.length;t++){for(var a=d[t],l=!0,i=1;i<a.length;i++){var m=a[i];0!==n[m]&&(l=!1)}l&&(d.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},n={21:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},d=[];function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],m=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var o=m;return d.push([75,0]),a()}({0:function(e,t){e.exports=React},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=t.ContextTabBarOverflow=t.ContextTabBar=t.ContextTabPanel=t.ContextTab=void 0;var l=r(a(0)),n=r(a(2)),d=a(8),s=a(49),i=r(a(3)),m=a(151),c=r(a(1)),o=r(a(4));function r(e){return e&&e.__esModule?e:{default:e}}var b="context-tab-panel-1",u="context-tab-panel-2",f="context-tab-panel-3",E="context-tab-id-1",I="context-tab-id-2",T="context-tab-id-3",v=function(e){return l.default.createElement("span",{className:"slds-text-body_small slds-text-color_weak slds-p-left_large"},l.default.createElement("span",{className:"slds-assistive-text"},":"),e.children)},p=function(e){return l.default.createElement("abbr",{className:"slds-indicator_unsaved",title:e.title||"Tab Not Saved"},"*")},h=function(e){return l.default.createElement("span",{"aria-label":"New Activity",className:"slds-indicator_unread",role:"alert",title:"New Activity"},l.default.createElement("span",{className:"slds-assistive-text"},"New Tab activity with in More Tabs menu"))},_=t.ContextTab=function(e){return l.default.createElement("li",{className:(0,c.default)("slds-context-bar__item slds-context-bar__item_tab",e.className,{"slds-is-active":e.itemActive,"slds-is-unsaved":e.itemUnsaved,"slds-is-pinned":e.pinned,"slds-has-notification":e.itemUnread,"slds-has-sub-tabs":e.hasSubtabs}),role:"presentation"},l.default.createElement("a",{href:"javascript:void(0);",className:"slds-context-bar__label-action",role:"tab",title:e.title||"tab name","aria-selected":e.itemActive?"true":"false",tabIndex:e.itemActive?"0":"-1","aria-controls":e.tabPanelId,id:e.id},e.itemUnsaved?l.default.createElement("abbr",{className:"slds-indicator_unsaved",title:"Tab Not Saved"},"*"):null,e.itemUnread&&l.default.createElement("span",{"aria-label":"New Activity",className:"slds-indicator_unread",role:"alert",title:"New Activity"},l.default.createElement("span",{className:"slds-assistive-text"},"New activity in Tab: ",e.title||"Subtab Name")),l.default.createElement("div",{className:"slds-icon_container",title:o.default.startCase(e.symbol)||"Case"},l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:e.symbol||"case"}),l.default.createElement("span",{className:"slds-assistive-text"},o.default.startCase(e.symbol)||"Case")),l.default.createElement("span",{className:(0,c.default)("slds-truncate",e.pinned?"slds-assistive-text":null),title:e.title||"tab name"},e.title||"tab name")),l.default.createElement("div",{className:(0,c.default)("slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none","true"==e.actionOverflow?"slds-is-open":null)},l.default.createElement(i.default,{className:"slds-button_icon-container slds-button_icon-x-small",tabIndex:e.itemActive?"0":"-1",symbol:"chevrondown","aria-haspopup":"true",assistiveText:"Actions for "+e.title,title:"Actions for "+e.title}),l.default.createElement(d.Menu,{className:"slds-dropdown_right"},l.default.createElement(d.MenuList,null,l.default.createElement(d.MenuItem,{iconRight:l.default.createElement(v,null,"r")},"Refresh Tab"),l.default.createElement(d.MenuItem,{iconRight:l.default.createElement(v,null,"⇧ + n")},"Open in a new window"),l.default.createElement(d.MenuItem,{iconRight:l.default.createElement(v,null,"p")},"Pin Tab"),l.default.createElement(d.MenuItem,{iconRight:l.default.createElement(v,null,"w")},"Close Tab")))),e.pinned?null:l.default.createElement("div",{className:"slds-context-bar__icon-action slds-col_bump-left slds-p-left_none"},l.default.createElement(i.default,{className:"slds-button_icon-container slds-button_icon-x-small",tabIndex:e.itemActive?"0":"-1",symbol:"close",assistiveText:"Close "+e.title,title:"Close "+e.title})))},w=t.ContextTabPanel=function(e){return l.default.createElement("div",{id:e.id,className:(0,c.default)(e.show?"slds-show":"slds-hide"),role:"tabpanel","aria-labelledby":e.tabId},e.children)},N=t.ContextTabBar=function(e){return l.default.createElement("div",{className:(0,c.default)("slds-context-bar slds-context-bar_tabs",e.className)},l.default.createElement("div",{className:"slds-context-bar__primary"},l.default.createElement("div",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"},l.default.createElement("div",{className:"slds-context-bar__icon-action"},l.default.createElement(s.WaffleIcon,{className:"slds-context-bar__button"})),l.default.createElement("span",{className:"slds-context-bar__label-action slds-context-bar__app-name"},l.default.createElement("span",{className:"slds-truncate",title:e.appName||"App Name"},e.appName||"App Name"))),l.default.createElement("div",{className:(0,c.default)("slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click",e.objectSwitchClassName)},l.default.createElement("a",{href:"javascript:void(0);",className:"slds-context-bar__label-action"},l.default.createElement("span",{className:"slds-truncate",title:"Object"},"Object")),l.default.createElement("div",{className:"slds-context-bar__icon-action"},l.default.createElement(i.default,{className:"slds-button_icon-container slds-button_icon-x-small",symbol:"chevrondown","aria-haspopup":"true",assistiveText:"Open object switcher menu",title:"Open object switcher menu"})),l.default.createElement(d.Menu,{className:"slds-dropdown_right"},l.default.createElement(d.MenuList,null,l.default.createElement(d.MenuItem,null,l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small",sprite:"standard",symbol:"account"}),"Accounts"),l.default.createElement(d.MenuItem,null,l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small",sprite:"standard",symbol:"case"}),"Cases"),l.default.createElement(d.MenuItem,null,l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-standard-work-order slds-m-right_small",sprite:"standard",symbol:"work_order"}),"Insights")))),l.default.createElement("div",{className:(0,c.default)("slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click",e.addTabActive?"slds-is-open":null,e.addTabClassName)},l.default.createElement("div",{className:"slds-context-bar__icon-action"},l.default.createElement(i.default,{className:"slds-button_icon-container slds-button_icon-small",symbol:"add",assistiveText:"Open a New Tab",title:"Open a New Tab"})),e.addTabActive?l.default.createElement("section",{className:"slds-popover slds-nubbin_top",role:"dialog","aria-label":"Add tab by URL or ID",style:{position:"absolute",left:"1.125rem",top:"2.75rem",marginLeft:"-10rem"}},l.default.createElement("div",{className:"slds-popover__body"},l.default.createElement("div",{className:"slds-form-element"},l.default.createElement("label",{className:"slds-form-element__label",htmlFor:"text-input-01"},"Add Page by URL or ID"),l.default.createElement("div",{className:"slds-form-element__control slds-grid"},l.default.createElement("input",{id:"text-input-01",className:"slds-input",type:"text",placeholder:"Placeholder Text"}),l.default.createElement("button",{className:"slds-button slds-button_brand slds-shrink-none slds-m-left_small",type:"submit"},"Add Tab"))))):null)),l.default.createElement("div",{className:"slds-context-bar__secondary"},l.default.createElement("div",{className:"slds-context-bar__vertical-divider"}),l.default.createElement("ul",{className:"slds-grid",role:"tablist"},e.children)))},C=t.ContextTabBarOverflow=function(e){return l.default.createElement("li",{className:(0,c.default)("slds-context-bar__item","slds-context-bar__dropdown-trigger","slds-dropdown-trigger","slds-dropdown-trigger_click",{"slds-is-open":e.isOpen,"slds-has-notification":e.itemUnread,"slds-is-unsaved":e.itemUnsaved})},l.default.createElement("button",{className:"slds-button slds-context-bar__label-action",title:"More Tab Items","aria-haspopup":"true"},e.itemUnsaved?l.default.createElement(p,null):null,e.itemUnread?l.default.createElement(h,null):null,l.default.createElement("span",{className:"slds-p-left_xx-small slds-truncate",title:"More Tabs"},"More ",l.default.createElement("span",{className:"slds-assistive-text"},"Tabs")),l.default.createElement(n.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_right",sprite:"utility",symbol:"chevrondown"})),l.default.createElement(d.Menu,{className:"slds-dropdown_right"},l.default.createElement(d.MenuList,null,l.default.createElement(d.MenuItem,{className:(0,c.default)({"slds-has-notification":e.itemUnread,"slds-is-unsaved":e.itemUnsaved}),title:"Chat - Customer"},e.itemUnsaved?l.default.createElement(p,{title:"Tab(s) within menu not saved"}):null,e.itemUnread?l.default.createElement("span",{className:"slds-indicator_unread",title:"New Activity"},l.default.createElement("span",{className:"slds-assistive-text"},"New Activity")):null,l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"live_chat"}),l.default.createElement("span",null,"Chat - Customer")),l.default.createElement(d.MenuItem,{title:"Overflow Tab Item"},l.default.createElement(n.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"case"}),l.default.createElement("span",null,"Overflow Tab Item")))))};t.Context=function(e){return l.default.createElement("div",{style:{height:"16rem"}},e.children)};t.default=l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"));t.states=[{id:"tab-active",label:"Tab - Active",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"tab-active-focus",label:"Tab - Active Focus",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0,className:"slds-has-focus"}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"tab-item-action-menu-open",label:"Tab - Action Overflow",element:l.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0,actionOverflow:"true"}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unsaved-tab",label:"Unsaved Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T,itemUnsaved:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-tab",label:"Unread Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Chat - Customer",tabPanelId:f,id:T,symbol:"live_chat",itemUnread:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-unsaved-tab",label:"Unread/Unsaved Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Chat - Customer",tabPanelId:f,id:T,symbol:"live_chat",itemUnread:!0,itemUnsaved:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"pinned-tab",label:"Pinned Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,pinned:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"pinned-tab-active",label:"Pinned Tab - Active",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0,pinned:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"pinned-tab-active-focus",label:"Pinned Tab - Active Focus",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0,pinned:!0,className:"slds-has-focus"}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unsaved-pinned-tab",label:"Unsaved Pinned Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,pinned:!0,itemUnsaved:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-pinned-tab",label:"Unread Pinned Tab",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Chat - Customer",symbol:"live_chat",tabPanelId:b,id:E,pinned:!0,itemUnread:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{show:!0,id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"overflow-tabs",label:"Overflow Tabs",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,null)),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"overflow-tabs-open",label:"Overflow Tabs - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{isOpen:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unsaved-overflow-tabs",label:"Unsaved Overflow Tabs",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{itemUnsaved:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unsaved-overflow-tabs-open",label:"Unsaved Overflow Tabs - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{isOpen:!0,itemUnsaved:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-overflow-tabs",label:"Unread Overflow Tabs",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{itemUnread:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-overflow-tabs-open",label:"Unread Overflow Tabs - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{isOpen:!0,itemUnread:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"unread-unsaved-overflow-tabs-open",label:"Unread Unsaved Overflow Tabs - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T}),l.default.createElement(C,{isOpen:!0,itemUnread:!0,itemUnsaved:!0})),l.default.createElement(w,{show:!0,id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"object-switcher-active",label:"Object Switcher - Active",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement(N,{objectSwitchClassName:"slds-is-active"},l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"object-switcher-menu-open",label:"Object Switcher - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"11rem"}},l.default.createElement(N,{objectSwitchClassName:"slds-is-open"},l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"add-tab-dialog-open",label:"Add Tab Dialog - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,{addTabActive:!0},l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{id:b,tabId:E},"Tab Home Content"),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))},{id:"sub-tabs-open",label:"Sub Tabs - Open",element:l.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},l.default.createElement(N,null,l.default.createElement(_,{title:"Home",symbol:"home",tabPanelId:b,id:E,itemActive:!0,hasSubtabs:!0}),l.default.createElement(_,{title:"Tab Item 1",tabPanelId:u,id:I}),l.default.createElement(_,{title:"Tab Item 2",tabPanelId:f,id:T})),l.default.createElement(w,{show:!0,id:b,tabId:E},l.default.createElement(m.Subtabs,null,l.default.createElement(m.SubtabList,null,l.default.createElement(m.Subtab,{active:!0,title:"00071938",tabItemId:"subtab-tabitem-01",tabPanelId:"subtab-tabpanel-01"}),l.default.createElement(m.Subtab,{title:"Chat - Customer",tabItemId:"subtab-tabitem-02",tabPanelId:"subtab-tabpanel-02",symbol:"live_chat"})),l.default.createElement(m.SubtabPanel,{id:"subtab-tabpanel-01",tabId:"subtab-tabitem-01",isVisible:!0},"Item One Content"),l.default.createElement(m.SubtabPanel,{id:"subtab-tabpanel-02",tabId:"subtab-tabitem-02"},"Item Two Content"))),l.default.createElement(w,{id:u,tabId:I},"Tab One Content"),l.default.createElement(w,{id:f,tabId:T},"Tab Two Content"))}]}});