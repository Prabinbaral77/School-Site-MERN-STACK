import News from "./News"
import ProgramCard from "./ProgramCard"

function NoticeBoard() {
    return (
        <div>
            <div>
                <h2 className="text-4xl text-blue-600 font-bold border-b mb-12 text-center">Latest News & Current Program</h2>
            </div>
            <div className="xl:grid xl:grid-cols-2 mb-10">
                <div>
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
                <div>
                    <ProgramCard />
                </div>
            </div>
        </div>
    )
}

export default NoticeBoard
