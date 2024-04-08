// Routing requests related to stocks
import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {

})

router.get('/fetch', (request, response) => {
    // TODO inside the request identify the text to search
    // TODO call the function (imported) that returns tickers for text - API call
    // TODO save in a variable - data received from the function (in an JS object) with success field
    // TODO response.json(JSON object)
    response.json({success:true})
})
export default router;



