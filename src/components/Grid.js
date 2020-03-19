import React, { useState } from "react";
import {
  CardText,
  CardBody,
  Badge,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import styled from "styled-components";

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto:
`;

const MyContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font: sans-serif;
`;

const CardHeader1 = styled.h4`
  background: Black;
  color: white;
  padding: 10px;
`;

function Grid(props) {
  const items = [
    {
      src: `${props.hdurl}`,
      altText: "View of space",
      caption: ""
    },
    {
      src:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      altText: "View of space",
      caption: ""
    },
    {
      src:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      altText: "View of space",
      caption: ""
    },
    {
      src:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1052&q=80",
      altText: "View of space",
      caption: ""
    },
    {
      src:
        "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      altText: "View of space",
      caption: ""
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <>
      <MyContain>
        <MyCard>
          <CardBody>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>

            <CardHeader1>{props.title}</CardHeader1>

            <CardText>{props.explanation}</CardText>
            <Badge color="info">Date: {props.date}</Badge>
          </CardBody>
        </MyCard>
      </MyContain>
    </>
  );
}
export default Grid;
