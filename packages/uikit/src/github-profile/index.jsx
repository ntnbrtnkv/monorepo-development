import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  color: inherit;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const GithubProfile = ({ username }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const request = new Request(`https://api.github.com/users/${username}`, { method: 'GET' });
    fetch(request).then((res) => res.json()).then((responseInfo) => { setInfo(responseInfo); });
  }, [username]);

  return (
    <Link href={`http://github.com/${username}`}>
      <Avatar
        alt={`${username}'s avatar`}
        src={info.avatar_url}
      />
      <p>{info.name}</p>
    </Link>
  );
};

export default GithubProfile;
