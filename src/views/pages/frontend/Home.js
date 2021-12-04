import React, { useState } from 'react'
import 'animate.css'
import { doGet } from 'src/helper/Helper'
import _custom from'src/scss/_custom.scss'
import banerr from 'src/assets/images/banner/banerr.jpg'
import{
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardText,
    CCardTitle,
    CButton,
    CCardImage,
 }from '@coreui/react'
import { cilAlignCenter } from '@coreui/icons'
const Home = () => {
    const [books, setBooks] =useState([])

doGet('http://olev2.herokuapp.com/api/book').then(res => {
    setBooks(res.data)
}).catch(function(err) {
    console.log('Post Error :-S', err)
  })

return (
    <div>
        <div className="background" style={{ backgroundImage: 'url(' + banerr + ')', backgroundRepeat: 'no-repeat',backgroundSize: 'cover', height: '500px' }}>
           <div className="animate__animated animate__bounceInLeft animate__delay-0.4s">
               <h1>"When in doubt<p className="banner-text"> go to the library."</p></h1>
               <h5><p className="banner-name">-J.K Rowling</p></h5>
           </div>
        </div>  
    <section id="category-part">
        <div className="container">
            <div className="category pt-40 pb-80">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="category-text pt-40">
                            <h2>Best platform to learn everything</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                        <div className="row category-slied mt-40">
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-1">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-1.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Language</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-2">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-2.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Business</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-3">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-3.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-1">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-1.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Language</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-2">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-2.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Business</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="singel-category text-center color-3">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-3.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        
    <div className="container text-center my-5">

    <CRow className="align-items-end">
    {books.map(( book, index ) => (

        <CCol key={index}>
            <CCard>
                <CCardBody>
                    <CCardTitle>{book.name}</CCardTitle>
                <CCardText>
                        discription
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </CCol>
    ))}   
    </CRow>
    

    </div>
    </div>
        ) 
    }
    
    export default Home