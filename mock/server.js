const Koa = require('koa')
const route = require('koa-route')
const cors = require('koa2-cors')
const server = require('koa-static')

const app = new Koa()
app.use(cors())
app.use(server(__dirname+'/public')) //__dirname当前文件夹的根目录
//home页广告请求路由
app.use(route.get('/api/homead',ctx =>{
    ctx.response.type='json';
    ctx.response.body = require('./home/ad.js');
}))
//home页列表信息请求路由
app.use(route.get('/api/homelist',ctx =>{   
    var cityName=ctx.request.query.cityName,
        page=ctx.request.query.page,
        pageSize=1;
    if(cityName==null||page==null){
        ctx.response.body='不合法请求...';
        return;
    }
    var data=require('./home/list.js');
    //按城市筛选
    var result=data.filter(item=>item.cityName===cityName);
    //按分页筛选
    var begin=(page-1)*pageSize,
        end=begin+pageSize-1;
    //整合回发
    ctx.response.type='json';
    ctx.response.body = {
        hasMore:end<result.length-1,
        data:result.splice(begin,pageSize)
    };
}))
//search页列表请求路由
app.use(route.get('/api/search',ctx =>{
    var query=ctx.request.query
    //搜集请求信息
    var cityName=query.cityName,
        page=query.page,
        category=query.category,
        keyWords=query.keyWords,
        pageSize=1;
        // console.log(query);
    //是否是有效请求
    //判断对象的某个属性是否存在的最好方法,就是和null相比(==null相比)
    if(cityName==null||page==null||category==null){
        ctx.response.body='非法请求...';
        return;
    }
    //根据请求拿数据
    var data=require('./search/list.js');
    var result=data.filter(item =>
        item.cityName===cityName&&
        (category==='all'||item.category===category)&&
        ((!keyWords)||item.title.indexOf(keyWords)!=-1)
    );
    //整合数据并返回
    var begin=(page-1)*pageSize,
        end=begin+pageSize-1;
    ctx.response.type='json';
    ctx.response.body={
        hasMore:end<result.length-1,
        data:result.splice(begin,pageSize)
    }
}))
//其他路由处理
app.listen(8000)
console.log('server is running at 8000 port...')