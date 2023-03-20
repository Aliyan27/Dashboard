import React, { useState } from "react";
import "./Campaginadd.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  title: string;
  brand: string;
  date: any;
  smsText: string;
}

function Campaginadd() {
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [formvalues, setFormValue] = useState<FormValues>({
    title: "",
    brand: "",
    date: "",
    smsText: "",
  });

  const validate = Yup.object({
    title: Yup.string().required("Please Enter Title"),
    brand: Yup.string().required("Please Enter Brand"),
    date: Yup.string().required("Please Enter Date-Time"),
    smsText: Yup.string().max(200).required("Please Enter SMS Text"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      brand: "",
      date: new Date(),
      smsText: "",
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      setFormValue({
        title: values.title,
        brand: values.brand,
        date: values.date,
        smsText: values.smsText,
      });
    },
  });

  return (
    <>
      <div className=" campagin-add">
        <div className="campaginAddForm">
          <div className="campaginAddView">
            <h2 className="campaginAddTitle">Add Campaign </h2>
            <form onSubmit={formik.handleSubmit}>
              <label className="campaginAddLable">Title </label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {<p className="error">{formik.errors.title}</p>}
              <label className="campaginAddLable">Brand </label>
              <select
                name="brand"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.brand}
              >
                <option>Select brand</option>
                <option>Select brand2</option>
                <option>Select brand3</option>
              </select>
              {<p className="error">{formik.errors.brand}</p>}
              <label className="campaginAddLable">Start DateTime </label>
              <DatePicker
                selected={formik.values.date}
                className="form-control flatpickrDateTimeInput form-control input"
                onChange={(date: any) => formik.setFieldValue("date", date)}
                showTimeInput
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <label htmlFor="smsText" className="campaginAddLable">
                SMS Text
              </label>
              <textarea
                className="form-control"
                name="smsText"
                id="smsText"
                cols={30}
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.smsText}
              ></textarea>
              {<p className="error">{formik.errors.smsText}</p>}
              <button type="submit" className="btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaginadd;
