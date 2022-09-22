import { useState } from 'react';

import { useDispatch } from 'react-redux';
// import { searchFilter, statusFilter, prioritiesFilter } from '../../redux/actions'
import filterSlice from './filterSlice'

import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';

const { Search } = Input;

export default function Filters() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState([])

  const dispatch = useDispatch()

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
    dispatch(filterSlice.actions.searchFilter(e.target.value))
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
    dispatch(filterSlice.actions.statusFilter(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriority(value)
    dispatch(filterSlice.actions.prioritiesFilter(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder='input search text'
          onChange={handleChangeSearch}
          value={search}
        />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          onChange={handleStatusChange}
          value={status}
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
