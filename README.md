# seajs
## seajs的练习以及自己封装的tab插件

### 先加载jquery.js sea.js和sea-css.js

 ####  <script src="static/js/jquery.js"></script>   
 ####  <script src="lib/sea.js"></script>   
 ####   <script src="lib/sea-css.js"></script>  
 ####
 ####  本地配置全局路径在d盘的test目录下的sea目录 这个路径可以根据自己的实际路径去配置
 ####   seajs.config({
 ####               base : 'file:///D:/test/sea/static/',  //通用的绝对路径
  ####              alias: {
  ####                  'jqueryPage': 'file:///D:/test/sea/lib/jquery.pagination'  //特殊的绝对路径
  ####              },
 ####               //文件映射
  ####              map: [
 ####                   //可配置版本号
 ####                   ['.css', '.css?v=' + new Date().getDate()],
 ####                   ['.js', '.js?v=' + new Date().getDate()]
  ####              ]
   ####         });

### tab.js为自己封装的tab插件采用构造函数以及原型对象
