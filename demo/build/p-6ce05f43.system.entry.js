System.register(["./p-ff939259.system.js"],(function(i){"use strict";var t,a,o,n;return{setters:[function(i){t=i.r;a=i.h;o=i.a;n=i.g}],execute:function(){var e="brx-notification{--notification-padding:var(--spacing-scale-2x) var(--spacing-scale-4x);--notification-width:50vw;--notification-height:calc(100vh - 86px);display:block;background:var(--background);-webkit-box-shadow:var(--surface-shadow-md);box-shadow:var(--surface-shadow-md);max-height:var(--notification-height);max-width:var(--notification-width);overflow:auto;z-index:1}@media (max-width: 576px){brx-notification{--item-padding-x:var(--spacing-scale-2x);--item-padding-y:var(--spacing-scale-base);--item-padding:var(--item-padding-y) var(--item-padding-x);--notification-padding:var(--item-padding);--notification-width:100vw;min-height:var(--notification-height);overflow:hidden}brx-notification brx-tabs{--tab-size:var(--tab-small)}brx-notification brx-tabs-panels{--notification-height:calc(100vh - 86px);height:var(--notification-height);overflow-x:auto}brx-notification .status{left:var(--spacing-scale-half) !important;top:var(--spacing-scale-2x) !important}brx-notification.close{display:none}}@media (max-width: 992px){brx-notification.close{display:none}}@media (min-width: 992px){brx-notification div.close{display:none}}brx-notification .notification-header{border-bottom:1px solid var(--border-color);padding:var(--notification-padding)}brx-notification .notification-header *:last-child{margin-bottom:0}brx-notification .notification-body brx-tab{padding:0}brx-notification .notification-body brx-tabs-panels{overflow-y:auto}brx-notification .notification-body brx-tabs-panels brx-item:not([pass-styles]),brx-notification .notification-body brx-tabs-panels brx-item[pass-styles]>*{--interactive-rgb:var(--rgb-secondary-08);--item-color:var(--text-color);padding:var(--notification-padding);position:relative;white-space:normal}brx-notification .notification-body brx-tabs-panels brx-item:not([pass-styles]) .status,brx-notification .notification-body brx-tabs-panels brx-item[pass-styles]>* .status{left:var(--spacing-scale-base);position:absolute;top:var(--spacing-scale-3x)}brx-notification .notification-body brx-tabs-panels brx-item:not([pass-styles]) span,brx-notification .notification-body brx-tabs-panels brx-item[pass-styles]>* span{display:block}";var r=i("brx_notification",function(){function i(i){t(this,i)}i.prototype._hideNotification=function(){this.el.setAttribute("hidden","")};i.prototype._hideAllNotifications=function(){var i=Array.from(this.el.querySelectorAll("brx-item"));for(var t=0,a=i;t<a.length;t++){var o=a[t];o.setAttribute("hidden","")}};i.prototype.handleClick=function(i){var t=i.target;var a=t.closest(".close");if(a){this._dismiss()}};i.prototype._dismiss=function(){this.el.classList.add("close");return Promise.resolve()};i.prototype.render=function(){return a(o,null,a("slot",null))};Object.defineProperty(i.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return i}());r.style=e}}}));