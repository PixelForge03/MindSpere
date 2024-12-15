import React from "react";
import styles from "../style.module.css";
import service from "../pages/service";

// File: pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">MindSphere</div>
                <ul>
                    <li><Link href="#">Beranda</Link></li>
                    <li><Link href="#">Tentang kita</Link></li>
                    <li><Link href="#">Service</Link></li>
                    <li><Link href="#">Blog</Link></li>
                </ul>
            </nav>

            {/* Konten utama */}
            <div className="container">
                {/* Teks konten */}
                <div className="content">
                    <h2>Kesehatan Mental</h2>
                    <p>
                        Kesehatan mental bukanlah kelemahan, melainkan tanda keberanian untuk sembuh.
                        Setiap langkah menuju pemulihan adalah langkah menuju kekuatan sejati. Jangan
                        biarkan stigma atau rasa malu menghalangi perjalananmu. Setiap perjalanan dimulai
                        dengan keberanian untuk memulai. Kamu tidak sendirian.
                    </p>
                    {/* Tombol */}
                    <div className="buttons">
                        <button className="login">Login</button>
                        <button>Daftar</button>
                    </div>
                </div>

                {/* Gambar */}
                <div className="image">
                    <Image
                        src="/mental-health.png"
                        alt="Mental Health"
                        width={400}
                        height={300}
                        layout="responsive"
                    />
                </div>
            </div>
        </>
    );
}

