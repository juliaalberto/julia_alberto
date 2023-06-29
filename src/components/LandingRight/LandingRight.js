
import './LandingRight.css';

import image from "./../../components/IMG_8003.JPG";

import * as React from 'react';

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

const LandingRight = () =>{
    return(
             <div class="LandingRightContainer">
                <div class= "LeafDesign"></div>
                {/* <div class= "CircleText"></div> */}

                <svg class= "CircleText" width="285" height="285" viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M285 142.5C285 221.201 221.201 285 142.5 285C63.7994 285 0 221.201 0 142.5C0 63.7994 63.7994 0 142.5 0C221.201 0 285 63.7994 285 142.5ZM57 142.5C57 189.72 95.2797 228 142.5 228C189.72 228 228 189.72 228 142.5C228 95.2797 189.72 57 142.5 57C95.2797 57 57 95.2797 57 142.5Z" fill="#F7B318"/>
 <path fill-rule="evenodd" clip-rule="evenodd" d="M143.199 35.1074C142.118 35.1074 141.119 34.9479 140.201 34.6289C139.29 34.3099 138.505 33.8346 137.848 33.2031C137.19 32.5716 136.679 31.7839 136.314 30.8398C135.956 29.8958 135.777 28.8053 135.777 27.5684C135.777 26.416 135.95 25.3711 136.295 24.4336C136.64 23.4961 137.141 22.6921 137.799 22.0215C138.43 21.377 139.211 20.8789 140.142 20.5273C141.08 20.1758 142.102 20 143.209 20C143.821 20 144.371 20.0358 144.859 20.1074C145.354 20.1725 145.81 20.2604 146.226 20.3711C146.663 20.4948 147.057 20.6348 147.408 20.791C147.766 20.9408 148.079 21.0807 148.346 21.2109V24.7363H147.916C147.734 24.5801 147.503 24.3945 147.223 24.1797C146.949 23.9648 146.637 23.7533 146.285 23.5449C145.927 23.3366 145.54 23.1608 145.123 23.0176C144.706 22.8743 144.26 22.8027 143.785 22.8027C143.258 22.8027 142.756 22.8874 142.281 23.0566C141.806 23.2194 141.366 23.4928 140.963 23.877C140.579 24.248 140.266 24.7396 140.025 25.3516C139.791 25.9635 139.674 26.7057 139.674 27.5781C139.674 28.4896 139.801 29.2513 140.055 29.8633C140.315 30.4753 140.641 30.957 141.031 31.3086C141.428 31.6667 141.871 31.9238 142.359 32.0801C142.848 32.2298 143.329 32.3047 143.805 32.3047C144.26 32.3047 144.71 32.2363 145.152 32.0996C145.601 31.9629 146.015 31.7773 146.392 31.543C146.711 31.3542 147.008 31.1523 147.281 30.9375C147.555 30.7227 147.779 30.5371 147.955 30.3809H148.346V33.8574C147.981 34.0202 147.633 34.1732 147.301 34.3164C146.969 34.4596 146.62 34.5833 146.256 34.6875C145.78 34.8242 145.335 34.9284 144.918 35C144.501 35.0716 143.928 35.1074 143.199 35.1074ZM168.569 30.3726C168.198 32.6603 167.247 34.3724 165.716 35.5088C164.187 36.6389 162.266 37.0159 159.952 36.6399C157.645 36.265 155.946 35.2995 154.853 33.7434C153.761 32.1808 153.401 30.2557 153.773 27.968C154.148 25.6611 155.1 23.9458 156.628 22.8222C158.157 21.6922 160.075 21.3147 162.382 21.6896C164.683 22.0634 166.382 23.029 167.482 24.5861C168.582 26.1368 168.944 28.0657 168.569 30.3726ZM163.072 33.2093C163.503 32.8308 163.854 32.36 164.123 31.797C164.394 31.2276 164.594 30.5412 164.725 29.738C164.865 28.8769 164.884 28.1281 164.783 27.4917C164.682 26.8552 164.501 26.3246 164.241 25.8996C163.975 25.4608 163.642 25.1197 163.239 24.8762C162.843 24.6337 162.414 24.4749 161.952 24.3997C161.482 24.3235 161.025 24.335 160.581 24.4342C160.142 24.5344 159.718 24.7491 159.308 25.0783C158.929 25.3859 158.584 25.8411 158.275 26.4439C157.974 27.0413 157.755 27.7577 157.619 28.5931C157.48 29.4478 157.458 30.1928 157.553 30.8282C157.655 31.4582 157.836 31.9889 158.095 32.4202C158.355 32.8516 158.686 33.1922 159.087 33.4421C159.488 33.692 159.927 33.8556 160.402 33.9329C160.878 34.0102 161.345 33.9938 161.805 33.8839C162.266 33.7675 162.688 33.5426 163.072 33.2093ZM180.57 41.8061C181.669 41.9054 182.568 41.9378 183.265 41.9031L185.538 35.0948L179.175 32.9702L178.306 35.5732L181.057 36.4916L180.154 39.1964C180.014 39.1634 179.859 39.1222 179.691 39.0727C179.528 39.0253 179.379 38.9789 179.243 38.9335C177.662 38.4057 176.602 37.6023 176.063 36.5233C175.524 35.4442 175.51 34.142 176.019 32.6167C176.268 31.8695 176.599 31.2489 177.011 30.755C177.431 30.257 177.898 29.8877 178.41 29.647C178.946 29.4002 179.501 29.2697 180.075 29.2556C180.65 29.2415 181.252 29.3395 181.882 29.5498C182.419 29.7292 182.901 29.9692 183.33 30.27C183.764 30.5729 184.127 30.8829 184.419 31.2001C184.672 31.4699 184.925 31.7809 185.178 32.133C185.434 32.479 185.626 32.7457 185.756 32.9331L186.154 33.0661L187.233 29.8333C186.389 29.0094 185.584 28.3801 184.816 27.9453C184.05 27.5044 183.214 27.1324 182.306 26.8293C179.91 26.0294 177.822 26.0635 176.043 26.9314C174.266 27.7932 173.02 29.2956 172.304 31.4384C171.554 33.6862 171.629 35.6709 172.53 37.3925C173.433 39.1079 175.058 40.3573 177.404 41.1407C178.417 41.4788 179.472 41.7006 180.57 41.8061ZM198.426 50.5583L195.226 48.8791L194.399 37.1737L189.761 46.0109L186.717 44.4134L193.475 31.538L197.444 33.6211L198.268 43.4613L202.139 36.0854L205.183 37.6829L198.426 50.5583ZM203.044 53.7797L209.852 58.8954L211.401 56.8343L209.496 55.4029L215.134 47.9003L217.039 49.3318L218.587 47.2707L211.78 42.155L210.231 44.2161L212.136 45.6475L206.498 53.1501L204.593 51.7186L203.044 53.7797ZM232.273 64.2877L229.127 61.0127L220.669 69.1374L218.071 66.4329L226.53 58.3082L223.384 55.0332L225.412 53.0849L234.301 62.3394L232.273 64.2877ZM227.869 77.653L232.706 84.6612L234.828 83.1966L233.475 81.2356L241.198 75.9045L242.552 77.8655L244.673 76.4009L239.836 69.3927L237.714 70.8573L239.068 72.8183L231.344 78.1494L229.991 76.1884L227.869 77.653ZM255.575 97.2897L240.165 98.7326L238.365 94.9388L249.229 83.9145L250.916 87.47L243.194 95.0252L253.93 93.8224L255.575 97.2897ZM243.655 107.465L246.581 117.567L249.283 116.785L247.394 110.265L250.846 109.266L252.599 115.316L255.3 114.533L253.548 108.483L255.958 107.785L257.847 114.304L260.548 113.521L257.622 103.419L243.655 107.465ZM253.498 152.977C252.067 152.919 250.927 152.264 250.078 151.012C249.236 149.766 248.857 148.102 248.94 146.02C248.989 144.817 249.135 143.77 249.38 142.881C249.63 141.999 249.934 141.174 250.291 140.406L253.774 140.546L253.758 140.956C253.108 141.705 252.599 142.551 252.228 143.494C251.858 144.444 251.655 145.361 251.619 146.246C251.61 146.473 251.617 146.773 251.641 147.146C251.666 147.518 251.718 147.823 251.8 148.061C251.906 148.352 252.043 148.592 252.211 148.781C252.379 148.977 252.635 149.082 252.98 149.096C253.299 149.108 253.578 148.983 253.816 148.719C254.061 148.462 254.256 148.075 254.4 147.56C254.553 147.019 254.696 146.444 254.831 145.837C254.973 145.237 255.142 144.674 255.339 144.148C255.785 142.941 256.358 142.081 257.056 141.568C257.761 141.062 258.617 140.83 259.625 140.87C260.978 140.925 262.057 141.574 262.86 142.818C263.67 144.069 264.036 145.648 263.959 147.554C263.921 148.51 263.788 149.45 263.562 150.372C263.342 151.302 263.079 152.102 262.772 152.774L259.425 152.639L259.441 152.239C259.933 151.673 260.352 150.969 260.699 150.13C261.051 149.297 261.246 148.438 261.281 147.554C261.294 147.241 261.284 146.928 261.251 146.614C261.224 146.307 261.158 146.008 261.052 145.717C260.965 145.459 260.824 145.235 260.63 145.045C260.442 144.855 260.221 144.755 259.968 144.745C259.584 144.729 259.282 144.863 259.062 145.148C258.848 145.432 258.641 145.978 258.439 146.784C258.307 147.313 258.179 147.82 258.055 148.303C257.931 148.793 257.767 149.318 257.562 149.876C257.153 150.974 256.622 151.774 255.97 152.275C255.324 152.783 254.5 153.017 253.498 152.977ZM247.661 161.818C247.164 162.653 246.808 163.6 246.592 164.659C246.446 165.374 246.367 165.942 246.354 166.365C246.34 166.787 246.353 167.245 246.392 167.738C246.421 168.116 246.473 168.482 246.547 168.836C246.621 169.19 246.701 169.562 246.787 169.952L250.194 170.647L250.272 170.264C250.154 170.061 250.017 169.804 249.861 169.493C249.705 169.182 249.567 168.851 249.446 168.501C249.292 168.084 249.192 167.642 249.148 167.175C249.103 166.714 249.126 166.26 249.217 165.813C249.312 165.348 249.482 164.89 249.726 164.442C249.977 163.995 250.317 163.613 250.748 163.295C251.17 162.983 251.707 162.76 252.359 162.627C253.01 162.501 253.781 162.529 254.674 162.711C255.529 162.886 256.233 163.149 256.786 163.501C257.337 163.859 257.756 164.264 258.043 164.715C258.338 165.187 258.518 165.672 258.583 166.17C258.654 166.67 258.636 167.178 258.531 167.695C258.436 168.16 258.276 168.583 258.053 168.963C257.829 169.342 257.579 169.687 257.304 169.996C257.029 170.298 256.759 170.562 256.494 170.787C256.228 171.019 256 171.208 255.81 171.355L255.724 171.776L259.178 172.481C259.359 172.246 259.559 171.968 259.777 171.647C260.001 171.334 260.217 170.976 260.425 170.573C260.617 170.187 260.794 169.758 260.957 169.286C261.125 168.822 261.27 168.29 261.392 167.691C261.614 166.606 261.646 165.57 261.489 164.581C261.331 163.598 260.999 162.733 260.494 161.986C259.968 161.207 259.281 160.555 258.431 160.03C257.582 159.504 256.592 159.126 255.463 158.895C254.251 158.648 253.147 158.605 252.15 158.767C251.153 158.936 250.279 159.279 249.528 159.797C248.778 160.315 248.155 160.988 247.661 161.818ZM240.795 184.111L243.815 176.149L246.225 177.063L245.38 179.291L254.155 182.619L255 180.391L257.411 181.305L254.391 189.267L251.981 188.353L252.825 186.125L244.051 182.797L243.206 185.025L240.795 184.111ZM237.395 191.413L232.136 200.522L234.572 201.928L237.965 196.05L241.077 197.847L237.928 203.302L240.364 204.708L243.513 199.253L245.687 200.508L242.293 206.386L244.729 207.792L249.988 198.684L237.395 191.413ZM220.407 215.679L222.692 212.88L234.326 214.412L226.595 208.099L228.769 205.437L240.033 214.633L237.198 218.105L227.392 216.944L233.844 222.213L231.67 224.875L220.407 215.679ZM214.621 221.332C213.723 221.702 212.869 222.245 212.06 222.962C211.514 223.445 211.109 223.852 210.845 224.182C210.58 224.512 210.315 224.885 210.05 225.303C209.846 225.622 209.668 225.946 209.514 226.273C209.361 226.601 209.201 226.946 209.037 227.31L211.342 229.912L211.634 229.653C211.662 229.42 211.707 229.132 211.77 228.79C211.832 228.447 211.92 228.1 212.033 227.747C212.16 227.321 212.347 226.908 212.592 226.508C212.833 226.112 213.124 225.763 213.465 225.461C213.821 225.146 214.231 224.882 214.696 224.671C215.165 224.464 215.667 224.363 216.202 224.367C216.727 224.371 217.29 224.516 217.891 224.802C218.487 225.091 219.087 225.577 219.691 226.26C220.27 226.913 220.674 227.546 220.905 228.159C221.13 228.777 221.222 229.352 221.181 229.885C221.133 230.44 220.986 230.936 220.738 231.373C220.495 231.815 220.175 232.211 219.781 232.56C219.425 232.875 219.044 233.118 218.637 233.287C218.23 233.456 217.823 233.581 217.417 233.663C217.016 233.74 216.642 233.789 216.295 233.809C215.943 233.834 215.647 233.848 215.407 233.852L215.085 234.137L217.423 236.776C217.709 236.696 218.036 236.594 218.403 236.469C218.77 236.352 219.157 236.196 219.566 235.999C219.951 235.806 220.35 235.569 220.764 235.29C221.177 235.02 221.612 234.682 222.071 234.276C222.899 233.542 223.548 232.733 224.016 231.848C224.48 230.967 224.734 230.077 224.78 229.175C224.827 228.237 224.669 227.303 224.306 226.373C223.942 225.442 223.379 224.546 222.614 223.683C221.794 222.757 220.937 222.06 220.043 221.59C219.144 221.126 218.239 220.875 217.328 220.838C216.417 220.801 215.515 220.966 214.621 221.332ZM194.659 235.714L203.548 230.092L211.32 242.382L202.431 248.003L200.927 245.626L206.664 241.999L205.322 239.878L199.999 243.244L198.495 240.867L203.819 237.501L201.898 234.463L196.162 238.091L194.659 235.714ZM172.511 250.262L165.277 252.045L165.95 254.776L173.184 252.993L172.511 250.262ZM132.211 248.634C133.289 248.721 134.272 248.961 135.161 249.352C136.044 249.744 136.788 250.281 137.392 250.963C137.997 251.645 138.443 252.472 138.73 253.442C139.011 254.412 139.102 255.513 139.003 256.746C138.91 257.895 138.654 258.922 138.234 259.829C137.815 260.736 137.251 261.497 136.541 262.112C135.86 262.704 135.041 263.137 134.085 263.413C133.122 263.688 132.089 263.781 130.986 263.692C130.376 263.643 129.831 263.563 129.35 263.452C128.862 263.347 128.414 263.223 128.008 263.079C127.583 262.921 127.202 262.749 126.864 262.565C126.519 262.387 126.219 262.223 125.963 262.071L126.247 258.558L126.675 258.592C126.844 258.762 127.06 258.966 127.322 259.203C127.577 259.439 127.871 259.675 128.205 259.911C128.545 260.147 128.917 260.354 129.321 260.53C129.725 260.706 130.164 260.814 130.637 260.852C131.163 260.894 131.669 260.85 132.157 260.72C132.644 260.596 133.104 260.359 133.537 260.008C133.95 259.669 134.301 259.204 134.59 258.614C134.873 258.023 135.049 257.292 135.12 256.423C135.193 255.514 135.128 254.745 134.924 254.114C134.713 253.483 134.428 252.977 134.067 252.595C133.7 252.206 133.279 251.914 132.805 251.719C132.33 251.531 131.856 251.417 131.382 251.379C130.928 251.342 130.475 251.374 130.023 251.475C129.564 251.575 129.137 251.727 128.742 251.93C128.408 252.093 128.097 252.27 127.807 252.462C127.517 252.654 127.278 252.821 127.091 252.963L126.701 252.931L126.981 249.466C127.358 249.333 127.717 249.209 128.059 249.093C128.402 248.977 128.759 248.881 129.131 248.807C129.616 248.709 130.068 248.641 130.49 248.603C130.911 248.565 131.485 248.575 132.211 248.634ZM109.8 246.422C108.183 247.432 107.097 249.062 106.543 251.312C105.983 253.582 106.19 255.533 107.161 257.168C108.132 258.808 109.748 259.907 112.011 260.465C114.281 261.024 116.223 260.802 117.838 259.799C119.452 258.802 120.538 257.169 121.097 254.9C121.652 252.649 121.448 250.701 120.486 249.056C119.522 247.417 117.905 246.318 115.636 245.759C113.36 245.198 111.415 245.419 109.8 246.422ZM111.089 250.25C111.403 249.711 111.79 249.27 112.25 248.927C112.66 248.626 113.099 248.436 113.567 248.357C114.035 248.284 114.502 248.305 114.97 248.421C115.438 248.536 115.861 248.734 116.241 249.016C116.621 249.297 116.923 249.663 117.147 250.114C117.372 250.565 117.509 251.108 117.56 251.745C117.603 252.386 117.521 253.126 117.314 253.967C117.112 254.789 116.836 255.485 116.487 256.057C116.131 256.633 115.751 257.059 115.348 257.335C114.913 257.63 114.473 257.81 114.028 257.874C113.576 257.937 113.12 257.912 112.658 257.798C112.203 257.686 111.788 257.493 111.413 257.22C111.032 256.945 110.726 256.578 110.498 256.119C110.272 255.675 110.134 255.131 110.085 254.489C110.035 253.846 110.115 253.101 110.324 252.254C110.518 251.464 110.774 250.796 111.089 250.25ZM92.2128 237.475L95.6447 238.937L91.8284 247.894L96.7846 243.138L99.1655 244.152L99.1685 251.021L102.985 242.064L106.237 243.45L100.537 256.827L96.5305 255.12L96.3802 247.127L90.5201 252.559L86.5132 250.852L92.2128 237.475ZM75.1563 236.243C74.6297 236.649 74.1924 237.128 73.8444 237.678C73.3956 238.388 73.1431 239.079 73.0871 239.753C73.0256 240.422 73.1399 241.076 73.4298 241.714C73.672 242.245 74.0209 242.746 74.4767 243.22C74.9234 243.695 75.5375 244.179 76.3189 244.673L81.5353 247.972L89.3069 235.682L86.1375 233.678L83.6061 237.681L81.6334 236.433C80.7365 235.866 79.9099 235.517 79.1535 235.385C78.3916 235.25 77.6127 235.27 76.8168 235.444C76.233 235.576 75.6795 235.842 75.1563 236.243ZM76.8851 240.745C76.8546 240.379 76.949 240.023 77.1682 239.676C77.3909 239.324 77.6273 239.053 77.8774 238.865C78.1186 238.678 78.3966 238.562 78.7115 238.514C79.0734 238.466 79.4513 238.52 79.8452 238.677C80.2336 238.83 80.6975 239.077 81.2367 239.418L82.1446 239.992L79.8168 243.673L79.272 243.329C78.7493 242.998 78.3363 242.725 78.0331 242.511C77.7264 242.301 77.4498 242.026 77.2031 241.685C77.0182 241.43 76.9121 241.116 76.8851 240.745ZM61.9429 221.502C63.1344 220.157 64.4569 219.489 65.9102 219.498C67.3635 219.507 68.8869 220.217 70.4804 221.629C72.0739 223.04 72.9627 224.467 73.1468 225.909C73.3259 227.346 72.8219 228.735 71.6347 230.075L65.4762 237.026L62.6547 234.527L68.6707 227.736C69.3398 226.981 69.6801 226.278 69.6915 225.627C69.7028 224.976 69.3528 224.335 68.6413 223.705C67.9396 223.083 67.2703 222.808 66.6335 222.878C65.9919 222.945 65.3235 223.37 64.6284 224.155L58.6124 230.946L55.7909 228.446L61.9429 221.502ZM48.6467 215.899L45.7747 212.381L43.5961 214.16L51.7117 224.1L53.8903 222.321L51.0183 218.803L60.1033 211.386L57.7316 208.481L48.6467 215.899ZM46.3426 190.931L51.6014 200.039L39.0085 207.31L33.7497 198.201L36.1854 196.795L39.5789 202.673L41.7525 201.418L38.603 195.963L41.0387 194.557L44.1882 200.012L47.3004 198.215L43.9069 192.337L46.3426 190.931ZM30.7054 182.204C30.8958 181.972 31.1615 181.791 31.5024 181.662C31.8859 181.516 32.2152 181.458 32.4904 181.486C32.7572 181.51 33.0311 181.608 33.3122 181.78C33.6039 181.961 33.8488 182.231 34.0467 182.587C34.2446 182.944 34.4498 183.402 34.6621 183.962L35.0708 185.04L31.4092 186.428L30.9279 185.159C30.7686 184.739 30.6411 184.366 30.5454 184.04C30.4436 183.717 30.3964 183.418 30.4038 183.144C30.4145 182.75 30.515 182.437 30.7054 182.204ZM40.4845 176.898L38.8604 172.615L34.7559 179.363C34.0081 178.657 33.2299 178.194 32.4213 177.971C31.6105 177.742 30.7028 177.819 29.6984 178.2C28.9679 178.477 28.42 178.858 28.0545 179.345C27.6806 179.828 27.4385 180.383 27.328 181.01C27.2153 181.631 27.2229 182.247 27.3509 182.86C27.4789 183.473 27.6953 184.181 28 184.985L30.2302 190.865L43.8263 185.709L42.5034 182.221L37.5179 184.112L36.9049 182.496L40.4845 176.898ZM30.0027 140.214C31.4338 140.156 32.6227 140.718 33.5695 141.898C34.5094 143.072 35.0214 144.7 35.1052 146.781C35.1537 147.985 35.092 149.04 34.92 149.946C34.7412 150.846 34.505 151.692 34.2112 152.486L30.7277 152.626L30.7112 152.217C31.2979 151.418 31.738 150.533 32.0312 149.564C32.3241 148.588 32.4528 147.657 32.4172 146.772C32.408 146.545 32.3764 146.246 32.3224 145.877C32.2685 145.508 32.1912 145.208 32.0907 144.977C31.9621 144.696 31.8063 144.468 31.6233 144.293C31.4401 144.111 31.176 144.027 30.8313 144.041C30.5125 144.054 30.2448 144.202 30.0281 144.484C29.8047 144.76 29.6417 145.161 29.539 145.686C29.431 146.238 29.334 146.822 29.248 147.438C29.1553 148.047 29.0319 148.622 28.8777 149.163C28.5302 150.402 28.029 151.305 27.3743 151.872C26.7127 152.433 25.8778 152.734 24.8695 152.775C23.5164 152.829 22.3894 152.269 21.4885 151.093C20.5808 149.911 20.0886 148.367 20.0117 146.461C19.9732 145.505 20.0295 144.558 20.1807 143.62C20.3251 142.676 20.5234 141.857 20.7756 141.162L24.1225 141.028L24.1386 141.428C23.6938 142.032 23.3325 142.766 23.0546 143.631C22.7699 144.49 22.6454 145.361 22.681 146.246C22.6936 146.558 22.729 146.87 22.7871 147.18C22.8384 147.484 22.9284 147.777 23.057 148.059C23.1649 148.308 23.3233 148.52 23.5322 148.694C23.7347 148.868 23.9628 148.951 24.2165 148.94C24.6003 148.925 24.8904 148.767 25.0868 148.465C25.2767 148.165 25.4398 147.604 25.5761 146.784C25.6652 146.246 25.752 145.731 25.8364 145.239C25.9206 144.741 26.0423 144.205 26.2017 143.631C26.5211 142.504 26.9857 141.665 27.5955 141.112C28.1985 140.554 29.0009 140.254 30.0027 140.214ZM35.1102 130.932C35.5375 130.06 35.8163 129.087 35.9466 128.014C36.0345 127.29 36.068 126.717 36.0471 126.295C36.0263 125.873 35.9766 125.417 35.8982 124.929C35.8387 124.555 35.7579 124.194 35.6557 123.847C35.5536 123.5 35.4437 123.136 35.3261 122.754L31.8748 122.335L31.8278 122.723C31.9617 122.916 32.1188 123.162 32.2991 123.459C32.4794 123.756 32.6441 124.075 32.793 124.414C32.9802 124.817 33.1146 125.25 33.1961 125.713C33.2785 126.168 33.2922 126.623 33.2373 127.075C33.18 127.547 33.0476 128.016 32.8401 128.483C32.6261 128.949 32.3175 129.357 31.9141 129.708C31.5181 130.054 31.0006 130.319 30.3617 130.503C29.7235 130.682 28.9521 130.716 28.0473 130.606C27.1812 130.501 26.4586 130.295 25.8793 129.989C25.3008 129.676 24.8505 129.306 24.5285 128.88C24.1958 128.433 23.9773 127.964 23.873 127.473C23.7623 126.98 23.7387 126.473 23.8023 125.949C23.8595 125.477 23.9844 125.043 24.1768 124.647C24.3692 124.251 24.5904 123.887 24.8404 123.557C25.0896 123.233 25.3373 122.948 25.5835 122.703C25.8305 122.451 26.0426 122.244 26.2197 122.081L26.2715 121.655L22.7718 121.23C22.6103 121.479 22.4337 121.773 22.2419 122.11C22.0444 122.44 21.858 122.814 21.6826 123.232C21.5225 123.633 21.3803 124.075 21.2561 124.558C21.1261 125.034 21.0243 125.576 20.9505 126.183C20.8171 127.282 20.8684 128.318 21.1044 129.291C21.3412 130.257 21.7414 131.093 22.3051 131.798C22.8916 132.531 23.6293 133.126 24.5184 133.581C25.4074 134.037 26.424 134.334 27.5679 134.473C28.7959 134.622 29.9 134.576 30.8803 134.334C31.8613 134.086 32.705 133.674 33.4111 133.097C34.1173 132.52 34.6836 131.799 35.1102 130.932ZM40.1593 108.159L37.7901 116.338L35.3137 115.621L35.9767 113.332L26.9624 110.721L26.2995 113.01L23.8232 112.292L26.1924 104.113L28.6687 104.83L28.0058 107.119L37.02 109.73L37.6829 107.441L40.1593 108.159ZM42.9612 100.607L47.4701 91.1047L44.9291 89.899L42.0195 96.0308L38.7727 94.4902L41.473 88.7996L38.932 87.5939L36.2318 93.2845L33.9643 92.2086L36.8739 86.0768L34.333 84.8711L29.8242 94.3732L42.9612 100.607ZM57.9418 75.0525L55.8892 78.0261L44.1694 77.4359L52.3831 83.1055L50.4304 85.9345L38.4634 77.6742L41.0097 73.9853L50.8775 74.3532L44.022 69.6212L45.9747 66.7922L57.9418 75.0525ZM63.2535 68.9528C64.1195 68.5117 64.9268 67.9015 65.6754 67.1221C66.1805 66.5962 66.5516 66.1582 66.7886 65.8081C67.0255 65.458 67.2594 65.0642 67.49 64.6267C67.6674 64.2916 67.8195 63.9547 67.9462 63.6161C68.0729 63.2774 68.2038 62.9202 68.339 62.5445L65.8317 60.1362L65.5611 60.4179C65.552 60.653 65.5302 60.9435 65.4958 61.2895C65.4613 61.6355 65.4017 61.989 65.3168 62.3498C65.2243 62.7845 65.0717 63.2112 64.8591 63.6299C64.6511 64.0439 64.3892 64.4152 64.0735 64.7439C63.7443 65.0867 63.3565 65.3822 62.9103 65.6307C62.4594 65.8746 61.9672 66.0157 61.4339 66.0541C60.9097 66.0923 60.3368 65.9933 59.715 65.7572C59.0978 65.5164 58.4605 65.0803 57.8031 64.4489C57.174 63.8445 56.7199 63.2459 56.4409 62.6529C56.1664 62.0553 56.0284 61.4894 56.0268 60.9553C56.0294 60.3981 56.1366 59.8918 56.3485 59.4363C56.5556 58.9762 56.8418 58.5561 57.2071 58.1757C57.5364 57.833 57.8969 57.561 58.2889 57.3597C58.6808 57.1584 59.0759 57.0008 59.4742 56.8869C59.868 56.7776 60.2371 56.6988 60.5814 56.6505C60.9303 56.5974 61.2242 56.5592 61.4632 56.536L61.7609 56.2261L59.2183 53.784C58.9395 53.8863 58.6221 54.0147 58.2661 54.1692C57.9098 54.3145 57.536 54.5016 57.1447 54.7305C56.7762 54.9544 56.3971 55.2222 56.0074 55.5339C55.6175 55.8364 55.2106 56.2084 54.7867 56.6498C54.02 57.448 53.4387 58.3069 53.0428 59.2266C52.6514 60.1415 52.4694 61.05 52.4968 61.9519C52.5249 62.8907 52.7575 63.8092 53.1946 64.7075C53.6317 65.6057 54.2658 66.454 55.0969 67.2523C55.989 68.1091 56.8995 68.7354 57.8284 69.1311C58.7618 69.5221 59.6839 69.6993 60.5949 69.6625C61.5058 69.6257 62.392 69.3892 63.2535 68.9528ZM81.9939 53.0112L73.5857 59.3296L64.8503 47.7048L73.2585 41.3865L74.9481 43.6349L69.5222 47.7122L71.0299 49.7186L76.0655 45.9347L77.755 48.1831L72.7195 51.9671L74.8784 54.8401L80.3043 50.7628L81.9939 53.0112ZM102.899 36.7277L109.967 34.3682L109.076 31.7004L102.008 34.06L102.899 36.7277Z" fill="#013237"/>
                </svg>

                <div class= "CircleImage"><span class="wrap"><div class="typewrite" data-type='[ "🐕", "💜", "🧋", "💻", "🌱" ]'></div></span></div>
                
                <div class= "LeafImage"> 
                    <img src={image} alt="FrontImage" />
                </div>
                
            </div>
    );
}
 
export default LandingRight;