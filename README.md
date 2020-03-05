## redux-thunk 中间件

- 无状态组件编写，负责 UI 部分

## 豆瓣 API `https://api.douban.com/v2/movie/`

- 获取正在热映的电影 `in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&city=成都&start=0&count=10`
- 即将上映 `coming_soon`
- 获取电影 Top250 `top250?start=0&count=10`
- 电影搜索 `search?q=关键字&start=0&count=10` `search?tag=标签&start=0&count=10`
- 电影详情 `subject/:id`
- 口碑榜 `weekly`
- 北美票房 `us_box`
- 电影新片 `new_movies`
- 电影剧照 `subject/26942674/photos`
- 电影短评/长评 `subject/26942674/comments` `reviews`
- 电影人作品 `celebrity/1044707/works`
