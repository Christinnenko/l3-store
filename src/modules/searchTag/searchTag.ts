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
    this.renderTags(['чехол iphone 13 pro', 'коляски agex', 'яндекс станция 2']);
  }

  renderTags(tags: string[]) {
    const [firstTag, secondTag, thirdTag] = tags;
    this.view.firstTag.textContent = firstTag;
    this.view.secondTag.textContent = secondTag;
    this.view.thirdTag.textContent = thirdTag;
  }
}

export const searchTagComp = new SearchTag(html);
