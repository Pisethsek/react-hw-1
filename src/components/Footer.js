import React from 'react'

function Footer() {
  return (
        <footer className="bg-light text-center text-white">

  <div className="container p-4 pb-0">

    <section className="mb-4">

      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i>
      </a>

  
      <a
        className="btn text-white btn-floating m-1"
        // style="background-color: ;"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      
    </section>

  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>
  )
}

export default Footer