import React from "react";
import { Card, Avatar } from "antd";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";
const { Meta } = Card;

let html = "https://cdn.svgporn.com/logos/html-5.svg";
let css = "https://cdn.svgporn.com/logos/css-3.svg";
let bootstrap = "https://cdn.svgporn.com/logos/bootstrap.svg";
let react = "https://cdn.svgporn.com/logos/react.svg";
let redux = "https://cdn.svgporn.com/logos/redux.svg";
let javascript = "https://cdn.svgporn.com/logos/javascript.svg";


const cardData = [
  {
    img: "images/moviefinder.png",
    name: "Movie Finder",
    description:
      "This Website will find the movie according to search and give the all the essential details like relaese date,poster,rarting and description.The axios were used for fetching the API . This will devlop on Html,Css,JavaScript, react and bootstrap",
    teckstack: [html,css,javascript, react,bootstrap],
    source: "https://github.com/anurag-shukla8004/movies_finder-react",
    live: "https://eager-volhard-6ff21d.netlify.app",
  },
  {
    img: "images/flipcart.png",
    name: "Flipkart",
    description:
      "ECommerce Website project is a web application which is developed in react Consider the price of the product—items that are priced very low will make it difficult for you to get returns, but it also is difficult for people to purchase high-value items without seeing them first",
    teckstack: [html,css,javascript, react,bootstrap],
    source: "https://github.com/anurag-shukla8004/flipkart",
    live: "https://happy-hamilton-ffa035.netlify.app",
  },
  {
    img: "images/todolist.png",
    name: "ToDo List",
    description:
      "An app where user can create new or delete a list. Also user can view list and if incompleted task were delete then you can see in trash and from their you can restore or permantely delete. This will devlop on Html,Css,JavaScript, react ,redux and bootstrap",
    teckstack: [html,css,javascript,bootstrap],
    source: "https://github.com/adityashukla0801/ToDo-List",
    live: "https://newtodotask.netlify.app",
  },
  {
    img: "images/weatherapp.png",
    name: "Weather Finder",
    description:
      "It will find the weateher users by the city name and show the weather  API were used for fetching the data of the city weather.This will develop on Html,Css,JavaScript and React.",
    teckstack: [html,css,javascript,react],
    source:
      "https://github.com/anurag-shukla8004/weather_app-react",
    live: "https://vigilant-bhabha-1a6f48.netlify.app",
  },
  {
    img: "images/postman.png",
    name: "Postman Clone",
    description:
      "It Develpos on Html,Css,JavaScrip and Bootstrap. its a postman app clone its work get the api and post the api ",
    teckstack: [html, css,javascript, bootstrap],
    source: "https://github.com/anurag-shukla8004/Postman-clone",
    live: "https://focused-wright-313ff5.netlify.app",
  },
  {
    img: "images/covid-19.png",
    name: "Covid-19",
    description:
      "Welcome to the Covid-19 vacination website in this page you are login your account create your accout and book your slot and all slot show on the admin page  than admin are accepted / rejected the user slot. ",
    teckstack: [html, css,javascript, bootstrap],
    source: "https://github.com/anurag-shukla8004/covid-19-slot-booking",
    live: "https://objective-jones-7df793.netlify.app",
  },
  {
    img: "images/googlekeep.png",
    name: "Google Keep",
    description:
      "In this You can Add a task for doing later and then you can delete after done ..This will develop on Html,Css and JavaScript",
    teckstack: [html, css,javascript, react],
    source: "https://github.com/anurag-shukla8004/google-keep-react",
    live: "https://youthful-gates-aebe4f.netlify.app",
  },
  {
    img: "images/lonecalculator.png",
    name: "Lone Calculator",
    description:
      "With the help of lone calculator you are calcuate you annual year lone innerest ",
    teckstack: [html, css, javascript],
    source: "https://github.com/anurag-shukla8004/loancalculator",
    live: "https://quizzical-villani-be9ef2.netlify.app",
  },
  {
    img: "images/BE.png",
    name: "Spatial Website",
    description:
      "A Static website template fully responsive created using Html and css.",
    teckstack: [html, css, bootstrap],
    source: "https://github.com/anurag-shukla8004/Bootstrap-tamplate-2-Betheam",
    live: "https://goofy-mclean-8bbbf0.netlify.app",
  },
];

function ListProject() {
  return (
    <div className="d-flex flex-wrap justify-content-center col-md-10 col-md-12">
      {cardData.map((ele) => {
        return (
          <Card
            className="my-3 mx-3 border border-dark shadow-lg"
            style={{ width: 350, marginBottom: 10 }}
            cover={<img alt="example" src={ele.img} className="p-1" />}
            actions={[
              <GithubOutlined
                key="github"
                onClick={() => window.open(ele.source)}
              />,
              <EyeOutlined key="demo" onClick={() => window.open(ele.live)} />,
            ]}
          >
            <Meta
              title={ele.name}
              className="text-dark"
              description={ele.description}
            />
            <Meta className="my-3" title="Teck stack used :" description="" />
            {ele.teckstack.map((img) => (
              <img src={img} className="project-icon" />
            ))}
          </Card>
        );
      })}
    </div>
  );
}

export default ListProject;
