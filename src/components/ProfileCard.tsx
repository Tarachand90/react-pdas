import React from 'react'

interface TwitterHandlerType {
    title: string;
    username: string;
}

const ProfileCard = ({title, username}: TwitterHandlerType) => {
  return (
    <div>
      Show a title of {title} and a twitter username of {username}
    </div>
  )
}

export default ProfileCard
