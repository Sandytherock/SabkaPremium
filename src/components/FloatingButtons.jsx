import React from 'react'
import { trackCustomEvent } from '../lib/metaPixel'

function FloatingButtons() {
  const handleTelegramClick = () => {
    trackCustomEvent('TelegramButtonClick', {
      button_location: 'floating_button'
    })
  }

  const handleInstagramClick = () => {
    trackCustomEvent('InstagramButtonClick', {
      button_location: 'floating_button'
    })
  }

  const handleWhatsAppClick = () => {
    trackCustomEvent('WhatsAppButtonClick', {
      button_location: 'floating_button'
    })
  }

  return (
    <>
      <a 
        href="https://t.me/Somya2208" 
        className="btn-float tg" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Telegram"
        onClick={handleTelegramClick}
      >
        <i className="fa-brands fa-telegram"></i>
      </a>
      <a 
        href="https://instagram.com/sabka_premium" 
        className="btn-float wa" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        onClick={handleInstagramClick}
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a 
        href="https://wa.me/919511335264" 
        className="btn-float wa-green" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  )
}

export default FloatingButtons
