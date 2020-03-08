## Hooks 基本使用

- `useEffect` 代替 `componentDidMount componentDidUpdate` 里面回调实现 `componentWillUnmount` 生命周期函数 `return ()=>{}`
- `useContext` 解决父子组件传值问题 共享数据状态
- `useReducer` 控制业务逻辑
- `example`目录文件，使用 `useReducer` 实现 `Redux` 更换颜色
- `useMemo` 解决子组件重复执行问题
- `useRef` 获取 DOM 和保存变量
- 自定义 `Hooks` 函数
