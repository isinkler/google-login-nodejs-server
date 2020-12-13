const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("SERVER_CLIENT_ID");
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/tokeninfo', (req, res) => {
    
    verify(req.body.googleIdToken).catch(console.error);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

async function verify(token) {
    
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "SERVER_CLIENT_ID",  
        // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
}