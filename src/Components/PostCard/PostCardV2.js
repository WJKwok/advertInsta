import React, { Component } from 'react';
import { connect } from 'react-redux';

import { upVote, downVote } from '../../Store/Actions/PostAction';

class PostCardV2 extends Component {

  constructor(props) {
    super(props);
    const { score, id } = props.post

    this.state = {
      upVoted: false,
      score: score
    }

    this.upVoteClicked = () => {
      if (!this.state.upVoted) {
        this.props.upVote(id, score);
        const currentScore = this.state.score;
        const newScore = currentScore + 1;
        this.setState({
          score: newScore,
          upVoted: true
        });
      } else {
        this.props.downVote(id, score);
        const currentScore = this.state.score;
        const newScore = currentScore - 1;
        this.setState({
          score: newScore,
          upVoted: false
        });
      }
    }

  }
  

  render() {

    const {imgUrl, title, content} = this.props.post;

    return (
      <div className='row'>
        <div className='col s12'>
          <div className='card'>
            <div className='card-image'>
              <img src={imgUrl}/>
            </div>
            <div className='card-content row'>
              <div className='col s2'>
                <div className={this.state.upVoted
                ? 'center red-text'
                : 'center' }>
                  <i className='small material-icons pointer-cursor'
                  onClick={this.upVoteClicked}>arrow_drop_up</i>
                  <p>{this.state.score}</p>
                </div>
              </div>
              <div className='col s10'>
                <span className="card-title">{title}</span>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id, score) => dispatch(upVote(id, score)),
    downVote: (id, score) => dispatch(downVote(id, score))
  }
}

export default connect(null, mapDispatchToProps)(PostCardV2);
