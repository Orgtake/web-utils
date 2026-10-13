class CustomElement {  
  constructor() {  
    this.ceclass = {};
  }
  set name(name) {
    this.ceclass.name = name;
  }
  define(name, codefunc) {
    this.code = codefunc;
    class Cus extends HTMLElement {
      constructor() {
        super();
  
        this.attachShadow({ mode: "open" });  
        codefunc.call(this, this);
      }
    }
    customElements.define(name, Cus);
  }
  get primaryCode() {
    return this.code;
  }
}  
