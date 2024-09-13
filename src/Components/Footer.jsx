import React from 'react'
import CardStyles from '../Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <img src="/images/DH.png" alt='DH-logo' />
      <div className={CardStyles.footerdiv}>
        <img src="/images/ico-facebook.png" alt="" />
        <img src="/images/ico-instagram.png" alt="" />
        <img src="/images/ico-tiktok.png" alt="" />
        <img src="/images/ico-whatsapp.png" alt="" />
      </div>
    </footer>
  )
}

export default Footer
