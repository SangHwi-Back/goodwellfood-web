import React from "react";

export default function ProfileIcon () {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* 바깥쪽 원 */}
      <circle
        cx="12" // 원 중심 x 좌표
        cy="12" // 원 중심 y 좌표
        r="11" // 바깥 원 반지름
        fill="none" // 내부를 비우는 스타일
        stroke="lightgray" // 희미한 회색 선
        strokeWidth="2" // 선 두께
      />
      {/* 안쪽 원 */}
      <circle
        cx="12"
        cy="12"
        r="7" // 안쪽 원 반지름
        fill="lightgray" // 내부를 회색으로 색칠
      />
    </svg>
  );
};
