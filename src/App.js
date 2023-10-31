import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import Lottie from 'lottie-react';
import './App.css';
import { motion, delay } from 'framer-motion';
import { GlobalStyle } from './Global';
import Lock from './Lock.json';

function App() {
  const theme = {
    color: {
      Title: '#183D3D',
      bg: 'white',
      textcolor: 'black',
    },
    responsive: {
      mobilelow: '700px',
      mobileup: '1000px',
      Tabletlow: '1600px',
      TabletUp: '2600px',

      Laptoplow: '1000px',
      Laptopup: '1400px',
      Lowest: '300px',
      Middle: '550px',
    },
  };

  const Sectionn = Styled.section`

  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  @media(max-width:${({ theme }) => theme.responsive.Middle}){
    display:block;
}
@media(min-width:${({ theme }) => theme.responsive.Middle}) and (max-width:${({
    theme,
  }) => theme.responsive.mobilelow}){
padding-right:10px;
padding-left:-50px;


}

  `;

  const PartFirst = Styled.div`
  
  height:100vh;
  width:55vw;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  `;
  const PartFirstBackground = Styled.div`
background-color: #FFF3DA;
height: 400px;
border-radius: 100%;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:${({ theme }) => theme.responsive.Middle}){
  width:100vw;
}

`;
  const PartTwo = Styled.div`
  background:#B200FF;
  background:#F2E7F3;

  height:100vh;
  width:40vw;
  box-shadow: 3px 4px 6px 4px;
  &:hover{
  box-shadow: 7px 10px 12px 10px;

  }
 
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
margin-top:2px;
margin-bottom:2px;


@media(max-width:${({ theme }) => theme.responsive.Middle}){
  width:100vw;
  margin:1px;
}

  `;

  const Title = Styled.h1`
  color:${({ theme }) => theme.color.Title};
  font-size:3rem;
  display:flex;
  
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  @media(min-width:${({ theme }) =>
    theme.responsive.Middle}) and (max-width:${({ theme }) =>
    theme.responsive.mobilelow}){
    font-size:1.6rem;
    
    
    
  }

   
  `;

  const ButtonStyle = Styled.button`
  background-color:green;
  color:${({ theme }) => theme.color.textcolor};
  width:20rem;
  height:70px;
  margin-left:5px;
  padding:5px;

  cursor: pointer;

  &:hover{
    color:'black';
    box-shadow:2px 4px 5px 3px;
    box-shaodw:black;
  }
  font-size:2.0rem;
 @media(min-width:${({ theme }) =>
   theme.responsive.mobileup}) and (max-width:${({ theme }) =>
    theme.responsive.Laptopup}){
    font-size:29px;
  }
  @media(min-width:${({ theme }) =>
    theme.responsive.mobilelow}) and (max-width:${({ theme }) =>
    theme.responsive.mobileup}){
    font-size:20px;
    height:45px;
    width:15rem;

  }
  @media(min-width:${({ theme }) =>
    theme.responsive.Middle}) and (max-width:${({ theme }) =>
    theme.responsive.mobilelow}){
      font-size:14px;
      height:35px;
      width:8rem;
    }


  `;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sectionn>
          <div>
            <PartFirst>
              {/* <div className="background"> */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.35,
                  opacity: 0.5,
                  opactity: 0.75,
                  opacity: 1,
                }}
                transition={{ delay: 1.1 }}
              >
                <PartFirstBackground>
                  <div className="cir" style={{ height: '300px' }}>
                    <Lottie loop={true} animationData={Lock} />
                  </div>
                  <div className="circle">
                    <h1>Waiting....</h1>
                  </div>
                </PartFirstBackground>
              </motion.div>

              {/* </div> */}
            </PartFirst>
          </div>

          <div>
            <PartTwo>
              <div className="inside">
                <Title>Login Page</Title>
                <label for="name">UserName :</label>
                <input type="text" placeholder="Enter UserName" id="name" />
                <br />
                <label for="email">Email:</label>
                <input type="text" placeholder="Enter your email" id="email" />
                <br />
                <label for="pass">Password :</label>
                <input
                  type="password"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                  placeholder="Enter the Password"
                  id="pass"
                />
                <label className="forget">Forget Password?</label>
                <div className="check">
                  <input type="checkbox" />
                  <label className="remember">Remember me?</label>
                </div>
                <br /> <ButtonStyle>Submit</ButtonStyle>
                <div
                  className="last"
                  style={{ color: '#C70039', cursor: 'pointer', margin: '4px' }}
                >
                  New Here? Create Your Account!Register Here
                </div>
              </div>
            </PartTwo>
          </div>
        </Sectionn>
      </ThemeProvider>
    </div>
  );
}

export default App;
