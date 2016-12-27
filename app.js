var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>{
res.redirect('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2fd302f3bf45be475fbd8561ba268a8b')
})



app.listen(8080, ()=>{
  console.log('server listening on port 8080')
})
