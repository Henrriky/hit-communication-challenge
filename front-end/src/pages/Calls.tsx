import ContentCalls from '../components/ContentCalls'
import HeaderCalls from '../components/HeaderCalls'


function Calls() {
    return (
        <div className="min-h-screen bg-background-color">
            <div className="min-h-screen bg-transparent flex max-w-[1440px] mx-auto border-l-2 border-l-login-subtitle-gray border-opacity-20">
                <HeaderCalls />
                <ContentCalls />
            </div>
        </div>
    )
}

export default Calls