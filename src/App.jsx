import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from './assets/me.jpg';
import { useState } from 'react';

// Add font import for Poppins (modern, Apple-like)
const fontUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
// const linkedinPhoto = 'https://media.licdn.com/dms/image/D5603AQF7Qw7Qw7Qw7Q/profile-displayphoto-shrink_400_400/0/1681234567890?e=1721865600&v=beta&t=EXAMPLE'; // Replace with your actual LinkedIn headshot URL
const green = '#22c55e';

function App() {
  // Lead form state
  const [form, setForm] = useState({
    name: '',
    business: '',
    industry: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        ...form,
        timestamp: new Date().toISOString()
      };
      const res = await fetch('https://monsoon02.app.n8n.cloud/webhook/18b1f55b-7476-475c-9d8b-0ecd8f6b8069', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: '#18191A', color: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', padding: '0 0 48px 0' }}>
      <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {/* Inject Poppins font */}
      <link href={fontUrl} rel="stylesheet" />
      {/* Custom hover styles and green theme */}
      <style>{`
        body, .poppins { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important; }
        .hover-scale {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hover-scale:hover {
          transform: scale(1.04);
          box-shadow: 0 0 24px 0 ${green}44;
        }
        .hover-btn {
          transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
        }
        .hover-btn:hover {
          background: ${green};
          color: #fff !important;
          border-color: ${green};
          box-shadow: 0 0 12px 0 ${green}88;
        }
        .hover-link {
          transition: color 0.2s, text-shadow 0.2s;
        }
        .hover-link:hover {
          color: ${green} !important;
          text-shadow: 0 0 8px ${green}88;
        }
        .section-padding {
          padding-top: 4rem !important;
          padding-bottom: 4rem !important;
        }
        .card-padding {
          padding: 2rem 1.5rem !important;
        }
        .theme-green {
          color: ${green} !important;
        }
        .bg-green {
          background: ${green} !important;
        }
        .border-green {
          border-color: ${green} !important;
        }
        .checkmark {
          color: ${green};
          font-size: 1em;
          margin-right: 0.5em;
        }
        /* Typography improvements - 25% smaller */
        html, body, .poppins {
          font-size: 0.75rem !important;
        }
        h1, .display-4 { font-size: 2.25rem !important; }
        h2 { font-size: 1.65rem !important; }
        h3 { font-size: 1.2rem !important; }
        h4 { font-size: 0.9rem !important; }
        .lead, .fs-5, .card-title {
          font-size: 0.825rem !important;
          font-weight: 600 !important;
        }
        .card-title { font-size: 0.94rem !important; }
        .card-text, p, li, .fs-5, .mb-4, .mb-3, .mb-5, .mb-0 {
          font-size: 0.75rem !important;
          font-weight: 400 !important;
        }
        .card-body, .card-padding {
          font-size: 0.75rem !important;
        }
        @media (min-width: 768px) {
          .card-padding {
            padding: 2.5rem 2rem !important;
          }
          h1, .display-4 { font-size: 2.6rem !important; }
          h2 { font-size: 1.9rem !important; }
        }
        .section-main-heading {
          font-size: 1.87rem !important;
        }
        @media (max-width: 767px) {
          .section-main-heading {
            font-size: 1.12rem !important;
          }
        }
        .who-we-work-with-heading {
          margin-bottom: 2.5rem !important;
        }
        .who-we-work-with-card h3 {
          font-size: 1.5rem !important;
        }
        .what-we-do-card-title {
          font-size: 1.5rem !important;
        }
      `}</style>
      {/* Hero Section */}
      <Container fluid className="py-5 bg-black text-center section-padding" style={{ maxWidth: '100vw', overflowX: 'hidden', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Row className="align-items-center justify-content-center g-0">
          <Col md={4} className="mb-4 mb-md-0">
            <img src={myPhoto} alt="Mayank Kainth" className="rounded-circle shadow hover-scale" style={{ width: 180, height: 180, objectFit: 'cover', border: `4px solid ${green}`, cursor: 'pointer' }} />
            <div className="mt-4 d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/mayank-kainth-8a0989195/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm hover-btn border-green" style={{ borderRadius: 20, padding: '0.5rem 1.5rem', borderColor: green }}>
                LinkedIn
              </a>
              <a href="https://monso0n.github.io/mayank-kainth/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm hover-btn border-green" style={{ borderRadius: 20, padding: '0.5rem 1.5rem', borderColor: green }}>
                Personal Website
              </a>
            </div>
          </Col>
          <Col md={6} className="text-md-start">
            <h1 className="display-4 fw-bold mb-4 theme-green">Elev8 AI Solutions </h1>
            <h2 className="h4 fw-light mb-4">Mayank Kainth, AI Automation Engineer</h2>
            <p className="mb-5">I'm a local expert helping small businesses unlock the power of AI automations to save time, reduce costs, and boost productivity.</p>
            <Button variant="success" size="lg" href="#contact" className="hover-btn" style={{ padding: '0.75rem 2.5rem', fontSize: '1.25rem', background: green, borderColor: green }}>Get in Touch</Button>
          </Col>
        </Row>
      </Container>

      {/* What We Do Section */}
      <Container fluid className="bg-secondary bg-opacity-10 rounded-4 my-4 section-padding" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '80vw', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="fw-bold text-center mb-5 section-main-heading">What We Do</h2>
          <Row className="g-4 justify-content-center">
            <Col md={6} lg={5}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding mb-4" style={{ cursor: 'pointer', borderLeft: `4px solid ${green}` }}>
                <Card.Body>
                  <h4 className="mb-3 text-center what-we-do-card-title">📞 AI Voice Receptionist</h4>
                  <ul className="list-unstyled mb-0">
                    <li><span className="checkmark">✅</span>24/7 Call Answering</li>
                    <li><span className="checkmark">✅</span>Appointment Booking</li>
                    <li><span className="checkmark">✅</span>Message Taking + SMS Alerts</li>
                  </ul>
                  <p className="mt-3">Never miss a call again. Our AI-powered receptionist answers your calls, books appointments, and sends summaries right to your phone — even when you're off the clock.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={5}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding mb-4" style={{ cursor: 'pointer', borderLeft: `4px solid ${green}` }}>
                <Card.Body>
                  <h4 className="mb-3 text-center what-we-do-card-title">📣 Social Media Content Generator</h4>
                  <ul className="list-unstyled mb-0">
                    <li><span className="checkmark">✅</span>Ready-to-post social content</li>
                    <li><span className="checkmark">✅</span>Custom to your brand and audience</li>
                    <li><span className="checkmark">✅</span>Optional scheduling & posting</li>
                  </ul>
                  <p className="mt-3">Consistent, engaging posts — written for you, by AI. We help you stay active online, reach new customers, and save hours of your time each week.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={5}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding mb-4" style={{ cursor: 'pointer', borderLeft: `4px solid ${green}` }}>
                <Card.Body>
                  <h4 className="mb-3 text-center what-we-do-card-title">🎯 Lead Gathering</h4>
                  <ul className="list-unstyled mb-0">
                    <li><span className="checkmark">✅</span>Website lead capture chatbots</li>
                    <li><span className="checkmark">✅</span>Instant lead notifications</li>
                    <li><span className="checkmark">✅</span>CRM & email integrations</li>
                  </ul>
                  <p className="mt-3">Stop wasting time chasing the wrong customers. We build smart forms, chatbots, and landing pages to help you collect qualified leads — automatically.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={5}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding mb-4" style={{ cursor: 'pointer', borderLeft: `4px solid ${green}` }}>
                <Card.Body>
                  <h4 className="mb-3 text-center what-we-do-card-title">💌 AI-Powered Lead Outreach</h4>
                  <ul className="list-unstyled mb-0">
                    <li><span className="checkmark">✅</span>Personalized email/DM outreach</li>
                    <li><span className="checkmark">✅</span>Automated follow-ups</li>
                    <li><span className="checkmark">✅</span>Warm leads sent directly to you</li>
                  </ul>
                  <p className="mt-3">Reach out to leads automatically with personalized, professional emails and messages. Our AI learns about your business and writes outreach that gets replies.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Who We Work With Section */}
      <Container fluid className="section-padding" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '80vw', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="fw-bold text-center mb-5 section-main-heading">Who We Work With</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card bg="dark" text="light" className="shadow-lg card-padding border-green" style={{ borderWidth: 2 }}>
                <Card.Body>
                  <ul className="fs-5 mb-0 text-center" style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li><h3 className="fw-bold mb-3 theme-green">Local Service Businesses</h3></li>
                    <li><h3 className="fw-bold mb-3 theme-green">Clinics & Health Providers</h3></li>
                    <li><h3 className="fw-bold mb-3 theme-green">Real Estate Agents</h3></li>
                    <li><h3 className="fw-bold mb-3 theme-green">Coaches & Consultants</h3></li>
                    <li><h3 className="fw-bold mb-0 theme-green">Trades (Plumbers, Electricians, Auto Shops)</h3></li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="section-padding text-center" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '80vw', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="fw-bold mb-4 section-main-heading">Let's Automate Your Business</h2>
          <p className="fs-5 mb-4">Ready to work smarter, not harder? Book a free call or message us today to see how AI can help your business grow.</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Button variant="success" size="lg" href="#contact" className="hover-btn" style={{ padding: '0.75rem 2.5rem', fontSize: '1.15rem', background: green, borderColor: green }}>Contact Us</Button>
            <Button variant="outline-success" size="lg" className="hover-btn border-green" style={{ padding: '0.75rem 2.5rem', fontSize: '1.15rem', color: green, borderColor: green }} href="#contact">Book a Demo</Button>
          </div>
        </div>
      </Container>

      {/* About AI Automations */}
      <Container fluid className="section-padding" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '80vw', margin: '0 auto', padding: '0 1rem' }}>
          <Row className="align-items-center g-0">
            <Col md={7}>
              <h2 className="fw-bold mb-4">How AI Automations Can Help Your Business</h2>
              <p className="fs-5 mb-4">AI automations streamline repetitive tasks, improve accuracy, and free up your team to focus on what matters most. From customer support to data entry, AI can help you:</p>
              <ul className="fs-5 mb-4">
                <li>Reduce operational costs</li>
                <li>Increase efficiency and speed</li>
                <li>Deliver better customer experiences</li>
                <li>Scale your business with less overhead</li>
                <li>Minimize human error in daily operations</li>
                <li>Provide 24/7 support and service</li>
              </ul>
            </Col>
            <Col md={5} className="text-center">
              {/* AI robot placeholder from Unsplash */}
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="AI Robot" className="img-fluid rounded shadow hover-scale" style={{ maxHeight: 220, cursor: 'pointer', marginTop: '2rem', marginBottom: '2rem' }} />
            </Col>
          </Row>
        </div>
      </Container>

      {/* Services / Workflows Section */}
      <Container fluid className="bg-secondary bg-opacity-10 rounded-4 my-4 section-padding" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '80vw', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="fw-bold text-center mb-5 section-main-heading">What We Will Build For You</h2>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>AI Chatbots for Customer Support</Card.Title>
                  <Card.Text>Instantly answer FAQs, book appointments, and handle inquiries 24/7 on your website or Facebook page.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>Automated Lead Capture & Follow-up</Card.Title>
                  <Card.Text>Collect leads from your website and automatically send personalized follow-up emails to boost conversions.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>Invoice & Document Automation</Card.Title>
                  <Card.Text>Generate, send, and track invoices or contracts automatically, saving you time and reducing paperwork.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>Social Media Scheduling & Content Generation</Card.Title>
                  <Card.Text>Use AI to draft posts and schedule them across platforms, keeping your business active online.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>Data Entry & CRM Automation</Card.Title>
                  <Card.Text>Automatically update your CRM with new customer info, orders, or support tickets, reducing manual work.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="h-100 shadow hover-scale card-padding" style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>Custom Workflow Automation</Card.Title>
                  <Card.Text>Connect your website, email, spreadsheets, and other tools to automate repetitive business processes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Lead Connection Form Section */}
      <Container fluid id="contact" className="section-padding" style={{ width: '100%', padding: 0 }}>
        <div style={{ maxWidth: '50vw', margin: '0 auto', padding: '0 1rem' }}>
          <Row className="justify-content-center">
            <Col md={7} lg={6}>
              <Card bg="dark" text="light" className="shadow-lg border-green card-padding hover-scale" style={{ borderWidth: 2, cursor: 'pointer' }}>
                <Card.Body>
                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                      <h3 style={{ color: green, fontWeight: 900, marginBottom: '1.5rem' }}>Thank you!</h3>
                      <p style={{ fontSize: '1.1rem' }}>We have received your details and will be in touch shortly.</p>
                    </div>
                  ) : (
                    <>
                      <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: green, textAlign: 'center', lineHeight: 1.1, letterSpacing: '-1px', marginBottom: '2rem' }}>Get a Free AI Automation Consultation</h3>
                      <p className="mb-4 text-center">Interested in AI automations for your business? Fill out the form below and I'll reach out to discuss how Elev8 AI can help you grow.</p>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formName">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="Enter your name" required style={{ padding: '0.75rem 1.25rem', fontSize: '1.1rem' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBusinessName">
                          <Form.Label>Business Name</Form.Label>
                          <Form.Control type="text" name="business" value={form.business} onChange={handleInputChange} placeholder="Your business name" required style={{ padding: '0.75rem 1.25rem', fontSize: '1.1rem' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formIndustry">
                          <Form.Label>Industry</Form.Label>
                          <Form.Control type="text" name="industry" value={form.industry} onChange={handleInputChange} placeholder="e.g. Real Estate, Health, Trades" required style={{ padding: '0.75rem 1.25rem', fontSize: '1.1rem' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Enter your email" required style={{ padding: '0.75rem 1.25rem', fontSize: '1.1rem' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formPhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="tel" name="phone" value={form.phone} onChange={handleInputChange} placeholder="Enter your phone number" required style={{ padding: '0.75rem 1.25rem', fontSize: '1.1rem' }} />
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100 hover-btn" style={{ padding: '0.75rem 2.5rem', fontSize: '1.15rem', background: green, borderColor: green, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }} disabled={submitting}>
                          {submitting ? 'Submitting...' : 'SUBMIT'}
                        </Button>
                        {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
                      </Form>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      </main>
      <footer className="text-center py-4 bg-black text-secondary mt-5" style={{ maxWidth: '100vw', overflowX: 'hidden', paddingTop: '2rem', paddingBottom: '2rem', marginTop: 'auto' }}>
        <small>&copy; {new Date().getFullYear()} Elev8 AI. Built by Mayank Kainth. | <a href="https://www.linkedin.com/in/mayank-kainth-8a0989195/" target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: '#f8f9fa', textDecoration: 'underline' }}>LinkedIn</a> | <a href="https://monso0n.github.io/mayank-kainth/" target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: '#f8f9fa', textDecoration: 'underline' }}>Personal Website</a></small>
      </footer>
    </div>
  );
}

export default App;
