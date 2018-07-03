import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Post extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    onPostDeleted: PropTypes.func,
  }

  state = {
      showTitleBackwards: false,
  }

  onTitleClicked = () => this.setState({
      showTitleBackwards: !this.state.showTitleBackwards,
  })

  onDeletePostClick = () =>
    this.props.onPostDeleted && this.props.onPostDeleted(this.props.index)

  render() {
    const { title, body } = this.props;
    const { showTitleBackwards } = this.state;
    return (
        <tr>
            <td>{showTitleBackwards ? title.split("").reverse().join("") : title}</td>
            <td>{body}</td>
            <td>
                <button id="reverse" onClick={this.onTitleClicked}>Reverse Title</button>
            </td>
            <td>
                <button id="delete" onClick={this.onDeletePostClick}>Delete Post</button>
            </td>
        </tr>
    );
  }
}
