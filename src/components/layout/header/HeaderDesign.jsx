"use client";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderDesign = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 실제 로그인 상태로 교체 가능

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
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    navigate("/"); // 홈페이지로 이동
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
      <LogoText onClick={() => {navigate("/")}}>로고</LogoText>

      <Nav>
        <MenuItem onClick={() => {navigate("/")}}>메인화면</MenuItem>
        <MenuItem onClick={() => {navigate("/")}}>베스트셀러</MenuItem>
        <MenuItem onClick={() => {navigate("/")}}>추천상품</MenuItem>
        <MenuItem onClick={() => {navigate("/")}}>상품리뷰</MenuItem>
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
            <CartIcon
              dangerouslySetInnerHTML={{
                __html: `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 28.75C9.66421 28.75 10 28.4142 10 28C10 27.5858 9.66421 27.25 9.25 27.25C8.83579 27.25 8.5 27.5858 8.5 28C8.5 28.4142 8.83579 28.75 9.25 28.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19.75 28.75C20.1642 28.75 20.5 28.4142 20.5 28C20.5 27.5858 20.1642 27.25 19.75 27.25C19.3358 27.25 19 27.5858 19 28C19 28.4142 19.3358 28.75 19.75 28.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3.25 12.25H6.25L8.5 25H20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.5 21H20.1925C20.2792 21.0001 20.3633 20.9701 20.4304 20.9151C20.4975 20.8601 20.5434 20.7836 20.5605 20.6986L21.9105 13.9486C21.9214 13.8942 21.92 13.838 21.9066 13.7841C21.8931 13.7303 21.8679 13.6801 21.8327 13.6372C21.7975 13.5943 21.7532 13.5597 21.703 13.536C21.6528 13.5122 21.598 13.5 21.5425 13.5H7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="23" cy="10.5" r="8" fill="#DB4444"></circle>
                <text fill="#FAFAFA" style="white-space: pre" font-family="Poppins" font-size="12" letter-spacing="0em"><tspan x="20.0488" y="14.7">2</tspan></text>
              </svg>`,
              }}
            />
          </CartContainer>
          <UserIcon onClick={handleUserIconClick}
            dangerouslySetInnerHTML={{
              __html: `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="32" height="32" rx="16" fill="#DB4444"></rect>
                <path d="M21 23.5V21.8333C21 20.9493 20.691 20.1014 20.1408 19.4763C19.5907 18.8512 18.8446 18.5 18.0667 18.5H12.9333C12.1554 18.5 11.4093 18.8512 10.8592 19.4763C10.309 20.1014 10 20.9493 10 21.8333V23.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 15.5C17.6569 15.5 19 14.1569 19 12.5C19 10.8431 17.6569 9.5 16 9.5C14.3431 9.5 13 10.8431 13 12.5C13 14.1569 14.3431 15.5 16 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
            }}
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

const LogoText = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #000;
  cursor: pointer;
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
  font-family: "Poppins", sans-serif;
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

const CartIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
`;

const UserIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
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
