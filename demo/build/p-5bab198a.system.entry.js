var __awaiter=this&&this.__awaiter||function(e,t,r,i){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{l(i.next(e))}catch(e){a(e)}}function c(e){try{l(i["throw"](e))}catch(e){a(e)}}function l(e){e.done?r(e.value):n(e.value).then(o,c)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,n,a,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(a=o[0]&2?n["return"]:o[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;if(n=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;n=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];n=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var i=0,n=t.length,a;i<n;i++){if(a||!(i in t)){if(!a)a=Array.prototype.slice.call(t,0,i);a[i]=t[i]}}return e.concat(a||Array.prototype.slice.call(t))};System.register(["./p-ff939259.system.js","./p-2f12c106.system.js","./p-9f404eb1.system.js"],(function(e){"use strict";var t,r,i,n,a,o,c,l,s,d,u;return{setters:[function(e){t=e.r;r=e.c;i=e.h;n=e.a;a=e.g},function(e){o=e.T;c=e.i},function(e){l=e.f;s=e.g;d=e.b;u=e.e}],execute:function(){var h='brx-checkbox{display:block;--checkbox-padding:var(--spacing-scale-base);--checkbox-size:24px;display:-ms-flexbox;display:flex}brx-checkbox+brx-checkbox{margin-top:var(--spacing-scale-base)}brx-checkbox input{margin:0;opacity:0;position:absolute}brx-checkbox input+label{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:0;min-height:var(--checkbox-size);min-width:var(--checkbox-size);padding-left:calc(var(--spacing-scale-base) + var(--checkbox-size));position:relative}brx-checkbox input+label::before{background:var(--background-light);border:1px solid var(--border-color);border-radius:4px;content:"";height:var(--checkbox-size);left:0;position:absolute;width:var(--checkbox-size)}brx-checkbox input+label:empty{padding:0}brx-checkbox label{font-weight:var(--font-weight-medium)}brx-checkbox[hidden-label] label{padding-left:calc(var(--checkbox-size) + var(--surface-width-md) * 2);text-indent:-10000px;white-space:nowrap;width:0}brx-checkbox[data-checked] input+label::after{border:solid var(--selected);border-width:0 3px 3px 0;content:"";height:var(--icon-size-sm);left:8px;position:absolute;top:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:8px}brx-checkbox[data-indeterminate] input+label::before{--interactive-rgb:var(--color-rgb);background:var(--selected);border-color:var(--selected)}brx-checkbox[data-indeterminate] input:hover:not(:disabled)+label::before{--interactive-rgb:var(--color-dark-rgb)}brx-checkbox[data-indeterminate][data-checked] input+label::after{border-color:var(--background-light);border-width:0 0 3px;top:2px;-webkit-transform:none;transform:none}brx-checkbox[invalid] input:focus-visible+label::before,brx-checkbox[invalid][focus-visible] input+label::before,brx-checkbox[invalid][data-checked] input:focus-visible+label::before,brx-checkbox[invalid][data-checked][focus-visible] input+label::before,brx-checkbox[state~=invalid] input:focus-visible+label::before,brx-checkbox[state~=invalid][focus-visible] input+label::before,brx-checkbox[state~=invalid][data-checked] input:focus-visible+label::before,brx-checkbox[state~=invalid][data-checked][focus-visible] input+label::before{--border-color:var(--focus-color)}brx-checkbox[invalid][data-checked] input+label::before,brx-checkbox[state~=invalid][data-checked] input+label::before{--border-color:var(--danger)}brx-checkbox[invalid] input+label::before,brx-checkbox[state~=invalid] input+label::before{--border-color:var(--danger)}brx-checkbox[valid] input:focus-visible+label::before,brx-checkbox[valid][focus-visible] input+label::before,brx-checkbox[valid][data-checked] input:focus-visible+label::before,brx-checkbox[valid][data-checked][focus-visible] input+label::before,brx-checkbox[state~=valid] input:focus-visible+label::before,brx-checkbox[state~=valid][focus-visible] input+label::before,brx-checkbox[state~=valid][data-checked] input:focus-visible+label::before,brx-checkbox[state~=valid][data-checked][focus-visible] input+label::before{--border-color:var(--focus-color)}brx-checkbox[valid][data-checked] input+label::before,brx-checkbox[state~=valid][data-checked] input+label::before{--border-color:var(--success)}brx-checkbox[valid] input+label::before,brx-checkbox[state~=valid] input+label::before{--border-color:var(--success)}brx-checkbox[size=small] input+label{line-height:var(--spacing-scale-2xh);min-height:var(--spacing-scale-2xh)}brx-checkbox[size=small] input+label::before{height:var(--spacing-scale-2xh);width:var(--spacing-scale-2xh)}brx-checkbox[size=small][data-checked] input+label::after{border-width:0 2px 2px 0;height:var(--icon-size-sm);left:7px;top:6px;width:6px}brx-checkbox[size=small][data-checked][data-indeterminate] input+label::after{border-color:var(--background-light);border-width:0 0 3px;top:2px;-webkit-transform:none;transform:none}brx-checkbox input:focus-visible+label::before,brx-checkbox[focus-visible] input+label::before,brx-checkbox[data-checked] input:focus-visible+label::before,brx-checkbox[data-checked][focus-visible] input+label::before{border-color:var(--focus) !important;-webkit-box-shadow:0 0 0 var(--surface-width-md) var(--focus);box-shadow:0 0 0 var(--surface-width-md) var(--focus);outline:none}brx-checkbox input:invalid+label::before{--border-color:var(--danger)}brx-checkbox input:hover:not(:disabled)+label::before{--interactive-rgb:var(--interactive-light-rgb);background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(var(--interactive-rgb), var(--hover))), to(rgba(var(--interactive-rgb), var(--hover))));background-image:linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))}brx-checkbox:not(:is([disabled],:disabled)) input:disabled+label{cursor:not-allowed;opacity:var(--disabled)}brx-checkbox:not(:is([disabled],:disabled)) input:disabled+label *{pointer-events:none}brx-checkbox.inverted,brx-checkbox.inverted label,brx-checkbox.dark-mode,brx-checkbox.dark-mode label,brx-checkbox[dark-mode],brx-checkbox[dark-mode] label{color:var(--color-dark)}';var b=e("brx_checkbox",function(){function e(e){var i=this;t(this,e);this.brxChange=r(this,"brxChange",7);this.brxUpdate=r(this,"brxUpdate",7);this.brxFocus=r(this,"brxFocus",7);this.brxBlur=r(this,"brxBlur",7);this.syncInProgress=false;this.onChange=function(e){e.preventDefault();e.stopPropagation();var t=e.target;t.checked=i.currentChecked;i.setFocus();i.setState(!i.currentChecked,false)};this.onBlur=function(){i.brxBlur.emit()};this.onFocus=function(){i.brxFocus.emit()};this.label=undefined;this.name=undefined;this.checked=null;this.controlledChecked=o;this.indeterminate=false;this.currentChecked=false;this.currentIndeterminate=false;this.disabled=false;this.size="medium";this.valid=undefined;this.danger=undefined;this.invalid=undefined;this.state=undefined;this.darkMode=false;this.hiddenLabel=false;this.inputId=undefined;this.value="on";this.child=undefined;this.propParent=undefined;this.checkAllLabel="Selecionar tudo";this.uncheckAllLabel="Desselecionar tudo"}e.prototype.emitUpdateEvent=function(){var e=this.value;var t=this.currentChecked;var r=this.currentIndeterminate;this.brxUpdate.emit({checked:t,indeterminate:r,value:e})};e.prototype.emitChangeEvent=function(e,t){if(e===void 0){e=this.currentChecked}if(t===void 0){t=this.currentIndeterminate}var r=this.value;this.brxChange.emit({checked:e,indeterminate:t,value:r})};e.prototype.syncCurrentChecked=function(){this.currentChecked=this.controlledChecked!==o?this.controlledChecked:this.checked};e.prototype.syncCurrentIndeterminate=function(){this.currentIndeterminate=this.indeterminate};e.prototype.syncCurrent=function(){this.syncCurrentChecked();this.syncCurrentIndeterminate()};e.prototype.getCurrentState=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,{value:this.value,checked:this.currentChecked,indeterminate:this.currentIndeterminate}]}))}))};e.prototype.setState=function(e,t){if(this.controlledChecked===o){this.currentChecked=e;this.currentIndeterminate=t}this.emitChangeEvent(e,t);return Promise.resolve()};Object.defineProperty(e.prototype,"parent",{get:function(){var e=this.propParent;return e===""?true:e},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isParent",{get:function(){return!!this.parent},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isChild",{get:function(){return!!this.child},enumerable:false,configurable:true});e.prototype.getCheckgroupChildren=function(){var e=this;var t;var r=this.parent;if(r){var i=typeof r==="string"?l('brx-checkbox[child="'.concat(r,'"]')):[];var n=this.el.closest("brx-checkgroup");var a=Array.from((t=n===null||n===void 0?void 0:n.querySelectorAll("brx-checkbox"))!==null&&t!==void 0?t:[]);var o=a.filter((function(t){return t!==e.el})).filter((function(e){var t=e.closest("brx-checkgroup");var r=t.parentElement.closest("brx-checkgroup");return t===n||r===n}));return __spreadArray(__spreadArray([],i,true),o,true)}return[]};e.prototype.getCheckgroupState=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,i,n;return __generator(this,(function(a){switch(a.label){case 0:return[4,Promise.all(this.getCheckgroupChildren().map((function(e){return e.getCurrentState()})))];case 1:e=a.sent();t=new Set(e.map((function(e){return e.indeterminate?"indeterminate":e.checked?"checked":"unchecked"})));r=t.has("checked")||t.has("indeterminate");i=t.size>1;n=i?"indeterminate":r?"checked":"unchecked";return[2,{status:n,isChecked:r,isIndeterminate:i}]}}))}))};e.prototype.syncCheckgroupParent=function(){var e=this;if(this.syncInProgress||!this.isParent){return}this.syncInProgress=true;this.getCheckgroupState().then((function(t){var r=t.isChecked,i=t.isIndeterminate;e.setState(r,i);e.syncInProgress=false}))};e.prototype.syncCheckgroupChilds=function(){if(this.syncInProgress||!this.isParent){return}this.syncInProgress=true;if(!this.currentIndeterminate){var e=this.getCheckgroupChildren();for(var t=0,r=e;t<r.length;t++){var i=r[t];i.setState(this.currentChecked,false)}}this.syncInProgress=false};e.prototype.checkIsCheckboxParentChild=function(e){var t=this.getCheckgroupChildren();return t.includes(e)};e.prototype.handleGlobalChange=function(e){var t=e.target;var r=t===null||t===void 0?void 0:t.closest("brx-checkbox");if(r){var i=this.checkIsCheckboxParentChild(r);if(i){this.syncCheckgroupParent()}else if(r===this.el){this.syncCheckgroupChilds()}}};e.prototype.getNativeChecked=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){return[2,(e=this.nativeInput)===null||e===void 0?void 0:e.checked]}))}))};e.prototype.componentWillLoad=function(){if(this.inputId===undefined){this.inputId=s()}this.syncCurrent();if(this.isParent){this.syncCheckgroupParent()}};e.prototype.setFocus=function(){if(this.nativeInput){this.nativeInput.focus()}};Object.defineProperty(e.prototype,"labelText",{get:function(){if(this.parent){if(this.currentChecked&&!this.currentIndeterminate){return this.uncheckAllLabel}else{return this.checkAllLabel}}return this.label},enumerable:false,configurable:true});e.prototype.render=function(){var e=this;var t;return i(n,{role:"checkbox","data-checked":this.currentChecked,"aria-checked":"".concat(this.currentChecked),"aria-hidden":this.disabled?"true":null,"data-indeterminate":this.currentIndeterminate},i("input",{type:"checkbox",id:this.inputId,disabled:this.disabled,checked:this.currentChecked,name:(t=this.name)!==null&&t!==void 0?t:this.inputId,indeterminate:this.currentIndeterminate,"aria-checked":"".concat(this.currentChecked),onChange:this.onChange,onBlur:function(){return e.onBlur()},onFocus:function(){return e.onFocus()},ref:function(t){return e.nativeInput=t}}),i("label",{htmlFor:this.inputId},this.labelText),i("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["emitUpdateEvent","emitChangeEvent"],currentChecked:["emitUpdateEvent","emitChangeEvent"],currentIndeterminate:["emitUpdateEvent","emitChangeEvent"],checked:["syncCurrentChecked"],controlledChecked:["syncCurrentChecked"],indeterminate:["syncCurrentIndeterminate"]}},enumerable:false,configurable:true});return e}());b.style=h;var p='brx-radio{--radio-size:24px;--radio-bullet-size:16px;--radio-bullet-position:calc((var(--radio-size) - var(--radio-bullet-size)) * 0.5);display:block}brx-radio+brx-radio{margin-top:var(--spacing-scale-base)}brx-radio input{opacity:0;position:absolute}brx-radio input+label{cursor:pointer;display:inline-block;margin-bottom:0;min-height:var(--radio-size);min-width:var(--radio-size);padding-left:calc(var(--spacing-scale-base) + var(--radio-size));position:relative}brx-radio input+label::before{background:var(--background);border:1px solid var(--border-color);border-radius:50%;content:"";height:var(--radio-size);left:0;position:absolute;top:-1px;width:var(--radio-size)}brx-radio input+label:empty{padding:0}brx-radio input+label:empty::before{top:0}brx-radio label{font-weight:var(--font-weight-medium)}brx-radio input:checked+label::after{background:var(--selected);border:7px solid var(--selected);border-radius:50%;content:"";height:var(--radio-bullet-size);left:var(--radio-bullet-position);position:absolute;right:0;top:calc(var(--radio-bullet-position) - 1px);width:var(--radio-bullet-size)}brx-radio input:checked+label:empty::after{top:var(--radio-bullet-position)}brx-radio.is-valid input+label::before,brx-radio.valid input+label::before,brx-radio[valid] input+label::before,brx-radio[state=valid] input+label::before{border-color:var(--success)}brx-radio.is-invalid input+label::before,brx-radio.invalid input+label::before,brx-radio[invalid] input+label::before,brx-radio[state=invalid] input+label::before{border-color:var(--danger)}brx-radio.is-small input+label,brx-radio.small input+label,brx-radio[small] input+label,brx-radio[size=small] input+label{line-height:var(--spacing-scale-2xh);min-height:var(--spacing-scale-2xh)}brx-radio.is-small input+label::before,brx-radio.small input+label::before,brx-radio[small] input+label::before,brx-radio[size=small] input+label::before{height:var(--spacing-scale-2xh);width:var(--spacing-scale-2xh)}brx-radio.is-small input:checked+label::after,brx-radio.small input:checked+label::after,brx-radio[small] input:checked+label::after,brx-radio[size=small] input:checked+label::after{border-width:4px;height:10px;width:10px}brx-radio input:invalid+label::before{border-color:var(--danger)}brx-radio input:focus-visible:checked+label::before,brx-radio input:focus-visible+label::before,brx-radio input.focus-visible:checked+label::before,brx-radio input.focus-visible+label::before{border-color:var(--focus) !important;-webkit-box-shadow:0 0 0 var(--surface-width-md) var(--focus);box-shadow:0 0 0 var(--surface-width-md) var(--focus);outline:none}brx-radio input:hover:not(:disabled)+label::before{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(var(--interactive-rgb), var(--hover))), to(rgba(var(--interactive-rgb), var(--hover))));background-image:linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))}brx-radio.inverted,brx-radio.inverted label,brx-radio.dark-mode,brx-radio.dark-mode label,brx-radio[dark-mode],brx-radio[dark-mode] label{color:var(--color-dark)}';var f=e("brx_radio",function(){function e(e){var i=this;t(this,e);this.brxFocus=r(this,"brxFocus",7);this.brxBlur=r(this,"brxBlur",7);this.brxChange=r(this,"brxChange",7);this.brxUpdate=r(this,"brxUpdate",7);this.syncCheckedFromRadioGroup=function(){return __awaiter(i,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(i){switch(i.label){case 0:e=this.radioGroup;if(!e)return[3,2];return[4,e.getCurrentValue()];case 1:t=i.sent();r=t===this.value;this.currentChecked=r;this.nativeInputChecked=r;i.label=2;case 2:return[2]}}))}))};this.syncCheckedFromNative=function(){i.setChecked(i.nativeInputChecked)};this.onFocus=function(){i.brxFocus.emit()};this.onBlur=function(){i.brxBlur.emit()};this.onChange=function(e){e.preventDefault();var t=i.currentChecked;var r=i.nativeInputChecked;i.nativeInputChecked=t;i.setChecked(r)};this.checked=undefined;this.controlledChecked=o;this.currentChecked=false;this.buttonTabindex=-1;this.name=undefined;this.disabled=false;this.value=undefined;this.label=undefined;this.inputId=undefined}Object.defineProperty(e.prototype,"nativeInput",{get:function(){return d("input",this.el)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nativeInputChecked",{get:function(){var e,t;return(t=(e=this.nativeInput)===null||e===void 0?void 0:e.checked)!==null&&t!==void 0?t:false},set:function(e){if(this.nativeInput){this.nativeInput.checked=e}},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"radioGroup",{get:function(){var e;return(e=this.el.closest("brx-radio-group"))!==null&&e!==void 0?e:null},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isStandaloneFamilyControlled",{get:function(){var e=l('brx-radio[name="'.concat(this.name,'"]'));return e.some((function(e){return c(e.controlledChecked)}))},enumerable:false,configurable:true});e.prototype.emitChange=function(e,t){if(e===void 0){e=this.currentChecked}if(t===void 0){t=false}var r=this.value;if(e||t){this.brxChange.emit({value:r,checked:e})}};e.prototype.syncCurrentChecked=function(){var e=this.controlledChecked!==o?this.controlledChecked:this.checked;this.currentChecked=e};e.prototype.handleStateChange=function(){this.emitChange()};e.prototype.handleCurrentCheckedChange=function(){this.nativeInputChecked=this.currentChecked};e.prototype.setChecked=function(e){if(e===void 0){e=false}if(!c(this.controlledChecked)&&!this.radioGroup&&!this.isStandaloneFamilyControlled){this.currentChecked=e}else{this.emitChange(e)}};e.prototype.emitUpdateEvent=function(){var e=this.value;var t=this.currentChecked;this.brxUpdate.emit({value:e,checked:t})};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.el.focus();return[2]}))}))};e.prototype.setButtonTabindex=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.buttonTabindex=e;return[2]}))}))};e.prototype.getCurrentState=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,{value:this.value,checked:this.currentChecked}]}))}))};e.prototype.handleGlobalRadioChange=function(e){var t=this;var r=e.target;var i=r===null||r===void 0?void 0:r.closest("brx-radio");if(i){this.nativeInputChecked=this.currentChecked;if(!this.radioGroup){u((function(){t.syncCheckedFromNative()}))}}};e.prototype.handleGlobalRadioGroupUpdate=function(e){var t=e.target;var r=t===null||t===void 0?void 0:t.closest("brx-radio-group");if(r&&r===this.radioGroup){this.syncCheckedFromRadioGroup()}};e.prototype.connectedCallback=function(){this.syncCheckedFromRadioGroup()};e.prototype.componentWillLoad=function(){if(!this.inputId){this.inputId=s()}this.syncCurrentChecked()};e.prototype.render=function(){var e="".concat(this.inputId,"-lbl");return i(n,{role:"radio",onBlur:this.onBlur,onFocus:this.onFocus,disabled:this.disabled,"aria-labelledby":e,tabindex:this.buttonTabindex,"data-checked":this.currentChecked,"aria-checked":"".concat(this.currentChecked),"aria-hidden":this.disabled?"true":null},i("input",{type:"radio",name:this.name,id:this.inputId,value:this.value,disabled:this.disabled,onChange:this.onChange,checked:this.currentChecked}),i("label",{htmlFor:this.inputId,id:e},this.label))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["syncCurrentChecked"],controlledChecked:["syncCurrentChecked"],value:["handleStateChange","emitUpdateEvent"],currentChecked:["handleStateChange","handleCurrentCheckedChange","emitUpdateEvent"]}},enumerable:false,configurable:true});return e}());f.style=p}}}));