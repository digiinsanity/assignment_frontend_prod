const routes = new Map()

function init() {
	const path = window.location.pathname
	window.onpopstate = function (e) {
		goto(e.state.pathname)
	}
	var hrefs = document.getElementsByTagName("a")
	//console.log(hrefs)
	for (var i = 0; i < hrefs.length; i++) {
		hrefs[i].addEventListener('click', function (e) {
			e.preventDefault()
			window.history.pushState({ pathname: e.target.pathname },"",e.target.pathname)
			goto(e.target.pathname)
		}) 
	}
	goto(path)
}


function goto(path) {
	let param, hasParam = false
	for(const [route, func] of routes.entries()) {
		let _thisPath = route, _newPath = path
		if (route.indexOf(':') >= 0) {
			_thisPath = route.substr(0,route.indexOf(':'))
			_newPath = path.substr(0,route.indexOf(':'))
			hasParam = true
		}
		//console.log("Pfad: "+_thisPath+" Route: "+route+" hasParam: "+hasParam)
		if (_newPath == _thisPath) {
			//console.log(hasParam)
			if (hasParam) {
				//console.log("Path mit Parameter gefunden")
				param = path.substr(_thisPath.length)
				func(param)
				break
			}
			else {
				//console.log("Path gefunden")
				func()
				break
			}
		}
	}
}

export default function(route, fn) {
	//register new route
	if (route && fn) {
		routes.set(route, fn)
		return
	}

	if (!route && !fn) {
		init()
	}
}
