import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container py-2 my-2">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-dark fw-bold mb-4'>About us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat provident sit perspiciatis, fuga maiores repellat, adipisci numquam architecto nemo quam, magnam autem! Aliquid, illo quae nobis natus cupiditate doloribus?
                        Natus quisquam quo iure nesciunt? Officia a at nisi nihil obcaecati ut alias, doloremque, soluta et, magni nulla modi velit neque quod sapiente quidem tempora consequatur incidunt ad inventore commodi.
                        Est asperiores perspiciatis exercitationem, veritatis fugiat tempora non a aliquid esse ullam quo culpa nobis excepturi libero deserunt nemo possimus tempore hic quam vel quaerat vero? Cupiditate quasi nisi asperiores.
                        Iusto inventore sit maiores, a tempora explicabo. Accusamus, id quasi! Rem, praesentium architecto! Beatae, ipsum odit ut necessitatibus vero consequuntur sit, quia iste soluta possimus sed quae tenetur, repudiandae cum!
                        Voluptates autem expedita, eius voluptatibus, temporibus nostrum neque adipisci rem sint est veniam. Dolor molestiae assumenda nesciunt quidem unde voluptas aliquam, libero aspernatur, repudiandae rerum, fugit debitis deleniti illum qui?
                    </p>

                    <NavLink to={'/contact'} className="btn btn-outline-dark px-3">Contact us</NavLink>
                </div>
                <div className="col-md-6 my-5 d-flex justify-content-center">
                    <img src="/assets/about.png" alt="about" height='500px' width='500px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;