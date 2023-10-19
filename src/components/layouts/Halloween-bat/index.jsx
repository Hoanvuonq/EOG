import IconBat1 from "../../../assets/halloween-bat 1.png";
import IconBat2 from "../../../assets/halloween-bat 2.png";
import IconBat3 from "../../../assets/halloween-bat 3.png";
import IconBat4 from "../../../assets/halloween-bat 4.png";

const HalloweenBat = () => {
    return (
        <div className="absolute sm:top-32 -top-4 sm:w-[90%] w-full justify-between lg:flex hidden">
           <div>
                <img src={IconBat2} width={240} height={240} alt="Halloween bat" className="relative lg:top-36 lg:left-36" />
                <img src={IconBat1} width={307} height={307} alt="Halloween bat"  />
           </div>
            <div>
                <img src={IconBat4} width={208} height={208} alt="Halloween bat" className="relative sm:top-10"/>
                <img src={IconBat3} width={315} height={315} alt="Halloween bat" />
            </div>
        </div>
    );
};
export default HalloweenBat