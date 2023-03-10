import fetchJsonp from "fetch-jsonp";
import Image from "mui-image";
import React, { useEffect, useState } from "react";

// 1743 is from manual testing
const MIN = 1;
const MAX = 1743;
const getNextIndex = () => Math.floor(Math.random() * (MAX - MIN) + MIN);
const getNextImage = () => {
  const id = getNextIndex();
  return `https://dynamic.xkcd.com/api-0/jsonp/comic/${id}`;
};

const XKCD = () => {
  const [img, setImg] = useState(null);

  const getImage = () => {
    // NOTE: must use `https` if using github page, which is
    // served in https (is a setting option, however).
    const apiUrl = getNextImage();

    // MUST: use jsonp because of localhost will be blocked
    // by cross-origin rule!
    fetchJsonp(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setImg(data.img);
      });
  };

  useEffect(() => getImage(), []);

  return <Image src={img} width="80vw" onClick={getImage} />;
};

export default XKCD;
