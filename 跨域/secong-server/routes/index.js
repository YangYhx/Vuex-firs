var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/deme2',(req,res) => {
  res.json({
      msg:'服务器second-server的信息',
      code: 200
  })
})

module.exports = router;
