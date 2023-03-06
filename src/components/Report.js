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
      <div id='report' className='w-full sm:pt-20 pt-36 flex justify-center'>
        <div className='flex flex-col w-full max-w-[1300px] justify-center'>

          <form className='container flex justify-between sm:justify-start flex-wrap p-3'>
            <div className='flex flex-wrap'>
              <div className='flex my-2 mr-2  items-center'>
                <label className='text-lg pr-2'>From:</label>
                <input onChange={ handleChange } name='from' className='border border-slate-300 rounded' type="date" />
              </div>

              <div className='flex my-2 mr-2 items-center'>
                <label className='text-lg pr-2'>To:</label>
                <input onChange={ handleChange } name='to' className='border border-slate-300 rounded' type="date" />
              </div>
            </div>

            <div className='flex flex-wrap'>
              <div className='flex my-2 mr-2  items-center'>
                <label className='text-lg pr-2'>Nature:</label>
                <select onChange={ handlenature } name="nature" className="border border-slate-300 rounded">
                  <option selected className=''>Show All</option>
                  <option>Measurement</option>
                  <option>Delivery</option>
                  <option>Installation</option>
                  <option>Revisit</option>
                </select>
              </div>

              <div className='flex my-2 mr-2  items-center'>
                <label className='text-lg pr-2'>Status:</label>
                <select onChange={ handlestatus } name="status" className="border border-slate-300 rounded">
                  <option selected className=''>Show All</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>

            </div>

            <div className='flex flex-wrap'>

              <div className='flex my-2 mr-2  items-center'>
                <label className='text-lg pr-2'>City:</label>
                <input onChange={ handlecity } type="text" name="city" className="border border-slate-300 rounded" placeholder='Type Here' />
              </div>

              <div className='flex my-2 items-center'>
                <button onClick={ formsubmit } className='ani-button text-base'>Get Data</button>

              </div>

            </div>

          </form>

          <div className="relative px-1 overflow-x-auto scrollbar-hide">
            <table className="w-full m-1 mx-auto text-sm text-left text-gray-500 border shadow-md">
              <thead className=" border-b border-gray-300 text-white bg-fix">
                <tr className='text-[16px] '>
                  <th className="w-6 border px-3 py-3">
                    No.
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Date
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    BLP ID
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    ISELL No.
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    DC No.
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Client Name
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    City
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Nature of Work
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Work Status
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Done By
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Remarks
                  </th>
                  <th className=" w-14 border px-3 py-3">
                    Time
                  </th>

                </tr>
              </thead>
              <tbody className=''>

                {
                  data.length == 0
                    ? <tr className='text-[16px] '>
                      <th colSpan={ 12 } className="w-6 border px-3 py-3 text-left sm:text-center">
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

                        <tr className='text-[16px] '>
                          <th className="w-6 border px-3 py-3">
                            { key + 1 }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { moment(val.date).format("DD/MM/YYYY") }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.blp_id }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.isell }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.dc_no }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.name }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.city }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.nature }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.status }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.doneby }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.remarks1 }
                          </th>
                          <th className=" w-14 border px-3 py-3">
                            { val.time }
                          </th>

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