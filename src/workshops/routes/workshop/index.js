module.exports = {
  path: 'workshop/:workshopTitle',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/workshop-detail'))
    })
  }
}
