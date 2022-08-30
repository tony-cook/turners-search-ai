const express = require('express')
const cors = require('cors');
const app = express();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const { reset } = require('nodemon');

app.use(cors({origin: '*'}))
require('dotenv').config()
app.use(express.json({limit: '50mb'}))



app.post('/faqs',(req,res) => {

    const userQuery = req.body.query
    const responseData = []

// Task 2 - rite a function takes a string as a parameter, 
// and output a string that replaces all punctuations 
// (such as “!”, “?”, “-“, “;”) with a space character

    const newUserQuery = handlePunctuation(userQuery)

    function handlePunctuation(string) {
        const str = string;
        const newUserQuery = str.replace(/[^a-zA-Z ]/g, "");
        return newUserQuery
    }

    const discovery = new DiscoveryV1({
        version: '2019-04-30',
        authenticator: new IamAuthenticator({
        apikey: process.env.DISCOVERY_APIKEY,
        }),
        serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com',
    });


    const queryParams = {
        environmentId: process.env.DISCOVERY_ENVIRONMENT_ID,
        collectionId: process.env.DISCOVERY_COLLECTION_ID,
        query: newUserQuery
    };

    discovery.query(queryParams)
    .then(queryResults => {
        const totalResults = queryResults.result.matching_results
        const results = queryResults.result.results
        responseData.push(totalResults,results)
        res.send(responseData)
    })
    .catch(err => {
        console.log('error:', err);
    });

})


app.listen('8080', function() {
    console.log('API is ready!')
})