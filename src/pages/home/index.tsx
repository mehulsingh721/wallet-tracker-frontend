import Sidebar from "@/src/components/Sidebar"
import WalletData from "@/src/pages/home/components/WalletData"

const Home = () => {
    return (
        <div className="max-h-screen w-max-screen flex">
            <Sidebar/>
            <WalletData/>
        </div>
    )
}

export default Home