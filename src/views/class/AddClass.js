import React,{ useState }from 'react'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import {
    CAlert,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'

const AddClass = () => {
    const [error, setError] = useState(null)
    const [form_error, setFormError] = useState([])
    let history = useHistory()

    const formik = useFormik({
        initialValues: {
          name: '',
        },

        onSubmit: async (values) => {
          try{
            const res = await axios.post('http://olev2.herokuapp.com/api/class_level',values)
    
            if(res.data.errors){
              window.scrollTo({ top: 0, behavior: 'smooth' })
              //alert('error from res')
              console.log(res.data.errors)
              setFormError(res.data.errors)
            }else{
              console.log(res.data)
              history.push("/admin/addclass")
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
            <CCardHeader>
              <strong>Fill the information</strong>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-center">
                <CForm className="w-75" onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <CFormLabel >Name<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="New Class level"
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

export default AddClass
