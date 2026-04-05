import "./header.css";

const Header = () => {
    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    return (
        <div className="header-container">
            <div className="header-gradient">
                
                <div className="header-card">
                    
                 
                    <div className="header-left">
                        <div className="icon-box">
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <h1 className="header-title">
                            Counter Dashboard
                        </h1>
                    </div>

                
                    <div className="header-date">
                        {today}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;