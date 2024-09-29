import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./slider.module.css";

type SliderImage = {
  id: number;
  image: string;
};

const sliderImages1: SliderImage[] = [
  { id: 1, image: "/images/slider1.png" },
  { id: 2, image: "/images/slider2.png" },
  { id: 3, image: "/images/slider3.png" },
  { id: 4, image: "/images/slider4.png" },
  { id: 5, image: "/images/slider5.png" },
  { id: 6, image: "/images/slider6.png" },
  { id: 7, image: "/images/slider7.png" },
];
const sliderImages2: SliderImage[] = [
  { id: 8, image: "/images/slider8.png" },
  { id: 9, image: "/images/slider9.png" },
  { id: 10, image: "/images/slider10.png" },
  { id: 11, image: "/images/slider11.png" },
  { id: 12, image: "/images/slider12.png" },
  { id: 13, image: "/images/slider13.png" },
  { id: 14, image: "/images/slider14.png" },
];
const sliderImages3: SliderImage[] = [
  { id: 15, image: "/images/slider15.png" },
  { id: 16, image: "/images/slider16.png" },
  { id: 17, image: "/images/slider17.png" },
  { id: 18, image: "/images/slider18.png" },
  { id: 19, image: "/images/slider19.png" },
  { id: 20, image: "/images/slider20.png" },
  { id: 21, image: "/images/slider21.png" },
];

const allImages = [
  { images: sliderImages1, reverse: false },
  { images: sliderImages2, reverse: true }, // このスライダーだけ逆回転
  { images: sliderImages3, reverse: false },
];

export default function ImagesSlider() {
  const baseSettings = {
    arrows: false, // 左右の矢印はなし
    autoplay: true, // 自動的に動き出す
    autoplaySpeed: 0, // 自動的に動き出す待ち時間
    speed: 6900, // スライドのスピード
    infinite: true, // ループ
    pauseOnHover: false, // ホバーで停止しない
    pauseOnFocus: false, // フォーカスで停止しない
    cssEase: "linear", // スムーズな動き
    slidesToShow: 6, // 画面に6枚表示
    slidesToScroll: 1, // 1回のスライドで動かす枚数
    responsive: [
      {
        breakpoint: 769, // 769px以下の場合
        settings: {
          slidesToShow: 2, // 2枚表示
        },
      },
      {
        breakpoint: 426, // 426px以下の場合
        settings: {
          slidesToShow: 1.5, // 1.5枚表示
        },
      },
    ],
  };

  return (
    <>
      {allImages.map((allImage, index) => {
        const settings = {
          ...baseSettings,
          rtl: allImage.reverse, // `group.reverse` が true のときに逆回転
        };

        return (
          <Slider {...settings} key={index}>
            {allImage.images.map((image) => (
              <div key={image.id}>
                <Image
                  className={styles.image}
                  src={image.image}
                  alt={`slider ${image.id}`}
                  width={250}
                  height={200}
                />
              </div>
            ))}
          </Slider>
        );
      })}
    </>
  );
}
