import React from 'react'

function PaymentProofsSection() {
  const proofs = [
    '/assets/Pay1.jpg',
    '/assets/Pay2.jpg',
    '/assets/Pay3.jpg',
    '/assets/Pay4.jpg',
    '/assets/Pay5.jpg',
    '/assets/Pay6.jpg'
  ]

  return (
    <section className="proofs">
      <div className="container">
        <h2>💳 Real Payment Proofs</h2>
        <p className="muted">1000+ orders delivered successfully</p>
        <div className="proof-grid">
          {proofs.map((proof, index) => (
            <img key={index} src={proof} alt={`Payment proof ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentProofsSection
