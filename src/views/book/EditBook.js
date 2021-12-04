import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { useFormik } from 'formik'

import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CAlert,
    CSpinner,
    CFormCheck,
  } from '@coreui/react'

const EditBook = () => {

    const [error, setError] = useState(null)
    const [form_error, setFormError] = useState([])
    const [book_type, setBookType] = useState(null)
    const [class_level, setClassLevel] = useState(null)
    const [academic, setAcademic] = useState(null) 
    const [book, setBook] = useState(null)
    let history = useHistory()
    
    let {id} = useParams()
    useEffect(() => {

    const fetchBook = async () => {
      try{
        const res = await axios.get(`http://olev2.herokuapp.com/api/book/${id}`)

        if(res.data.error){
          setError(res.data.error)
          //console.log(res.data.error)
        }else{
          
          setBook(res.data)
        }
      }catch(err){
        alert('error')
        setError(err.toString())
      }
    }
    fetchBook()
    const fetchBookType = async () => {
      try{
        const res = await axios.get('http://olev2.herokuapp.com/api/book_type')

        if(res.data.error){
          setError(res.data.error)
          console.log(res.data.error)
        }else{
          setBookType(res.data)
        }
      }catch(err){
        setError(err.toString())
      }
    }
    fetchBookType()

    const FetchClasslevel = async () => {
      const res = await axios.get(`http://olev2.herokuapp.com/api/class_level`)
      if(res.data.error){
        setError(res.data.error)
        console.log(res.data.error)
      }else{
        //alert(res.data)
        setClassLevel(res.data)
      }
    }
    FetchClasslevel()

    const fetchAcademic = async () => {
      const res = await axios.get(`http://olev2.herokuapp.com/api/academic`)
      if(res.data.error){
        setError(res.data.error)
        console.log(res.data.error)
      }else{
        setAcademic(res.data)
      }
    }
    fetchAcademic()
  }, [])
 
  const formik = useFormik({
      initialValues: {
        name: '',
        author: '',
        isbn: '',
        class_level_id: '',
        publication: '',
        published_date: '',
        book_type_id: '',
        academic_id: '',
      },
      onSubmit: async (values) => {
        try{
          const res = await axios.post(`http://olev2.herokuapp.com/api/book`,values)
  
          if(res.data.errors){
            window.scrollTo({ top: 0, behavior: 'smooth' })
            //alert('error from res')
            console.log(res.data.errors)
            setFormError(res.data.errors)
          }else{
            console.log(res.data)
            history.push("/book")
          }
        }catch(err){
          //alert(err)
          setError(err.toString())
        }
  
      }
  })
  
  if (!book || !book_type || !academic || !class_level)
    return (
      <div>
        {error?(
          <div>
            <CAlert color="danger">
              {error}
            </CAlert>
          </div>
          ):
          <div  className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <CSpinner color="primary" />
          </div>
        }
      </div>
 
    )


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
                      placeholder="Book Name"
                      value={book.name}
                      name="name"
                      onChange={formik.handleChange} bind={formik.values.name}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Author<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="Author"
                      value={book.author}
                      name="author"
                      onChange={formik.handleChange} bind={formik.values.author}
                      />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>ISBN<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="text"
                      pattern="[+-]?\d+(?:[.,]\d+)?"
                      placeholder="ISBN Number"
                      value={book.isbn}
                      name="isbn"
                      onChange={formik.handleChange} bind={formik.values.isbn}
                      />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Publication<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="Publication Name"
                      value={book.publication}
                      name="publication" 
                      onChange={formik.handleChange} bind={formik.values.publication}
                      />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Published Date<span className="text-danger">*</span></CFormLabel>
                    <CFormInput
                      type="date"
                      placeholder="Published Date"
                      value={book.published_date}
                      name="published_date"
                      onChange={formik.handleChange} bind={formik.values.published_date}
                      />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Class Level<span className="text-danger">*</span></CFormLabel>
                    <CFormSelect 
                      value={book.class_level_id}
                      name="class_level_id"
                      onChange={formik.handleChange} bind={formik.values.class_level_id}
                      >
                        <option value=''>Select Class Level</option>
                      {class_level.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>                      
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Academic<span className="text-danger">*</span></CFormLabel>
                    <CFormSelect 
                      value={book.academic_id}
                      name="academic_id"
                      onChange={formik.handleChange} bind={formik.values.academic_id}
                      >
                        <option value=''>Select Academic</option>

                      {academic.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>                    
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Book Type<span className="text-danger">*</span></CFormLabel>

                    {book_type.map(({ id, name }) => (
                      <CFormCheck
                        key={id}
                        id={`custom-checkbox-${id}`}
                        name="book_type_id"
                        label={name}
                        className="text-capitalize"
                        onChange={formik.handleChange} value={id} bind={formik.values.book_type_id}
                        />                     
                      ))}
                  </div>
                  <div className={`mb-3 ${formik.values.book_type_id.includes('1') ? "" : "d-none"}`}>
                    <CFormLabel>Video Link<span className="text-danger">*</span></CFormLabel>
                    <CFormInput type="text"/>
                  </div>
                  <div className={`mb-3 ${formik.values.book_type_id.includes('2') ? "" : "d-none"}`}>
                    <CFormLabel>File<span className="text-danger">*</span></CFormLabel>
                    <CFormInput type="file" />
                  </div>
                  <div className="mb-3 d-md-flex justify-content-md-end">
                    <CButton type="submit">Submit</CButton>
                  </div>
                </CForm>
            </CCardBody>
          </CCard>
      </div>
    )
}
export default EditBook
