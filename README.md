## redux 小技巧

- 把类型写成一个文件，用常亮表示，方便复用 `actionTypes.js`
- 把 `action` 写在一个文件，方便查看 `actionFactory.js`
- `combineReducers` 把一个由多个不同 `reducer` 函数作为 `value` 的 `object`，合并成一个最终的 `reducer` 函数，然后就可以对这个 `reducer` 调用 `createStore`
- `Provider` Provider 组件，可以让容器组件拿到 state `Todo.js`
- `connect` 用于从 UI 组件生成容器组件。connect 的意思，就是将这两种组件连起来 `Posts.js` 无状态组件

## 两个小增删改

- `Todo.js`
- `TodoList.js`
