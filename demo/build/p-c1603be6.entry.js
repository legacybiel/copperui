import{r,h as s,a as t,g as i}from"./p-e5ae1b6e.js";import{f as o}from"./p-87f291fd.js";import{g as e}from"./p-90c52b9f.js";const c=class{constructor(s){r(this,s),this.useIcons=!0,this.breakpoint=void 0,this.iconToHide="fa5/fas/chevron-up",this.iconToShow="fa5/fas/chevron-down",this.target=void 0,this.group=void 0}getGroupAccordionTriggers(){return o(`brx-accordion-trigger[group="${this.group}"]`)}getOtherGroupAccordionTriggers(){return this.getGroupAccordionTriggers().filter((r=>r!==this.el))}async closeOtherAccordionTriggers(){const r=this.getOtherGroupAccordionTriggers();for(const s of r)await s.close()}async handleClick(){await this.collapseTriggerEl.getIsOpen()&&await this.closeOtherAccordionTriggers()}async close(){await this.collapseTriggerEl.close(!1)}get collapseTriggerProps(){return e(this)}render(){return s(t,null,s("brx-collapse-trigger",Object.assign({},this.collapseTriggerProps,{onBrxTriggerClick:()=>this.handleClick(),ref:r=>{this.collapseTriggerEl=r}}),s("slot",null)))}get el(){return i(this)}};c.style="brx-accordion-trigger{display:block}";export{c as brx_accordion_trigger}