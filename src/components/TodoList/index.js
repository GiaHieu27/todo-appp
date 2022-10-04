import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import todoSlice from './todoSlice';
import Todo from '../Todo';
import { todoListRemaining } from '../../redux/selectors';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [priority, setpriority] = useState('Medium');

  const dispatch = useDispatch();
  const todoList = useSelector(todoListRemaining);

  const handleAddTodo = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
    setTodo('');
    setpriority('Medium');
  };

  const handleChangeInput = (e) => {
    setTodo(e.target.value);
  };

  const handleChangpriority = (value) => {
    setpriority(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleChangeInput} value={todo} />

          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangpriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
