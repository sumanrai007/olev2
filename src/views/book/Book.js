import React, { useState } from 'react'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { Link } from 'react-router-dom'
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CFormText,
    CSidebar,
    CAlert,
    CSpinner,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

  import CIcon from '@coreui/icons-react'
  import { cilPencil, cilTrash } from '@coreui/icons'


const Book = () => {
    const [book, setBook] =useState('')
    const [error, setError] = useState(null)

    React.useEffect(() => {        
        fetchBook()
    }, [])

  const fetchBook = async () => {
    try{
      const res = await axios.get(`http://olev2.herokuapp.com/api/book`)
      if(res.data.error){
        setError(res.data.error)
        console.log(res.data.error)
      }else{
        setBook(res.data)
      }
    }catch(err){
      setError(err.toString())
    }
  }
  

    const deleteBook = async (id) => {
      if(confirm('Are you sure you want to confirm?')){
        try{
          console.log(id)
          const res = await axios.delete(`http://olev2.herokuapp.com/api/book/${id}`)
          if(res.data.error){
            setError(res.data.error)
            console.log(res.data.error)
          }else{
            console.log(res)
            console.log(res.data)
            fetchBook()
          }
        }catch(err){
          setError(err.toString())
        }
      }
    }

  if (!book)
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
   <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between">
            <strong>Book Details</strong>
            <Link to="/admin/addbook"><CButton>ADD</CButton></Link>
        </CCardHeader>
        <CCardBody>
            <CTable>
            <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Author</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Publication</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ISBN</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Published Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">thumbnail</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class Level (Academics)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Book Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>

              </CTableHead>
              <CTableBody>
                {book.map(( b, index ) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                    <CTableDataCell>{b.name}</CTableDataCell>
                    <CTableDataCell>{b.author}</CTableDataCell>
                    <CTableDataCell>{b.publication}</CTableDataCell>
                    <CTableDataCell>{b.isbn}</CTableDataCell>
                    <CTableDataCell>{b.published_date}</CTableDataCell>
                    <CTableDataCell>{b.thumbnail}</CTableDataCell>
                    <CTableDataCell>{b.class_level.name}({b.academic.name})</CTableDataCell>
                    <CTableDataCell>{b.book_types.map((type, index) =>(
                        <span key={index}> {index>0 && ", "} {type.name} </span>
                    ))}</CTableDataCell>
                    <CTableDataCell>
                    <Link to={`/admin/editbook/${b.id}`}>
                    <CIcon icon={cilPencil} />                  
                    </Link>
                    
                  <button className="border-0 bg-transparent" onClick={() => deleteBook(b.id)} >
                    <CIcon className="text-danger" style={{marginLeft: "15px"}}  icon={cilTrash} />                  
                  </button>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
        </CCardBody>
   </CCard>
    )
}
export default Book
