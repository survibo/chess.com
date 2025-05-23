const left_container_item = document.querySelectorAll('.left_container_item');
const hover_container_item = document.querySelectorAll('.hover_container_item');
const hover_container = document.getElementById('hover_container');
const left_container = document.getElementById('left_container');
const hover_container_items = document.querySelectorAll('.hover_container_items')
const logo = document.getElementById('logo')

let left_container_check = false
let hover_container_check = false

function hover_area () {
  if (!left_container_check && !hover_container_check) {
    hover_container.style.visibility ='hidden';
}};

function check_left_id () {
  let new_id = this.id
  let id_to_hover = new_id.replace('left_container', 'hover');
  return document.getElementById(id_to_hover);
};

left_container_item.forEach(item => {
  item.addEventListener('mouseenter', function() {
    hover_container.style.visibility = 'visible';

    let new_id = this.id
    let id_to_hover = new_id.replace('left_container', 'hover');
    let target_hover = document.getElementById(id_to_hover);

    hover_container_item.forEach(hover_item => {
      hover_item.style.display ='none';
    })
    target_hover.style.display = 'block';
  });

  item.addEventListener('mouseleave', function() {
  let new_id = this.id;
  let target_hover = document.getElementById(new_id);

  if (target_hover != this.id) {
    this.id.style.visibility = 'hidden';
  }
  });

});


left_container.addEventListener('mouseenter', function() {
  left_container_check = true
  setTimeout(hover_area, 50);
});

hover_container.addEventListener('mouseenter', function() {
  hover_container_check = true
  setTimeout(hover_area, 50);
});

hover_container.addEventListener('mouseleave', function() {
  hover_container_check = false
  setTimeout(hover_area, 50);
});

left_container.addEventListener('mouseleave', function() {
  left_container_check = false
  setTimeout(hover_area, 50);
});

hover_container_items.forEach(item => {
  item.addEventListener('click', function() {
    window.location.href = "https://www.chess.com"
  })
});

logo.addEventListener('mousemove', function() {
  left_container_check = false
  hover_container_check = false
  hover_container.style.visibility ='hidden';
});