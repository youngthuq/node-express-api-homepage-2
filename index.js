//hent biblioteket IP 
const ip = require('ip')
//fordi vi henter bibiliotektet ip kan vi hurtigt få fat på ip adressen
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4040
//vi laver en meget simpel database 

//serve en statisk mappe i roden 
app.use('/', express.static('public'))


//hvis der kommer clienter til endpointed /hvaler
app.get('/api/hvaler', (req, res)=>{
    const obj = {
        'blåhval':{
            'farve': 'grøn',
            'vægt': '1/2 mazda'
        }
    }
    res.send(obj)
})
app.get('/api/dato', (req, res)=>{
    const obj = {
        'dato':{
            'dag': '14 Febuar',
            'år': '2024'
        }
    }
    res.send(obj)

})
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 