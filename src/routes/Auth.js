import 'styles/Auth.scss';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { async } from '@firebase/util';
import { authService } from "../fireB";
import AuthForm from "../components/AuthForm";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";
import Footer from 'components/Footer';


function Auth() {
  const onSocialClick = async (e) => {
    console.log('e.target.name->',e.target.name);
    const {target:{name}} = e;
    let provider;
    if(name === "google"){
      provider = new GoogleAuthProvider();
    }else if(name === "github"){
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log('data->',data);
  }

  return (
    <div className='authContainer'>
      <nav className="login_nav">
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix logo' className='nav__logo' onClick={() => {window.location.href = "/netflix_app_2023"}} />
      </nav>
      <div className='login_box'>
        <header className='login_header'>
          <h1>
            로그인
          </h1>
        </header>
        {/* <FontAwesomeIcon icon="fa-brands fa-twitter" size='3x' color={"#04aaff"} style={{marginBottom:30}} /> */}
        <AuthForm />
        <div className='authBtns'> 
          <button name='google' onClick={onSocialClick} className='authBtn googleBtn'>
            Google 계정으로 로그인&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='googleLogo'>
              <FaGoogle />
            </span>
          </button>
          <button name='github' onClick={onSocialClick} className='authBtn githubBtn'>
            Github 계정으로 로그인&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='githubLogo'>
              <FaGithub />
            </span>
          </button>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Auth