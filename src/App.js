import './App.css';
import Technologies from "./Technologies";

import Header from "./Header";
import Footer from "./Footer";

function App(fdsfds) {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://cdn-brilio-net.akamaized.net/news/2015/09/03/15959/5-logo-brand-yang-produknya-terkenal-mahal-150903d.png"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div className='desciption'>
                    <img src="https://s1.1zoom.me/big7/367/Lake_Mountains_Sunrises_433183.jpg" alt=""/>
                </div>
                <div className='logo'>
                    <img
                        src="https://cdn-brilio-net.akamaized.net/news/2015/09/03/15959/5-logo-brand-yang-produknya-terkenal-mahal-150903d.png"
                        alt=""/>
                </div>
                <div>
                    My Post
                    <div>
                        New Post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
