import React from 'react';

import search from '../../assets/images/search.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import defaultProfile from '../../assets/images/defaultProfile.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../types/UserData';
import { fetchUserProfile, logOut } from '../../api/userAPI';
import { useLoginStateStore } from '../../store';

interface Props {
  // user정보 받아오게 되면 optional 해젠
  userName?: string;
}

const LoginHeader = ({ userName = 'Hotsix' }: Props) => {
  const navigate = useNavigate();
  return (
    <header className="w-full py-[6px] border-b-1 border-skyblue shadow  flex justify-between items-center whitespace-nowrap">
      <div className="ml-14 text-2xl text-blue-900">
        <Link to="/">{userName}'s Blog</Link>
      </div>

      <button className=""></button>
    </header>
  );
};

export default LoginHeader;
