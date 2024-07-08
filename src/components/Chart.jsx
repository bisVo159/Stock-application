import React, { useState } from 'react'
import { mockHistoricalData } from '../constants/mock'
import { convertUnixTimestampToDate } from '../helpers/date-helper'
import Card from './Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Chart() {
    const [data,setData]=useState(mockHistoricalData)
    const [filter,setFilter]=useState("1W")

    const formData=()=>{
        return data.c.map((item,index)=>{
            return {
                value:item.toFixed(2),
                date:convertUnixTimestampToDate(data.t[index])
            }
        })
    }
  return (
    <Card>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formData(data)}>
                <Area type='monotone' data='value' stroke="#312e81" fillOpacity={1} strokeWidth={0.5}/>
                <Tooltip />
                <XAxis dataKey="date" />
                <YAxis  domain={["dataMin","dataMax"]}/>
            </AreaChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default Chart