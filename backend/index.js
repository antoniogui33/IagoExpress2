const express = require('express');
const path = require('path');
const app = express();
const port = 5001;

const DATABASE = [
    {
        user: 'admin',
        pass: 'admin'
    },
]

app.use(express.static(path.join(__dirname, 'frontend')))

app.get('/', (req, res) => {
    res.sendfile('')
})
app.get('/login', (req, res) => {
    const data = { ...req.headers };
    const logged = DATABASE.find(item => {
        if (item.user !== req.user && item.user !== req.user) {
            return false;
        }
        return true;
    })
    if (!logged) {
        return;
    }
    res.send('LOGASTE');
})
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})