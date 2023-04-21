import React from 'react'
import "./SearchList.css"
import PropTypes from 'prop-types'
import { IoMdClose } from 'react-icons/io'

class SearchList extends React.Component {
    static propTypes = {
        shoes: PropTypes.object.isRequired
    }

    state = {
        brands: this.props.shoes
    }


    render() {
        const brand = this.state.brands
        return (
          <div className='searchShoes'>
            <div className='results'>
              {
              brand > 0 ? (
                brand["results"]?.map(s => (
                    <div className='shoes'>{s.name}</div>
                ))
              ) : (
                null
              )
              }
              </div>
              <div className="closeButton">
                <IoMdClose size={20} color="#000" onClick={this.props.closeResults} className='close'/>
              </div>
          </div>
        )
    }
}

export default SearchList