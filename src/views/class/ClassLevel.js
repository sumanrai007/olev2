import React, { useState } from 'react'
import axios from 'axios'
import 'src/scss/_custom.scss'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const ClassLevel = () => {

  const [ClassLevel, setClassLevel] = useState([])

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

  return (
   <CCard className="mb-4">
      <CCardHeader className="d-flex justify-content-between">Class Level Details
      <Link to="/admin/addclass"><CButton>ADD</CButton></Link>
      </CCardHeader>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class Level</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ClassLevel.map(({ id, name }) => (
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

export default ClassLevel
