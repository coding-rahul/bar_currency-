import { useContext } from "react";
import { Contextdata } from "../App";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { InplaceDisplay } from 'primereact';
import Footer from "./Footer";

const Bardata = () => {

  const user = useContext(Contextdata);
  const detail = [
    {
      rate: 'INR',
      currency: user.INR,
      name: 'India',

    },
    {
      rate: 'RUB',
      currency: user.RUB,
      name: 'Russia',

    },
    {
      rate: 'PHP',
      currency: user.PHP,
      name: 'Philippine',

    },
    {
      rate: 'TRY',
      currency: user.TRY,
      name: 'Turkish',

    },
    {
      rate: 'BRL',
      currency: user.BRL,
      name: 'Brazil',

    }
  ]
  return (
    <>
      <div className='p-col-4 mt-6 col-offset-1'>
        <BarChart
          width={500}
          height={350}
          data={detail}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="rate" scale="point" padding={{ left: 50, right: 40 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="currency" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        <Footer detail={detail} />
      </div>

    </>
  )
}
export default Bardata;