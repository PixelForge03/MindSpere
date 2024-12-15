import React from "react";
import styles from "../style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      	<div className={styles.headContainer}>
    		<div className={styles.logo}>
    	 		<h1 className={styles.title}>MindSphere</h1>
  	    	</div>

        	<nav className={styles.navBar}>
        		<ul>
            		<li><a href="#home">Home</a></li>
            		<li><a href="#about">Education</a></li>
            		<li><a href="#contact">Docs</a></li>
          		</ul>
        	</nav>

        	<div className={styles.loginMenu}>
          		<div className={styles.login}>
            		<a href="">
              			Login
            		</a>
          		</div>
				<div>|</div>
          		<div className={styles.signUp}>
            		<a href="">
             			Sign Up
            		</a>
          		</div>
        	</div>
      	</div>
    </header>
  );
};
export default Header;
