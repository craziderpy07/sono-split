import React, { useState } from "react";
import "./App.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LabelList,
  Cell,
} from "recharts";

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setPopupVisible(true); // Show the popup
  };

  const data = [
    { name: "Ableton", price: 749 },
    { name: "Serato", price: 249 + 9.99 * 12 },
    { name: "Rekordbox", price: 360 },
    { name: "SonoSplit", price: 200 },
    { name: "Traktor", price: 149 },
    { name: "Muse", price: 0 },
    { name: "Audacity", price: 0 },
  ];

  return (
    <div className="App">
      <header className="hero">
        <h1>SonoSplit</h1>
        <p>Built for producers. Tuned for impact.</p>
        <a href="#products" className="btn">
          Explore the Experience
        </a>
      </header>

      <section className="hook">
        <div className="hook-content">
          <div className="hook-text">
            <h2>Customize Music Like Never Before</h2>
            <p>
              You're not just making music—you're shaping how it's heard.
              <br /> <br />
              <strong>SonoSplit</strong> gives musicians and producers the tools
              to craft immersive, layered audio experiences—without the
              technical overload.
            </p>
            <p>
              Whether you're isolating stems, building spatial depth, or
              experimenting with texture, our intuitive interface puts pro-level
              control at your fingertips.
              <br />
              Your sound, your listeners, your vision—brought to life.
            </p>
          </div>
          <div className="hook-image">
            <section className="products" id="products">
              <div className="product-grid">
                <div className="product-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2706/2706009.png"
                    alt="SonoSplit"
                  />
                  <h3>SonoSplit</h3>
                  <h2> $200 </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>
            <a href="#customization" className="feature-link">
              🎛️ Fully control every layer and profile to express who you are
            </a>
          </li>
          <li>
            <a href="#affordability" className="feature-link">
              💸 Reasonably affordable without compromising on quality
            </a>
          </li>
          <li>
            <a href="#beginner-ui" className="feature-link">
              🎧 Beginner-friendly UI with easy-to-navigate workflows
            </a>
          </li>
        </ul>

        <h2>What Else?</h2>
        <ul>
          <li>
            <a href="#storage" className="feature-link">
              🪪 Ready to use with no setup—just power up and go.
            </a>
          </li>
          <li>
            <a href="#file-types" className="feature-link">
              🎵 Compatible with .mp3, .flac, .wav, .ogg, and more.
            </a>
          </li>
          <li>
            <a href="#battery" className="feature-link">
              🔋 Enjoy long-lasting, portable power for hours of use.
            </a>
          </li>
        </ul>
      </section>

      <section className="customization" id="customization">
        <h2>✅ Sculpt Your Personal Sonic Identity</h2>
        <p>
          SonoSplit gives you full control to shape every layer and profile,
          allowing you to craft a sound that’s entirely your own. No templates,
          no limits—just your creativity. Stand out by building a signature
          sound that no one else can replicate.
        </p>
        <p>Express who you are, and make your music unforgettable.</p>
      </section>

      <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1977/1977285.png"
            alt="product-design"
          />
        </div>
      </div>

      <section className="affordability" id="affordability">
        <h2>✅ Reasonably Priced & Ready to Go Anywhere</h2>
        <p>
          We know how pricey gear and software can get. That’s why SonoSplit is
          designed to be <strong>reasonably affordable</strong>, giving you
          pro-level features without the premium price tag.
        </p>
        <p>
          Plus, it’s <strong>portable</strong>—whether you're on a laptop in a
          café or your bedroom studio, your tools move with you.
        </p>
        <p>Spend less, create more, stress never.</p>
      </section>

      <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/256/8098/8098514.png"
            alt="cheap"
          />
        </div>
      </div>

      <section className="beginner-ui" id="beginner-ui">
        <h2>✅ Built for Beginners (But Loved by All)</h2>
        <p>
          SonoSplit is crafted with <strong>beginners in mind</strong>—but don’t
          let that fool you. Its <strong>intuitive layout</strong>,{" "}
          <strong>simple controls</strong>, and{" "}
          <strong>clean, portable interface</strong> make it ideal for anyone
          who wants to focus more on creativity than configuration.
        </p>
        <p>
          No steep learning curves. Just plug in, play around, and let the
          inspiration flow.
        </p>
      </section>

            <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5632/5632321.png"
            alt="sd-card"
          />
        </div>
      </div>

      <section className="storage" id="storage">
        <h2>✅ Built-in SD Card Storage</h2>
        <p>
          With SonoSplit, you don’t need to worry about external drives or
          constant data transfers. Thanks to the{" "}
          <strong>built-in SD card storage</strong>, all your audio files and
          settings are saved right in the device, making it effortless to carry
          your project wherever you go.
        </p>
        <p>
          No complex configurations—just plug in, power up, and start creating
          with everything you need already at your fingertips.
        </p>
      </section>

      <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2793/2793727.png"
            alt="sd-card"
          />
        </div>
      </div>

      <section className="file-types" id="file-types">
        <h2>✅ Universal Audio File Support</h2>
        <p>
          SonoSplit is designed to work seamlessly with most major audio
          formats, from the most common to the more niche. Whether you’re
          working with <strong>.mp3</strong>, <strong>.flac</strong>,{" "}
          <strong>.wav</strong>, or <strong>.ogg</strong> files, you can be sure
          that SonoSplit will handle them without issue, allowing you to focus
          on creating your ideal sound.
        </p>
        <p>
          No more worrying about compatibility issues. Just import your files
          and start manipulating them as you wish.
        </p>
      </section>

      <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2611/2611282.png"
            alt="mp3-music-file"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5068/5068402.png"
            alt="wav-music-file"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/730/730929.png"
            alt="flac-music-file"
          />
        </div>
      </div>

      <section className="battery" id="battery">
        <h2>✅ Rechargeable Lithium-Ion Battery</h2>
        <p>
          The SonoSplit runs on a{" "}
          <strong>rechargeable lithium-ion battery</strong>, offering you hours
          of uninterrupted audio manipulation and sound design. Whether you're
          in a studio, on the go, or in the middle of a creative session, this
          battery ensures you have the freedom to move without constantly
          needing to plug in.
        </p>
        <p>
          Enjoy reliable power, long battery life, and portability—all in one
          package.
        </p>
      </section>

      <div className="image-gallery-section">
        <div className="afford-image-grid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3570/3570204.png"
            alt="battery"
          />
        </div>
      </div>

      <section className="matrix">
        <h2>📊 Competition Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Individuality</th>
              <th>Beginner Friendly</th>
              <th>Affordability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Serato</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Ableton</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Rekordbox</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Traktor</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Muse</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Audacity</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <strong>SonoSplit</strong>
              </td>
              <td>
                <strong>✅</strong>
              </td>
              <td>
                <strong>✅</strong>
              </td>
              <td>
                <strong>✅</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="matrix">
        <h2>💰 Price Comparison</h2>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="price" fill="#8884d8">
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.name === "SonoSplit" ? "#4CAF50" : "#8884d8"}
                />
              ))}
              <LabelList
                dataKey="price"
                position="top"
                formatter={(value) => `$${value}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>
          SonoSplit was crafted by a passionate team of sound engineers,
          musicians, and developers dedicated to making powerful audio
          experiences accessible to everyone.
        </p>

        <div className="team-members">
        <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4109/4109591.png"
              alt="computer-science-intern"
              className="team-image"
            />
            <h3>Teresa</h3>
            <p>Product Management Intern (Computer Science)</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1933/1933920.png"
              alt="business-intern"
              className="team-image"
            />
            <h3>Margarita</h3>
            <p>Product Management Intern (Business)</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/256/6213/6213479.png"
              alt="Engineer 1"
              className="team-image"
            />
            <h3>Brenden</h3>
            <p>Product Development Team Lead</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3273/3273071.png"
              alt="Engineer 2"
              className="team-image"
            />
            <h3>Tina</h3>
            <p>Graphical User Interface</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3270/3270963.png"
              alt="Engineer 3"
              className="team-image"
            />
            <h3>Alexis</h3>
            <p>Case and Screen</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6213/6213629.png"
              alt="Engineer 4"
              className="team-image"
            />
            <h3>Sara</h3>
            <p>Voice Control and Audio Output</p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4727/4727401.png"
              alt="Engineer 5"
              className="team-image"
            />
            <h3>Daniel</h3>
            <p>Power and Controls</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>✉️ Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>📨 Your message has been sent!</h2>
            <p>Our team will reply back to you shortly.</p>
            <p>Thank you for your patience!</p>
            <button onClick={() => setPopupVisible(false)} className="btn">
              Exit
            </button>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Teresa.</p>
      </footer>
    </div>
  );
}

export default App;
