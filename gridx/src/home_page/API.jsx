import "./css/api-section.scss"
import apiImage from "../icons/editor.svg"

export default function API(){
  return(
    <div className="api-container">
      <div className="first-wrapper">
        <h4>API</h4>
        <h3>Concentrate on the logic - not the infrastructure</h3>
        <p>Use our API to build energy management applications from scratch and implement your own custom logic.</p>
        <button>Get access</button>
        <a href="/">Read the docs ›</a>

        <div className="sub-first-wrapper">
          <h3>Unified</h3>
          <p>The API is well documented and provides clear and consistent data structures.</p>

          <h3>RESTful</h3>
          <p>All endpoints adhere to REST principles, making integration quick and seamless.</p>
        </div>
      </div>

      <div className="second-wrapper">
        <img src={apiImage} alt="/" />
      </div>
    </div>
  )
}