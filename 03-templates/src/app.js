import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import playerTpl from './templates/players.hbs'
import notFoundTpl from './templates/not-found.hbs'
import playerData from './data/playerData.json'

const $app = $('#app')

function index() {
  	$app.html(homeTpl())
}

function contact() {
  	$app.html(contactTpl())
}

function notFound() {
  	$app.html(notFoundTpl())
}

function player(name) {
	$app.html(playerTpl(playerData[name]))
}

router('/', index)
router('/contact', contact)
router('/players/:params', player)
router('*', notFound)
router()
