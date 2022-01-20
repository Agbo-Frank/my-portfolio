const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "25px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 615,
          settings: {
            centerPadding: "10px",
            centerMode: true,
            infinite: true,
          }
        },
        {
        breakpoint: 560,
            settings: {
                centerPadding: "50px",
                slidesToShow: 2,
                centerMode: true,
                infinite: true,
            }
        },
        {
        breakpoint: 480,
            settings: {
                centerPadding: "20px",
                slidesToShow: 2,
                centerMode: true,
                infinite: true,
            }
        },
        {
        breakpoint: 430,
            settings: {
                centerPadding: "90px",
                slidesToShow: 1,
                centerMode: true,
                infinite: true,
            }
        },
        {
            breakpoint: 390,
                settings: {
                    centerPadding: "90px",
                    slidesToShow: 1,
                    centerMode: true,
                    infinite: true,
                }
        },
        {
            breakpoint: 350,
                settings: {
                    centerPadding: "70px",
                    slidesToShow: 1,
                    centerMode: true,
                    infinite: true,
                }
        },
    ]
  };

  export {settings}