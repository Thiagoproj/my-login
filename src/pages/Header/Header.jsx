import React from "react";


const Header =() =>{
   return(
   <head>
    <meta
    name="OQUEEHISSO"
    content="width=device-width, initial-scale=1.0"/>
    
   
    <meta
    charset="utf-8"/>
    

    <meta
    name="keywords"
    content="SISTEMA DE OBSERVALIDADE C.R.I.A."/>
    <meta
    name="description"
    content="Sistema de operação e monitoramenta da inteligência artifical"/>

    <link
    rel= "stylesheet"
    type= "text/css"
    href= "{{ url_for('static',filename='styles/nicepage.css') }}"/>
    <link
    rel= "stylesheet"
    type= "text/css"
    href= "{{ url_for('static',filename='styles/LoginCRIAObs.css') }}"/>
    
   
    <link 
    id="u-theme-google-font" 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"/>
    <link 
    id="u-page-google-font" 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"/>
    

    <meta name="theme-color" content="#478ac9"/>
    <meta property="og:title" content="CRIAops"/>
    <meta property="og:type" content="AIOperationSys"/>
  </head>
  )
}

export default Header