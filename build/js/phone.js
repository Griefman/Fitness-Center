function mask(event) {
  var matrix = '+7 (___) ___ ____';
  i = 0;
  var def = matrix.replace(/\D/g, '');
  var val = this.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  this.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else {
      if (i >= val.length) {
        return '';
      } else {
        return a;
      }
    }


  });
  if (event.type === 'blur') {
    if (this.value.length === 2) {
      this.value = '';
    }
  } else {
    setCursorPosition(this.value.length, this);
  }
}

var inputs = document.querySelectorAll('[name="phone-number"]');
inputs.forEach(function (item) {
  item.addEventListener('input', mask, false);
  item.addEventListener('focus', mask, false);
  item.addEventListener('blur', mask, false);
});

