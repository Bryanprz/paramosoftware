import React from 'react'

const CompanyDescription = props => (
  <div className="company-description-container">
    <h2 className="company-description-header">
      Your Idea &#8594; Our Agency &#8594; Your New Product
    </h2>

    <div className="company-description-content-container">
      <div className="company-description-content-container-text">
        <h2 className="company-description-content-container-text-title">
          TURN YOUR <br/> IDEA INTO A <br/> REAL PRODUCT
        </h2>
        <p className="company-description-content-container-text-paragraph paragraph-2">
           We work with Entrepreneurs, visionaries, and Companies to build ideas into web and mobile apps that delight users and achieve a business goal.
        </p>

      </div>

      <div className="company-description-content-container-text">
        <h2 className="company-description-content-container-text-title">
          leverage our <br/> team of <br/> designers + <br/> engineers
        </h2>
        <p className="company-description-content-container-text-paragraph">
            Whith 7 years experience in the tech industry, we follow modern industry best-practices to craft exquisite quality designs and software.
        </p>
      </div>

      <div className="company-description-content-container-text">
        <h2 className="company-description-content-container-text-title">
           <br/> take your new <br/> product to market <br/> and grow your <br/> business
        </h2>
        <p className="company-description-content-container-text-paragraph">
             When you´re ready to go to market, we´ll be there. As your product grows and acquired users, we'll work with you to continue evolving your new product.
        </p>
      </div>
    </div>
  </div>
)

export default CompanyDescription
