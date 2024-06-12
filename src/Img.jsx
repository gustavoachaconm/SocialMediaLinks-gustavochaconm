import ProfileImage from "./imgs/IMG_5885.JPG";
const Img = () => {
  return (
    <img
      className=" h-[88px] w-[88px] rounded-full border-4 border-green-600 md:h-24 md:w-24"
      src={ProfileImage}
      alt=""
    />
  );
};

export default Img;
