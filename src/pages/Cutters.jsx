import SampleNavBar from "../components/SampleNavBar"
export default function Cutters() {

    return (
        <div className="min-h-screen bg-gray-10">
            <section className="relative h-screen overflow-hidden">
                <header
                    className="absolute inset-x-0 top-0 z-20 mx-auto"
                    style={{ maxWidth: "1400px" }}
                >
                    <SampleNavBar />
                </header>
            </section>
        </div>
    )
}