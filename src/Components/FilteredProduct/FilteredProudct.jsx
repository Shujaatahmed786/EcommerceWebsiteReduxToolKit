import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const FilteredProudct = () => {
  const products = useSelector((state) => state.products.FilteredProudct)
  console.log(products , 'products')
  const params = useParams();
  console.log(params, "params")
  return (
    <div>FilteredProudct</div>
  )
}

export default FilteredProudct