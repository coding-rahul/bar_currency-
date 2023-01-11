import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Footer from "./Footer";

const Bardata = ({ data, flag }) => {
  // we can also create dynamic barchart data.
  const detail = [
    {
      currency: 'INR',
      rate: data.INR,
      name: 'India',

    },
    {
      currency: 'RUB',
      rate: data.RUB,
      name: 'Russia',

    },
    {
      currency: 'PHP',
      rate: data.PHP,
      name: 'Philippine',

    },
    {
      currency: 'TRY',
      rate: data.TRY,
      name: 'Turkish',

    },
    {
      currency: 'BRL',
      rate: data.BRL,
      name: 'Brazil',

    }
  ]
  console.log(flag)

  return (
    <>
      {
        (flag) ?
          <div className='p-col-4 mt-1 '>
            <BarChart
              width={450}
              height={300}
              data={detail}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={30}
            >
              <XAxis dataKey="currency" scale="point" padding={{ left: 50, right: 40 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="rate" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            <Footer detail={detail} />
          </div>
          : ""
      }
    </>
  )
}
export default Bardata;