import SingleProgram from "./SingleProgram"

function ProgramCard() {
    return (
        <div className="uppercase">
            <p className="text-center text-3xl font-semibold text-blue-600 border-b-4 mb-4">Class and program</p>
            <div className="space-y-5">
                <SingleProgram program="From Nursary to Twelve." />
                <SingleProgram program="+2 Programs" />
                <SingleProgram program="Management" />
                <SingleProgram program="Echonomics" />
                <SingleProgram program="Science" />
                <SingleProgram program="Secondary level choose subject --OPT. Math --Echonomics --Computer" />
            </div>
        </div>
    )
}

export default ProgramCard
