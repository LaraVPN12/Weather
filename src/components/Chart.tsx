import React from 'react'

const Chart = () => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-3 px-5 bg-gray-50">Line chart</div>
            <canvas className="p-10" id="chartLine"></canvas>
        </div>
    )
}

export default Chart
