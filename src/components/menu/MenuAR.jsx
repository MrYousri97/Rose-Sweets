import React from 'react'
import cinnabonAR from '../../images/Cinnabon1.png'
import CKAR from '../../images/CKAR.png'
import DNAR from '../../images/DNARR.png'
import HC from '../../images/HoneyCake.png'
import coffee from '../../images/Coffee.png'
import BR from '../../images/BR.jpg'
import Nav from '../nav/Nav'
import { useNavigate } from 'react-router-dom'

const MenuAR = () => {
    const navigate=useNavigate();
  return (
    <div>
          <section className="MenuAR ">
            <Nav />
            <button onClick={()=>navigate('/menu')} type='button'><span className='span-head'></span>EN</button>
            <div className='TitleAR'> المنيو</div>
            <div className="container cards">
                <div className="Card1">
                <div className="front">
                    <h1>سينابون</h1>
                    <img src={cinnabonAR} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>سينابون</h1>
                    <table>
                        <tr>
                            <th>السعر <br /> م&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ك</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>٤٠&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;٥٠</td>
                            <td>لوتس او نوتيلا</td>
                        </tr>
                        <tr>
                            <td>٣٥</td>
                            <td>كراميل</td>
                        </tr>
                        <tr>
                            <td>٥٠</td>
                            <td>توت</td>
                        </tr>
                        <tr>
                            <td>٢٨٠</td>
                            <td>٢٤ قطعة ميني </td>
                        </tr>
                        <tr>
                            <td>١٥٥</td>
                            <td>١٢ قطعة ميني</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
                <div className="Card1">
                <div className="front">
                    <h1>اكلير و بسكويت القهوة</h1>
                    <img src={coffee} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>بسكويت القهوة</h1>
                    <table>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>١٧٠</td>
                            <td>١ كيلو بسكويت</td>
                        </tr>
                        <tr>
                            <td>١٨٥</td>
                            <td>١ كيلو بسكويت قهوة بالشكولاتة البيضاء و الشكولاتة السوداء</td>
                        </tr>
                    </table>
                    <h1>اكلير</h1>
                    <table>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>١٦٥</td>
                            <td>٢٠ قطعة ميني</td>
                        </tr>
                        <tr>
                            <td>١٨٥</td>
                            <td>٢٠ قطعة ميني مخصوص</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
                <div className="Card1">
                <div className="front">
                    <h1>دونتس</h1>
                    <img src={DNAR} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>دونتس</h1>
                    <table>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>٢٥</td>
                            <td>كراميل او نوتيلا</td>
                        </tr>
                        <tr>
                            <td>٢٨</td>
                            <td>لوتس</td>
                        </tr>
                        <tr>
                            <td>٣٠</td>
                            <td>بومبولوني نوتيلا </td>
                        </tr>
                        <tr>
                            <td>٣٥</td>
                            <td> بومبولوني لوتس</td>
                        </tr>
                    </table>
                    </div>

                </div>
                </div>
                <div className="Card1">
                <div className="front">
                    <h1>تارت و كيكة العسل</h1>
                    <img src={HC} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>تارت</h1>
                    <table>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>١٧٠</td>
                            <td>٢٤ قطعة ميني تارت</td>
                        </tr>
                        <tr>
                            <td>١٩٠</td>
                            <td>٢٤ قطعة ميني تارت مخصوص</td>
                        </tr>
                    </table>
                    <table>
                        <h1 className='honey'>كيكة العسل </h1>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>٦٥</td>
                            <td>كيكة العسل</td>
                        </tr>
                    </table>
                    </div>

                </div>
                </div>
                <div className="Card1">
                <div className="front">
                    <h1>تشيز كيك</h1>
                    <img src={CKAR} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>تشيز كيك</h1>
                    <table>
                    <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>٢٣٠</td>
                            <td>١٢ قطعة ميني</td>
                        </tr>
                        <tr>
                            <td>١٢٠</td>
                            <td>٦ قطعة ميني</td>
                        </tr>
                    </table>
                    <h3>سعر إضافي للفستق والتوت</h3>
                    </div>

                </div>
                </div>
                <div className="Card1">
                <div className="front">
                    <h1>براونيز</h1>
                    <img src={BR} alt="" width={300}/>
                </div>
                <div className="back">
                    <div className="back-content">
                    <h1>براونيز</h1>
                    <table>
                        <tr>
                            <th>السعر</th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>١٣٠</td>
                            <td>١٢ قطعة ميني</td>
                        </tr>
                        <tr>
                            <td>١٨٠</td>
                            <td>١٢ قطعة ميني نوتيلا او لوتس او فستق او كراميل او اوريو او شكولاتة بيضاء</td>
                        </tr>
                    </table>
                    </div>

                </div>
                </div>
                </div>
    </section>
    </div>
  )
}

export default MenuAR
