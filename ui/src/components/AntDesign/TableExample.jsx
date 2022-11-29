import React from 'react'
import {Table,Tag,Space} from 'antd';

const columns =[
    {
        title:'Name',
        dataIndex:'name',
        key:'name',
        render:text => <a>{text}</a>
    },
    {
        title:'Age',
        dataIndex:'age',
        key:'age'
    },
    {
        title:'Address',
        dataIndex:'address',
        key:'address'
    },
    {
        title:'Tags',
        key:'tags',
        dataIndex:'tags',
        render:tags =>(
            <>
            {tags.map(tag =>{
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if(tag === 'loser'){
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                );
            })}
            </>
        ),
    },
    {
        title:'Action',
        key:'action',
        render:(text,record) =>(
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        )
    }
]
const data =[
    {
        key:"1",
        name:"park",
        age:32,
        address:'부산',
        tags: ["nice", "developer"]
    },
    {
        key:'2',
        name:'Kim',
        age:20,
        address:'서울특별시',
        tags: ["loser"]
    },{
        key:'3',
        name:'Min',
        age:40,
        address:'포항시',
        tags: ["ice","teacher"]
    },
];
export default function TableExample() {
  return (
    <div>
        <Table columns={columns} dataSource={data}/>
    </div>
  )
}
