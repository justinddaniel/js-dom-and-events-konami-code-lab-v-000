const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  document.body.addEventListener('keydown', function(e) {
    let key = parseInt(e.which || e.detail);
    if (key === code[index]) {index++;
      if (index === (code.length -1 )) {alert('Congratulations!'); return index = 0;}
      else {return index}}
    else {return index = 0;}
  })
}
