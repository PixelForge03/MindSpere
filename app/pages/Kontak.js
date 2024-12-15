import Image from 'next/image';
import '../styles/Kontak.css'; // Import file CSS

export default function Home() {
  return (
    <div className="container ">

      <section className="contact">
        <h2>HUBUNGI KAMI</h2>
        <p>
          Jika kamu ingin curhat atau pengen sekedar cerita, jangan sungkan ya hubungi kami okayy!!!
        </p>
        <div className="contact-info">
          <div className="info">
            <span>📞</span> No.tel: 0819-9897-0910
          </div>
          <div className="info">
            <span>📧</span> Email: mindsphere@gmail.com
          </div>
          <div className="info">
            <span>🌐</span> Website: www.mindsphere.com
          </div>
          <div className="info">
            <span>📍</span> Alamat: Sulawesi Selatan, Kota Palopo
          </div>
        </div>
        <div className="social">
          <p>Follow us</p>
          <a href="#" className="instagram">@mindsphere</a>
        </div>
      </section>

      <div className="image-container">
        <Image
          src="/images/ImageKontak.jpeg" // Ganti dengan path gambar Anda
          alt="Illustration"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
