import {col, row} from "../utils";

export class Block {
  constructor(value, options = {}) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод не реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options ?? {}
    return `${row(col(`<${tag}>${this.value}</${tag}>`), styles)}`
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles} = this.options ?? {}
    return row(`<img src="${this.value}" alt="">`, styles)
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super( value, options);
  }

  toHTML() {
    const {styles} = this.options ?? {}
    let html = this.value.map(col).join('')

    return row(html, styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles} = this.options ?? {}
    return `${row(col(`<p>${this.value}</p>`), styles)}`
  }
}