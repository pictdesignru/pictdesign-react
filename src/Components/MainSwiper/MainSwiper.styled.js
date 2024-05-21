import styled from "styled-components";

const StyledMainSwiper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;
  height: 100vh;
  min-height: 600px;
  max-height: 1080px;
  position: relative;

  .styled-swiper {
    margin: 0;
    height: 100%;
  }

  .swiper-slide {
    padding: 150px 8% 200px 8%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(4, 1fr);
      padding-bottom: 100px;
  }
  }

  .swiper-pagination-container {
    box-sizing: border-box;
    padding: 0 8%;
    width: 100%;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    bottom: 160px;
    z-index: 100;

    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(4, 1fr);
      bottom: 60px;
      box-sizing: content-box;
      max-width: 500px;
    }
  }

  .swiper-pagination {
    grid-column: 3/8;
    position: relative;
    max-width: 160px;

    @media screen and (max-width: 1023px) {
      max-width: none;
      text-align: left;
      grid-column: 1/4;
    }
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #000;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    opacity: 0.5;
    transition: all 0.3s linear;

    &::after {
      font-size: 35px;

      @media screen and (max-width: 1023px) {
        font-size: 24px;
      }

      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }

  .swiper-button-next {
    right: 50px;

    @media screen and (max-width: 1023px) {
      right: 20px;
    }

    @media screen and (max-width: 1023px) {
      right: 10px;
    }

    &:hover {
      transform: translate(10%);
      opacity: 1;
    }
  }
  .swiper-button-prev {
    left: 50px;

    @media screen and (max-width: 1023px) {
      left: 20px;
    }

    @media screen and (max-width: 1023px) {
      left: 10px;
    }

    &:hover {
      transform: translate(-10%);
      opacity: 1;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1920px;
    height: 100%;
    object-fit: cover;
    object-position: 100% 100%;

    @media screen and (max-width: 1023px) {
      width: 100%;
      object-position: 50% 20%;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      object-position: center;
    }
  }

  .slider__info {
    z-index: 15;
    grid-column: 3/8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 50px;
    height: 100%;
    max-width: 500px;
    width: 100%;

    @media screen and (max-width: 1023px) {
      grid-column: 1/4;
    }

    .slider__except {
      max-width: 500px;

      @media screen and (max-width: 767px) {
        grid-column: 1/3;
      }
    }

    .slider__title-link {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
      grid-area: info;

      &:hover h2 {
        text-decoration: underline 4px solid;
        text-underline-offset: 10px;
      }

      h2 {
        margin: 0;
        width: 100%;
        font-size: 60px;
        line-height: 72px;
        font-weight: bold;
        transition: all 0.2s linear;

        @media screen and (max-width: 1023px) {
          font-size: 48px;
          line-height: 54px;
        }

        @media screen and (max-width: 767px) {
          font-size: 36px;
          line-height: 44px;
        }
      }

      p {
        justify-self: flex-start;
        margin: 0;
        font-size: 18px;
        line-height: 24px;

        @media screen and (max-width: 1023px) {
          font-size: 16px;
          line-height: 21px;
        }
      }
    }

    .slider__button-link {
      position: absolute;
      margin-top: auto;
      text-decoration: none;
      display: flex;
      box-sizing: border-box;
      border: 1px solid black;
      max-width: 140px;
      padding: 14px 20px;
      background-color: #000;
      color: #fff;
      font-size: 18px;
      transition: all 0.3s linear;
      align-self: flex-end;
      transform: translateY(100%);
      grid-area: button;

      &:hover {
        color: #000;
        background-color: #ebeae8;

        svg {
          opacity: 1;
        }
      }

      svg {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(-150%, -50%);
        transition: opacity 0.2s linear;
      }
    }
  }
`;

export default StyledMainSwiper;
