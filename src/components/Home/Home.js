import pic from '../../assets/pic.png'

const Home = () => {
    return (
        <div className="flex justify-between m-10">
            <div className="space-y-5 mt-[10%] ml-20">
                <h1 className="text-8xl font-bold">Hi there,</h1>
                <p className="text-5xl font-bold">I'm Gautam</p>
                <p className="text-2xl font-semibold">
                    A Web Developer and a Tech Enthusiast
                </p>
            </div>
            <div className="hidden md:inline-block">
                <img
                    src={pic}
                    alt="pic"
                    className="rounded-full w-[30%] absolute right-10"
                />
            </div>
        </div>
    )
}

export default Home
