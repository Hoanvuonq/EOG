import FlowerBackground from "../../../assets/background-flower.png"


const Flower = () => {
    return (
        <div className="absolute w-full bottom-0 z-10">
          <img src={FlowerBackground} width={240} height={240} alt="Flower" className="w-full" />
        </div>
    );
};
export default Flower