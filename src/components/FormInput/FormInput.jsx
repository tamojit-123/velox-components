import React from 'react'
import './FormInput.css'
import PropTypes from 'prop-types'

const FormInput = (props) => {
  const { type, placeholder, label } = props
  return (
    <div className="form-container">
      <div className="glass-input">
        <form>
          <label className="glass-label">{label}</label>
          {type === '' ? (
            <input type="text" placeholder="place holder" />
          ) : (
            <input type={type} placeholder={placeholder} />
          )}
        </form>
      </div>
    </div>
  )
}

FormInput.defaultProps = {
  type: 'text',
  placeholder: 'Your Name',
  label: 'Name',
}

FormInput.prototype = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}

export default FormInput
