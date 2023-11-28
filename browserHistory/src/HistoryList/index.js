import './index.css'

const HistoryList = props => {
  const {listDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails
  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="container">
      <div className="domain">
        <p className="time">{timeAccessed}</p>
        <div className="domain">
          <img src={logoUrl} alt="domain logo" className="margin-left logo" />
          <p className="margin-left">{title}</p>
          <p className="wrap">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
