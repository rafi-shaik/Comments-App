import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      initialClassName: initialBackgroundColorClassName,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDeleteComment = uniqId => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== uniqId)
    this.setState({commentsList: filteredList})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="bg-container">
        <div className="comments-section">
          <h1 className="heading">Comments</h1>
          <div className="top-section">
            <form onSubmit={this.onAddComment} className="form-container">
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                value={name}
                type="text"
                className="name-input"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                rows="6"
                className="comment-input"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <button type="submit" className="form-button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="bottom-section">
            <p className="count-heading">
              <span className="comments-count">{count}</span>
              Comments
            </p>
            <ul className="list-container">
              {commentsList.map(each => (
                <CommentItem
                  key={each.id}
                  details={each}
                  onDeleteComment={this.onDeleteComment}
                  toggleIsLiked={this.toggleIsLiked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
