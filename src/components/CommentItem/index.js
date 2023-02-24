// Write your code here
import './index.css'

const CommentItem = props => {
  const {details, onDeleteComment, toggleIsLiked} = props
  const {name, comment, time, initialClassName, isLiked, id} = details

  const getInitial = () => name[0].toUpperCase()

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeButtonClassName = isLiked ? 'button active' : 'button'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const deleteFunc = () => {
    onDeleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="name-container">
        <div className="initial-container">
          <p className={initialClassName}>{getInitial(name)}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="name">{name}</p>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="like-container">
          <img src={likeImage} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onClickLike}
            className={likeButtonClassName}
          >
            Like
          </button>
        </div>
        <button
          onClick={deleteFunc}
          data-testid="delete"
          type="button"
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
