import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeButton = event => this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            onChange={this.onChangeButton}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
