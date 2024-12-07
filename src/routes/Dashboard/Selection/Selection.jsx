export default function Selection({ currentView, setCurrentView }) {
    return (
        <nav className="w-72">
            <ul className="flex flex-row bg-[#FFFFFF] shadow-md text-center justify-center items-center my-8 py-2 px-2 rounded-full outline outline-1 outline-[#EEEEEE]">
                <li>
                    <button 
                        type="button"
                        onClick={() => setCurrentView('home')}
                        className={`p-2 mx-1 text-center align-middle rounded-2xl transition duration-500
                            ${currentView === 'home' ? 'bg-[#091C98] text-white' : 'hover:bg-[#091C98] hover:text-white'}`}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        type="button"
                        onClick={() => setCurrentView('account')}
                        className={`p-2 mx-1 text-center align-middle rounded-2xl transition duration-500
                            ${currentView === 'account' ? 'bg-[#091C98] text-white' : 'hover:bg-[#091C98] hover:text-white'}`}
                    >
                        Account
                    </button>
                </li>
                <li>
                    <button 
                        type="button"
                        onClick={() => setCurrentView('notification')}
                        className={`p-2 mx-1 text-center align-middle rounded-2xl transition duration-500
                            ${currentView === 'notification' ? 'bg-[#091C98] text-white' : 'hover:bg-[#091C98] hover:text-white'}`}
                    >
                        Notification
                    </button>
                </li>
            </ul>
        </nav>
    );
}