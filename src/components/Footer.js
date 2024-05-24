import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer'>
        Abdulkarim Abahusain<span style={styleSymbol}>©</span> 2024
        <pre style={{"opacity":"0.20","fontSize":"12px","fontWeight":"200"}}> - Credit for Deepa Jha - </pre>
    </div>
  )
}
