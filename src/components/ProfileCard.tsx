import React from 'react'

interface TwitterHandlerType {
    title: string;
    username: string;
    imageSrc: string;
}

const ProfileCard = ({title, username, imageSrc}: TwitterHandlerType) => {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      Show a title of {title} and a twitter username of {username}
    </div>
  )
}

export default ProfileCard
