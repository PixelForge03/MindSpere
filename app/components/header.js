import React from "react";
import styles from "../style.module.css";
import service from "../pages/service";

const Header = () => {
  return (
    <header className={styles.header}>
      	<div className={styles.headContainer}>
    		<div className={styles.logo}>
    	 		<h1 className={styles.title}>MindSphere</h1>
  	    	</div>

        	<nav className={styles.navBar}>
        		<ul>
            		<li><a href="#home">Beranda</a></li>
            		<li><a href="#about">Tentang Kita</a></li>
            		<li><a href="../">Service</a></li>
					<li><a href="#contact">Blog</a></li>
          		</ul>
        	</nav>

        	
      	</div>
    </header>
  );
};
export default Header;
