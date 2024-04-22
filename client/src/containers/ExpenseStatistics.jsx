import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function ExpenseStatistics() {
  return (
    <div className='flex flex-col gap-4 p-5 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <div className='flex justify-between'>
        <p className='text-2xl text-left font-semibold'>Expense Statistics</p>
        <select className='bg-[#293B66] rounded-lg px-2 cursor-pointer outline-none shadow-lg'>
          <option value="sevenDays">7 Days</option>
          <option value="oneMonth">1 Month</option>
          <option value="threeMonths">3 Months</option>
          <option value="sixMonths">6 Months</option>
          <option value="oneYear">1 Year</option>
        </select>
      </div>
      <div>
        <Line
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Expense',
                data: [90, 220, 60, 50, 400, 220, 220],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          }}
          height={200}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}

export default ExpenseStatistics;
