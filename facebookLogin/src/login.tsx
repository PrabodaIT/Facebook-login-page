import './login.css'


function Login() {
    return (
        <>
            <div className="content">
                <div className="flex-div">
                    <div className="name-content">
                        <h1 className="logo">Facebook</h1>
                        <p>Connect with friends and the world around you on Facebook.</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Email or Phone Number" required />
                        <input type="password" placeholder="Password" required />
                        <button className="login">Log In</button>
                        <a href="#">Forgot Password ?</a>
                        <hr />
                        <button className="create-account">Create New Account</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;