import About from "./Sections/About"
import Banner from "./Sections/Banner"
import ProceedDistribution from "./Sections/ProceedDistribution"
import Timeline from "./Sections/Timeline"
import TokenSale from "./Sections/TokenSale"

function Home() {
    return(
        <>
            <Banner/>
            <About/>
            <TokenSale/>
            <ProceedDistribution/>
            <Timeline/>
        </>
    )
}

export default Home