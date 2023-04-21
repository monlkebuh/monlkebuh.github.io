javascript:function
gcloak() {
  var link =
      document.querySelector("link[rel*='icon']")
  || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://raw.githubusercontent.com/aaibby/aaibby.github.io/main/fav.png';document.title = 'Aaibby';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link) };gcloak();setInterval(gcloak, 1000);
