import React, { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useModal from '../hooks/useModal';
import Modal from '../modals/Modal';
import Loader from './Loader';
import moment from 'moment/moment';

const Report = () => {

  const [dates, setdates] = useState({ "from": "", "to": "" });
  const [naturefilter, setnaturefilter] = useState("");
  const [statusfilter, setstatusfilter] = useState("");
  const [cityfilter, setcityfilter] = useState("");

  const api = useAxiosPrivate();

  const { modal, setmodal, modalmessage, setmodalmessage } = useModal();
  const [loading, setloading] = useState(false);

  const [data, setdata] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setdates(values => ({ ...values, [name]: value }))
  }

  const handlenature = (e) => {
    e.preventDefault();

    if (e.target.value == "Show All") {
      setnaturefilter("");
    }
    else if (e.target.value == "Measurement") {
      setnaturefilter("Measurement");
    }
    else if (e.target.value == "Delivery") {
      setnaturefilter("Delivery");
    }
    else if (e.target.value == "Installation") {
      setnaturefilter("Installation");
    }
    else if (e.target.value == "Revisit") {
      setnaturefilter("Revisit");
    }
    else {
      setnaturefilter("");
    }

  }

  const handlecity = (e) => {
    e.preventDefault();
    let a = e.target.value;
    setcityfilter(a.toLowerCase());
  }

  const handlestatus = (e) => {
    e.preventDefault();

    if (e.target.value == "Show All") {
      setstatusfilter("");
    }
    else if (e.target.value == "Pending") {
      setstatusfilter("Pending");
    }
    else if (e.target.value == "Done") {
      setstatusfilter("Done");
    }
    else if (e.target.value == "In Progress") {
      setstatusfilter("In Progress");
    }

    else {
      setstatusfilter("");
    }

  }


  const formsubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await api.post("entries/generate-report", JSON.stringify(dates)).then((async (response) => {
        if (response.data.status == false) {
          setdata([])
          setloading(false);
          setmodal(true);
          await setmodalmessage({
            "text1": "Error",
            "text2": response.data.message
          })
        }
        else {
          setloading(false);
          if (response?.data?.message == "No Data Found") {
            setdata([])
            setmodal(true);
            await setmodalmessage({
              "text1": "No data found",
              "text2": "No entries found for particular date range."
            })
          }
          else {
            setdata(response.data.data)
            setmodal(true);
            await setmodalmessage({
              "text1": "Success",
              "text2": "Data fetched successfully."
            })
          }
        }


      }))

    } catch (error) {
      setloading(false);
      setmodal(true);
      await setmodalmessage({
        "text1": "Error",
        "text2": "No server response"
      })
    }

  }

  const printwindow = async (e) => {
    e.preventDefault();
    window.print();
}

  return (
    <>
      {
        loading
          ? <Loader />
          : <></>
      }
      {
        modal
          ? <Modal />
          : <></>
      }
      <div id='report' className='flex justify-center w-full sm:pt-20 pt-36'>
        <div className='flex flex-col w-full max-w-[1300px] justify-center'>

          <form id='reportform' className='container flex flex-wrap justify-between p-3 sm:justify-start'>
            <div className='flex flex-wrap'>
              <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>From:</label>
                <input onChange={ handleChange } name='from' className='border rounded border-slate-300' type="date" />
              </div>

              <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>To:</label>
                <input onChange={ handleChange } name='to' className='border rounded border-slate-300' type="date" />
              </div>
            </div>

            <div className='flex flex-wrap'>
              <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>Nature:</label>
                <select onChange={ handlenature } name="nature" className="border rounded border-slate-300">
                  <option selected className=''>Show All</option>
                  <option>Measurement</option>
                  <option>Delivery</option>
                  <option>Installation</option>
                  <option>Revisit</option>
                </select>
              </div>

              <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>Status:</label>
                <select onChange={ handlestatus } name="status" className="border rounded border-slate-300">
                  <option selected className=''>Show All</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>

            </div>

            <div className='flex flex-wrap'>

              <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>City:</label>
                <input onChange={ handlecity } type="text" name="city" className="border rounded border-slate-300" placeholder='Type Here' />
              </div>

            </div>

            <div className='flex items-center my-2'>
                <button onClick={formsubmit} className='mx-2 text-base ani-button'>Get Data</button>
                <button onClick={printwindow }  className='mx-2 text-base ani-button'>Print</button>

              </div>

          </form>

          <div id='reportprint' className="relative px-1 overflow-x-auto scrollbar-hide">
            <p className='my-1 text-2xl font-bold underline text-fix underline-offset-4'>Work Report: </p>
            
            <div className='flex flex-wrap'>
            <p className='mr-4 text-lg'><span className='font-semibold underline text-fix'>From:</span> {moment(dates.from).format("DD MMMM, YYYY")}</p>
            <p className='mr-4 text-lg'><span className='font-semibold underline text-fix'>To:</span> {moment(dates.to).format("DD MMMM, YYYY")}</p>
            </div>

            <table className="w-full m-1 mx-auto text-sm text-left text-gray-500 border shadow-md">
              <thead className="text-white border-b border-gray-300 bg-fix">
                <tr className='text-[16px] '>
                  <th className="w-6 px-3 py-2 border">
                    No.
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Date
                  </th>
                  <th className="px-3 py-2 border w-14">
                    BLP ID
                  </th>
                  <th className="px-3 py-2 border w-14">
                    ISELL No.
                  </th>
                  <th className="px-3 py-2 border w-14">
                    DC No.
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Client Name
                  </th>
                  <th className="px-3 py-2 border w-14">
                    City
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Nature of Work
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Work Status
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Done By
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Remarks
                  </th>
                  <th className="px-3 py-2 border w-14">
                    Time
                  </th>

                </tr>
              </thead>
              <tbody className=''>

                {
                  data.length == 0
                    ? <tr className='text-sm '>
                      <th colSpan={ 12 } className="w-6 px-3 py-3 text-left border sm:text-center">
                        No data found
                      </th>
                    </tr>
                    : data.filter((val) => {
                      return naturefilter == ""
                        ? val
                        : val.nature == naturefilter

                    }).filter((val) => {
                      return statusfilter == ""
                        ? val
                        : val.status == statusfilter
                    }).filter((val) => {
                      return cityfilter == ""
                        ? val
                        : val.city.toLowerCase().includes(cityfilter)
                    })
                      .map((val, key) => <>{
                        console.log(key)
                      }

                        <tr className='text-sm '>
                          <th className="w-6 px-3 py-1 text-center border">
                            { key + 1 }
                          </th>
                          <td className="px-3 py-1 border w-14">
                            { moment(val.date).format("DD/MM/YYYY") }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.blp_id }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.isell }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.dc_no }
                          </td>
                          <td className="px-3 py-1 border whitespace-wrap w-14">
                            { val.name }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.city }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.nature }
                          </td>
                          <td className="px-3 py-1 border w-14">
                            { val.status }
                          </td>
                          <td className="px-3 py-1 border whitespace-wrap w-14">
                            { val.doneby }
                          </td>
                          <td className="px-3 py-1 border whitespace-wrap w-14">
                            { val.remarks1 }
                          </td>
                          <td className="px-3 py-1 border whitespace-wrap w-14">
                            { val.time }
                          </td>

                        </tr>
                        </>
                      )


                }





              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report