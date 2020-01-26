function scrollToAbout() {
    let element = document.getElementById("intro");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}

function scrollToProjects() {
    let element = document.getElementById("projectsTitle");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}

function scrollToContact() {
    let element = document.getElementById("contact");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);