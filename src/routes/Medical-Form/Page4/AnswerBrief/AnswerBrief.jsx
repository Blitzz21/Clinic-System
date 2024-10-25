export default function AnswerBrief() {
    return (
    <div className="p-2">
        <h1 className="font-bold">Answer the question briefly:</h1>
        <p>Do you have any immediate health concern or restriction that you think may affect your studies? Please specify. </p>
        <textarea className="border w-full h-80 p-2 rounded-md border-gray-400 shadow-md focus:outline-none focus:border-blue-400 focus:caret-blue-400" placeholder="Write anything..." name="" id=""></textarea>
    </div>
    )
}