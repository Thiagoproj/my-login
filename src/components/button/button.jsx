import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';


const Button =() =>{
    return(
        <form>
        <div id="loginButton"
              class="u-align-center u-form-group u-form-submit u-label-top">
                <a onclick="document.getElementById('loginInput').click()" 
                class="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-montserrat u-hover-palette-1-dark-1 u-radius-50 u-btn-1">
                <span class="u-icon">
                  <svg>
                    <StarPurple500SharpIcon class="centro"/>
                </svg>
              </span>Login</a>
              <input
                 id = "loginInput"
                 type="submit" 
                 name="send"
                 value="send" 
                 class="u-form-control-hidden"/>
              </div>
        </form>
    )
}

export default Button