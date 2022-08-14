import React from 'react'
import Layout from './Layout';
import Shivam from './../image/team/dp.jpeg';
import Shivambg from './../image/team/img-top2.jpeg';

import './../CSS/team.css';
export default function Team() {
    return (
        <Layout>
    <section>
    <div className="container">
    	<div className="row">
    		
         
            <div className="mx-auto" style={{width: "300px"}}>
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2">
                    <div className="card-img-block">
                        <img className="img-fluid" src={Shivambg} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Shivam} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold">Shivam Goyal</h5>
                        <p className="card-text">Web Developer & Data Scientist</p>
                        <div className="p-2">
                        <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                        <ul type="none">
                        <li className="text-warning text-center">Python/C/C++</li>
                        <li className="text-warning text-center">Full Stack MERN Developer</li>
                        <p className="text-justify px-3 py-2" style={{fontSize:"13px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium sequi explicabo rerum possimus, harum id repudiandae labore.</p>
                        </ul>

                        </div>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/"> 
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                        </a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https:///"> <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
    		</div>
    	</div>
    </div>
</section>
        </Layout>
        
    )
}
