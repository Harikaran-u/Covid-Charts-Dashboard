import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {gender} = props
  const pieGender = (
    <div className="pie-bg-cont">
      <h1 className="gender-head">Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={gender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            align="center"
            wrapperStyle={{
              padding: 30,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
  return pieGender
}

export default VaccinationByGender
