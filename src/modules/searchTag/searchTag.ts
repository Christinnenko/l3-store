import { Component } from '../component';
import html from './searchTag.tpl.html';
import { View } from '../../utils/view';
import { ViewTemplate } from '../../utils/viewTemplate';
import { ProductData } from 'types';

class SearchTag extends Component {
  view: View;
  products: ProductData[];

  constructor(html: any) {
    super(html);
    this.products = [];
    this.view = new ViewTemplate(html).cloneView();
    this.attach(document.body);
  }

  attach($root: HTMLElement) {
    $root.appendChild(this.view.root);
    this.init();
  }

  init() {
    this.renderTips(['чехол iphone 13 pro', 'коляски agex', 'яндекс станция 2']);
  }

  renderTips(tips: string[]) {
    const [firstTip, secondTip, thirdTip] = tips;
    this.view.firstTip.textContent = firstTip;
    this.view.secondTip.textContent = secondTip;
    this.view.thirdTip.textContent = thirdTip;
  }
}

export const searchTagComp = new SearchTag(html);
