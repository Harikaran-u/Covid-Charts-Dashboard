import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {age} = props
  console.log(age)
  const chartAge = (
    <div className="age-bg-cont">
      <h1 className="age-head">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={age}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>

        <Legend
          iconType="circle"
          align="center"
          wrapperStyle={{
            padding: 30,
          }}
        />
      </PieChart>
    </div>
  )
  return chartAge
}

export default VaccinationByAge
