// 使用browserHistory需要进行判断,在生产环境下，如果编译的文件不是根目录文件,而是在子文件夹内,子文件夹的地址部分会被browserHistory解析成路由
// 比如：编译的文件放在站点www文件夹的cnode文件夹里,访问时用github.com/cnode/,但是此时cnode/被browserHistory解析成路由,这个路由不存在所以会出问题
// let prefix = process.env.NODE_ENV === 'production' ? '/cnode' : '';

// 使用hashHistory则不需要这样的判断，因为router被放在hash中，而浏览器能正确解析hash
let prefix = '';
export default prefix;