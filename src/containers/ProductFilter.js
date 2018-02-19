import React from 'react'
import { connect } from 'react-redux'
import { setProductFilter } from '../actions'
const ProductFilter = ({ value, onChange, options }) => (
    <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
)
const mapStateToProps = state => ({
   value : state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(setProductFilter(value))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)