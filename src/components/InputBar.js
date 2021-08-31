import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { InputGroup, FormControl, Button, Image } from "react-bootstrap";
import "./InputBar.css";
import { useSelector, useDispatch } from "react-redux";
import { searchPhoto, loadMore } from "../redux/action";

const YOUR_ACCESS_KEY = "B_rpZXPCC_WT_pQOa3XsonhMzZesZKDAx0yFuWOhw70";

function InputBar() {
  const state = useSelector((s) => {
    console.log(s);
    return s;
  });
  const dispatch = useDispatch();

  const req = (photo) => {
    console.log(photo);
    console.log("vuvuvu");
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: `${photo}`,
          per_page: 8,
        },
        headers: {
          Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
        },
      })
      .then((res) => {
        console.log("then");
        console.log(res.data);
        const urls = [];
        for (let i = 0; i < 8; i++) {
          urls.push(res.data.results[i].urls.regular);
        }
        console.log(urls);
        console.log(photo);
        dispatch(searchPhoto(urls, photo, res.data.total));
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };

  return (
    <div className="inputBar">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          req(event.target.key.value);
          console.log(event.target.key.value);
        }}
      >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for photos"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="key"
            type="text"
          />
          <Button
            variant="dark"
            ml="1"
            size="lg"
            id="button-addon2"
            className="ml-1"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </form>
    </div>
  );
}

export default InputBar;
