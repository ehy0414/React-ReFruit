import React, { useState, useEffect } from "react";
import api from "../api/axios";
import ProfileCard from "../modules/profile/ProfileCard";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userId = localStorage.getItem("userId");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null); // 실제 파일
  const [preview, setPreview] = useState(null); // 미리보기 이미지 (base64 또는 기존 URL)
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${userId}`)
      .then(res => {
        setName(res.data.name);
        setPreview(res.data.userIcon);
      })
      .catch(err => console.error("유저 정보 가져오기 실패", err));
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = async () => {
  try {
    // 1. 현재 유저 데이터를 서버에서 다시 불러오기
    const res = await api.get(`/users/${userId}`);
    const currentUser = res.data;

    // 2. 변경된 필드만 덮어쓰기
    const updatedUser = {
      ...currentUser,
      name: name,
      userIcon: preview
    };

    // 3. PUT 요청 보내기 (json-server는 PUT이 전체 교체)
    await api.put(`/users/${userId}`, updatedUser);

    alert("프로필이 업데이트되었습니다.");
    navigate("/");
    window.location.reload();
  } catch (error) {
    alert("업데이트 실패");
    console.error(error);
  }
};


  return (
    <ProfileCard
      name={name}
      setName={setName}
      preview={preview}
      onImageChange={handleImageChange}
      onSave={handleSave}
    />
  );
};

export default ProfilePage;
