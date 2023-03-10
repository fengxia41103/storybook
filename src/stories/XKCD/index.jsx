import fetchJsonp from "fetch-jsonp";
import Image from "mui-image";
import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

// 1743 is from manual testing
const MIN = 1;
const MAX = 1743;

const XKCD = () => {
  const [quote, setQuote] = useState(null);
  const [img, setImg] = useState(null);

  const getImage = () => {
    // AJAX
    const id = Math.floor(Math.random() * (MAX - MIN) + MIN);

    // NOTE: must use `https` if using github page, which is
    // served in https (is a setting option, however).
    const apiUrl = `https://dynamic.xkcd.com/api-0/jsonp/comic/${id}`;
    fetchJsonp(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setQuote(data.title);
        setImg(data.img);
      });
  };

  useEffect(() => getImage(), []);

  return (
    <Box>
      <Image src={img} width="60vw" onClick={getImage} />
      <Typography variant="body1">{quote}</Typography>
    </Box>
  );
};

export default XKCD;
