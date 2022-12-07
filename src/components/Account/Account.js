import './Account.css'
import React from 'react'

function Account() {
  return (
    <>
<div className='container'>
  <div className="py-24">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 mb-10 mb-lg-0">
          {/* <!-- Emoji --> */}
          <div className="display-4 mb-5 mt-n16">🚀</div>
          {/* <!-- Heading --> */}
          <h1 className="ls-tight font-bolder display-3 mb-5">
            Build fast.<br/>Deliver faster.
          </h1>
          {/* <!-- Text --> */}
          <p className="lead mb-10">
            With an intuitive markup, powerful and lightning fast build tools, Clever has everything you need to turn your ideas into incredible products.
          </p>
          {/* <!-- Buttons --> */}
          <div className="mx-n2">
            <a href="#" className="btn btn-lg btn-dark shadow-sm mx-2 px-lg-8">
              Get started
            </a>
            <a href="#" className="btn btn-lg btn-neutral mx-2 px-lg-8">
              Learn more
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 ms-lg-auto">
          <div className="position-relative">
            {/* <!-- Decorations --> */}
            <span className="d-none d-lg-block position-absolute top-0 start-0 transform translate-x-n32 translate-y-n16 w-2/3 h-2/3 bg-warning opacity-20 rounded-circle filter blur-50"></span>
            <span className="d-none  position-absolute bottom-0 end-0 transform translate-x-16 translate-y-16 w-32 h-32 bg-warning opacity-60 rounded-circle filter blur-50"></span>
            {/* <!-- Image --> */}
            <img alt="..." src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=900&q=80" className="shadow-4 rounded-4 position-relative overlap-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Account
