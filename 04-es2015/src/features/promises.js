export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(10)
    },1)
  })
}
