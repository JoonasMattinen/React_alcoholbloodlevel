import React from 'react'

export default function Options() {
    const values = []

    for (let i = 0; i <= 10; i++) {
        values.push(i)
    }


    return (
        values.map(value => {
            return <option value={value}>{value}</option>
        })
    )
}