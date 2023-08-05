import './index.css'

const HistoryDetails = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const removeHistory = () => {
    onDelete(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <div className="middle-content-container">
        <img
          src={logoUrl}
          alt="domain logo"
          className="image"
          data-testid="delete"
        />
        <p className="domain-name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-img"
        onClick={removeHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryDetails
