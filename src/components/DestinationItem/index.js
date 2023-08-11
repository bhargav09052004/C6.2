const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <h1>{name}</h1>
    </li>
  )
}
export default DestinationItem
