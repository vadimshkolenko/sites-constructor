export function row(content, styles = {}) {
  return `<div class="row" style="${css(styles)}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const styleLine = (styleArr) => `${styleArr.join(':')};`
  return Object.entries(styles).map(styleLine).join('')
}

export function block(type) {
  return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
  `
}