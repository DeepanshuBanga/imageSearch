import axios from "axios";
import React from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../redux/action";
import "./ImageElement.css";

const YOUR_ACCESS_KEY = "B_rpZXPCC_WT_pQOa3XsonhMzZesZKDAx0yFuWOhw70";

const ImageElements = () => {
  const state = useSelector((s) => {
    console.log(s);
    return s;
  });
  const dispatch = useDispatch();
  const next_req = (name) => {
    console.log(state);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: `${name}`,
          per_page: 8,
          page: state.page + 1,
        },
        headers: {
          Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
        },
      })
      .then((res) => {
        console.log(res);
        const urls = [];
        for (let i = 0; i < 8; i++) {
          urls.push(res.data.results[i].urls.regular);
        }
        console.log(urls);
        dispatch(loadMore(urls));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="img_div">
        {state.images.length > 0 && (
          <div>
            <h1>{state.query}</h1>
            <p>{state.total} images has been found</p>{" "}
          </div>
        )}
        {state.images.length > 0
          ? state.images.map((image) => {
              return <Image className="image" src={image} />;
            })
          : null}
      </div>
      <div className="text-center m-3">
        {state.images.length > 0 ? (
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => {
              next_req(state.query);
            }}
          >
            LOAD MORE
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ImageElements;
