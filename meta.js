const ogtitle = document.createElement("meta");
const ogdescription = document.createElement("meta");
const ogimage = document.createElement("meta");
const ogurl = document.createElement("meta");
const ogsitename = document.createElement("meta");
const viewport = document.createElement("meta");
const meta = document.head.querySelector("meta[jsaccessible]");

function don() {
  if (!meta) return;
  Object.defineProperty(HTMLMetaElement.prototype, "property", {
    set(value) {
      this.setAttribute("property", value);
    },
    configurable: true
  });
  for (const item of ["title", "desc", "image", "url", "sitename"]) {
    Object.defineProperty(HTMLMetaElement.prototype, item, {
      get() {
        return this.getAttribute(item);
      },
      configurable: true
    });
  }

  function genRem() {
    for (const item of ["title", "desc", "image", "url", "sitename", "property"]) delete HTMLMetaElement.prototype[item];
  }
  viewport.name = "viewport";
  viewport.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(viewport);
  ogtitle.content = meta.title;
  ogdescription.content = meta.desc;
  ogimage.content = meta.image ?? "";
  ogurl.content = meta.url ?? location.href;
  ogsitename.content = meta.sitename ?? location.hostname;
  ogsitename.property = "og:site_name";
  ogurl.property = "og:url";
  ogimage.property = "og:image";
  ogdescription.property = "og:description";
  ogtitle.property = "og:title";
  document.head.append(ogtitle, ogdescription, ogimage, ogurl, ogsitename);
  meta.remove();

  genRem();
}
don();
