import React, { useState } from 'react'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CCard,
  CCardBody,
  CCardHeader,
  CAlert,
  CLink,
} from '@coreui/react'

const AddAcademic = () => {

  const [error, setError] = useState(null)
  const [form_error, setFormError] = useState([])
  let history = useHistory()

    const formik = useFormik({
        initialValues: {
          name: '',
        },

        onSubmit: async (values) => {
          try{
            const res = await axios.post('http://olev2.herokuapp.com/api/academic',values)
    
            if(res.data.errors){
              window.scrollTo({ top: 0, behavior: 'smooth' })
              //alert('error from res')
              console.log(res.data.errors)
              setFormError(res.data.errors)
            }else{
              console.log(res.data)
              history.push("/admin/academiclevel")
            }
          }catch(err){
            //alert(err)
            setError(err.toString())
          }
    
        }
    });

    return(
        <div>
          {form_error?(
            <div>
              { Object.entries(form_error).map(([key, value] ) => (
                
              <CAlert key={key} color="danger">
                {value}
              </CAlert>
              ))}
            </div>
            ):''
          }
    <div>
        <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between">
              <strong>Fill the information</strong>
              <CLink to="/admin/academiclevel"><CButton>Go Back</CButton></CLink>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-center">
                <CForm className="w-75" onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <CFormLabel >Name<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="New Academic level"
                      name="name"
                      onChange={formik.handleChange} bind={formik.values.name}
                    />
                  </div>
                  <div className="mb-3 d-md-flex justify-content-md-end">
                    <CButton type="submit">Add</CButton>
                  </div>
                </CForm>
            </CCardBody>
          </CCard>
      </div>
      </div>
    )
}

export default AddAcademic
