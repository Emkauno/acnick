import styled from "styled-components";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navMenuItems = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

export const NavbarContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:  center;
  justify-content: center;
  padding: 0 32px;
  position: fixed;
  background-color: var(--white);
  top: 0;
  z-index: 20;
  padding: 8px 32px;
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
    display: none;
    margin-right: -13px;
    @media (max-width: 900px) {
      display: flex;
      max-width: 44px;
    }
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: var(--primary-blue);
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: var(--primary-blue);
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
export const NavbarHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  img {
    height: 100%;
  }
  ul {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    gap: 40px;
      a {
        font-weight: 700;
        transition: all .3s ease;
        &:hover {
          color: var(--secondary-blue);
        }
        &.cta-navbar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-family: "Nunito Sans", sans-serif;
            white-space: nowrap;
            border-radius: 24px;
            font-size: 16px;
            line-height: 24px;
            cursor: pointer;
            transition: background 0.3s ease 0s;
            height: 48px;
            background: var(--primary-blue);
            color: rgb(255, 255, 255);
            border: none;
            padding: 12px 32px;
            transition: all 0.3s ease;
            &:hover {
              background: var(--secondary-blue);
            }
            @media (max-width: 500px) {
              width: 100%;
            }
        }
      }
  }
`;
export const DesktopNavbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media(max-width:900px) {
    display: none;
  }
  img {
    height: 100%;
  }
  ul {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    gap: 40px;
      a {
        font-weight: 700;
        transition: all .3s ease;
        white-space: nowrap ;
        &:hover {
          color: var(--secondary-blue);
        }
        &.cta-navbar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-family: "Nunito Sans", sans-serif;
            white-space: nowrap;
            border-radius: 24px;
            font-size: 16px;
            line-height: 24px;
            cursor: pointer;
            transition: background 0.3s ease 0s;
            height: 48px;
            background: var(--primary-blue);
            color: rgb(255, 255, 255);
            border: none;
            padding: 12px 32px;
            transition: all 0.3s ease;
            &:hover {
              background: var(--secondary-blue);
            }
            @media (max-width: 500px) {
              width: 100%;
            }
        }
      }
  }
`;

export const MobileNavContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(250, 250, 251);
  transform: translateX(100%);
  transition: transform 0.3s ease;

  #NavMobile {
    padding: 9px 0px 0px 24px;
  }


  #NavMenuMobile {
    margin-top: 38px;
    padding-left: 24px;
  }
  .logo-container {
    margin-top: 16px;
    max-width:  100px;
  }
  ul {
    list-style: none;
    display: flex;
    letter-spacing: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 0;
  }
  @media (max-width: 900px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;