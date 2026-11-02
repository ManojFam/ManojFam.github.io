// "Copy email" button: copies the address, or selects it if the browser blocks the clipboard.
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var target = document.getElementById(btn.dataset.copy);
    var label = btn.textContent;

    function done(msg) {
      btn.textContent = msg;
      setTimeout(function () { btn.textContent = label; }, 1800);
    }
    function selectText() {
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      done("Selected, press Ctrl+C");
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(target.textContent.trim()).then(function () { done("Copied"); }, selectText);
    } else {
      selectText();
    }
  });
});

// Keep the footer year current.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
