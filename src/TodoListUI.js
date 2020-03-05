import React from 'react';
import { Input, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

// 无状态组件  没有任何逻辑 只有UI部分
const TodoListUI = props => {
  return (
    <div style={{ width: '500px', margin: '20px auto' }}>
      <div>
        <Input
          placeholder={props.placeholder}
          value={props.inputValue}
          style={{ width: '426px', marginRight: '10px' }}
          onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.clickBtn}>
          增加
        </Button>
      </div>
      <div style={{ width: '500px', margin: '10px auto' }}>
        <h3 style={{ marginBottom: 16 }}>成都最近热门电影榜单</h3>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  shape="circle"
                  danger
                  size="small"
                  onClick={() => props.deleteItem(index)}
                >
                  <DeleteOutlined />
                </Button>
              ]}
              key={index}
            >
              {index + 1}：{item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

// export class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ width: '500px', margin: '20px auto' }}>
//         <div>
//           <Input
//             placeholder={this.props.placeholder}
//             value={this.props.inputValue}
//             style={{ width: '426px', marginRight: '10px' }}
//             onChange={this.props.changeInputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             增加
//           </Button>
//         </div>
//         <div style={{ width: '500px', margin: '10px auto' }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => this.props.deleteItem(index)}
//                 key={index}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUI;
