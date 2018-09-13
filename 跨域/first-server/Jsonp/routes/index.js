var express = require('express');
var router = express.Router();
var cors = require('cors')

let proxy = require('http-proxy-middleware')

router.use('/api',proxy({
    target:'http://localhost:3000',
    changeOrigin:true,
    pathRewrite:{
        'api':'/'
    }
}))

//***************cors 跨域  （使用插件）
var corsOptions= {
    origin: 'http://localhost:8080',    //设置唯一的响应地址
    credentials: true                  //设置允许带cookie
}
router.use(cors(corsOptions))      //使用插件


//***********************cors 跨域(不适用插件) 设置响应头   all是对所有请求都会发生响应
// router.all('*',(req,res,next)=> {
//     // res.header('Access-Control-Allow-Origin','*')
//      res.header('Access-Control-Allow-Origin','http://localhost:8080')
//
//     res.header('Access-Control-Allow-Headers','Content-Type')
//     res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS')
//     res.header('Access-Control-Allow-Credentials',true)
//
//     next();
// })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp',(req,res) => {
  res.jsonp({
      data: '使用jsonp获取的一些信息',
      msg:'吃饭',
      code: 200
  })
})

router.get('/getCors',(req,res) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.jsonp({
        data: '使用cors简单方式获取的一些信息',
        msg:'吃饭',
        code: 200
    })
});
router.get('/getVue',(req,res) => {
    res.jsonp({
        data: '使用Vue脚手架方式获取的一些信息',
        msg:'吃饭',
        code: 200
    })
});
// router.options('/nosimple',(req,res)=> {
//     res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Headers','Content-Type')
//     res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS')
//     res.send();
// })
router.post('/nosimple',(req,res)=>{
    // res.header('Access-Control-Allow-Origin','*')
    res.json({
        data: '使用cors跨域的非简单请求获取的一些信息',
        msg:'吃饭',
        code: 200
    })
})


module.exports = router;
