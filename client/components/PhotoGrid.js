import React from 'react';

const PhotoGrid =  React.createClass({
  render(){
    return(
      <div className="photo-grid">
        {JSON.stringify(this.props.posts, null, ' ')}
      </div>
     )
  }
})

export default PhotoGrid;
