import stocksController from './stocksController.js'

const initControllers = (app) => {
    app.use('/stocks', stocksController)
}

export {initControllers}