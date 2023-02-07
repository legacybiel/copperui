import{r,h as a,a as t,g as e}from"./p-e5ae1b6e.js";import{f as s}from"./p-87f291fd.js";const o=class{constructor(a){r(this,a),this.name=void 0,this.darkMode=!1,this.currentValue=void 0}getPanels(){return Array.from(this.el.querySelectorAll("brx-tabs-panel"))}getTabsManagers(){return s(`brx-tabs[name="${this.name}"]`)}getInitialValue(){const r=this.getTabsManagers()[0];return null==r?void 0:r.getCurrentValue()}openPanel(r){const a=this.getPanels();for(const t of a)t.active=t.value===r}syncPanels(){this.openPanel(this.currentValue)}handleCurrentValueChange(){this.syncPanels()}handleGlobalTabChange(r){const a=r.target.closest("brx-tabs");if(a&&a.name===this.name){const{value:a}=r.detail;this.currentValue=a}}async componentWillLoad(){this.currentValue=await this.getInitialValue()}render(){return a(t,null,a("slot",null))}get el(){return e(this)}static get watchers(){return{currentValue:["handleCurrentValueChange"]}}};o.style="brx-tabs-panels{display:block}brx-tabs-panels brx-tabs-panel{color:var(--text-color);display:none}brx-tabs-panels brx-tabs-panel[active]{display:block}brx-tabs-panels[dark-mode]{--color:var(--color-dark);--color-rgb:var(--color-dark-rgb);--text-color:var(--color);--interactive:var(--interactive-dark);--interactive-rgb:var(--interactive-dark-rgb);--visited:var(--visited-dark);--hover:var(--hover-dark);--pressed:var(--pressed-dark);--focus-color:var(--focus-color-dark);--focus:var(--focus-color)}";export{o as brx_tabs_panels}