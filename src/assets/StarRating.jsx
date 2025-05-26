import React from "react";

export const StarRating = ({ rating }) => {
  const stars = [];
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i}>★</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half">☆</span>); // 또는 반쪽 별 이미지 사용 가능
  }

  while (stars.length < 5) {
    stars.push(<span key={stars.length}>☆</span>);
  }

  return <div style={{ color: "#f8c51c" }}>{stars}</div>;
};
