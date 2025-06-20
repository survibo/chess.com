const left_container_item = document.querySelectorAll('.left_container_item');
const hover_container_item = document.querySelectorAll('.hover_container_item');
const hover_container = document.getElementById('hover_container');
const left_container = document.getElementById('left_container');
const hover_container_items = document.querySelectorAll('.hover_container_items')
const logo = document.getElementById('logo_box')
const login_box = document.getElementById('login_box')
const signup_box = document.getElementById('signup_box')
const main_first_img = document.getElementById('main_first_img')
const main_first_button = document.querySelectorAll('.main_first_button')
const main_second_button = document.querySelectorAll('.main_second_button')
const logos = document.querySelectorAll('.logos_svg')
const main_img = document.querySelectorAll('.main_second_img');
const lang_box = document.getElementById('lang')
const support_box = document.getElementById('support')
const lang_img = document.getElementById('lang_img')
const support_img = document.getElementById('support_img')

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

    left_container_check = true
    setTimeout(hover_area, 50);
  });

  item.addEventListener('mouseleave', function() {
    left_container_check = false
    setTimeout(hover_area, 50);
  });
});

hover_container.addEventListener('mouseenter', function() {
  hover_container_check = true
  setTimeout(hover_area, 50);
});

hover_container.addEventListener('mouseleave', function() {
  hover_container_check = false
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

logo.addEventListener('click', function() {
  window.location.href="https://www.chess.com"
});

login_box.addEventListener('click', function() {
  window.location.href="https://www.chess.com/login_and_go?returnUrl=https://www.chess.com/"
});

signup_box.addEventListener('click', function() {
  window.location.href ="https://www.chess.com/register?returnUrl=https://www.chess.com/"
});

main_first_img.addEventListener('click', function() {
  window.location.href = "https://www.chess.com/play/online"
})

main_first_button.forEach(el => {
  el.addEventListener('click', function() {
    window.location.href = "https://github.com/survibo/chess.com"
  })
})

main_second_button.forEach(el => {
  el.addEventListener('click', function() {
    window.location.href = "https://www.chess.com"
  })
})

logos.forEach(logo => {
  logo.addEventListener('mouseenter', function() {
    logo.src = logo.src.replace('.png', '_active.png');
  });

  logo.addEventListener('mouseleave', function() {
    logo.src = logo.src.replace('_active.png', '.png');
  });
});

main_img.forEach(img => {
  img.addEventListener('click', function() {
    window.location.href = "https://www.chess.com";
  });
});

lang_box.addEventListener('mouseenter', function() {
  lang_img.src = lang_img.src.replace('.png', '_active.png');
});

lang_box.addEventListener('mouseleave', function() {
  lang_img.src = lang_img.src.replace('_active.png', '.png');
});

support_box.addEventListener('mouseenter', function() {
  support_img.src = support_img.src.replace('.png', '_active.png');
});

support_box.addEventListener('mouseleave', function() {
  support_img.src = support_img.src.replace('_active.png', '.png');
});