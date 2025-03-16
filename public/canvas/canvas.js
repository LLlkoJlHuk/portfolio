window.addEventListener('load', function () {
  let space;

  // Функция для обновления высоты канваса
  function updateCanvasHeight() {
    const canvas = document.getElementById('canvas'); // Находим сам canvas
    const parentElement = canvas.parentElement; // Получаем родительский элемент

    if (canvas && parentElement) {
      // Устанавливаем высоту канваса равной высоте родительского элемента
      canvas.style.height = `${parentElement.offsetHeight}px`;
    }
  }

  function floatySpace() {
    let colors = [
      "#FF3F8E", "#04C2C9", "#2E55C1"
    ];

    space = new CanvasSpace("canvas", "#252934").display();
    let form = new Form(space);

    // Elements
    let pts = [];
    let center = space.size.$divide(1.8);
    let angle = -(window.innerWidth * 0.5);
    let count = window.innerWidth * 0.05;
    if (count > 150) count = 150;
    let line = new Line(0, angle).to(space.size.x, 0);
    let mouse = center.clone();

    let r = Math.min(space.size.x, space.size.y) * 1;
    for (let i = 0; i < count; i++) {
      let p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
      p.moveBy(center).rotate2D(i * Math.PI / count, center);
      p.brightness = 0.1
      pts.push(p);
    }

    // Canvas
    space.add({
      animate: function (time, fps, context) {
        for (let i = 0; i < pts.length; i++) {
          let pt = pts[i];
          pt.rotate2D(Const.one_degree / 20, center);
          form.stroke(false).fill(colors[i % 3]).point(pt, 1);

          let ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));
          let opacity = Math.min(0.8, 1 - Math.abs(line.getDistanceFromPoint(pt)) / r);
          let distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

          if (distFromMouse < 50) {
            if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
          } else {
            if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
          }

          let color = "rgba(255,255,255," + pts[i].brightness + ")"
          form.stroke(color).fill(true).line(ln);
        }
      },

      onMouseAction: function (type, x, y, evt) {
        if (type == "move") {
          mouse.set(x, y);
        }
      },

      onTouchAction: function (type, x, y, evt) {
        this.onMouseAction(type, x, y);
      }
    });

    space.bindMouse();
    space.play();
  }

  floatySpace();

  // Функция для обновления высоты канваса с задержкой
  function updateCanvasHeightWithDelay() {
    setTimeout(() => {
      updateCanvasHeight(); // Обновляем высоту канваса с задержкой 0.5 секунд
    }, 500); // Задержка 500 миллисекунд
  }

  // Отслеживание изменений высоты канваса с использованием MutationObserver
  const observer = new MutationObserver(() => {
    updateCanvasHeightWithDelay(); // Обновляем высоту канваса с задержкой
  });

  const canvas = document.getElementById('canvas'); // Находим сам canvas
  const parentElement = canvas.parentElement; // Получаем родительский элемент

  if (parentElement) {
    observer.observe(parentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }

  // Изначальная установка высоты канваса при загрузке страницы с задержкой
  setTimeout(() => {
    updateCanvasHeight();
  }, 500); // Задержка 500 миллисекунд
});