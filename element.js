class Element {
  constructor(type) { this.element = document.createElement(type) }
  on(event, func) { this.element.addEventListener(event, func) }
  delete() { this.element.remove() }
  deleteOn(event) { this.element.addEventListener(event, ()=>{this.element.remove()}) }
  setId(id) { this.element.id = id }
  is(type) { return this.element.tagName.toLowerCase() === type }
  set classNames(names) { this.element.className = names.join(' ') }
  get parent() { return this.element.parentElement }
  set hidden(boo) { this.element.hidden = boo }
  newAttr(name, value) { this.element.setAttribute(name, value) }
  delAttr(name) { this.element.removeAttribute(name) }
  getAttr(name) { return this.element.getAttribute(name) }
  get allAttrs() { return this.element.getAttributeNames() }
  removeAllAttrs() { this.element.getAttributeNames().forEach(a => this.element.removeAttribute(a)) }
  set text(text) { this.element.textContent = text }
  set html(text) { this.element.innerHTML = text }
  set outHtml(text) { this.element.outerHTML = text }
  get text() { return this.element.textContent }
  get html() { return this.element.innerHTML }
  get outHtml() { return this.element.outerHTML }
  set style(style) { this.element.style.cssText = style }
  newCssVar(name, value) { this.element.style.setProperty('--' + name, value) }
  getCssVar(name) { return this.element.style.getPropertyValue(name) }
  delCssVar(name) { return this.element.style.removeProperty(name) }
  putClass(name) { this.element.classList.add(name) }
  delClass(name) { this.element.classList.remove(name) }
  togClass(name) { this.element.classList.toggle(name) }
  hasClass(name) { return this.element.classList.contains(name) }
  appendTo(element) { element.appendChild(this.element) }
  deleteFromMemory() { delete this.element }
  set disabled(boo) { this.element.disabled = boo }
  get dataset() { return this.element.dataset }
  set hoverTitle(text) { this.element.title = text }
  get classNames() { return this.element.className }
  set value(text) { this.element.value = text }
  get value() { return this.element.value }
  newData(name, value) { this.element.dataset[name] = value }
  getData(name) { return this.element.dataset[name] }
  delData(name) { delete this.element.dataset[name] }
  get classesArray() { return Array.from(this.element.classList) }
  get HTMLElement() { return this.element }
  hasAttr(name) { return this.element.hasAttribute(name) }
  putAtten() { this.element.focus() }
  distract() { this.element.blur() }
  prependTo(element) { element.prepend(this.element) }
  set blur(pixels) { this.element.style.filter = 'blur(' + pixels + 'px)' }
  addLn() { this.element.textContent += '\n' }
  clearChildren() { this.element.replaceChildren() }
  hasCssSelector(selc) { return this.element.matches(selc) }
  appendMulInside(element) { this.element.append(element) }
  appendOneInside(element) { this.element.appendChild(element) }
  getInside(element) { this.element.querySelector(element) }
  hasInside(element) { return this.element.querySelector(element) ? true : false }
  get isEmpty() { return this.element.children.length === 0 }
  onOnce(event, callback) { this.element.addEventListener(event, callback, { once: true }) }
  do(event) { this.element.dispatchEvent(new Event(event)) }
  selectAllText() { this.element.select() }
  get style() { return this.element.style.cssText }
  delAndNewAttr(name, newname, newvalue) { this.element.removeAttribute(name); this.element.setAttribute(newname, newvalue) }
  set onhover({enter, leave}) { this.element.onmouseenter = enter; if (leave) this.element.onmouseleave = leave }
  set ondatachanged(callback) { this.element.onchange = callback }
  set onclick(callback) { this.element.onclick = callback }
  set onuserinput(callback) { this.element.oninput = callback }
  set onformsubmit(callback) { this.element.onsubmit = callback }
  set onatten(callback) { this.element.onfocus = callback }
  set ondistract(callback) { this.element.onblur = callback }
  set ondoubleclick(callback) { this.element.ondblclick = callback }
  set onscroll(callback) { this.element.onscroll = callback }
  set onmouserightclick(callback) { this.element.oncontextmenu = callback }
  set onkeyboardclick({down, up}) { this.element.onkeydown = down; if (up) this.element.onkeyup = up }
  get amountOfFunctions() { return 72 - 2 }
}
