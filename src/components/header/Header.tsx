import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultProfile from '../../assets/image/defaultProfile.png';
function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">nickname's Blog</Logo>
        <NavLinks>
          <NavLink href="/post">새글 작성</NavLink>
          <NavLink href="/profile">
            <HeaderProfileImage src={defaultProfile} />
          </NavLink>
          <NavLink href="/">로그아웃</NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
const HeaderProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;
const Logo = styled.a`
  font-family: 'MangoDdobak';
  font-size: 24px;
  font-weight: bold;
  color: #001354;
  text-decoration: none;
`;

const NavLinks = styled.div`
  font-family: 'MangoDdobak-B';
  display: flex;
  gap: 16px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
`;
