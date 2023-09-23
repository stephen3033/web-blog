import React from "react";
import linkedInLogo from "../assets/linkedin-logo-black.svg";
import githubLogo from "../assets/github-logo-black.svg";
import profilePic from "../assets/profile.jpg";

function ProfileHeader() {
  return (
    <div className="profile-header">
      <a
        href="https://github.com/stephen3033"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="GitHub" className="github-logo" />
      </a>
      <img
        src={profilePic}
        alt="Stephen Miller"
        className="profile-image"
      />
      <a
        href="https://www.linkedin.com/in/stephen-miller-3033/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedInLogo} alt="LinkedIn" className="linkedin-logo" />
      </a>
    </div>
  );
}

export default ProfileHeader;
