import router from './router'
import homeTpl from './templates/home.hbs'
import simpleTpl from './templates/simple.hbs'
import styleTpl from './templates/style.hbs'
import animationTpl from './templates/animation.hbs'
import textTpl from './templates/text.hbs'
import interactionTpl from './templates/interaction.hbs'
import notFoundTpl from './templates/not-found.hbs'
import $ from 'jquery'

const app = document.getElementById('app')

function index() {
  app.innerHTML = homeTpl()
}

function simple() {
  app.innerHTML = simpleTpl()
}

function style() {
  app.innerHTML = styleTpl()
}

function animation() {
  app.innerHTML = animationTpl()
}

function text() {
  app.innerHTML = textTpl()
}

function interaction() {
  app.innerHTML = interactionTpl()
}

function notFound() {
  app.innerHTML = notFoundTpl()
}
router('/', index)
router('/simple', simple)
router('/style', style)
router('/animation', animation)
router('/text', text)
router('/interaction', interaction)
router('*', notFound)
router()

$(document).ready(function () {
  $('#Pfeil')
    .mousedown(function (e) {
      let actPos = 0,
        clientXStart = e.clientX
      $('#grafik')
        .mousemove(function (e) {
          actPos = ((e.clientX - clientXStart) * (110/$('#grafik').width()))
          if (actPos >= 0 && actPos < 85) {
            $("#Pfeil").css({
              "transform": "translateX(" + (actPos) + "px)"
            })
            $('#Overlay-Back rect').css({
              "width": (25+(actPos))+"px"
            })
          }
          else if (actPos >= 85) {
            $(this).off("mousemove mouseup mouseout")
            $('.not-commited').css({"fill": "none"})
            $('.commited').css({"fill": "ghostwhite"})
            $('#Pfeil').fadeOut(1000)
            setTimeout(() => {$('#Overlay-Back').fadeOut(1000)},500)
          }
        })
        .mouseup(function () {
          $(this).off("mousemove mouseup mouseout")
          $('#Overlay-Back rect').css({
            "animation": "returnToDefaultWidth .7s ease-in-out"
          })
          $("#Pfeil").css({
            "animation": "returnToDefaultArrow .7s ease-in-out"
          })
          setTimeout(() => {
            $('#Overlay-Back rect').css({
              "width": "25px",
              "animation": "none"
            })
            $("#Pfeil").css({
              "transform": "translateX(0px)",
              "animation": "none"
            })
          },690)
        })
    })
})
