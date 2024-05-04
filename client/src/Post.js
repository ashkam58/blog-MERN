import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img
            src="https://static.pexels.com/photos/63764/pexels-photo-63764.jpeg"
            alt=""
          />
        </div>

        <div className="text">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="info">
            <a className="author">Ashkam Ash</a>
            <time>2024-01-06 08:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            ab vel natus iste beatae est sequi animi ipsa similique consequatur!
            Itaque repudiandae odit, at maiores numquam necessitatibus quo omnis
            nesciunt.
          </p>
        </div>
      </div>
  )
}

export default Post