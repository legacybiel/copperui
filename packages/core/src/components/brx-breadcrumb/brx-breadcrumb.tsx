import { Component, ComponentInterface, Element, Fragment, h, Host, Listen, Prop } from '@stencil/core';
import { findTargets, generateUniqueId, getWindow } from '../../utils/helpers';

@Component({
  tag: 'brx-breadcrumb',
  styleUrl: 'brx-breadcrumb.scss',
  shadow: false,
})
export class BrxBreadcrumb implements ComponentInterface {
  @Element()
  el: HTMLElement;

  @Prop({ reflect: true, mutable: true })
  dropdownId: string;

  menuMobileEl: HTMLElement;

  getItems() {
    return findTargets<HTMLBrxBreadcrumbItemElement>('brx-breadcrumb-list brx-breadcrumb-item', this.el);
  }

  setMenuMobileVisibility(isVisible: boolean) {
    const { menuMobileEl } = this;

    if (menuMobileEl) {
      if (isVisible) {
        menuMobileEl.removeAttribute('hidden');
      } else {
        menuMobileEl.setAttribute('hidden', '');
      }
    }
  }

  showMenuMobile() {
    this.setMenuMobileVisibility(true);
  }

  hideMenuMobile() {
    this.setMenuMobileVisibility(true);
  }

  setView() {
    this.reset();

    const win = getWindow();

    const hideAllBreakpoint = win.innerWidth < 575;

    for (const list of findTargets('.brx-breadcrumb-list', this.el)) {
      const items = Array.from(list.querySelectorAll('brx-breadcrumb-item')).filter(item => !item.active && !item.matches('.menu-mobil'));

      const partialHideBreakpoint = (!hideAllBreakpoint && list.scrollWidth > list.offsetWidth) || items.length > 5;

      const itemsToHide = [
        ...(hideAllBreakpoint && items.length !== 1 ? items : []),
        ...(partialHideBreakpoint ? items.filter((_, index) => index > 0 && index < items.length - 1) : []),
      ];

      for (const item of itemsToHide) {
        item.classList.add('d-none');
      }

      if (itemsToHide.length) {
        this.showMenuMobile();
      }
    }
  }

  reset() {
    this.hideMenuMobile();

    const items = this.getItems();

    for (const item of items) {
      if (item.matches('.menu-mobil')) {
        continue;
      }

      item.classList.remove('d-none');
    }
  }

  @Listen('resize', { target: 'window', passive: true })
  handleGlobalResize() {
    this.setView();
  }

  componentWillLoad() {
    if (!this.dropdownId) {
      this.dropdownId = generateUniqueId();
    }
  }

  componentDidLoad() {
    this.setView();
  }

  render() {
    const { dropdownId } = this;

    return (
      <Host>
        <div class="brx-breadcrumb-list">
          <brx-breadcrumb-item hidden class="menu-mobil">
            <brx-dropdown-trigger target={`#${dropdownId}`} iconToShow="fa5/fas/folder-plus" iconToHide="fa5/fas/folder-minus">
              <brx-button circle>
                <span class="sr-only">Botão Menu</span>
                <brx-icon data-collapse-icon="" name="fa5/fas/folder-plus"></brx-icon>
              </brx-button>
            </brx-dropdown-trigger>
          </brx-breadcrumb-item>

          <slot></slot>
        </div>

        <brx-breadcrumb-card id={dropdownId} hidden></brx-breadcrumb-card>
      </Host>
    );
  }
}
