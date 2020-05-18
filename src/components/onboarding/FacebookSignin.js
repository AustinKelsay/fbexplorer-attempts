import React from "react"


const FacebookSignin = () => {


    return(
        <div className="facebook-signin">
            <div  id="fb-login"
            className="fb-login-button" 
            scope="public_profile"
            data-width="" 
            data-size="large" 
            data-button-type="login_with" 
            data-auto-logout-link="false" 
            data-use-continue-as="true">
            </div>

            <br/>
            <div className="login-info">
                <a href="https://www.facebook.com/dyi/?x=AdkadZSUMBkpk0EF&referrer=yfi_settings" target="_blank">
                    <button className="btn btn-primary btn-lg">
                        Download Data
                    </button>
                </a>
            </div>
        </div>
    )
}

export default FacebookSignin;


