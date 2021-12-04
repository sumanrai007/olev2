import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { Link } from 'react-router-dom'
import {
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

const Academic = () => {
  const [error, setError] = useState(null)
  const [form_error, setFormError] = useState([])
  const [academic, setAcademic] = useState([])

  useEffect(() => {
    const fetchAcademic = async () => {
      const res = await axios.get('http://olev2.herokuapp.com/api/academic')
      setAcademic(res.data)
    }
    fetchAcademic()
  }, [])

  return(
   <CCard className="mb-4">
      <CCardHeader className="d-flex justify-content-between">ACADEMIC LEVEL DETAILS
      <Link to="/admin/addacademic"><CButton>ADD</CButton></Link>
      </CCardHeader>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Academic Level</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {academic.map(({ id, name }) => (
                  <CTableRow key={id}>
                    <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                    <CTableDataCell>{name}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
   </CCard>
  )
}

export default Academic
