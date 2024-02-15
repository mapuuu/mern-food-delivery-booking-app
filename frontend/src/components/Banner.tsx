import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <img src={banner} className="w-full max-h-[600px] object-cover" />
        </div>
    )
}

export default Banner;