import{r as t,c as a,h as r,a as s,g as e}from"./p-e5ae1b6e.js";import{T as b}from"./p-5738d7e4.js";import{b as o,f as i,a as n}from"./p-87f291fd.js";const l=class{constructor(r){t(this,r),this.brxTabClick=a(this,"brxTabClick",7),this.brxTabChange=a(this,"brxTabChange",7),this.name=void 0,this.counter=!1,this.size="medium",this.darkMode=!1,this.value=void 0,this.controlledValue=b,this.currentValue=void 0}get navEl(){return o(".brx-tabs-nav",this.el)}get tabItems(){return i("brx-tab",this.el)}syncCurrentValueFromProps(){var t;const a=this.controlledValue!==b?this.controlledValue:this.value;this.currentValue=null!=a?a:null===(t=this.activeTabItem)||void 0===t?void 0:t.value}setCurrentValue(t){this.controlledValue===b&&(this.currentValue=t),this.brxTabChange.emit({value:this.currentValue})}async getCurrentValue(){return this.currentValue}get height(){return this.navEl.clientHeight}get scrollsizes(){return this.navEl.scrollHeight-this.navEl.clientHeight}get activeTabItemIndex(){return this.tabItems.findIndex((t=>t.hasAttribute("active")))}get activeTabItem(){var t;const{activeTabItemIndex:a}=this;return null!==(t=this.tabItems[a])&&void 0!==t?t:null}get focusedTabItemIndex(){return Math.max(this.tabItems.findIndex((t=>null!==t.querySelector(".focus-visible"))),0)}get scrollHeight(){const t=n().document;return Math.max(this.el.scrollWidth,t.documentElement.scrollWidth,this.el.offsetWidth,t.documentElement.offsetWidth,this.el.clientWidth,t.documentElement.clientWidth)}get leftPosition(){return this.el.offsetWidth-1}setBehavior(){const t=this.navEl;t.style.setProperty("--height-nav",`${this.height}px`),t.style.setProperty("--right-gradient-nav",`${this.leftPosition}px`),this.positionScroll(t),this.navigationRight+=4,this.navigationRight<=this.lastItemPosition-5&&t.classList.add("brx-tabs-nav-right"),t.addEventListener("scroll",(()=>{this.positionScroll(t),this.navigationLeft<=0?t.classList.add("brx-tabs-nav-left"):t.classList.remove("brx-tabs-nav-left"),this.navigationRight<=this.lastItemPosition-5?t.classList.add("brx-tabs-nav-right"):t.classList.remove("brx-tabs-nav-right")}))}positionScroll(t){const a=this.tabItems;this.lastItemPosition=Math.ceil(a[a.length-1].getBoundingClientRect().right),this.navigationLeft=Math.floor(a[0].getBoundingClientRect().left),this.navigationRight=Math.floor(t.getBoundingClientRect().right)}openTab(t){const a=this.tabItems;for(const r of a)r.setActive(r.value===t)}syncTabs(){this.openTab(this.currentValue)}handleCurrentValueChange(){this.syncTabs()}clean(){for(const t of this.tabItems)t.querySelector("button").classList.remove("focus-visible"),t.setActive(!1)}hiddenTooltips(){const t=i("brx-tooltip",this.el);for(const a of t)a.hide()}handleKeyupEvent(t){const a=a=>{t.preventDefault();const r=this.tabItems[a];r&&(this.openTab(r.value),r.querySelector("button").focus()),t.stopPropagation()},r=a=>{t.preventDefault();const{focusedTabItemIndex:r}=this,s=this.tabItems[r+a];s&&s.querySelector("button").focus(),t.stopPropagation()};switch(t.key){case"End":a(this.tabItems.length-1);break;case"Home":a(0);break;case"ArrowLeft":r(-1);break;case"ArrowRight":r(1);break;case"Tab":r(0);break;case" ":t.preventDefault(),this.hiddenTooltips(),t.target.click(),t.stopPropagation()}}handleTabClick(t){const a=t.target.closest("brx-tab button");if(a){const t=a.closest("brx-tab"),{value:r}=t;this.setCurrentValue(r),this.brxTabClick.emit({value:r})}}handleFocusOut(){this.hiddenTooltips()}handleKeyUp(t){this.handleKeyupEvent(t)}componentWillLoad(){this.syncCurrentValueFromProps()}componentShouldUpdate(t,a,r){switch(r){case"currentValue":return!1;default:return!0}}render(){return r(s,null,r("nav",{class:"brx-tabs-nav"},r("ul",null,r("slot",null))))}get el(){return e(this)}static get watchers(){return{value:["syncCurrentValueFromProps"],controlledValue:["syncCurrentValueFromProps"],currentValue:["handleCurrentValueChange"]}}};l.style="brx-tabs{--tab-padding:var(--spacing-scale-3x);--tab-size:var(--tab-medium);--tab-large:var(--spacing-scale-3x);--tab-medium:var(--spacing-scale-2x);--tab-small:var(--spacing-scale-base)}brx-tabs .brx-tabs-nav{overflow-x:auto;width:100%}brx-tabs .brx-tabs-nav::-webkit-scrollbar{height:var(--spacing-scale-base);width:var(--spacing-scale-base)}brx-tabs .brx-tabs-nav::-webkit-scrollbar-track{background:var(--gray-10)}brx-tabs .brx-tabs-nav::-webkit-scrollbar-thumb{background:var(--gray-30)}brx-tabs .brx-tabs-nav:hover::-webkit-scrollbar-thumb{background:var(--gray-40)}@media (max-width: 991px){brx-tabs .brx-tabs-nav{display:-ms-flexbox;display:flex;overflow-x:auto;width:100%}brx-tabs .brx-tabs-nav::-webkit-scrollbar{height:var(--spacing-scale-base);width:var(--spacing-scale-base)}brx-tabs .brx-tabs-nav::-webkit-scrollbar-track{background:var(--gray-10)}brx-tabs .brx-tabs-nav::-webkit-scrollbar-thumb{background:var(--gray-30)}brx-tabs .brx-tabs-nav:hover::-webkit-scrollbar-thumb{background:var(--gray-40)}}brx-tabs .brx-tabs-nav ul{border-bottom:1px solid var(--border-color);display:-ms-flexbox;display:flex;margin-bottom:0;margin-top:0;padding:0;-ms-flex:1;flex:1}brx-tabs brx-tab .brx-tooltip-auto-container{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;white-space:nowrap;position:relative}brx-tabs brx-tab .brx-tooltip-auto-container:first-child{padding-left:0}brx-tabs brx-tab .brx-tooltip-auto-container:last-child{padding-right:0}brx-tabs brx-tab button,brx-tabs brx-tab a{--focus-offset:calc(var(--spacing-scale-half) * -1);background-color:transparent;border:0;border-bottom:4px solid transparent;color:var(--color);display:inline-block;font-size:var(--font-size-scale-up-02);font-weight:var(--font-weight-medium);line-height:1;padding:var(--tab-size) var(--tab-padding);text-align:center;white-space:nowrap}brx-tabs brx-tab button:focus,brx-tabs brx-tab a:focus{outline:none}brx-tabs brx-tab button.focus-visible,brx-tabs brx-tab button:focus-visible,brx-tabs brx-tab a.focus-visible,brx-tabs brx-tab a:focus-visible{outline-color:var(--focus);outline-offset:var(--focus-offset);outline-style:var(--focus-style);outline-width:var(--focus-width)}brx-tabs brx-tab button:not([data-disable-hover-interaction]):not(:disabled):hover,brx-tabs brx-tab a:not([data-disable-hover-interaction]):not(:disabled):hover{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(var(--color-rgb), var(--hover))), to(rgba(var(--color-rgb), var(--hover))));background-image:linear-gradient(rgba(var(--color-rgb), var(--hover)), rgba(var(--color-rgb), var(--hover)))}brx-tabs brx-tab[active] button{border-bottom:4px solid var(--active);color:var(--active)}brx-tabs brx-tab[active] .brx-tab-results{--font-weight:var(--font-weight-semi-bold);color:var(--active)}brx-tabs .brx-tab-results{display:-ms-flexbox;display:flex;font-weight:var(--font-weight);-ms-flex-pack:center;justify-content:center;margin-top:var(--spacing-scale-2x);position:absolute;top:100%}brx-tabs:not([counter]) .brx-tab-results{display:none}brx-tabs[counter] .brx-tabs-nav ul{margin-bottom:calc(var(--spacing-scale-2x) + var(--font-size-scale-up-02) + var(--spacing-scale-base))}brx-tabs[size=small]{--tab-size:var(--tab-small)}brx-tabs[size=medium]{--tab-size:var(--tab-medium)}brx-tabs[size=large]{--tab-size:var(--tab-large)}brx-tabs[dark-mode]{--color:var(--color-dark);--color-rgb:var(--color-dark-rgb);--text-color:var(--color);--interactive:var(--interactive-dark);--interactive-rgb:var(--interactive-dark-rgb);--visited:var(--visited-dark);--hover:var(--hover-dark);--pressed:var(--pressed-dark);--focus-color:var(--focus-color-dark);--focus:var(--focus-color)}brx-tabs[dark-mode] brx-tab[active] button{border-bottom-color:var(--background-light);color:var(--color)}";export{l as brx_tabs}