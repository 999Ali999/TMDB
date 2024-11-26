import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useGetPopularMoviesQuery } from "../services/movie";
import { Link } from "react-router-dom";

const MainCarousel = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible={true}
      duration={550}
      height="390px"
      PrevIcon={<KeyboardArrowLeftIcon />}
      NextIcon={<KeyboardArrowRightIcon />}
      indicators={true}
      autoPlay={true}
    >
      {data?.results.map((item, i) => (
        <Link to={`/movies/${item.id}`} key={i}>
          <Item key={i} item={item} />
        </Link>
      ))}
    </Carousel>
  );
};

interface ItemProps {
  item: {
    backdrop_path: string;
  };
}

function Item(props: ItemProps) {
  return (
    <img
      style={{
        objectFit: "cover",
        width: "100%",
        height: "390px",
        borderRadius: "5px",
      }}
      src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`}
      alt="picture"
    />
  );
}

export default MainCarousel;
