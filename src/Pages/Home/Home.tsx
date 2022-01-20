import About from "./Sections/About"
import Banner from "./Sections/Banner"
import FAQ from "./Sections/FAQ"
import MobileApp from "./Sections/MobileApp"
import ProceedDistribution from "./Sections/ProceedDistribution"
import Team from "./Sections/Team"
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
            <MobileApp/>
            <Team/>
            <FAQ/>
        </>
    )
}

export default Home