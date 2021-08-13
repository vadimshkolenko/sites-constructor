import {block} from "../utils";
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
  }

  init() {
    this.el.insertAdjacentHTML('afterbegin',this.template)
    this.el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    // доработать типы
    return [
      block('title'),
      block('text'),
      // block('columns'),
      // block('image'),
    ].join('')
  }

  typeBlock(type, value, styles) {
    // доработать
    switch (type) {
      case 'text':
        return new TextBlock(value, {styles})
      case 'title':
        return new TitleBlock(value, {styles})
    }
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock = this.typeBlock(type, value, styles)

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}