"use client";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import icons from "../../../assets/images/image.png";
import logo from "./images/logo.png";
import api from "../../../api/axios";

const HeaderDesign = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const userId = localStorage.getItem("userId");
    setUserRole(role);

    api.get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  const handleUserIconClick = () => {
    setDropdownOpen(prev => !prev);
  };

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if(userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    navigate("/"); // 홈페이지로 이동
    window.location.reload();
  };

  //프로필 클릭시 로그인 여부 확인
  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <LogoText src={logo} onClick={() => {navigate("/")}} />

      <Nav>
        <MenuItem onClick={() => {navigate("/")}}>메인화면</MenuItem>
        <MenuItem onClick={() => {navigate("/refruit/most")}}>베스트셀러</MenuItem>
        <MenuItem onClick={() => {navigate("/refruit/sale")}}>추천상품</MenuItem>
        <MenuItem onClick={() => {navigate("/review")}}>상품리뷰</MenuItem>
      </Nav>

      <RightSection>
        <SearchContainer>
        <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="무슨 상품을 원하세요?"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchIcon onClick={handleSearch}
            dangerouslySetInnerHTML={{
              __html: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20.5L16.2223 16.7156M18.3158 11.6579C18.3158 13.5563 17.5617 15.3769 16.2193 16.7193C14.8769 18.0617 13.0563 18.8158 11.1579 18.8158C9.2595 18.8158 7.43886 18.0617 6.0965 16.7193C4.75413 15.3769 4 13.5563 4 11.6579C4 9.7595 4.75413 7.93886 6.0965 6.5965C7.43886 5.25413 9.2595 4.5 11.1579 4.5C13.0563 4.5 14.8769 5.25413 16.2193 6.5965C17.5617 7.93886 18.3158 9.7595 18.3158 11.6579V11.6579Z" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>`,
            }}
          />
        </SearchContainer>

        <IconsContainer>
          <WishlistIcon onClick={() => {navigate("/wishlist")}}
            dangerouslySetInnerHTML={{
              __html: `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 7.5C8.239 7.5 6 9.716 6 12.45C6 14.657 6.875 19.895 15.488 25.19C15.6423 25.2839 15.8194 25.3335 16 25.3335C16.1806 25.3335 16.3577 25.2839 16.512 25.19C25.125 19.895 26 14.657 26 12.45C26 9.716 23.761 7.5 21 7.5C18.239 7.5 16 10.5 16 10.5C16 10.5 13.761 7.5 11 7.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
            }}
          />
          <CartContainer>
            <CartIcon onClick={() => {navigate("/orders")}}
              src={icons}
            />
          </CartContainer>
          <UserIcon onClick={handleUserIconClick}
                    src={user?.userIcon || null}
          />
          {isDropdownOpen && (
            <DropdownMenu ref={dropdownRef}>
              <DropdownItem onClick={handleProfileClick}>프로필</DropdownItem>
              {isLoggedIn ? (
                <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
              ) : (
                <>
                  <DropdownItem onClick={() => {navigate("/login")}}>로그인</DropdownItem>
                  <DropdownItem onClick={() => {navigate("/join")}}>회원가입</DropdownItem>
                </>
              )}
              {userRole === "admin" && (
                <DropdownItem onClick={() => navigate("/admin/products")}>상품관리</DropdownItem>
              )}
            </DropdownMenu>
          )}
        </IconsContainer>
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  max-width: 1440px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 991px) {
    padding: 15px 20px;
    gap: 20px;
  }

  @media (max-width: 640px) {
    padding: 10px 15px;
    flex-wrap: wrap;
  }
`;

const LogoText = styled.img`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  width:65px;
  height:65px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  align-items: center;

  @media (max-width: 991px) {
    gap: 24px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  font-family: Hakgyoansim Allimjang OTF R;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  
  &:hover {
    text-decoration-line: underline;
    margin-bottom: 4px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  padding: 7px 12px 7px 20px;
  border-radius: 4px;
  background-color: #f5f5f5;

  @media (max-width: 640px) {
    flex: 1;
    margin-right: 10px;
  }
`;

const SearchInput = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #000;
  border: none;
  background: transparent;
  width: 150px;

  &:focus {
    outline: none;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  cursor: pointer;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const WishlistIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
`;

const CartContainer = styled.div`
  position: relative;
`;

const CartIcon = styled.img`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  width:22px;
  height:23px;
`;

const UserIcon = styled.img`
  background: gray;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 5rem;
  right: 9rem;
  width: 120px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default HeaderDesign;
